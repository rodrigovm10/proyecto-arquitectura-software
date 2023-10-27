import { DataStore } from '@aws-amplify/datastore';
import { BDT } from '../models';
import { Auth } from 'aws-amplify'
export  async function deleteUserMail(userId) {
    try {
      await Auth.currentSession().then(async (user) => {
        var token = user.idToken.jwtToken;
        const url = process.env.REACT_APP_API_REDLABORAL + "/eliminarperfil";
        const requestOptions = {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idUsuario: userId,
            idAplicacion: process.env.REACT_APP_API_USER_GROUP,
          }),
        };
        const response = await fetch(url, requestOptions);
        const data = await response.json();
      });
    } catch (error) {
      console.error("Error al eliminar el perfil del usuario:", error);
    }
  }