/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('reviewsPhotos', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 'nextval("Reviews_photos_id_seq"::regclass)',
			primaryKey: true,
			field: 'id'
		},
		reviewId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true,
			field: 'review_id'
		},
		url: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'url'
		}
	}, {
		tableName: 'Reviews_photos',
    timestamps: false
	});
};
