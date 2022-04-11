import { Sesion, Tutor, AlumnoEnGrupo } from "../vars";

const TutorTutorado = {
	alumnoTutorado: async (root) => {
		const alumnoTutorado = await AlumnoEnGrupo.findOne({
			where: {
				idAlumnoEnGrupo: root.idAlumnoEnGrupo,
			},
		});
		return alumnoTutorado;
	},

	tutor: async (root) => {
		const tutor = await Tutor.findOne({
			where: {
				idTutor: root.idTutor,
			},
		});
		return tutor;
	},

	sesiones: async (root) => {
		const sesiones = await Sesion.findAll({
			where: {
				idTutorTutorado: root.idTutorTutorado,
			},
		});
		return sesiones;
	},
};
export default TutorTutorado;
