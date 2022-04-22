//in here we create the relationship between the modals
import Product from "./product.js";
import review from "./review.js";
import user from "./users.js";
import category from "./category.js";

Product.hasMany(review);
review.belongsTo(Product);
user.hasMany(review);
category.belongsToMany(Product, { through: "ProductCategory" });
Product.belongsToMany(category, { through: "ProductCategory" });

export default { Product, review, category, user };
