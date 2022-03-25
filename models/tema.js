module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"Tema",
		{
			idTema: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			tema: {
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
