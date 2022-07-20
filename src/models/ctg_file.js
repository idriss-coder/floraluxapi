'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ctg_file extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ctg_file.init({
    label: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ctg_file',
  });
  return ctg_file;
};