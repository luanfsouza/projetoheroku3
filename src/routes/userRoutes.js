const routes = require('express').Router()
const UserModel = require('../models/user.module')

routes.get("/", async (req, res) => {
    
  try {
    const users = await UserModel.find({})
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send(console.log(err));
  }
});

routes.post('/', async (req, res)=>{
    
    try{
        const user = await UserModel.create(req.body)
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err.message)
    }
})

module.exports = routes