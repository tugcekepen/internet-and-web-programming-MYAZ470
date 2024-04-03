const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

//user
//  /view/anc
//  /home

router.get('/view/anc/:id', userController.viewAnc);

router.get('/home', userController.home);


module.exports = router; //router'ı dışarıya açıyoruz.

//frontend temel
//async await
//javascript
//promise
//callback
//son ders