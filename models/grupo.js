module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"Grupo",
		{
			idGrupo: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			grupo: {
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
