// stockRouter

const express = require('express');
// 利用 express 這個框架建立一個 router
const router = express.Router();

const pool = require('../utils/db');

router.use((req, res, next) => {
  console.log('這裡是 stock router 的中間件');
  next();
});

// app.use => router.use
// app.get => router.get
// app.post => router.post

function singleMiddleware(req, res, next) {
  console.log('我是 single 中間件');
  next();
}

const middlewares = [singleMiddleware, singleMiddleware, singleMiddleware, singleMiddleware];
// /api/stocks
router.get('/', middlewares, async (req, res, next) => {
  // let results = await connection.query('SELECT * FROM stocks');
  // let data = results[0];
  console.log('這裡是 /api/products');
  const sql = `
    SELECT * FROM product_list
    JOIN product_type ON product_list.type = product_type.tid
    JOIN product_place_of_orgin ON product_list.place_of_orgin = product_place_of_orgin.oid
    LEFT JOIN product_package ON product_package.pid = product_list.package
  `;
  let [data] = await pool.query(sql);
  console.log('product data: ', data);
  res.json(data);
});
router.get('/message', middlewares, async (req, res, next) => {
  // let results = await connection.query('SELECT * FROM stocks');
  // let data = results[0];
  console.log('這裡是 /api/message');
  let [data] = await pool.query('SELECT * FROM `member_message` JOIN user_member ON member_message.member_id = user_member.id');
  console.log('product data: ', data);
  res.json(data);
});

router.post('/sendCart', async (req, res) => {
  console.log('body: ', req.body);
  const { cartProductId, cartPrice, cartQuantity, cartUserId } = req.body;
  // 檢查是否已在購物車
  const checkSql = `
    SELECT COUNT(1) as count
    FROM shopping_cart
    WHERE member = '?' AND product_id = '?' AND order_id = '0'
  `;
  // const result = await pool.query(checkSql, [cartUserId, cartProductId]);
  // const my_count = result[0][0].count;
  // const [apple, banana] = ['a', 1, 2, 3];
  // const result = [[{ count: 1 }], ['sdfjnklsjdflksjadfkl']];
  // const result = await pool.query(checkSql, [cartUserId, cartProductId]);
  // console.log("result: ", result);
  const [[{ count }]] = await pool.query(checkSql, [cartUserId, cartProductId]);
  // console.log("count: ", count);
  if (count >= 1) {
    res.json({ result: 'been added' });
    return;
  }

  // insert
  const insertSql = `
  INSERT INTO shopping_cart(
    product_id, price, quantity, member, order_id
  ) VALUES (
    '?','?','?','?','0'
  )
  `;
  try {
    const [results] = await pool.query(insertSql, [cartProductId, cartPrice, cartQuantity, cartUserId]);
    if (results.affectedRows >= 1) {
      res.json({ result: 'ok' });
    } else {
      res.json({ result: 'fail' });
    }
  } catch (e) {
    console.log(e); //對
    res.json({ result: 'fail' });
  }
});

module.exports = router;
