module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"Alumno",
		{
			idAlumno: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				length: 32,
			},
			numBoleta: {
				type: DataTypes.STRING,
				allowNull: false,
				length: 16,
			},
			nombre: {
				type: DataTypes.STRING,
				allowNull: false,
				length: 75,
			},
			correo: {
				type: DataTypes.STRING,
				allowNull: false,
				length: 75,
			},
			password: {
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
