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
  userId: { type: DataTypes.UUID, primaryKey: false },
  productId: { type: DataTypes.UUID },
});

//review.sync({ force: true }); //this will create the review if it's not present

export default review;
