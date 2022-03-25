module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"Actividad",
		{
			idActividad: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			nombre: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			descripcion: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			idSesion: {
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
