import { Pregunta } from "../vars";

const Respuesta = {
	pregunta: async (root) => {
		const pregunta = await Pregunta.findOne({
			where: {
				idPregunta: root.idPregunta,
			},
		});
		return pregunta;
	},
};

export default Respuesta;
