const { Sequelize } = require("sequelize");


// const sequelize = new Sequelize('postgres://localhost:5432/postgres') // Example for postgres

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize("postgres", "yazuki", "", {
  host: "localhost",
  dialect: "postgres"
});

const Product = sequelize.define('Product', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 'nextval("Product_id_seq"::regclass)',
    primaryKey: true,
    field: 'id'
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
    field: 'name'
  },
  slogan: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'slogan'
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'description'
  },
  category: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'category'
  },
  defaultPrice: {
    type: Sequelize.INTEGER,
    allowNull: true,
    field: 'default_price'
  }
}, {
  tableName: 'products',
  freezeTableName: true,
  timestamps: false
});

sequelize.sync({ force: false });
console.log("All models were synchronized successfully.");

module.exports.Product = Product;
module.exports.sequelize = sequelize;
