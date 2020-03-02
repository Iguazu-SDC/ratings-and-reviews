/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('reviews_Photos', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
      field: 'id',
      autoIncrement: true

		},
		review_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'review_id'
		},
		url: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'url'
		}
	}, {
		tableName: 'reviews_photos',
    timestamps: false,
    underscored: true
	});
};
