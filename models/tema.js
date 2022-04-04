module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"Tema",
		{
			idTema: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				length: 3,
			},
			tema: {
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
