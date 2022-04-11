module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"Tutor",
		{
			idTutor: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				length: 32,
			},
			nombre: {
				type: DataTypes.STRING,
				allowNull: false,
				length: 75,
			},
			correo: {
				type: DataTypes.STRING,
				allowNull: false,
				length: 75,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				length: 75,
			},
			idTipoTutor: {
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
