import sequelize from "../index.js";
import { DataTypes } from "sequelize";

const category = sequelize.define("category", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING },
  categoryId: { type: DataTypes.FLOAT },
});

category.sync({ force: true });

export default category;
