import express from "express";
import models from "../../database/models/index.js";

const { review, Product } = models;
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allReviews = await review.findAll({ include: Product });
    res.send(allReviews);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const reviews = await review.findByPk(req.params.id, { include: Product });
    if (review === null) {
      console.log("review not found");
    } else {
      res.send(reviews);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const newReview = await review.create({
      title: req.body.title,
      content: req.body.content,
      userId: req.body.userId,
      productId: req.body.productId,
    });
    res.send(newReview);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    const reviews = await review.update(req.body, {
      where: { id: req.params.id },
    });
    res.send(reviews);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const rows = await review.destroy({ where: { id: req.params.id } });
    console.log("review destroyed");
    res.send({ rows });
  } catch (error) {
    console.error(error);
    next(error);
  }
});
export default router;
