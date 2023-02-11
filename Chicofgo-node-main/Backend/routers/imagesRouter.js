const express = require('express');
const router = express.Router();
const { checkLogin } = require('../middlewares/authMiddleware');
const path = require('path');
// const { body, validationResult } = require('express-validator');
// const pool = require('../utils/db');
// const argon2 = require('argon2');
// const { emit } = require('../utils/db');
// ---------------圖片上傳用--------------------
// const multer = require('multer');
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, '..', 'public', 'uploads'));
//   }, // 圖片名稱
//   filename: function (req, file, cb) {
//     console.log('multer storage', file);
//     // {
//     //   fieldname: 'photo',
//     //   originalname: 'AI-replace.jpg',
//     //   encoding: '7bit',
//     //   mimetype: 'image/jpeg'
//     // }
//     const ext = file.originalname.split('.').pop();
//     cb(null, `${Date.now()}.${ext}`);
//   },
// });
// 處理上傳
// const uploader = multer({
//   storage: storage,
//   // 圖片格式的 validation
//   fileFilter: function (req, file, cb) {
//     if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/png') {
//       cb(new Error('上傳圖片格式不合法'), false);
//     } else {
//       cb(null, true);
//     }
//   },
//   // 限制檔案的大小
//   limits: {
//     //200k 200x1024
//     fileSize: 200 * 1024, // 204800
//   },
// });
// ---------------圖片上傳用--------------------

// GET /api/members
router.get('/member/uploads/:imageName', (req, res, next) => {
  // 能夠通過 checkLogin 中間件，表示一定一定有 req.session.member -> 一定是登入後
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, '..', 'public', 'uploads', imageName);
  res.sendFile(imagePath);
});

//資料驗證
module.exports = router;
