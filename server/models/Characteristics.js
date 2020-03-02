/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('characteristics', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
      field: 'id',
      autoIncrement: true

		},
		product_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'product_id'
		},
		name: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'name'
		}
	}, {
		tableName: 'characteristics',
    timestamps: false,
    underscored: true
	});
};
