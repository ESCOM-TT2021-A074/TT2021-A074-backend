import { TipoPregunta, Respuesta, Opcion } from "../vars";

const Pregunta = {
	tipo: async (root) => {
		const tipoPregunta = await TipoPregunta.findOne({
			where: {
				idTipoPregunta: root.idTipoPregunta,
			},
		});
		return tipoPregunta;
	},
	respuestas: async (root) => {
		const respuestas = await Respuesta.findAll({
			where: {
				idRespuesta: root.idRespuesta,
			},
		});

		return respuestas;
	},
	opciones: async (root) => {
		const opciones = await Opcion.findAll({
			where: {
				idOpcion: root.idOpcion,
			},
		});

		return opciones;
	},
};

export default Pregunta;
