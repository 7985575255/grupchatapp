const jwt = require('jsonwebtoken');
const User = require('../model/usermodel');

exports.authenticated = async(req,res,next)=>{
    try{
        let token = req.header('Authorization')
        const userObj = jwt.verify(token,'secretkey');
        const user = await User.findByPk(userObj.userId);
        req.user=user;
        next();
    }
    catch(err){
        console.log('JWT Verification Error:', err.message);
    }
}