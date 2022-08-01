const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  name: {
    type: String
  },
  id: {type: Number}
});

const CategoriesModel = mongoose.model("Categories", categoriesSchema);
module.exports = CategoriesModel
