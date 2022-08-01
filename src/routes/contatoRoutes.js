const routes = require("express").Router();
const ContatoModel = require("../models/contato.module");

routes.get("/", async (req, res) => {
  try {
    const songs = await ContatoModel.find({});
    res.status(200).json(songs);
  } catch (err) {
    res.status(500).send(console.log(err));
  }
});

routes.post("/", async (req, res) => {
  try {
    const song = await ContatoModel.create(req.body);
    res.status(200).json(song);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = routes;
