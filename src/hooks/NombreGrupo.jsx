import { Auth } from "aws-amplify";

export const NombreGrupo = async (username, nombreGrupo, setNombreGrupo) => {
  try {
    await Auth.currentSession().then((data) => {
      var token = data.accessToken.jwtToken;
      const requestOptions = {
        method: "POST",
        headers: { Authorization: token },
        body: JSON.stringify({ groupname: nombreGrupo, username: username, idAplicacion: process.env.REACT_APP_API_USER_GROUP }),
      };
      fetch(
        process.env.REACT_APP_API_REDLABORAL+"/agregar-usuarios",
        requestOptions
      )
        .then((response) => {
          return response.json();
        })
        .then(async (data) => {
          const body = await JSON.parse(data.body);
          const nombre = body.GroupName;
          setNombreGrupo(nombre);
        });
    });
  } catch (error) {
    console.log(error);
  }
};
