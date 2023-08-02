const Sequelize = require('sequelize');
const userdb=require('../database/database');

const Group = userdb.define('Group', {
  group_id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  group_name: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  created_by: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Group;
