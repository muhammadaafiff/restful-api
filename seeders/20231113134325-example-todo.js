"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Todos", [
      {
        value: "belajar node js",
        userId: "1",
      },
      {
        value: "belajar express js",
        userId: "1",
      },
      {
        value: "belajar sequelize",
        userId: "1",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Todos", null, {});
  },
};