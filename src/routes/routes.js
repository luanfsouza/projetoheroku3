const routes = require('express').Router()

routes.get("/", async (req, res) => {
    try{
        res.json({message: 'oi'})
    }
    catch(err){
        res.status(500).send(console.log(err))
    }
  
});

module.exports = routes