import { Sequelize } from "sequelize";
import dotenv from "dotenv/config";

const { PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  post: PGPORT,
  dialect: "postgres",
});

export const testDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export const syncDB = async () => {
  try {
    await sequelize.sync({}); //force: true });  //this will delete all table content
  } catch (error) {
    console.log("failed to sync");
  }
};

export default sequelize;
