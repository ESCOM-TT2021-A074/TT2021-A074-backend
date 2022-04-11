module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"AlumnoEnGrupo",
		{
			idAlumnoEnGrupo: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				length: 32,
			},
			idGrupo: {
				type: DataTypes.INTEGER,
				allowNull: false,
				length: 4,
			},
			idAlumno: {
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
