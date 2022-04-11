import { TutorTutorado } from "../vars";

const Alumno = {
	tutorias: async (root) => {
		const tutorias = await TutorTutorado.findAll({
			where: {
				idAlumnoEnGrupo: root.idAlumnoEnGrupo,
			},
		});
		return tutorias;
	},
};
export default Alumno;
