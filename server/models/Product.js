/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 'nextval("Product_id_seq"::regclass)',
        primaryKey: true,
        field: "id"
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "name"
      },
      slogan: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: "slogan"
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: "description"
      },
      category: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: "category"
      },
      defaultPrice: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "default_price"
      }
    },
    {
      tableName: "Product",
      timestamps: false
    }
  );
};
