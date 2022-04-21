import sequelize from "../index.js";
import { DataTypes } from "sequelize";

const review = sequelize.define("review", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  title: { type: DataTypes.TEXT },
  content: { type: DataTypes.STRING },
  productId: { type: DataTypes.STRING },
});

//review.sync(); //this will create the review if it's not present

export default review;
