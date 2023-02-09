const express = require('express');
const router = express.Router();
const { checkLogin } = require('../middlewares/authMiddleware');
const pool = require('../utils/db');

router.get('/orders', checkLogin, (req, res, next) => {
    // 能夠通過 checkLogin 中間件，表示一定一定有 req.session.member -> 一定是登入後
    // 安心地使用 req.session.member.id 去資料庫拿這個 id 的訂單
  });