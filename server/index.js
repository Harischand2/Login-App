const express   =  require('express')
const dotenv = require('dotenv').config()
const cors  = require('cors')
const app = express()
const {mongoose} =  require('mongoose')
const password = "c3mf4Vj04O8YxRQg"
const cookieParser = require('cookie-parser')



//datbase connection
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Database Connected")
})
.catch((err)=>{
    console.log("err: ", err)
})

//middle ware for parsing
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/authRoutes'))

app.listen(8000, ()=>{
    console.log("Listening on port 8000")
})