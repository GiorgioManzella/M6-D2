import express from "express";
//import product from "../../database/models/product.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.send("hello worrd!");
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
router.post("/", (req, res, next) => {
  try {
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
