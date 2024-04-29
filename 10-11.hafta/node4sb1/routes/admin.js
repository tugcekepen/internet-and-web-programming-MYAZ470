const express=require("express");
const adminController=require("../controller/admin");
router=express.Router();

router.get("/",adminController.homePage);

router.get("/list/anc",adminController.listAnc);

router.get("/delete/anc/:id",adminController.get_deleteAnc);

router.post("/delete/anc",adminController.post_deleteAnc);

router.get("/add/anc",adminController.get_addAnc); //kullanıcının karşısına ekleme sayfasını getiriyor

router.post("/add/anc",adminController.post_addAnc); //kullanıcının eklediği veriyi alıp listeye ekliyor

module.exports = router;