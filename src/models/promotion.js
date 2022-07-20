'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class promotion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  promotion.init({
    code: DataTypes.STRING,
    fk_article_id: DataTypes.INTEGER,
    percent: DataTypes.INTEGER,
    time: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'promotion',
  });
  return promotion;
};