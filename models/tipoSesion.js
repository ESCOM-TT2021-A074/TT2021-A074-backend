module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"TipoSesion",
		{
			idTipoSesion: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			tipo: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			timestamps: false,
			freezeTableName: true,
		}
	);
};
