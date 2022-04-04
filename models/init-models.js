const DataTypes = require("sequelize").DataTypes;

const _actividad = require("./actividad");
const _alumno = require("./alumno");
const _encuesta = require("./encuesta");
const _grupo = require("./grupo");
const _opcion = require("./opcion");
const _pregunta = require("./pregunta");
const _respuesta = require("./respuesta");
const _sesion = require("./sesion");
const _tema = require("./tema");
const _tipoPregunta = require("./tipoPregunta");
const _tipoSesion = require("./tipoSesion");
const _tutor = require("./tutor");

function initModels(sequelize) {
	const alumno = _alumno(sequelize, DataTypes);
	const actividad = _actividad(sequelize, DataTypes);
	const encuesta = _encuesta(sequelize, DataTypes);
	const grupo = _grupo(sequelize, DataTypes);
	const opcion = _opcion(sequelize, DataTypes);
	const pregunta = _pregunta(sequelize, DataTypes);
	const respuesta = _respuesta(sequelize, DataTypes);
	const sesion = _sesion(sequelize, DataTypes);
	const tema = _tema(sequelize, DataTypes);
	const tipoPregunta = _tipoPregunta(sequelize, DataTypes);
	const tipoSesion = _tipoSesion(sequelize, DataTypes);
	const tutor = _tutor(sequelize, DataTypes);

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
	encuesta.hasMany(tutor, {
		foreignKey: "idTutor",
	});
	pregunta.hasMany(tipoPregunta, {
		foreignKey: "idTipoPregunta",
	});
	respuesta.hasMany(pregunta, {
		foreignKey: "idPregunta",
	});
	opcion.hasMany(pregunta, {
		foreignKey: "idPregunta",
	});

	pregunta.belongsTo(opcion);
	pregunta.belongsTo(respuesta);
	tema.belongsTo(sesion);
	tipoSesion.belongsTo(sesion);
	tutor.belongsTo(sesion);
	tutor.belongsTo(alumno);
	tutor.belongsTo(grupo);
	tutor.belongsTo(encuesta);
	tipoPregunta.belongsTo(pregunta);
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
		encuesta,
		pregunta,
		respuesta,
		tipoPregunta,
		opcion,
	};
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
