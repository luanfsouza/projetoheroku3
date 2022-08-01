const express = require(`express`)
const dotenv = require("dotenv");
const connectToDataBase = require("../src/database/connect");

dotenv.config();
connectToDataBase()
const app = express()

const users = require('./routes/userRoutes')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/users', users)

app.use(require('./routes/routes'))

const port = process.env.PORT || 3001

app.listen(port, ()=>console.log(`ouvindo na porta 3001`))

// mongodb+srv://admin:<password>@aulanodejs.xtpk7.mongodb.net/?retryWrites=true&w=majority