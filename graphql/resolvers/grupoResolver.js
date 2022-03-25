import { Tutor } from "../vars";

const Grupo = {
	tutor: async (root) => {
		const tutor = await Tutor.findOne({
			where: {
				idTutor: root.idTutor,
			},
		});
		return tutor;
	},
};

export default Grupo;
