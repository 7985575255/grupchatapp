const express= require("express");

const router=express.Router();

const controler=require('../controler/usercontroler');

router.post('/registeruser', controler.registerUser)
 router.post('/loginuser',controler.loginUser)
router.get('/all-users', controler.getAllUsers)
module.exports=router;