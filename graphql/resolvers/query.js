import { async } from "regenerator-runtime";
import { Alumno, Encuesta, Sesion, Tutor } from "../vars";

const Query = {
	loginAlumno: async (root, { numBoleta, password }) => {
		const alumno = await Alumno.findOne({
			where: {
				numBoleta,
				password,
			},
		});
		return alumno;
	},
	loginTutor: async (root, { numero, password }) => {
		const registroTutor = await TipoTutor.findOne({
			where: {
				numero,
			},
		});

		const tutor = await Tutor.findOne({
			where: {
				idTipoTutor: registroTutor.idTipoTutor,
				password,
			},
		});

		return tutor;
	},
	getEncuestaById: async (root, { idEncuesta }) => {
		const encuesta = await Encuesta.findOne({
			where: {
				idEncuesta,
			},
		});

		return encuesta;
	},

	getEncuestasByTutor: async (root, { numero }) => {
		const registroTutor = await TipoTutor.findOne({
			where: {
				numero,
			},
		});

		const tutor = await Tutor.findOne({
			where: {
				idTipoTutor: registroTutor.idTipoTutor,
			},
		});

		const encuestas = await Encuesta.findAll({
			where: {
				idTutor: tutor.idTutor,
			},
		});

		return encuestas;
	},
	getSesionById: async (root, { idSesion }) => {
		const sesion = await Sesion.findOne({
			where: {
				idSesion,
			},
		});

		return sesion;
	},
};

export { Query };
