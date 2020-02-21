let express = require("express");
let bodyParser = require("body-parser")
let app = express();

app.use(bodyParser.json())


const reviewRoutes = require("./routes/reviewRoutes.js");

app.use("/reviews", reviewRoutes)

app.listen(3000, function() {
  console.log("listening on port 3000!");
});