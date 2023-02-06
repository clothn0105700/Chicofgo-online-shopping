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

  let result = await pool.execute('UPDATE user_member SET name=?, account=?, email=?, phone=?, birthday=? WHERE id = ?;', [
    req.body.name,
    req.body.account,
    req.body.email,
    req.body.phone,
    req.body.birthday,
    thisId,
  ]);

  console.log('7788999999999999999', result);

  // 回覆給前端
  // return res.json({
  //   name: accountData.name,
  //   // email: accountData.email,
  //   // account: accountData.account,
  //   // gender: accountData.gender,
  //   // birthday: accountData.birthday,
  //   // phone": accountData.phone,
  // });
  // }


  // 能夠通過 checkLogin 中間件，表示一定一定有 req.session.member -> 一定是登入後
  // 安心地使用 req.session.member.id 去資料庫拿這個 id 的訂單
});

module.exports = router;
