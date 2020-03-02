/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "reviews",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: "id",
        autoIncrement: true
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "product_id"
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "rating"
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: DataTypes.NOW,
        field: "date"
      },
      summary: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "summary"
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: "body"
      },
      recommend: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        field: "recommend"
      },
      reported: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        field: "reported"
      },
      reviewer_name: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: "reviewer_name"
      },
      reviewer_email: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: "reviewer_email"
      },
      response: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: "response"
      },
      helpfulness: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        field: "helpfulness"
      }
    },
    {
      tableName: "reviews",
      timestamps: false,
      underscored: true
    }
  );
};
