'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ctg_blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ctg_blog.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ctg_blog',
  });
  return ctg_blog;
};