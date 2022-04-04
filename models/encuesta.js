module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"Encuesta",
		{
			idEncuesta: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				length: 32,
			},
			fechaCreacion: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			fechaLimite: {
				type: DataTypes.DATE,
				allowNull: true,
			},
			idTutor: {
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
