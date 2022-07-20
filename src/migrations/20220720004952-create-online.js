'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('onlines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_user_id: {
        type: Sequelize.STRING
      },
      jwt_key: {
        type: Sequelize.STRING
      },
      jwt_update_key: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('onlines');
  }
};