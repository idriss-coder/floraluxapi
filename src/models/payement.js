'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  payement.init({
    fk_payement_method_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    fk_user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'payement',
  });
  return payement;
};