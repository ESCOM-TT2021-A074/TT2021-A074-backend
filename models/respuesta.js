module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"Respuesta",
		{
			idRespuesta: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				length: 32,
			},
			respuesta: {
				type: DataTypes.STRING,
				allowNull: false,
				length: 150,
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
