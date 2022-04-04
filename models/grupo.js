module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"Grupo",
		{
			idGrupo: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				length: 4,
			},
			grupo: {
				type: DataTypes.STRING,
				allowNull: false,
				length: 6,
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
