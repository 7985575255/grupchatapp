const Sequelize=require('sequelize');
const userdb=require('../database/database');

const User=userdb.define('users', {
    Id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        allowNull:false
    },
   name:{
    type: Sequelize.STRING,
    allowNull:false
   },
   email:{
    type :Sequelize.STRING,
    unique:true,
    allowNull:false
   },
   password:{
    type: Sequelize.STRING,
    allowNull :false
   }
  
});
module.exports=User;