'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payement_method extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  payement_method.init({
    method_name: DataTypes.STRING,
    fk_file_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'payement_method',
  });
  return payement_method;
};