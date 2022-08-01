const mongoose = require("mongoose");
const connectToDataBase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@aaaaa.6owmu.mongodb.net/?retryWrites=true&w=majority`,
    (err) => {
      err
        ? console.log(`ocorreu um erro: ${err}`)
        : console.log("tudo certo chefia");
    }
  );
};
module.exports = connectToDataBase;
