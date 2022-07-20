'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class partner_promo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  partner_promo.init({
    fk_post_id: DataTypes.INTEGER,
    sale_key: DataTypes.STRING,
    solded: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'partner_promo',
  });
  return partner_promo;
};