import sequelize from "../index.js";
import { DataTypes } from "sequelize";

const Product = sequelize.define("product", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING },
  category: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
  image: { type: DataTypes.STRING },
  price: { type: DataTypes.FLOAT },
});

//Product.sync({ alter: true });

export default Product;
