import sequelize from "../index.js";
import { DataTypes } from "sequelize/types";

const review = sequelize.define("review", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
  primaryKey: true,
  text: TEXT,
  username: STRING,
});

export default review;
