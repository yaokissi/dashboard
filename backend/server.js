
const express = require('express')
const app = express()
const cors = require ('cors')
const connectDb = require('./database/db.js')
const routeRegister = require ('./routes/registerRouter.js')
const routeLogin =  require ('./routes/loginRouter.js')
const port = 3000


connectDb()
app.use(cors())
app.use(express.json());
app.use("/api", routeRegister, routeLogin)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})



