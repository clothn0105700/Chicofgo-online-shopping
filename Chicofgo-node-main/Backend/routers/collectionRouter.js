const express = require('express');
// 利用 express 這個框架建立一個 router
const router = express.Router();
const pool = require('../utils/db');

router.use((req, res, next) => {
    console.log('這裡是 collectionRouter 的中間件');
    next();
  });


  

module.exports = router;