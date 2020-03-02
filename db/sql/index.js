const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize('postgres://localhost:5432/postgres') // Example for postgres

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize("postgres", "yazuki", "", {
  host: "localhost",
  dialect: "postgres"
});
const Product = require("../../server/models/Product")(sequelize, Sequelize);
const Reviews = require("../../server/models/Reviews")(sequelize, Sequelize);
const Reviews_photos = require("../../server/models/Reviews_photos")(
  sequelize,
  Sequelize
);
const Characteristics = require("../../server/models/Characteristics")(
  sequelize,
  Sequelize
);
const Characteristics_id = require("../../server/models/Characteristics_id")(
  sequelize,
  Sequelize
);

sequelize
  .sync({ force: false })
  .then(() => {
    // Reviews.belongsTo(Product);
    Product.hasMany(Reviews, {
      foreignKey: "product_id"
    });
  })
  .then(() => {
    // Reviews_photos.belongsTo(Reviews);
    Reviews.hasMany(Reviews_photos, {
      foreignKey: "review_id",
      as: "photos"
    });
    Reviews.hasMany(Characteristics_id, {
      foreignKey: "review_id"
    });
  })
  .catch(err => console.log(err));
console.log("All models were synchronized successfully.");

module.exports.sequelize = sequelize;
module.exports.Product = Product;
module.exports.Reviews = Reviews;
module.exports.Reviews_photos = Reviews_photos;
module.exports.Characteristics = Characteristics;
module.exports.Characteristics_id = Characteristics_id;
