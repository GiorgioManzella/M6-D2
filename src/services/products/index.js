import express from "express";
import models from "../../database/models/index.js";

const { Product, review } = models;
const router = express.Router();

// NORMAL GET +  QUERY NAME****************************************
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: review,
      where: { name: { [sequelize.Op.like]: `%${req.query.name}%` } },
    });
    res.send(products);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET BY PRICE RANGE ***********************************
router.get("/test", async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: review,
      where: {
        price: {
          [sequelize.Op.between]: [req.query.price, req.query.price2],
        },
      },
      order: [["price", "DESC"]],
    });
    res.send(products);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET BY ID ***********************************************
router.get("/:id", async (req, res, next) => {
  try {
    const products = await Product.findByPk(req.params.id, { include: review });
    if (products === null) {
      console.log("Product not found");
    } else {
      res.send(products);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const newProduct = await Product.create({
      name: req.body.name,
      category: req.body.category,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price,
      productId: req.body.productId,
    });
    res.send(newProduct);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    const products = await Product.update(req.body, {
      where: { id: req.params.id },
    });
    res.send(products);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const rows = await Product.destroy({
      where: { id: req.params.id },
    });
    console.log("Product destroyed");
    res.send({ rows });
  } catch (error) {
    console.error(error);
    next(error);
  }
});
export default router;
