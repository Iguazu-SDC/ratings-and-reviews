let express = require("express");
let bodyParser = require("body-parser");
let app = express();
const { sequelize } = require("../db/sql");
const morgan = require("morgan");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb', parameterLimit: 1000000 }));
app.use(morgan("tiny"));

const reviewRoutes = require("./routes/reviewRoutes.js");

app.use("/reviews", reviewRoutes);



app.listen(3000, function() {
  console.log("listening on port 3000!");
});
