import { Tutor } from "../vars";

const Alumno = {
	tutor: async (root) => {
		const tutor = await Tutor.findOne({
			where: {
				idTutor: root.idTutor,
			},
		});
		return tutor;
	},
};
export default Alumno;
