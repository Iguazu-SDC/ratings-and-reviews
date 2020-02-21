const Axios = require("axios");
const reviewModel = require("../models/reviewModel.js");

module.exports = {
  getList: (req, res) => {
    Axios.get()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  },
  getMeta: (req, res) => {
    Axios.get()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
};
