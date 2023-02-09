const express = require('express');
// 利用 express 這個框架建立一個 router
const router = express.Router();
const pool = require('../utils/db');
//處理content-type，express沒內建，使用第三方套件multer
const multer = require('multer');
const path =require('path')

router.use((req, res, next) => {
    console.log('這裡是 orderRouter 的中間件');
    next();
  });

//處理圖片存在哪
const storage = multer.diskStorage({
  // 設定儲存的目的地
  // 先手動建立好檔案夾public/uploads
  destination: function(req, file, cb) {
  // path.join: 避免不同作業系統 / 與 \ 的問題
  // __dirname --> 目前檔案所在的目錄路徑
    cb(null, path.join(__dirname, '..', 'public', 'uploads'))
  },
  // 圖片名稱
  filename: function(req, file, cb) {
    cb(null, 'test.png',);
  }
})

//處理上傳圖片
const uploader = multer({
  //放入設定好的格式 storage
  storage: storage,
  //圖片格式的驗證
  fileFilter: function(req ,file, cb) {
    if(file.mimetype !== 'image/jpeg' && mimetype !== 'image/jpg' && mimetype !== 'image/png'){
      cb(new Error('上傳圖片格式不合法'), false)
    }else {
      cb(null, true)
    }
    },
  //限制圖片檔案大小
  // limits:{
  // // 1k = 1024 => 200k = 200 x 1024
  // fileSize: 200 * 1024, //204800
  // }
})

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

//商品產地
router.get('/products/place', async (req, res, next) => {
  console.log('這裡是 /api/products/place')
  let [data] = await pool.query('SELECT * FROM product_place_of_orgin');
  res.json(data)
})

//商品類別
router.get('/products/type', async (req, res, next) => {
  console.log('這裡是 /api/products/type')
  let [data] = await pool.query('SELECT * FROM product_type');
  res.json(data)
})

//新增商品並上架
router.post('/productOn',uploader.single('photo'),async (req, res) => {
  console.log('POST /api/product', req.body);
  // req.body.productId, req.body.productName
  // 完成 insert
  // let results = await pool.query('INSERT INTO product_list (name, place_of_orgin, type, amount, price, introduction, valid) VALUES (?, ?, ? ,? ,? ,?, 1);', [req.body.name, req.body.singlePlace, req.body.type, req.body.amount, req.body.price, req.body.introduction]);
  // console.log('POST product results', results);
  res.json({ result: 'ok' });
});

//新增商品並下架
router.post('/productOff', async (req, res) => {
  console.log('POST /api/product', req.body);
  // req.body.productId, req.body.productName
  // 完成 insert
  let results = await pool.query('INSERT INTO product_list (name, place_of_orgin, type, amount, price, introduction ,valid) VALUES (?, ?, ? ,? ,? ,?);', [req.body.name, req.body.singlePlace, req.body.type, req.body.amount, req.body.price, req.body.introduction, 0]);
  // console.log('POST product results', results);
  res.json({ result: 'ok' });
});


//賣場評價列表
router.get('/review', async (req, res, next) => {
  console.log('這裡是 /api/review')
  let [data] = await pool.query('SELECT * FROM product_review')
  res.json(data)
})


module.exports = router;