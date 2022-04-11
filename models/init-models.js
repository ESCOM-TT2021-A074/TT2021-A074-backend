const DataTypes = require("sequelize").DataTypes;

const _actividad = require("./actividad");
const _alumno = require("./alumno");
const _alumnoEnGrupo = require("./alumnoEnGrupo");
const _encuesta = require("./encuesta");
const _grupo = require("./grupo");
const _opcion = require("./opcion");
const _pregunta = require("./pregunta");
const _respuesta = require("./respuesta");
const _sesion = require("./sesion");
const _tema = require("./tema");
const _tipoPregunta = require("./tipoPregunta");
const _tipoTutor = require("./tipoTutor");
const _tipoTutoria = require("./tipoTutoria");
const _tutor = require("./tutor");
const _tutorTutorado = require("./tutorTutorado");

function initModels(sequelize) {
	const actividad = _actividad(sequelize, DataTypes);
	const alumno = _alumno(sequelize, DataTypes);
	const alumnoEnGrupo = _alumnoEnGrupo(sequelize, DataTypes);
	const encuesta = _encuesta(sequelize, DataTypes);
	const grupo = _grupo(sequelize, DataTypes);
	const opcion = _opcion(sequelize, DataTypes);
	const pregunta = _pregunta(sequelize, DataTypes);
	const respuesta = _respuesta(sequelize, DataTypes);
	const sesion = _sesion(sequelize, DataTypes);
	const tema = _tema(sequelize, DataTypes);
	const tipoPregunta = _tipoPregunta(sequelize, DataTypes);
	const tipoTutor = _tipoTutor(sequelize, DataTypes);
	const tipoTutoria = _tipoTutoria(sequelize, DataTypes);
	const tutor = _tutor(sequelize, DataTypes);
	const tutorTutorado = _tutorTutorado(sequelize, DataTypes);

	actividad.hasMany(sesion, {
		foreignKey: "idSesion",
	});
	alumnoEnGrupo.hasMany(grupo, {
		foreignKey: "idGrupo",
	});
	alumnoEnGrupo.hasMany(alumno, {
		foreignKey: "idAlumno",
	});
	encuesta.hasMany(tutor, {
		foreignKey: "idTutor",
	});
	opcion.hasMany(pregunta, {
		foreignKey: "idPregunta",
	});
	pregunta.hasMany(tipoPregunta, {
		foreignKey: "idTipoPregunta",
	});
	respuesta.hasMany(pregunta, {
		foreignKey: "idPregunta",
	});
	sesion.hasMany(tema, {
		foreignKey: "idTema",
	});
	sesion.hasMany(tutorTutorado, {
		foreignKey: "idTutorTutorado",
	});
	tutor.hasMany(tipoTutor, {
		foreignKey: "idTipoTutor",
	});
	tutorTutorado.hasMany(tutor, {
		foreignKey: "idTutor",
	});
	tutorTutorado.hasMany(alumnoEnGrupo, {
		foreignKey: "idAlumnoEnGrupo",
	});
	tutorTutorado.hasMany(tipoTutoria, {
		foreignKey: "idTipoTutoria",
	});

	alumno.belongsTo(alumnoEnGrupo);
	alumnoEnGrupo.belongsTo(tutorTutorado);
	grupo.belongsTo(alumnoEnGrupo);
	pregunta.belongsTo(opcion);
	pregunta.belongsTo(respuesta);
	sesion.belongsTo(actividad);
	tema.belongsTo(sesion);
	tipoPregunta.belongsTo(pregunta);
	tipoTutor.belongsTo(tutor);
	tipoTutoria.belongsTo(tutorTutorado);
	tutor.belongsTo(encuesta);
	tutor.belongsTo(tutorTutorado);
	tutorTutorado.belongsTo(sesion);

	sequelize
		.sync({ alter: true, force: false })
		.catch((err) => console.log(err));
	return {
		actividad,
		alumno,
		alumnoEnGrupo,
		encuesta,
		grupo,
		opcion,
		pregunta,
		respuesta,
		sesion,
		tema,
		tipoPregunta,
		tipoTutor,
		tipoTutoria,
		tutor,
		tutorTutorado,
	};
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
