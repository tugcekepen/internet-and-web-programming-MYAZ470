// yönlendirmelerimi buradan yapacağım

const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin');

// 4 tane middleware vars

// exports. ile de bunları dışarıya açabiliriz ama tek tek uğraşmış oluruz.
router.get('/add/anc', adminController.addAnc);

router.get('/list/anc', adminController.listAnc);

module.exports = router; //router'ı dışarıya açıyoruz.