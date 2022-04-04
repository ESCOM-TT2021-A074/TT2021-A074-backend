import { Alumno, Grupo, Sesion, Encuesta } from "../vars";

const Tutor = {
	alumnos: async (root) => {
		const alumnos = await Alumno.findAll({
			where: {
				idTutor: root.idTutor,
			},
		});
		return alumnos;
	},
	grupos: async (root) => {
		const grupos = await Grupo.findAll({
			where: {
				idTutor: root.idTutor,
			},
		});
		return grupos;
	},
	sesiones: async (root) => {
		const sesiones = await Sesion.findAll({
			where: {
				idTutor: root.idTutor,
			},
		});
		return sesiones;
	},
	encuestas: async (root) => {
		const encuestas = await Encuesta.findAll({
			where: {
				idEncuesta: root.idEncuesta,
			},
		});
		return encuestas;
	},
};

export default Tutor;
