const express=require('express');
const cors=require('cors');
const path=require('path');
const bodyParser=require('body-parser');
const sequelize = require('./database/database');
const userRoute = require('./router/userroute');
const groupRoute=require('./router/groupRoute');

const User=require('./model/usermodel');
const Group=require('./model/group');
const app=express();

app.use(cors());

Group.belongsToMany(User, { through: 'GroupUser' });
User.belongsToMany(Group, { through: 'GroupUser' });
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, `public`)));


app.use('/',groupRoute);
app.use('/', userRoute)

// app.use((req,res)=>{
//     res.sendFile(path.join(__dirname,`public/${req.url}`));
// })

sequelize.sync({}).then((result) => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("Server listening on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });