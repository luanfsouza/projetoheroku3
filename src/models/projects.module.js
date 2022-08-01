const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
  name: {
    type: String
  },
  budget: {
    type: String
  },
  id: {type: Number},
  category: {
    id: {type: String},
    name: {type: String}
  },
  cost: {type: Number},
  services: []
}
// ,
// { typeKey: '$type' }
);
const ProjectsModel = mongoose.model("Projects", projectsSchema);
module.exports = ProjectsModel;
