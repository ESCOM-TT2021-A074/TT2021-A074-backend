module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"Alumno",
		{
			idAlumno: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			numBoleta: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			nombre: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			idTutor: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
		},
		{
			timestamps: false,
			freezeTableName: true,
		}
	);
};
