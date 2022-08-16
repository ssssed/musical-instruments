const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const { model, models } = require('../db');

const Images = sequelize.define('images', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  link: { type: DataTypes.STRING },
  comments: { type: DataTypes.ARRAY(DataTypes.STRING) },
});

module.exports = {
  Images,
};
