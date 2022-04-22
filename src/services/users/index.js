import express from "express";
import models from "../../database/models/index.js";

const { user } = models;
const router = express.Router();

//BASE GET FOR User********************************

router.get("/", async (req, res, next) => {
  try {
    const getUser = await user.findAll({});
    res.send(getUser);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//POST FOR User*********************

router.post("/", async (req, res, next) => {
  try {
    const newUser = await user.create({
      name: req.body.name,
    });
    res.send(`new User created under ${newUser}`);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//PUT FOR User******************************* */

router.put("/:id", async (req, res, next) => {
  try {
    const updatedUser = await user.update(req.body, {
      where: { id: req.params.id },
    });
    res.send(updatedUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//DELETE FOR User********************************* */

router.delete("/id", async (req, res, next) => {
  try {
    const rows = await user.destroy({
      where: { id: req.params.id },
    });
    res.send({ rows });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
