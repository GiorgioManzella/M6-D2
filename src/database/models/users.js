import sequelize from "../index.js";
import { DataTypes } from "sequelize";

const user = sequelize.define("user", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    username: DataTypes.STRING,
  },
});

export default user;
