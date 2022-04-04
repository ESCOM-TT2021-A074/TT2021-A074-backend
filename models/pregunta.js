module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"Pregunta",
		{
			idPregunta: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				length: 32,
			},
			pregunta: {
				type: DataTypes.STRING,
				allowNull: false,
				length: 150,
			},
			obligatorio: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
			idTipoPregunta: {
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
