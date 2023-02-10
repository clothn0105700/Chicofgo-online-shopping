const express = require('express');
const router = express.Router();
const { checkLogin } = require('../middlewares/authMiddleware');
const pool = require('../utils/db');
const { body, validationResult } = require('express-validator');

router.get('/shoppingCart', checkLogin, async (req, res, next) => {
  let [shoppingCartDatas] = await pool.execute('SELECT * FROM shopping_cart JOIN product_list ON shopping_cart.product_id = product_list.id WHERE member = ? AND order_id = 0 ', [
    req.session.member.id,
  ]);
  console.log('yyyyyyyyyyyyyyyyyyyyyyyy', shoppingCartDatas);

  if (shoppingCartDatas.length > 0) {
    const newObjects = shoppingCartDatas.map((obj) => {
      return {
        shoppingcart_id: obj.shoppingcart_id,
        product_id: obj.id,
        brandname: obj.brand,
        title: obj.name,
        desc: '即品拿鐵無加糖二合一×103包',
        quantity: obj.quantity,
        price: obj.price,
        productImg: 'test.jpg',
        checked: false,
      };
    });
    // console.log(newObjects);
    console.log('id:', shoppingCartDatas);
    return res.json(newObjects);
  } else {
    return res.status(401).json({
      errors: [
        {
          msg: '購物車無商品',
        },
      ],
    });
  }
});

router.use('/deleteShoppingCart', checkLogin, async (req, res, next) => {
  let result = await pool.execute('UPDATE shopping_cart SET order_id=? WHERE shoppingcart_id = ?;', ['99999', req.body.deleteId]);
  // console.log('刪除結果', result);
  // 回覆給前端
  return res.json({
    msg: 'deleteShoppingCart~ok!',
  });
});

const orderRules = [
  body('name').isLength({ min: 2 }).withMessage('請輸入正確格式').notEmpty().withMessage('不得為空'),
  body('phone')
    .isLength({ min: 2 })
    .withMessage('請輸入正確格式')
    .notEmpty()
    .withMessage('不得為空')
    .custom((value, { req }) => {
      var MobileReg = /^(09)[0-9]{8}$/;
      return value.match(MobileReg);
    })
    .withMessage('請輸入正確手機號碼格式'),
  body('address').isLength({ min: 2 }).withMessage('請輸入正確格式').notEmpty().withMessage('不得為空'),
  body('pay').notEmpty().withMessage('請選擇付款方式'),
  body('bill_id').notEmpty().withMessage('請選擇發票種類'),
  body('send_information').notEmpty().withMessage('請選擇寄送方式'),
];

router.use('/sendOrder', checkLogin, orderRules, async (req, res, next) => {
  console.log('sendOrder', req.body);
  const validateResult = validationResult(req);
  console.log(validateResult);
  if (!validateResult.isEmpty()) {
    return res.status(400).json({ errors: validateResult.array() });
  }

  // let [membersData] = await pool.execute('SELECT * FROM user_member WHERE id = ?', [req.session.member.id]);
  // if (membersData.length === 0) {
  //   // 表示這個 email 不存在資料庫中 -> 沒註冊過
  //   // 不存在，就回覆 401
  //   console.log('使用者不存在');
  //   return res.status(401).json({
  //     errors: [
  //       {
  //         msg: '使用者不存在',
  //       },
  //     ],
  //   });
  // }
  let result = await pool.execute('INSERT INTO order_list (name, mail, phone, pay	, password) VALUES (?, ?, ?, ?, ?);', [
    req.body.account,
    req.body.email,
    req.body.phone,
    req.body.name,
    hashedPassword,
  ]);
  console.log('註冊成功');

  // let result = await pool.execute('UPDATE user_member SET password=? WHERE id = ?;', [hashedPassword, req.session.member.id]);
  // console.log('更新結果', result);
  // console.log('修改成功');

  // 回覆給前端
  return res.json({
    msg: 'sendOrder~ok!',
  });
});

module.exports = router;
