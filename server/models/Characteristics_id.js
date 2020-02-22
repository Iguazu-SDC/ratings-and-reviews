/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('characteristicsId', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 'nextval("Characteristics_id_seq"::regclass)',
			primaryKey: true,
			field: 'id'
		},
		characteristicId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true,
			field: 'characteristic_id'
		},
		reviewId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true,
			field: 'review_id'
		},
		value: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'value'
		}
	}, {
		tableName: 'Characteristics_id',
    timestamps: false
	});
};
