module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"TipoPregunta",
		{
			idTipoPregunta: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				length: 32,
			},
			tipo: {
				type: DataTypes.STRING,
				allowNull: false,
				length: 75,
			},
		},
		{
			timestamps: false,
			freezeTableName: true,
		}
	);
};
