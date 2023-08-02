const Sequelize=require('sequelize');
const userdb=require('../database/database');
const Group = require('./group');
const User = require('./usermodel');

const GroupUser = userdb.define('GroupUser', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  GroupGroupId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Group,
      key: 'group_id',
    },
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  isAdmin: {
    type: Sequelize.BOOLEAN, 
    defaultValue: false, 
  },
});

module.exports = GroupUser;