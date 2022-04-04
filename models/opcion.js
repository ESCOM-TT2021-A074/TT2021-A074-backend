module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"Opcion",
		{
			idOpcion: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				length: 32,
			},
			opcion: {
				type: DataTypes.STRING,
				allowNull: false,
				length: 75,
			},
			idPregunta: {
				type: DataTypes.INTEGER,
				allowNull: true,
				length: 32,
			},
		},
		{
			timestamps: false,
			freezeTableName: true,
		}
	);
};
