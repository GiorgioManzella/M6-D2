import express from "express";
import models from "../../database/models/index.js";

const { review } = models;
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allReviews = await review.findAll();
    res.send(allReviews);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.get("/:id", (req, res, next) => {
  try {
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
    });
    res.send(newReview);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.put("/:id", (req, res, next) => {
  try {
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.delete("/:id", (req, res, next) => {
  try {
  } catch (error) {
    console.error(error);
    next(error);
  }
});
export default router;
