module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"Sesion",
		{
			idSesion: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				length: 32,
			},
			fechaDeSesion: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			asistencia: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
			idTema: {
				type: DataTypes.INTEGER,
				allowNull: false,
				length: 3,
			},
			idTutorTutorado: {
				type: DataTypes.INTEGER,
				allowNull: false,
				length: 32,
			},
		},
		{
			timestamps: false,
			freezeTableName: true,
		}
	);
};
