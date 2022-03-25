module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"Tutor",
		{
			idTutor: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			numEmpleado: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			nombre: {
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
