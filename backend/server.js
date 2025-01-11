
const express = require('express')
const app = express()
const cors = require ('cors')
const dotenv = require("dotenv")
const connectDb = require('./database/db.js')
const routeRegister = require ('./routes/registerRouter.js')
const routeLogin =  require ('./routes/loginRouter.js')
const port = 3000

dotenv.config()
connectDb()
app.use(cors())
app.use(express.json());
app.use("/api", routeRegister, routeLogin)

app.get('/', (req, res) => {
  res.send('Hello World!')
}) 

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
