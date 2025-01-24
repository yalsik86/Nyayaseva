const express = require("express")
const { mongoose } = require("mongoose")
const dotenv = require("dotenv")
const morgan = require("morgan")
const bcrypt = require("bcryptjs")
const salt = bcrypt.genSaltSync(10);
const lsp = require("./models/lsp")
const jwt = require("jsonwebtoken")
const Auth = require("./Auth")
require("dotenv").config();
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(morgan("tiny"))

app.use(cors())

// ENV configurations
const PORT = process.env.PORT || 8000
const DATABASE_URI = process.env.DATABASE_URI


// Connecting to DB and then launching app
mongoose.connect(DATABASE_URI).then( () => {
    app.listen(PORT, () => {
        console.log(`Database connected, Server running on Port ${PORT} !`)
    })
}).catch ( (err) => {
    console.log("Error occured while connecting to DB !");
    console.error(err)
})
