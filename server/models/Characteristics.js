/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('characteristics', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 'nextval("Characteristics_id_seq1"::regclass)',
			primaryKey: true,
			field: 'id'
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true,
			field: 'product_id'
		},
		name: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'name'
		}
	}, {
		tableName: 'Characteristics',
    timestamps: false
	});
};
