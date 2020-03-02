const Axios = require("axios");
const { Sequelize } = require("sequelize");
const { sequelize } = require("../../db/sql/index.js");
const {
  Product,
  Reviews,
  Reviews_photos,
  Characteristics_id
} = require("../../db/sql/index.js");
const { client } = require("../../db/pg/index.js");

module.exports = {
  getList: (req, res) => {
    Reviews.findAll({
      where: {
        product_id: req.params.product_id,
        reported: "FALSE"
      },
      limit: req.query.count ? req.query.count : 5,
      offset: req.query.page ? (req.query.page - 1) * req.query.count : 0,
      attributes: [
        ["id", "review_id"],
        "rating",
        "summary",
        "recommend",
        "response",
        "body",
        "date",
        "reviewer_name",
        "helpfulness"
      ],
      include: [
        {
          model: Reviews_photos,
          as: "photos",
          attributes: ["id", "url"]
        }
      ]
    })
      .then(data => {
        let responseObj = {
          product: req.params.product_id,
          page: req.query.page ? req.query.page : 1,
          count: req.query.count ? req.query.count : 5,
          results: data
        };
        res.send(responseObj);
      })
      .catch(err => console.log(err));
  },
  getMeta: (req, res) => {
    let responseObj = {
      product_id: req.params.product_id,
      rating: {},
      recommended: {},
      characteristics: {}
    };

    const findReviews = Reviews.findAll({
      where: {
        product_id: req.params.product_id
      },
      attributes: ["product_id", "rating", ["recommend", "recommended"]]
    });

    // const findChars = sequelize.query(`SELECT c1.id, c1.name, ci."value"
    // FROM "public"."characteristics" c1
    //   INNER JOIN "public"."characteristics_id" ci ON ( c1.id = ci.characteristic_id  )
    // WHERE c1.product_id = ${req.params.product_id}`);

    const findChars = sequelize.query(`SELECT c1.id, c1.name, avg(ci.value) as value
    FROM characteristics c1
    	INNER JOIN characteristics_review ci ON ( c1.id = ci.characteristic_id  )
    WHERE c1.product_id = ${req.params.product_id}
        	GROUP BY c1.id`);

    Promise.all([findReviews, findChars])
      .then(responses => {
        responses[0].forEach(result => {
          responseObj.rating[result.dataValues.rating]
            ? responseObj.rating[result.dataValues.rating]++
            : (responseObj.rating[result.dataValues.rating] = 1);
          if (result.dataValues.recommended === true) {
            responseObj.recommended[1]
              ? responseObj.recommended[1]++
              : (responseObj.recommended[1] = 1);
          } else {
            responseObj.recommended[0]
              ? responseObj.recommended[0]++
              : (responseObj.recommended[0] = 1);
          }
        });

        responses[1][0].forEach(review => {
          if (responseObj.characteristics.hasOwnProperty(review.name)) {
            responseObj.characteristics[
              review.name
            ].value = parseInt(responseObj.characteristics[review.name].value).toFixed(4);
          } else {
            responseObj.characteristics[review.name] = {
              id: review.id,
              value: parseInt(review.value).toFixed(4)
            };
          }
        });
        res.send(responseObj);
      })
      .catch(err => console.log(err));
  },
  postReview: (req, res) => {
    Reviews.create({
      product_id: req.body.product_id,
      rating: req.body.rating,
      summary: req.body.summary,
      body: req.body.body,
      recommend: req.body.recommend,
      reviewer_name: req.body.name,
      reported: false,
      reviewer_email: req.body.email
    })
      .then(result => {
        if (req.body.photos.length > 0) {
          for (let photo of req.body.photos) {
            Reviews_photos.create({
              review_id: result.id,
              url: photo
            });
          }
        }
        for (let char in req.body.characteristics) {
          Characteristics_id.create({
            characteristic_id: char,
            review_id: result.id,
            value: req.body.characteristics[char]
          });
        }
      })
      .then(() => res.sendStatus(201))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  markReview: (req, res) => {
    Reviews.update(
      {
        helpfulness: sequelize.literal("helpfulness + 1")
      },
      {
        where: {
          id: req.params.review_id
        }
      }
    )
      .then(() => res.sendStatus(204))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  reportReview: (req, res) => {
    Reviews.update(
      {
        reported: "TRUE"
      },
      {
        where: {
          id: req.params.review_id
        }
      }
    )
      .then(() => res.sendStatus(204))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  }
};
