const User=require('../model/usermodel');
const bcrypt = require('bcrypt')
const jwt=require('jsonwebtoken');


const registerUser=async function(req,res){
   console.log(req.body)
    let {name,email,password}=req.body;
   try{
      const register=await User.findAll({where:{email:email}})
        if(register.length>0){
        res.status(500).json({ errormsg: "User already exists with this email Id" }); 
        } else{
           let saltRounds=10;
           bcrypt.hash(password, saltRounds, async(err, hash)=> {
              if(err){
                 console.log(err)
              }else{
                  await User.create({name, email, password:hash});
              }
          
          })
           res.status(201).json({ succesMassage:"registeruser succesfully", User})
       }
    }catch(err){
     console.log(err);
   }
}

const generateAccessToken=(id,email,name)=> {
   return jwt.sign({userId:id,email:email,username:name}, "secretkey");
}

const loginUser=async function(req,res){
   const {email, password}=req.body;
      try{
    
     const registeruser=await User.findOne({where: {email:email}});
        console.log(registeruser);
     if(!registeruser){
      res.send('<h1> Invalid credentials</h1>')
      return;
     }
     const isMatch = await bcrypt.compare(password, registeruser.password);
     if(isMatch){
      
      res.status(201).json({message: "login succesfully", token:generateAccessToken(registeruser.Id,registeruser.email,registeruser.name)})
      }else{
      res.send('home page is not comming');
   }
   }catch(err){
         res.send(err);
      }
  }

const getAllUsers =  async (req, res, next) => {
   try {
     const users = await User.findAll({}, 'name');
     res.json(users);
   } catch (error) {
     console.error('Error retrieving users:', error);
     res.status(500).json({ error: 'Failed to retrieve users' });
   }
 };

module.exports={registerUser,loginUser,getAllUsers};