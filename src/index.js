const express = require(`express`)
const dotenv = require("dotenv");
const connectToDataBase = require("../src/database/connect");

dotenv.config();
connectToDataBase()
const app = express()

const users = require('./routes/userRoutes')
const songs = require('./routes/songRoutes')
const contatos = require('./routes/contatoRoutes')
const projects = require('./routes/projectsRoutes')
const categories = require('./routes/categoriesRoutes')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/users', users)
app.use('/songs', songs)
app.use('/contatos', contatos)
app.use('/projects', projects)
app.use('/categories', categories)

app.use(require('./routes/routes'))

const port = process.env.PORT || 3001

app.listen(port, ()=>console.log(`ouvindo na porta ${port}`))

// mongodb+srv://admin:<password>@aulanodejs.xtpk7.mongodb.net/?retryWrites=true&w=majority