'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Slider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Slider.init({
    title: DataTypes.STRING,
    fk_file_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    fk_article_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Slider',
  });
  return Slider;
};