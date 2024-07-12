/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/

const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const env = require("dotenv").config()
const app = express()
exports.app = app
const static = require("./routes/static")
const cookieParser = require("cookie-parser")
const baseController = require("./controllers/baseController")

app.use(cookieParser())
// Inventory routes
app.use("/inv", inventoryRoute)

/* ***********************
* View Engine and Templates
**************************/
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout")// not at views root

/* ***********************
 * Routes
 *************************/

app.use(require("./routes/static"))

// Index route
app.get("/", baseController.buildHome)

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT
const host = process.env.HOST

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})
