import { Pregunta } from "../vars";

const TipoPregunta = {
	preguntas: async (root) => {
		const preguntas = await Pregunta.findAll({
			where: {
				idPregunta: root.idPregunta,
			},
		});
		return preguntas;
	},
};

export default TipoPregunta;
