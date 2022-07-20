'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class caracteristique extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  caracteristique.init({
    fk_color_id: DataTypes.INTEGER,
    fk_size_id: DataTypes.INTEGER,
    fk_material_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'caracteristique',
  });
  return caracteristique;
};