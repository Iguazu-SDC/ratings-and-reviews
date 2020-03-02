/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('characteristics_id', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
      field: 'id',
      autoIncrement: true

		},
		characteristic_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'characteristic_id'
		},
		review_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'review_id'
		},
		value: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'value'
		}
	}, {
		tableName: 'characteristics_id',
    timestamps: false,
    underscored: true
	});
};
