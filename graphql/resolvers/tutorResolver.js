import { TipoTutor, TutorTutorado, Encuesta } from "../vars";

const Tutor = {
	tipo: async (root) => {
		const tipo = await TipoTutor.findOne({
			where: {
				idTipoTutor: root.idTipoTutor,
			},
		});
		return tipo;
	},
	tutorados: async (root) => {
		const tutorados = await TutorTutorado.findAll({
			where: {
				idTutor: root.idTutor,
			},
		});
		return tutorados;
	},
	encuestas: async (root) => {
		const encuestas = await Encuesta.findAll({
			where: {
				idTutor: root.idTutor,
			},
		});
		return encuestas;
	},
};

export default Tutor;
