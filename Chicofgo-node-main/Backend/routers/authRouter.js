const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const pool = require('../utils/db');

const argon2 = require('argon2');

// app.use((req, res, next) => {...})

router.use((req, res, next) => {
  console.log('這裡是 auth router 的中間件');
  next();
});

// // content-type
// const multer = require('multer');
// const path = require('path');
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, '..', 'public', 'uploads'));
//   },
//   // 圖片名稱
//   filename: function (req, file, cb) {
//     console.log('multer storage', file);
//     const ext = file.originalname.split('.').pop();
//     cb(null, `${Date.now()}.${ext}`);
//   },
// });
// // 真正在處理上傳
// const uploader = multer({
//   storage: storage,
//   // 圖片格式的 validation
//   fileFilter: function (req, file, cb) {
//     if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/png') {
//       cb(new Error('上傳圖片格式不合法'), false);
//     } else {
//       cb(null, true);
//     }
//   },
//   // 限制檔案的大小
//   limits: {
//     // 1k = 1024 => 200k 200x1024
//     fileSize: 200 * 1024, // 204800
//   },
// });

const registerRules = [
  body('account').isLength({ min: 4 }).withMessage('帳號長度至少為 4'),
  body('email')
    .isEmail()
    .withMessage('請輸入正確格式的 Email')
    .custom(async (value, { req }) => {
      let [membersEmail] = await pool.execute('SELECT * FROM user_member WHERE email = ?', [value]);
      if (membersEmail.length > 0) {
        throw new Error('email 已經註冊過');
      }
      return true;
    }),

  body('phone')
    .custom((value, { req }) => {
      var MobileReg = /^(09)[0-9]{8}$/;
      return value.match(MobileReg);
    })
    .withMessage('請輸入正確手機號碼格式'),
  body('name').isLength({ min: 2 }).withMessage('姓名長度至少為 2'),
  body('password').isLength({ min: 8 }).withMessage('密碼長度至少為 8'),
  body('confirmPassword')
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage('驗證密碼不符合')
    .notEmpty()
    .withMessage('不得為空'),
];

// /api/auth/register
router.post('/register', registerRules, async (req, res, next) => {
  console.log('I am register', req.body);
  // TODO: async/await 應該要有 try-catch 去做錯誤處理
  // 處理驗證的結果
  const validateResult = validationResult(req);
  console.log(validateResult);
  if (!validateResult.isEmpty()) {
    // validateResult 不是空的 -> 表示有錯誤
    return res.status(401).json({ errors: validateResult.array() });
    // early return
  }

  // 驗證通過
  // 檢查 email 是否已經註冊過
  // let [membersEmail] = await pool.execute('SELECT * FROM user_member WHERE email = ?', [req.body.email]);
  // if (membersEmail.length > 0) {
  //   console.log('membersEmail');

  //   console.log(membersEmail);
  //   console.log(membersEmail.length);

  // return res.status(401).json({
  //   errors: [
  //     {
  //       msg: 'email 已經註冊過',
  //       param: 'email',
  //     },
  //   ],
  // });
  // }

  let [membersAccount] = await pool.execute('SELECT * FROM user_member WHERE account = ?', [req.body.account]);
  if (membersAccount.length > 0) {
    // 表示這個 email 有存在資料庫中
    // 如果已經註冊過，就回覆 400
    return res.status(401).json({
      errors: [
        {
          msg: 'Account 已經註冊過',
          param: 'account',
        },
      ],
    });
  }
  const hashedPassword = await argon2.hash(req.body.password);
  // 存到資料庫
  let result = await pool.execute('INSERT INTO user_member (account, email, phone, name, password) VALUES (?, ?, ?, ?, ?);', [
    req.body.account,
    req.body.email,
    req.body.phone,
    req.body.name,
    hashedPassword,
  ]);
  // console.log('register: insert to db', result);
  console.log('註冊成功');

  // 回覆給前端
  res.json({
    email: req.body.email,
    member_id: result[0].insertId,
  });
});

// /api/auth/login
router.post('/login', async (req, res, next) => {
  // 資料驗證？？
  // 確認 email 是否存在
  let [members] = await pool.execute('SELECT * FROM user_member WHERE account = ?', [req.body.account]);
  if (members.length === 0) {
    // 表示這個 email 不存在資料庫中 -> 沒註冊過
    // 不存在，就回覆 401
    console.log('account 不存在');

    return res.status(401).json({
      errors: [
        {
          // msg: 'email 尚未註冊',
          // param: 'email',
          msg: '帳號或密碼錯誤',
        },
      ],
    });
  }

  // 只是從陣列中拿出資料而已
  let member = members[0];

  // 如果存在，比對密碼
  let result = await argon2.verify(member.password, req.body.password);
  if (result === false) {
    // 密碼錯誤，回覆前端 401
    return res.status(401).json({
      errors: [
        {
          msg: '帳號或密碼錯誤',
        },
      ],
    });
  }

  // 能執行到這裡，表示帳號存在，且密碼正確

  // TODO: 寫入 session
  // 準備好要寫進 session 的內容
  let retMember = {
    id: member.id,
    name: member.name,
    account: member.account,
    // photo: member.photo,
  };
  // 寫入 session
  req.session.member = retMember;

  // TODO: 回覆前端
  res.json({
    msg: 'ok',
    member: retMember,
  });
});

router.get('/logout', (req, res, next) => {
  req.session.member = null;
  res.sendStatus(202);
});

module.exports = router;
