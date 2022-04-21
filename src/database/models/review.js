import sequelize from "../index.js";
import { DataTypes } from "sequelize";

const review = sequelize.define("review", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  text: { type: DataTypes.TEXT },
  username: { type: DataTypes.STRING },
  productId: { type: DataTypes.FLOAT },
});

//review.sync(); //this will create the review if it's not present

export default review;
