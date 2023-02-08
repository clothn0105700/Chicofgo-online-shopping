const express = require('express');
const router = express.Router();
const { checkLogin } = require('../middlewares/authMiddleware');
const { body, validationResult } = require('express-validator');
const pool = require('../utils/db');
const argon2 = require('argon2');
const { emit } = require('../utils/db');

// GET /api/members
router.get('/', checkLogin, (req, res, next) => {
  // 能夠通過 checkLogin 中間件，表示一定一定有 req.session.member -> 一定是登入後
  res.json(req.session.member);
});

router.get('/orders', checkLogin, (req, res, next) => {
  // 能夠通過 checkLogin 中間件，表示一定一定有 req.session.member -> 一定是登入後
  // 安心地使用 req.session.member.id 去資料庫拿這個 id 的訂單
});

router.use('/account', checkLogin, async (req, res, next) => {
  // console.log('I am account', req.body);
  // console.log('I am session', req.session.member.id);

  let [accountDatas] = await pool.execute('SELECT * FROM user_member WHERE id = ?', [req.session.member.id]);
  if (accountDatas.length > 0) {
    let accountData = accountDatas[0];
    // 表示這個 accountData 有存在資料庫中
    // console.log('accountData', accountData);

    // 回覆給前端
    return res.json({
      name: accountData.name,
      email: accountData.email,
      account: accountData.account,
      gender: accountData.gender,
      birthday: accountData.birthday,
      phone: accountData.phone,
    });
  }
});

//資料驗證

const accountChangeRules = [
  body('name').isLength({ min: 1 }).withMessage('姓名長度至少為 1'),
  body('email')
    .isEmail()
    .withMessage('請輸入正確格式的 Email')
    .custom(async (value, { req }) => {
      let [membersEmail] = await pool.execute('SELECT * FROM user_member WHERE email = ?', [value]);
      let [oldAccountDatas] = await pool.execute('SELECT * FROM user_member WHERE id = ?', [req.session.member.id]);

      if (membersEmail.length > 0 && value != oldAccountDatas[0].email) {
        throw new Error('email 已被註冊');
      }
      return true;
    }),
  body('birthday').isBefore().withMessage('不是未來人吧'),
  body('phone')
    .custom((value, { req }) => {
      var MobileReg = /^(09)[0-9]{8}$/;
      return value.match(MobileReg);
    })
    .withMessage('請輸入正確手機號碼格式'),
];

router.use('/accountChange', checkLogin, accountChangeRules, async (req, res, next) => {
  console.log('I am changedata', req.body);
  const validateResult = validationResult(req);
  console.log(validateResult);
  if (!validateResult.isEmpty()) {
    return res.status(401).json({ errors: validateResult.array() });
  }
  let thisId = req.session.member.id;
  let [oldAccountDatas] = await pool.execute('SELECT * FROM user_member WHERE id = ?', [thisId]);
  let oldAccountData = oldAccountDatas[0];

  // 驗證生日
  // let birthdayCheck = req.body.birthday;
  // if (birthdayCheck.length > 10) {
  //   birthdayCheck = oldAccountData.birthday;
  // }
  // 驗證信箱
  // let [membersEmail] = await pool.execute('SELECT * FROM user_member WHERE email = ?', [req.body.email]);
  // if (membersEmail.length > 0 && req.body.email != oldAccountData.email) {
  //   return res.status(401).json({
  //     errors: [
  //       {
  //         msg: 'email 已經註冊過',
  //         param: 'email',
  //       },
  //     ],
  //   });
  // }

  let result = await pool.execute('UPDATE user_member SET name=?, email=?, phone=?, birthday=?, gender=? WHERE id = ?;', [
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.birthday,
    req.body.gender,
    thisId,
  ]);
  console.log('更新結果', result);

  // 回覆給前端
  return res.json({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    birthday: req.body.birthday,
    phone: req.body.phone,
  });
});

const passwordChangeRules = [
  body('oldPassword').notEmpty().withMessage('不得為空'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('密碼長度至少為 8')
    .isLength({ max: 20 })
    .withMessage('密碼長度最多為 20')
    .custom((value, { req }) => {
      // return value === req.body.oldPassword;
      if (value === req.body.oldPassword) {
        throw new Error('新舊密碼相同');
      }
      return true;
    })
    .notEmpty()
    .withMessage('不得為空'),
  body('confirmPassword')
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage('確認密碼不一致'),
  body('confirmPassword').notEmpty().withMessage('不得為空'),
];

router.use('/passwordChange', checkLogin, passwordChangeRules, async (req, res, next) => {
  console.log('passwordChange', req.body);
  const validateResult2 = validationResult(req);
  console.log(validateResult2);
  if (!validateResult2.isEmpty()) {
    // validateResult 不是空的 -> 表示有錯誤
    return res.status(401).json({ errors: validateResult2.array() });
    // early return
  }

  let [membersData] = await pool.execute('SELECT * FROM user_member WHERE id = ?', [req.session.member.id]);
  if (membersData.length === 0) {
    // 表示這個 email 不存在資料庫中 -> 沒註冊過
    // 不存在，就回覆 401
    console.log('使用者不存在');
    return res.status(401).json({
      errors: [
        {
          // msg: 'email 尚未註冊',
          // param: 'email',
          msg: '使用者不存在',
        },
      ],
    });
  }
  // 如果存在，比對密碼
  let passwordResult = await argon2.verify(membersData[0].password, req.body.oldPassword);
  if (passwordResult === false) {
    // 密碼比對失敗
    // 密碼錯誤，回覆前端 401
    return res.status(401).json({
      errors: [
        {
          param: 'oldPassword',
          msg: '舊密碼錯誤',
        },
      ],
    });
  }
  const hashedPassword = await argon2.hash(req.body.password);
  let result = await pool.execute('UPDATE user_member SET password=? WHERE id = ?;', [hashedPassword, req.session.member.id]);
  console.log('更新結果', result);
  console.log('修改成功');

  // 回覆給前端
  return res.json({
    msg: 'passwordChange~ok!',
    // name: req.body.name,
    // email: req.body.email,
    // gender: req.body.gender,
    // birthday: req.body.birthday,
    // phone: req.body.phone,
    // ok
  });
});

module.exports = router;
