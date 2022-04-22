import express from "express";
import models from "../../database/models/index.js";

const { category } = models;
const router = express.Router();

//BASE GET FOR CATEGORY********************************

router.get("/", async (req, res, next) => {
  try {
    const getCategory = await category.findAll({});
    res.send(getCategory);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//POST FOR CATEGORY*********************

router.post("/", async (req, res, next) => {
  try {
    const newCategory = await category.create({
      name: req.body.name,
    });
    res.send(`new category created under ${newCategory}`);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//PUT FOR CATEGORY******************************* */

router.put("/:id", async (req, res, next) => {
  try {
    const updatedCategory = await category.update(req.body, {
      where: { id: req.params.id },
    });
    res.send(updatedCategory);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//DELETE FOR CATEGORY********************************* */

router.delete("/id", async (req, res, next) => {
  try {
    const rows = await category.destroy({
      where: { id: req.params.id },
    });
    res.send({ rows });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
