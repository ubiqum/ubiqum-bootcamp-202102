const express = require("express")
const app = express()
const port = process.env.PORT || 5000

const mongoose = require("mongoose")
const db = require('./keys').mongoURI

//middleware
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use(cors())
//middleware

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log('Connection to MongoDB established'))
    .catch(err => console.log(err))

app.use('/cities', require('./routes/cities'))

app.listen(port, () => { console.log("Server is running on " + port + " port") })


