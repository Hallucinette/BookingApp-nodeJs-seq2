'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    await queryInterface.bulkInsert('Reservations', [
      {
        date: now,
        name: 'John Doe',
        note: 'Alergique fruit',
        status: 1,
        userId: 1,
        spotId: 1,
        roomId: 1,
        createdAt: now,
        updatedAt: now
      },
      {
        date: now,
        name: 'Jane Doe',
        note: '',
        status: 1,
        userId: 1,
        spotId: 1,
        roomId: 1,
        createdAt: now,
        updatedAt: now
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
