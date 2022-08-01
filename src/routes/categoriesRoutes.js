const routes = require("express").Router();
const CategoriesModel = require("../models/categories.module");

routes.get("/", async (req, res) => {
  try {
    const categories = await CategoriesModel.find({});
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).send(console.log(err));
  }
});

routes.get("/:id", async (req, res) => {
  id = req.params.id;
  const categorie = await CategoriesModel.findById(id);
  if (!categorie) {
    res.status(422).json({ message: "categoria não encontrada." });
    return;
  }
  try {
    res.status(200).json(categorie);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

routes.post("/", async (req, res) => {
  const categorie = await CategoriesModel.create(req.body);
  try {
    res.status(201).json(categorie);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

routes.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const categorie = await CategoriesModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!categorie) {
    res
      .status(422)
      .json({ message: "categoria nâo atualizada ou não existe." });
    return;
  }
  try {
    res.status(200).json(categorie);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

routes.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const categorie = await CategoriesModel.findByIdAndRemove(id);
  if (!categorie) {
    res
      .status(422)
      .json({ message: "categoria não existe." });
    return;
  }
  try {
    res.status(200).json({message: 'deletado com sucesso', categorie: categorie});
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = routes;
