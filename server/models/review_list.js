/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('reviewList', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 'nextval(review_list_id_seq::regclass)',
			primaryKey: true,
			field: 'id'
		},
		rating: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'rating'
		},
		summary: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'summary'
		},
		body: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'body'
		},
		recommend: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'recommend'
		},
		reviewerName: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'reviewer_name'
		}
	}, {
		tableName: 'review_list',
    timestamps: false
	});
};
