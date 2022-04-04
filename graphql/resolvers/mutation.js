import { async } from "regenerator-runtime";
import {
	Actividad,
	Alumno,
	Grupo,
	Sesion,
	Tema,
	TipoSesion,
	Tutor,
} from "../vars";

const Mutation = {
	/**
	 * Funcion que asigna un Tutor individual a un alumno.
	 * @param { idTutor, Boleta } args
	 * @returns alumno con el tutor asociado
	 */
	setAlumno: async (root, { idTutor, numBoleta }) => {
		const alumno = await Alumno.findOne({
			where: {
				numBoleta,
			},
		});
		alumno.idTutor = idTutor;
		await alumno.save();
		return alumno;
	},
	/**
	 * Funcion que desasocia un Tutor individual a un alumno.
	 * @param { numBoleta } args
	 * @returns
	 */
	deleteAlumno: async (root, { numBoleta }) => {
		const alumno = await Alumno.findOne({
			where: {
				numBoleta,
			},
		});
		alumno.idTutor = null;
		await alumno.save();
		return alumno;
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
	registerTutor: async (root, { numEmpleado, password, nombre, correo }) => {
		const [nuevoTutor, created] = await Tutor.findOrCreate({
			where: {
				numEmpleado,
				password,
				nombre,
				correo,
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
	 * Funcion que crea un nuevo registro de un Tipo de Sesion de tutoria
	 * @param { tipo } args
	 * @returns nuevo registro de un Tipo de tutoria
	 */
	createTipoSesion: async (root, { tipo }) => {
		const [nuevoTipoSesion, created] = await TipoSesion.findOrCreate({
			where: {
				tipo,
			},
		});
		return nuevoTipoSesion;
	},
	/**
	 * Funcion que crea un registro de sesion de tutoria en el Sistema
	 * @param {idTutor, idTema, idTipoSesion, fechaDeSesion} args
	 * @returns nuevo registro de una sesion de tutoria
	 */
	createSesion: async (
		root,
		{ idTutor, idTema, idTipoSesion, fechaDeSesion }
	) => {
		const nuevaSesion = await Sesion.create({
			idTutor,
			idTema,
			idTipoSesion,
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
};

export { Mutation };
