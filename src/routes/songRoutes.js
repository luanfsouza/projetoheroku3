const routes = require("express").Router();
const SongModel = require("../models/song.module");

routes.get("/", async (req, res) => {
  try {
    const songs = await SongModel.find({});
    res.status(200).json(songs);
  } catch (err) {
    res.status(500).send(console.log(err));
  }
});

routes.post("/", async (req, res) => {
  try {
    const song = await SongModel.create(req.body);
    res.status(200).json(song);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = routes;
