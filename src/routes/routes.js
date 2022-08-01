const routes = require('express').Router()

routes.get("/", async (req, res) => {
    try{
        res.send('<h1>Bem Vindo a home com h</h1>')
    }
    catch(err){
        res.status(500).send(console.log(err))
    }
  
});

module.exports = routes