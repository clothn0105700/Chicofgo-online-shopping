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
  let [data] = await pool.query('SELECT * FROM products_list');
  console.log("product data: ", data);
  res.json(data);
});
router.get('/message', middlewares, async (req, res, next) => {
  // let results = await connection.query('SELECT * FROM stocks');
  // let data = results[0];
  console.log('這裡是 /api/message');
  let [data] = await pool.query('SELECT * FROM member_message');
  console.log("product data: ", data);
  res.json(data);
});





module.exports = router;