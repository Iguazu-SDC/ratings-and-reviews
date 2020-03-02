/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: "id",
        autoIncrement: true
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
      default_price: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "default_price"
      }
    },
    {
      tableName: "product",
      timestamps: false,
      underscored: true
    }
  );
};
