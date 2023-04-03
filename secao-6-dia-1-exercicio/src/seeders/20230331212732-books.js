'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books', 
  [
    {
      title: 'A Game of Thrones',
      author: 'George R. R. Martin',
      pageQuantity: 694,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'A Clash of Kings',
      author: 'George R. R. Martin',
      pageQuantity: 768,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'A Storm of Swords',
      author: 'George R. R. Martin',
      pageQuantity: 973,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'A Feast for Crows',
      author: 'George R. R. Martin',
      pageQuantity: 753,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'A Dance with Dragons',
      author: 'George R. R. Martin',
      pageQuantity: 1040,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'The Winds of Winter',
      author: 'George R. R. Martin',
      pageQuantity: 430,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'A Dream of Spring',
      author: 'George R. R. Martin',
      pageQuantity: 720,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'The World of Ice and Fire',
      author: 'George R. R. Martin',
      pageQuantity: 336,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'Fire and Blood',
      author: 'George R. R. Martin',
      pageQuantity: 706,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'The Rogue Prince',
      author: 'George R. R. Martin',
      pageQuantity: 82,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};
