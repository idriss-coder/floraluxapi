'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('caracteristiques', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_color_id: {
        type: Sequelize.INTEGER
      },
      fk_size_id: {
        type: Sequelize.INTEGER
      },
      fk_material_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('caracteristiques');
  }
};