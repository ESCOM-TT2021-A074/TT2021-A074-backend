import { AlumnoEnGrupo } from "../vars";

const Grupo = {
	alumnos: async (root) => {
		const alumnos = await AlumnoEnGrupo.findOne({
			where: {
				idGrupo: root.idGrupo,
			},
		});
		return alumnos;
	},
};

export default Grupo;
