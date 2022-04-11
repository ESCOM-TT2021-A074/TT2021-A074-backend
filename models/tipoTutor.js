module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"TipoTutor",
		{
			idTipoTutor: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				length: 32,
			},
			tipo: {
				type: DataTypes.STRING,
				allowNull: false,
				length: 10,
			},
			numero: {
				type: DataTypes.STRING,
				allowNull: false,
				length: 16,
			},
		},
		{
			timestamps: false,
			freezeTableName: true,
		}
	);
};
