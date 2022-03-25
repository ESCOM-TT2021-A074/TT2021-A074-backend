import { gql } from "graphql-request";
import graphQLClient from "./config";
import "regenerator-runtime/runtime";

test("Crear un nuevo grupo", async () => {
	const dataTipoSesion = {
		tipo: "Individual",
	};

	const mutation = gql`
		mutation crearNuevoTipoSesion($tipo: String!) {
			createTipoSesion(tipo: $tipo) {
				idTipoSesion
				tipo
			}
		}
	`;

	const data = await graphQLClient
		.request(mutation, dataTipoSesion)
		.catch((err) => {
			console.error(err);
		});
	const tipo = data.createTipoSesion;
	expect(tipo.tipo).toBe(dataTipoSesion.tipo);
});
