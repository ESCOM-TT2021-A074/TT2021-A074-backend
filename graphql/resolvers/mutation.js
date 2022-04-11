import { async } from "regenerator-runtime";
import {
	Actividad,
	Alumno,
	AlumnoEnGrupo,
	Encuesta,
	Grupo,
	Opcion,
	Pregunta,
	Respuesta,
	Sesion,
	Tema,
	TipoPregunta,
	TipoTutoria,
	TipoTutor,
	Tutor,
	TutorTutorado,
} from "../vars";

const Mutation = {
	/**
	 * Funcion que asigna un Tutor individual a un alumno.
	 * @param { idTutor, Boleta } args
	 * @returns alumno con el tutor asociado
	 */
	assignAlumno: async (root, { idTutor, idAlumno, idTipoTutoria }) => {
		const [nuevoAlumnoTutorado, created] = await TutorTutorado.findOrCreate({
			where: {
				idTutor,
				idAlumno,
				idTipoTutoria,
			},
		});

		return nuevoAlumnoTutorado;
	},
	/**
	 * Funcion que desasocia un Tutor individual a un alumno.
	 * @param { numBoleta } args
	 * @returns
	 */
	unassignAlumno: async (root, { idTutor, idAlumno, idTipoTutoria }) => {
		const alumnoTutorado = await TutorTutorado.destroy({
			where: {
				idTutor,
				idAlumno,
				idTipoTutoria,
			},
		});

		return alumnoTutorado;
	},

	setGroupAlumno: async (root, { idAlumno, idGrupo }) => {
		const [_, created] = await AlumnoEnGrupo.findOrCreate({
			where: {
				idAlumno,
				idGrupo,
			},
		});
		return created;
	},

	/**
	 * Funcion que crea un nuevo registro de un Alumno en el Sistema
	 * @param { numBoleta, password, nombre } param1
	 * @returns nuevo Registro de Alumno
	 */
	registerAlumno: async (root, { numBoleta, password, nombre, correo }) => {
		const [nuevoAlumno, created] = await Alumno.findOrCreate({
			where: {
				numBoleta,
				password,
				nombre,
				correo,
			},
		});
		return nuevoAlumno;
	},
	/**
	 * Funcion que crea un nuevo registro de un Tutor en el Sistema
	 * @param { numEmpleado, password, nombre } args
	 * @returns nuevo Registro de Tutor
	 */
	registerTutor: async (
		root,
		{ numEmpleado, tipo, password, nombre, correo }
	) => {
		const [nuevoTipoTutor, _] = await TipoTutor.findOrCreate({
			where: {
				numero: numEmpleado,
				tipo,
			},
		});

		const [nuevoTutor, created] = await Tutor.findOrCreate({
			where: {
				nombre,
				correo,
				password,
				idTipoTutor: nuevoTipoTutor.idTipoTutor,
			},
		});
		return nuevoTutor;
	},

	/**
	 * Funcion que crea un nuevo grupo.
	 * @param { grupo } args
	 * @returns nuevo registro de un Grupo
	 */
	createGrupo: async (root, { grupo }) => {
		const [nuevoGrupo, created] = await Grupo.findOrCreate({
			where: {
				grupo,
			},
		});
		return nuevoGrupo;
	},
	/**
	 * Funcion que crea un nuevo registro de un Tema
	 * @param { tema } args
	 * @returns nuevo registro de un Tema
	 */
	createTema: async (root, { tema }) => {
		const [nuevoTema, created] = await Tema.findOrCreate({
			where: {
				tema,
			},
		});
		return nuevoTema;
	},
	/**
	 * Funcion que crea un registro de sesion de tutoria en el Sistema
	 * @param {idTutor, idTema, fechaDeSesion} args
	 * @returns nuevo registro de una sesion de tutoria
	 */
	createSesion: async (root, { idTutorTutorado, idTema, fechaDeSesion }) => {
		const nuevaSesion = await Sesion.create({
			idTutorTutorado,
			idTema,
			fechaDeSesion,
		});

		return nuevaSesion;
	},
	/**
	 * Funcion que crea un nuevo registro de una Actividad
	 * @param {idSesion, nombre, descripcion} args
	 * @returns nuevo registro de una Actividad
	 */
	createActividad: async (root, { idSesion, nombre, descripcion }) => {
		const nuevaActividad = await Actividad.create({
			idSesion,
			nombre,
			descripcion,
		});

		return nuevaActividad;
	},

	createTipoTutoria: async (root, { tipo }) => {
		const nuevoTipoTutoria = await TipoTutoria.create({
			tipo,
		});
		return nuevoTipoTutoria;
	},
	createEncuesta: async (root, { idTutor, fechaCreacion, fechaLimite }) => {
		const nuevaEncuesta = await Encuesta.create({
			idTutor,
			fechaCreacion,
			fechaLimite,
		});
		return nuevaEncuesta;
	},
	createPregunta: async (root, { idTipoPregunta, pregunta, obligatorio }) => {
		const nuevaPregunta = await Pregunta.create({
			idTipoPregunta,
			pregunta,
			obligatorio,
		});
		return nuevaPregunta;
	},
	createRespuesta: async (root, { idPregunta, respuesta }) => {
		const nuevaRespuesta = await Respuesta.create({
			idPregunta,
			respuesta,
		});
		return nuevaRespuesta;
	},
	createOpcion: async (root, { idPregunta, opcion }) => {
		const nuevaOpcion = await Opcion.create({
			idPregunta,
			opcion,
		});
		return nuevaOpcion;
	},
	createTipoPregunta: async (root, { tipo }) => {
		const nuevoTipoPregunta = await TipoPregunta.create({
			tipo,
		});
		return nuevoTipoPregunta;
	},
	/**
	 * Funcion que actualiza la contraseña de un Tutor
	 * @param {idTutor, newPassword} args
	 * @returns registro de Tutor con la contraseña actualizada
	 */
	updatePasswordTutor: async (root, { idTutor, newPassword }) => {
		const tutor = await Tutor.findOne({
			where: {
				idTutor,
			},
		});

		tutor.password = newPassword;
		await tutor.save();
		return tutor;
	},
	/**
	 * Funcion que actualiza la contraseña de un Alumno
	 * @param {idAlumno, newPassword} args
	 * @returns registro de Alumno con la contraseña actualizada
	 */
	updatePasswordAlumno: async (root, { idAlumno, newPassword }) => {
		const alumno = await Alumno.findOne({
			where: {
				idAlumno,
			},
		});
		alumno.password = newPassword;
		await alumno.save();
		return alumno;
	},
	/**
	 * Funcion que actualiza la fecha de registro de una Sesion de tutoria
	 * @param {idSesion, newFechaSesion} args
	 * @returns registro de Sesion con la fecha de sesion actualizada
	 */
	updateFechaSesion: async (root, { idSesion, newFechaSesion }) => {
		const sesion = await Sesion.findOne({
			where: {
				idSesion,
			},
		});

		sesion.fechaDeSesion = newFechaSesion;
		await sesion.save();

		return sesion;
	},
	updateAsistencia: async (root, { idSesion }) => {
		const sesion = await Sesion.findOne({
			where: {
				idSesion,
			},
		});

		sesion.asistencia = !sesion.asistencia;
		await sesion.save();
		return sesion;
	},

	/**
	 * Funcion que actualiza la informacion de una Actividad
	 * @param {idActividad, nombre, descripcion} args
	 * @returns registro de una Actividad con la informacion de la actividad actualizada
	 */
	updateActividad: async (root, { idActividad, nombre, descripcion }) => {
		const actividad = await Actividad.findOne({
			where: {
				idActividad,
			},
		});

		actividad.nombre = nombre ?? actividad.nombre;
		actividad.descripcion = descripcion ?? actividad.descripcion;

		await actividad.save();

		return actividad;
	},

	updateTutor: async (root, { tutor }) => {
		const tutorUpdated = await Tutor.findOne({
			where: {
				idTutor: tutor.idTutor,
			},
		});

		tutorUpdated = { ...tutor };

		await tutorUpdated.save();

		return tutorUpdated;
	},

	updateAlumno: async (root, { alumno }) => {
		const alumnoUpdated = await Alumno.findOne({
			where: {
				idAlumno: alumno.idAlumno,
			},
		});

		alumnoUpdated = { ...parameters };

		await alumnoUpdated.save();

		return alumnoUpdated;
	},

	updateFechaLimiteEncuesta: async (root, { idEncuesta, newFechaLimite }) => {
		const encuesta = await Encuesta.findOne({
			where: {
				idEncuesta,
			},
		});

		encuesta.fechaLimite = newFechaLimite;
		await encuesta.save();
		return encuesta;
	},

	deleteAlumnoEnGrupo: async (root, { idAlumno }) => {
		const alumnoEnGrupo = await AlumnoEnGrupo.destroy({
			where: {
				idAlumno,
			},
			truncate: true,
		});
		return alumnoEnGrupo;
	},
};

export { Mutation };
