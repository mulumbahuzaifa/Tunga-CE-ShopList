const { Sequelize, Model, DataTypes } = require('sequelize');
const {db} = require('../config/database');
const sequelize = require('../db');


class Item extends Model {}

Item.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  notes: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'Item'
});

module.exports = Item;