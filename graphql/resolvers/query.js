import { Alumno, Sesion, Tutor } from "../vars";

const Query = {
	loginAlumno: async (root, { numBoleta, password }) => {
		return Alumno.findOne({
			where: {
				numBoleta,
				password,
			},
		});
	},
	loginTutor: async (root, { numEmpleado, password }) => {
		return Tutor.findOne({
			where: {
				numEmpleado,
				password,
			},
		});
	},
};

export { Query };
