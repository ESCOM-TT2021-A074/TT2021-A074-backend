import { Sesion } from "../vars";

const Actividad = {
	sesion: async (root) => {
		const sesion = await Sesion.findOne({
			where: {
				idSesion: root.idSesion,
			},
		});
		return sesion;
	},
};

export default Actividad;
