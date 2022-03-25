import { Actividad, Tema, TipoSesion, Tutor } from "../vars";

const Sesion = {
	tipoSesion: async (root) => {
		const tipo = await TipoSesion.findOne({
			where: {
				idTipoSesion: root.idTipoSesion,
			},
		});
		return tipo;
	},
	tema: async (root) => {
		const tema = Tema.findOne({
			where: {
				idTema: root.idTema,
			},
		});
		return tema;
	},
	tutor: async (root) => {
		const tutor = Tutor.findOne({
			where: {
				idTutor: root.idTutor,
			},
		});
		return tutor;
	},
	actividades: async (root) => {
		const actividades = Actividad.findAll({
			where: {
				idSesion: root.idSesion,
			},
		});
		return actividades;
	},
};

export default Sesion;
