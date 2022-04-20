import sequelize from "../index.js";
import { DataTypes } from "sequelize/types";

const product = sequelize.define("product", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
  primaryKey: true,
  name: { type: DataTypes.STRING },
  category: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
  image: { type: DataTypes.STRING },
  price: { type: DataTypes.FLOAT },
});

product.sync({ altered: true });

export default product;
