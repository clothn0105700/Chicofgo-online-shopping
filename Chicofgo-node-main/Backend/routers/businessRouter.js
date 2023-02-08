const express = require('express');
// 利用 express 這個框架建立一個 router
const router = express.Router();
const pool = require('../utils/db');

router.use((req, res, next) => {
    console.log('這裡是 orderRouter 的中間件');
    next();
  });

//訂單列表
router.get('/order', async (req, res, next) => {
    console.log('這裡是 /api/order')
    let [data] = await pool.query('SELECT * FROM order_list');
    res.json(data)
})

//訂單細節頁
router.get('/order/:orderId', async(req, res, next) => {
  console.log('/order/:orderId => ' , req.params.orderId );
  let [data] = await pool.query('SELECT * FROM order_list WHERE id=?', [req.params.orderId])
  res.json(data)
})

//商品列表
router.get('/products', async (req, res, next) => {
  console.log('這裡是 /api/products')
  let [data] = await pool.query('SELECT * FROM product_list');
  res.json(data)
})


module.exports = router;