const DataTypes = require("sequelize").DataTypes;

const _actividad = require("./actividad");
const _alumno = require("./alumno");
const _grupo = require("./grupo");
const _sesion = require("./sesion");
const _tema = require("./tema");
const _tipoSesion = require("./tipoSesion");
const _tutor = require("./tutor");

function initModels(sequelize) {
	const alumno = _alumno(sequelize, DataTypes);
	const tutor = _tutor(sequelize, DataTypes);
	const actividad = _actividad(sequelize, DataTypes);
	const grupo = _grupo(sequelize, DataTypes);
	const sesion = _sesion(sequelize, DataTypes);
	const tema = _tema(sequelize, DataTypes);
	const tipoSesion = _tipoSesion(sequelize, DataTypes);

	sesion.hasMany(tema, {
		foreignKey: "idTema",
	});
	sesion.hasMany(tipoSesion, {
		foreignKey: "idSesion",
	});
	sesion.hasMany(tutor, {
		foreignKey: "idTutor",
	});
	actividad.hasMany(sesion, {
		foreignKey: "idSesion",
	});
	alumno.hasMany(tutor, {
		foreignKey: "idTutor",
	});
	grupo.hasMany(tutor, {
		foreignKey: "idTutor",
	});

	tema.belongsTo(sesion);
	tipoSesion.belongsTo(sesion);
	tutor.belongsTo(sesion);
	tutor.belongsTo(alumno);
	tutor.belongsTo(grupo);
	sesion.belongsTo(actividad);

	alumno.belongsToMany(grupo, { through: "AlumnoEnGrupo" });
	grupo.belongsToMany(alumno, { through: "AlumnoEnGrupo" });

	sequelize
		.sync({ alter: true, force: false })
		.catch((err) => console.log(err));
	return {
		actividad,
		alumno,
		tutor,
		tema,
		tipoSesion,
		grupo,
		sesion,
	};
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
