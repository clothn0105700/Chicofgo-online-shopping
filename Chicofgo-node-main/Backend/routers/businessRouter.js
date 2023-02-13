const express = require('express');
// 利用 express 這個框架建立一個 router
const router = express.Router();
const pool = require('../utils/db');
//處理content-type，express沒內建，使用第三方套件multer
const multer = require('multer');
const path =require('path')
const bodyParser = require('body-parser');
const fs = require('fs');



router.use(bodyParser.urlencoded({ extended: true }));

router.use((req, res, next) => {
    console.log('這裡是 orderRouter 的中間件');
    next();
  });

//生成檔案夾
let fileNumber = 2001;
let putPhoto = 2000;


function createDirectory() {
  fs.mkdir(path.join(__dirname, '..', 'public', 'productsImg',`coffee_${fileNumber}`), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Directory created successfully.`);
    }
  });
  // ileNumber++
}


//處理圖片存在哪

let counter = 0;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'public', 'productsImg',`coffee_${putPhoto}`));
  }, 
  filename: function (req, file, cb) {
    console.log('multer storage', file);
    const ext = file.originalname.split('.').pop();
    cb(null, `coffee_1-${++counter}.${ext}`);
  },
})


//處理上傳圖片
const uploader = multer({
  //放入設定好的格式 storage
  storage: storage,
  //圖片格式的驗證
  fileFilter: function(req ,file, cb) {
    if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/png'){
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

//商品上下架
router.put('/products/:productId', async (req, res, next) => {
  console.log('/order/:productId => ', req.params.productId);
  console.log('payload => ', req.body);
  let [data] = await pool.query(
    'UPDATE product_list SET valid = ? WHERE id=?',
    [req.body.valid, req.params.productId]
  );
  res.json(data);
});

//刪除商品
router.put('/products/delete/:productId', async (req, res, next) => {
  console.log('/order/delete/:productId => ', req.params.productId);
  console.log('payload => ', req.body);
  let [data] = await pool.query(
    'DELETE FROM product_list WHERE id=?',
    [req.params.productId]
  );
  res.json(data);
});



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





// 新增商品並上架

router.post('/productOn',uploader.array('photo'),async (req, res) => {
  console.log('POST /api/product', req.body);
  console.log('POST /api/product photos', req.files);
  // req.body.productId, req.body.productName
  // 完成 insert
  let results = await pool.query('INSERT INTO product_list (name, place_of_orgin, type, amount, price, introduction, valid) VALUES (?, ?, ? ,? ,? ,?, 0);', [req.body.name, req.body.singlePlace, req.body.type, req.body.amount, req.body.price, req.body.introduction]);
  console.log('POST product results', results);
  res.json({ result: 'ok' });
  createDirectory();
  fileNumber++
  putPhoto++
});



//新增商品並下架

router.post('/productOff',uploader.array('photo'),async (req, res) => {
  console.log('POST /api/product', req.body);
  console.log('POST /api/product photos', req.files);
  // req.body.productId, req.body.productName
  // 完成 insert
  let results = await pool.query('INSERT INTO product_list (name, place_of_orgin, type, amount, price, introduction, valid) VALUES (?, ?, ? ,? ,? ,?, 1);', [req.body.name, req.body.singlePlace, req.body.type, req.body.amount, req.body.price, req.body.introduction]);
  console.log('POST product results', results);
  res.json({ result: 'ok' });
  createDirectory();
  fileNumber++
  putPhoto++
});






//賣場評價列表
router.get('/review', async (req, res, next) => {
  console.log('這裡是 /api/review')
  let [data] = await pool.query('SELECT * FROM product_review')
  res.json(data)
})


module.exports = router;