import { gql } from "graphql-request";
import graphQLClient from "./config";
import "regenerator-runtime/runtime";

test("Asignar un grupo a un Alumno", async () => {
	const dataGrupo = {
		idGrupo: 1,
	};

	const dataAlumno = {
		idAlumuno: 1,
	};

	const mutation = gql`
		mutation asignarGrupoAlumno($idAlumno: ID!, idGrupo: !ID) {
			setGroupAlumno(idAlumno: $idAlumno, idGrupo: $idGrupo) {
				created
			}
		}
	`;

	const data = await graphQLClient.request(mutation, dataGrupo).catch((err) => {
		console.error(err);
	});
	const nuevoAlumnoAsignado = data.setGroupAlumno;
	nuevoAlumnoAsignado.created = nuevoAlumnoAsignado.created === 1;
	expect(nuevoAlumnoAsignado.created).toBeGreaterThan(true);
});
