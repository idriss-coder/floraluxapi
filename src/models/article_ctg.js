'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article_ctg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Article_ctg.init({
    pk_article_id: DataTypes.INTEGER,
    pk_category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Article_ctg',
  });
  return Article_ctg;
};