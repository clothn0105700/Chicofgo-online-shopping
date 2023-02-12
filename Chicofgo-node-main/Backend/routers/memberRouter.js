const express = require('express');
const router = express.Router();
const { checkLogin } = require('../middlewares/authMiddleware');
const { body, validationResult } = require('express-validator');
const pool = require('../utils/db');
const argon2 = require('argon2');
const { emit } = require('../utils/db');
// ---------------圖片上傳用--------------------
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'public', 'uploads'));
  }, // 圖片名稱
  filename: function (req, file, cb) {
    console.log('multer storage', file);
    // {
    //   fieldname: 'photo',
    //   originalname: 'AI-replace.jpg',
    //   encoding: '7bit',
    //   mimetype: 'image/jpeg'
    // }
    const ext = file.originalname.split('.').pop();
    cb(null, `${Date.now()}.${ext}`);
  },
});
// 處理上傳
const uploader = multer({
  storage: storage,
  // 圖片格式的 validation
  fileFilter: function (req, file, cb) {
    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/png') {
      cb(new Error('上傳圖片格式不合法'), false);
    } else {
      cb(null, true);
    }
  },
  // 限制檔案的大小
  limits: {
    //200k 200x1024
    fileSize: 200 * 1024, // 204800
  },
});
// ---------------圖片上傳用--------------------

// GET /api/members
router.get('/', checkLogin, (req, res, next) => {
  // 能夠通過 checkLogin 中間件，表示一定一定有 req.session.member -> 一定是登入後
  res.json(req.session.member);
});

router.get('/orderDetail/:orderId', checkLogin, async (req, res, next) => {
  // let [orderDatas] = await pool.execute(
  //   'SELECT product_list.id AS product_list_id, product_list.*, shopping_cart.id AS shopping_cart_id, shopping_cart.*, order_list.id AS order_list_id, order_list.* FROM product_list JOIN shopping_cart ON product_list.id = shopping_cart.product_id JOIN order_list ON shopping_cart.order_id = order_list.id WHERE order_list.id = ? AND shopping_cart.member = ?',
  //   [req.params.orderId, req.session.member.id]
  // );
  // console.log(orderDatas);
  let [orderDatas] = await pool.execute('SELECT * FROM order_list WHERE id = ? AND member_id = ?', [req.params.orderId, req.session.member.id]);
  const newObjects = orderDatas.map((obj) => {
    return {
      order_id: obj.id,
      name: obj.name,
      phone: obj.phone,
      pay: obj.pay,
      send_information:obj.send_information,
      pay_info: obj.pay_info,
      bill_id: obj.bill_id,
      address: obj.address,
      coupon: obj.coupon_id,
      status: obj.status,
      total: obj.total_price,
    };
  });
  let [shoppingCartDatas] = await pool.execute(
    'SELECT shopping_cart.id AS shoppingcart_id, shopping_cart.*, product_list.*  FROM shopping_cart JOIN product_list ON shopping_cart.product_id = product_list.id WHERE shopping_cart.member = ? AND shopping_cart.order_id = ? ',
    [req.session.member.id, req.params.orderId]
  );
  const newObjects2 = shoppingCartDatas.map((obj) => {
    return {
      shoppingcart_id: obj.shoppingcart_id,
      product_id: obj.id,
      brandname: obj.brand,
      title: obj.name,
      desc: '即品拿鐵無加糖二合一×103包',
      quantity: obj.quantity,
      price: obj.price,
      productImg: 'test.jpg',
    };
  });
  console.log(newObjects);
  return res.json({ member: newObjects, products: newObjects2 });
});

router.get('/orders', checkLogin, async (req, res, next) => {
  let [orderDatas] = await pool.execute('SELECT * FROM order_list WHERE member_id = ?', [req.session.member.id]);
  if (orderDatas.length > 0) {
    // console.log(orderDatas);
    const newObjects = orderDatas.map((obj) => {
      const date = new Date(obj.time);
      const formattedDate = date.toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      return {
        order_id: obj.id,
        number: obj.id + 735560800000,
        time: formattedDate,
        price: obj.total_price,
        status: obj.status,
      };
    });
    // console.log(newObjects);
    return res.json(newObjects);
  } else {
    return res.status(400).json({
      errors: [
        {
          msg: '無訂單資料',
        },
      ],
    });
  }
});

router.use('/toShoppingcart', checkLogin, async (req, res, next) => {
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
      phone: accountData.phone,
      address: accountData.address,
      email: accountData.email,
      // account: accountData.account,
      // gender: accountData.gender,
      // birthday: accountData.birthday,
      // imageUrl: accountData.img,
    });
  }
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
      imageUrl: accountData.img,
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

router.use(
  '/accountChange',
  checkLogin,
  uploader.single('photo'),
  accountChangeRules,
  async (req, res, next) => {
    console.log('I am changedata', req.body, req.file);
    const validateResult = validationResult(req);
    console.log(validateResult);
    if (!validateResult.isEmpty()) {
      return res.status(401).json({ errors: validateResult.array() });
    }
    // let [oldAccountDatas] = await pool.execute('SELECT * FROM user_member WHERE id = ?', [req.session.member.id]);
    // let oldAccountData = oldAccountDatas[0];
    const filename = req.file ? path.join('uploads', req.file.filename) : '';
    let result = await pool.execute('UPDATE user_member SET name=?, email=?, phone=?, birthday=?, gender=?, img=? WHERE id = ?;', [
      req.body.name,
      req.body.email,
      req.body.phone,
      req.body.birthday,
      req.body.gender,
      filename,
      req.session.member.id,
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
  },
  (error, req, res, next) => {
    // 上傳失敗，丟出錯誤訊息時執行
    let imgError = [{ msg: error.message, param: 'photo' }];
    res.status(401).send({ errors: imgError });
  }
);

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
  // console.log('更新結果', result);
  // console.log('修改成功');

  // 回覆給前端
  return res.json({
    msg: 'passwordChange~ok!',
  });
});
router.use('/mycreditcard', checkLogin, async (req, res, next) => {
  let [mycreditcardDatas] = await pool.execute('SELECT * FROM user_payment_credit_card WHERE member_id = ?', [req.session.member.id]);
  if (mycreditcardDatas.length > 0) {
    let mycreditcardData = mycreditcardDatas[0];
    let hideCardNumber = mycreditcardData.card_number;
    return res.json({
      name: mycreditcardData.cardholder_name,
      cardNumber: mycreditcardData.card_number.slice(0, 4) + '********' + mycreditcardData.card_number.slice(-4),
      expiry: '****',
      cvc: '***',
    });
  } else {
    return res.status(401).json({
      msg: '沒有舊資料喔',
    });
  }
});

const creditcardChangeRules = [
  body('name').notEmpty().withMessage('不得為空').isLength({ min: 2 }).withMessage('名字長度至少為 2').isLength({ max: 25 }).withMessage('名字長度最多為 25'),
  body('cardNumber').notEmpty().withMessage('不得為空').isLength({ min: 16 }).withMessage('請輸入正確格式'),
  body('expiry').notEmpty().withMessage('不得為空').isLength({ min: 4 }).withMessage('請輸入正確格式'),
  body('cvc').notEmpty().withMessage('不得為空').isLength({ min: 3 }).withMessage('請輸入正確格式'),
];
router.post('/creditcardchange', checkLogin, creditcardChangeRules, async (req, res, next) => {
  console.log('creditcardChange', req.body);
  const validateResult3 = validationResult(req);
  console.log(validateResult3);
  if (!validateResult3.isEmpty()) {
    // validateResult 不是空的 -> 表示有錯誤
    return res.status(401).json({ errors: validateResult3.array() });
    // early return
  }

  let [oldcreditcardDatas] = await pool.execute('SELECT * FROM user_payment_credit_card WHERE member_id = ?', [req.session.member.id]);
  let resultMsg;
  if (oldcreditcardDatas.length > 0) {
    console.log('有舊資料');
    let result = await pool.execute('UPDATE user_payment_credit_card SET cardholder_name=?,card_number=?,mmyy=?,cvc=? WHERE member_id = ?;', [
      req.body.name,
      req.body.cardNumber,
      req.body.expiry,
      req.body.cvc,
      req.session.member.id,
    ]);
    console.log('更新結果', result);
    console.log('修改成功');
    resultMsg = '修改成功';
  } else {
    console.log('沒有舊資料');
    let result2 = await pool.execute('INSERT INTO user_payment_credit_card (cardholder_name, card_number, mmyy, cvc ,member_id) VALUES (?, ?, ?, ?, ?);', [
      req.body.name,
      req.body.cardNumber,
      req.body.expiry,
      req.body.cvc,
      req.session.member.id,
    ]);
    console.log('新增成功');
    resultMsg = '新增成功';
  }
  return res.json({
    msg: resultMsg,
  });
});

router.use('/myaddress', checkLogin, async (req, res, next) => {
  // console.log('I am account', req.body);
  // console.log('I am session', req.session.member.id);
  let [myaddressDatas] = await pool.execute('SELECT * FROM user_address_county');
  let [myaddressDatas2] = await pool.execute('SELECT * FROM user_address_district');
  let [oldAddressDatas] = await pool.execute('SELECT * FROM user_member WHERE id = ?', [req.session.member.id]);
  let oldAddressData = oldAddressDatas[0];
  if (myaddressDatas.length > 0) {
    return res.json({
      county: myaddressDatas,
      district: myaddressDatas2,
      address: oldAddressData.address,
      name: oldAddressData.name,
      phone: oldAddressData.phone,
    });
  } else {
    return res.status(401).json({
      msg: '沒有資料喔',
    });
  }
});
const addresschangeRules = [
  body('other').notEmpty().withMessage('不得為空').isLength({ min: 5 }).withMessage('請輸入正確格式'),
  body('county').notEmpty().isLength({ min: 3 }).withMessage('請輸入正確格式'),
  body('district').notEmpty().isLength({ min: 2 }).withMessage('請輸入正確格式'),
];
router.post('/addresschange', checkLogin, addresschangeRules, async (req, res, next) => {
  // console.log('addresschange', req.body);
  const validateResult4 = validationResult(req);
  // console.log(validateResult4);
  if (!validateResult4.isEmpty()) {
    // validateResult 不是空的 -> 表示有錯誤
    return res.status(401).json({ errors: validateResult4.array() });
  }
  let newAddress = req.body.county + req.body.district + req.body.other;
  let result = await pool.execute('UPDATE user_member SET address=? WHERE id = ?;', [newAddress, req.session.member.id]);
  console.log('更新結果', result);

  // 回覆給前端
  return res.json({
    msg: '修改成功',
  });
});

module.exports = router;
