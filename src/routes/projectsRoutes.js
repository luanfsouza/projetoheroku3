const routes = require("express").Router();
const ProjectsModel = require("../models/projects.module");

routes.get("/", async (req, res) => {
  try {
    const projects = await ProjectsModel.find({});
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).send(console.log(err));
  }
});

routes.get("/:id", async (req, res) => {
  id = req.params.id;
  const project = await ProjectsModel.findById(id);
  if (!project) {
    res.status(422).json({ message: "projeto não encontrado." });
    return;
  }
  try {
    res.status(200).json(project);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

routes.post("/", async (req, res) => {
  const project = await ProjectsModel.create(req.body);
  try {
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

routes.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const project = await ProjectsModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!project) {
    res
      .status(422)
      .json({ message: "projeto não atualizado ou não existe." });
    return;
  }
  try {
    res.status(200).json(project);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

routes.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const project = await ProjectsModel.findByIdAndRemove(id);
  if (!project) {
    res.status(422).json({ message: "projeto não existe." });
    return;
  }
  try {
    res
      .status(200)
      .json({ message: "deletado com sucesso", project: project });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = routes;
