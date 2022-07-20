'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class avis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  avis.init({
    note: DataTypes.INTEGER,
    fk_article_id: DataTypes.INTEGER,
    fk_user_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    isImportant: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'avis',
  });
  return avis;
};