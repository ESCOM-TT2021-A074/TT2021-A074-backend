module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"Sesion",
		{
			idSesion: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			fechaDeSesion: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			idTipoSesion: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			idTema: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			idTutor: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			timestamps: false,
			freezeTableName: true,
		}
	);
};
