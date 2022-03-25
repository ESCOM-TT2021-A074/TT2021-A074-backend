import { gql } from "graphql-request";
import graphQLClient from "./config";
import "regenerator-runtime/runtime";

test("Crear un nuevo grupo", async () => {
	const dataGrupo = {
		grupo: "3CV19",
	};

	const mutation = gql`
		mutation crearNuevoGrupo($grupo: String!) {
			createGrupo(grupo: $grupo) {
				idGrupo
				grupo
			}
		}
	`;

	const data = await graphQLClient.request(mutation, dataGrupo).catch((err) => {
		console.error(err);
	});
	const grupo = data.createGrupo;
	expect(grupo.grupo).toBe("3CV19");
});
