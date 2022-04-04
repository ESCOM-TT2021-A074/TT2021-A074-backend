import { Tutor, Pregunta } from "../vars";

const Encuesta = {
	autor: async (root) => {
		const autor = await Tutor.findOne({
			where: {
				idTutor: root.idTutor,
			},
		});
		return autor;
	},
	preguntas: async (root) => {
		const preguntas = await Pregunta.findAll({
			where: {
				idPregunta: root.idPregunta,
			},
		});

		return preguntas;
	},
};

export default Encuesta;
