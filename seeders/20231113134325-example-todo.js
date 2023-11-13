'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Todos", [
      {
        value: "belajar node js",
        userId: "25",
      },
      {
        value: "belajar express js",
        userId: "25",
      },
      {
        value: "belajar sequelize",
        userId: "25",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};