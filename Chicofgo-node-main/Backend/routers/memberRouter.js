const express = require('express');
const router = express.Router();
const { checkLogin } = require('../middlewares/authMiddleware');
const { body, validationResult } = require('express-validator');
const pool = require('../utils/db');
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
  console.log('I am session', req.session.member.id);

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

  // 能夠通過 checkLogin 中間件，表示一定一定有 req.session.member -> 一定是登入後
  // 安心地使用 req.session.member.id 去資料庫拿這個 id 的訂單
});

//資料驗證

const registerRules = [
  body('name').isLength({ min: 1 }).withMessage('姓名長度至少為 1'),
  body('account').isLength({ min: 4 }).withMessage('帳號長度至少為 4'),
  body('email').isEmail().withMessage('請輸入正確格式的 Email'),
  // body('phone').isLength({ min: 10 }).withMessage('請輸入正確手機號碼格式'),
  body('birthday').isBefore().withMessage('不是未來人吧'),

  // body('phone').custom((value, { req }) => {
  //   var MobileReg = /^(09)[0-9]{8}$/;
  //   if (!value.match(MobileReg)) {
  //     throw new Error('手機格式錯誤');
  //   } else {
  //     return true;
  //   }
  // }),
  body('phone').custom((value, { req }) => {
    var MobileReg = /^(09)[0-9]{8}$/;
      return value.match(MobileReg);
    })
    .withMessage('手機格式錯誤'),
];

router.use('/accountChange', checkLogin, registerRules, async (req, res, next) => {
  console.log('I am changedata', req.body);

  const validateResult = validationResult(req);
  console.log(validateResult);
  if (!validateResult.isEmpty()) {
    // validateResult 不是空的 -> 表示有錯誤
    return res.status(400).json({ errors: validateResult.array() });
    // early return
  }
  let thisId = req.session.member.id;
  let [oldAccountDatas] = await pool.execute('SELECT * FROM user_member WHERE id = ?', [thisId]);
  let oldAccountData = oldAccountDatas[0];

  // 驗證生日
  let birthdayCheck = req.body.birthday;
  if (birthdayCheck.length > 10) {
    birthdayCheck = oldAccountData.birthday;
  }
  // 驗證信箱
  let [membersEmail] = await pool.execute('SELECT * FROM user_member WHERE email = ?', [req.body.email]);
  if (membersEmail.length > 0 && req.body.email != oldAccountData.email) {
    return res.status(400).json({
      errors: [
        {
          msg: 'email 已經註冊過',
          param: 'email',
        },
      ],
    });
  }

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

module.exports = router;
