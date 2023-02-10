const express = require('express');
const router = express.Router();
const { checkLogin } = require('../middlewares/authMiddleware');
const pool = require('../utils/db');

router.get('/shoppingCart', checkLogin, async (req, res, next) => {
  let [shoppingCartDatas] = await pool.execute('SELECT * FROM shopping_cart JOIN product_list ON shopping_cart.product_id = product_list.id WHERE member = ? AND order_id = 0 ', [req.session.member.id]);
  if (shoppingCartDatas.length > 0) {
    const newObjects = shoppingCartDatas.map(obj => {
      return {
        id: obj.id,
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
    // console.log("id:", shoppingCartDatas)
    return res.json(newObjects)
  } else{
    return res.status(401).json({
      errors: [
        {
          msg: '購物車無商品',
        },
      ],
    });
  }
});

module.exports = router;