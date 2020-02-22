let express = require("express");
let bodyParser = require("body-parser")
let app = express();
const { sequelize } = require("../db/sql");

app.use(bodyParser.json())


const reviewRoutes = require("./routes/reviewRoutes.js");

app.use("/reviews", reviewRoutes)

// sequelize.query(`SELECT p.id, p.name, r.id, r.product_id, r.rating, r."date", r.summary, r.body, r.recommend, r.reported, r.reviewer_name, r.reviewer_email, r.response, r.helpfulness, rp.url
// FROM "public"."Product" p 
// 	INNER JOIN "public"."Reviews" r ON ( p.id = r.product_id  )  
// 		LEFT OUTER JOIN "public"."Reviews_photos" rp ON ( r.id = rp.review_id  )  
// WHERE p.id = 5`)
//   .then(data => console.log(data[0]))

app.listen(3000, function() {
  console.log("listening on port 3000!");
});