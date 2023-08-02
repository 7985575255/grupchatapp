const express = require('express');
const router = express.Router();
const authentication = require('../middleware/auth');
const controler=require('../controler/groupControler');


router.post('/createGroup', authentication.authenticated, controler.createGroup);


module.exports=router;