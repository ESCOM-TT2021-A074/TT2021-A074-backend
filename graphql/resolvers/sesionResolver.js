import { Actividad, Tema, TutorTutorado } from "../vars";

const Sesion = {
	tema: async (root) => {
		const tema = await Tema.findOne({
			where: {
				idTema: root.idTema,
			},
		});
		return tema;
	},
	tutoria: async (root) => {
		const tutoria = await TutorTutorado.findOne({
			where: {
				idTutorTutorado: root.idTutorTutorado,
			},
		});
		return tutoria;
	},
	actividades: async (root) => {
		const actividades = await Actividad.findAll({
			where: {
				idSesion: root.idSesion,
			},
		});
		return actividades;
	},
};

export default Sesion;
