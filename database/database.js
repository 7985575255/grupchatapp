const Sequelize=require('sequelize');

const userdb=new Sequelize('grupchat','root','Av1122',{
    dialect: 'mysql', host: 'localhost'});
    module.exports=userdb;