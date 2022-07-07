'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      File.belongsTo(models.Article, {
        foreignKey: {
          allowNull: false,
          name: 'fk_file_id',
        }
      })

      File.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
          name: 'fk_avatar_id',
        }
      })

    }
  }
  File.init({
    label: DataTypes.STRING,
    path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'File',
  });
  return File;
};