import Sequelize from "sequelize";

const db = new Sequelize("exampledb2", "postgres", null, {
  host: "localhost",
  dialect: "postgres",
});

export default db;
