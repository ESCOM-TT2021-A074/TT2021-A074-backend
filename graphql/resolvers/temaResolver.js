import { Sesion } from "../vars";

const Tema = {
	sesiones: async (root) => {
		const sesiones = Sesion.findAll({
			where: {
				idTema: root.idTema,
			},
		});
		return sesiones;
	},
};

export default Tema;
