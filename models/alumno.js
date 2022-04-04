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
				type: DataTypes.INTEGER,
				allowNull: false,
				length: 12,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				length: 75,
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
			idTutor: {
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
