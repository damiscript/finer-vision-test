/** Config */
const express = require("express");
const mysql = require("mysql");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
/**API Routes */
const userRouter = require("./lib/users/route");

app.use(cors()); //Middleware to accept cross site functionality
app.use(express.json());
// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(userRouter);

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
