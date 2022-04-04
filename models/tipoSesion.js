module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"TipoSesion",
		{
			idTipoSesion: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				length: 32,
			},
			tipo: {
				type: DataTypes.STRING,
				allowNull: false,
				length: 35,
			},
		},
		{
			timestamps: false,
			freezeTableName: true,
		}
	);
};
