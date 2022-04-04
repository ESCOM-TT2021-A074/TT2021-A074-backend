import { Pregunta } from "../vars";

const Opcion = {
	pregunta: async (root) => {
		const pregunta = await Pregunta.findOne({
			where: {
				idPregunta: root.idPregunta,
			},
		});
		return pregunta;
	},
};

export default Opcion;
