const Axios = require("axios");
// const reviewModel = require("../models/reviewModel.js");
// const { Product } = require("../../db/sql/index.js");
const { Sequelize } = require("sequelize");
const { sequelize } = require("../../db/sql/index.js")
const Product = require("../models/Product")(sequelize, Sequelize);
const Reviews = require("../models/Reviews")(sequelize, Sequelize);


module.exports = {
  getList: (req, res) => {
    Reviews.findAll({
      where: {
        productId: 2
      }
    })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  },
  getMeta: (req, res) => {
    Axios.get()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
};
