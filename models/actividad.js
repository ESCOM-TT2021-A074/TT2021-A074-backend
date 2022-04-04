module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"Actividad",
		{
			idActividad: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				length: 32,
			},
			nombre: {
				type: DataTypes.STRING,
				allowNull: false,
				length: 75,
			},
			descripcion: {
				type: DataTypes.STRING,
				allowNull: false,
				length: 150,
			},
			idSesion: {
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
