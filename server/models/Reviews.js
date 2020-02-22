/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('reviews', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 'nextval("Reviews_id_seq"::regclass)',
			primaryKey: true,
			field: 'id'
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true,
			field: 'product_id'
		},
		rating: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'rating'
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date'
		},
		summary: {
			type: DataTypes.STRING,
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
		reported: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'reported'
		},
		reviewerName: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'reviewer_name'
		},
		reviewerEmail: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'reviewer_email'
		},
		response: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'response'
		},
		helpfulness: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'helpfulness'
		}
	}, {
		tableName: 'Reviews',
    timestamps: false
	});
};
