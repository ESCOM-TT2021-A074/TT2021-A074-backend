module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"TutorTutorado",
		{
			idTutorTutorado: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				length: 32,
			},
			idAlumno: {
				type: DataTypes.INTEGER,
				allowNull: false,
				length: 32,
			},
			idTutor: {
				type: DataTypes.INTEGER,
				allowNull: false,
				length: 32,
			},
			idTipoTutoria: {
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
