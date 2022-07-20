'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('partner_promos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_post_id: {
        type: Sequelize.INTEGER
      },
      sale_key: {
        type: Sequelize.STRING
      },
      solded: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('partner_promos');
  }
};