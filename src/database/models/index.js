//in here we create the relationship between the modals
import Product from "./product.js";
import review from "./review.js";

Product.hasMany(review);
review.belongsTo(Product);

export default { Product, review };
