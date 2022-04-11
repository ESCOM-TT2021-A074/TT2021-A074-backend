import { TutorTutorado } from "../vars";

const TipoTutoria = {
	tutorias: async (root) => {
		const tutorias = await TutorTutorado.findAll({
			where: {
				idTipoTutoria: root.idTipoTutoria,
			},
		});
		return tutorias;
	},
};
export default TipoTutoria;
