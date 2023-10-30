import { Auth } from 'aws-amplify';

export async function registroCompleto(datosInforPersonal, email) {
  try {
    console.log("sendBajaLogica: Inicio de la función");
    // Obtén el token de autenticación del usuario actual
    const user = await Auth.currentSession();
    const token = user.idToken.jwtToken;

    // Validar datos de entrada
    if (!datosInforPersonal.nombre || !email) {
      throw new Error("Nombre de usuario o dirección de correo electrónico inválidos.");
    }

    // URL de la función lambda que envía el correo electrónico
    const url = process.env.REACT_APP_API_REDLABORAL + "/enviar-correo-bienvenida";
    
    // Datos que coinciden con la estructura de 'event' de la función lambda
    const requestData = {
      bdt: {
        nombre: datosInforPersonal.nombre,
        email: email,
      },
      // Otras propiedades de evento si las hubiera
    };

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData), // Incluye los datos en el cuerpo de la solicitud
    };

    const response = await fetch(url, requestOptions);

    // Verificar la respuesta
    if (!response.ok) {
      throw new Error(`Error al enviar el correo de baja: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    // Puedes hacer algo con 'data' si es necesario

  } catch (error) {
    console.error("Error al enviar el correo de baja:", error);
  }
}


export async function sendBajaLogica(usuario, email) {
  try {
    console.log("sendBajaLogica: Inicio de la función");
    // Obtén el token de autenticación del usuario actual
    const user = await Auth.currentSession();
    const token = user.idToken.jwtToken;

    // Validar datos de entrada
    if (!usuario.nombre || !email) {
      throw new Error("Nombre de usuario o dirección de correo electrónico inválidos.");
    }

    // URL de la función lambda que envía el correo electrónico
    const url = process.env.REACT_APP_API_REDLABORAL + "/enviar-correo-baja-temporal";
    
    // Datos que coinciden con la estructura de 'event' de la función lambda
    const requestData = {
      bdt: {
        nombre: usuario.nombre,
        email: email,
      },
      // Otras propiedades de evento si las hubiera
    };

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData), // Incluye los datos en el cuerpo de la solicitud
    };

    const response = await fetch(url, requestOptions);

    // Verificar la respuesta
    if (!response.ok) {
      throw new Error(`Error al enviar el correo de baja: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    // Puedes hacer algo con 'data' si es necesario

  } catch (error) {
    console.error("Error al enviar el correo de baja:", error);
  }
}


export async function sendBajaFisica(usuario, email) {
  try {
    console.log("sendBajaLogica: Inicio de la función");
    // Obtén el token de autenticación del usuario actual
    const user = await Auth.currentSession();
    const token = user.idToken.jwtToken;

    // Validar datos de entrada
    if (!usuario.nombre || !email) {
      throw new Error("Nombre de usuario o dirección de correo electrónico inválidos.");
    }

    // URL de la función lambda que envía el correo electrónico
    const url = process.env.REACT_APP_API_REDLABORAL + "/enviar-correo-cuenta-eliminada";
    
    // Datos que coinciden con la estructura de 'event' de la función lambda
    const requestData = {
      bdt: {
        nombre: usuario.nombre,
        email: email,
      },
      // Otras propiedades de evento si las hubiera
    };

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData), // Incluye los datos en el cuerpo de la solicitud
    };

    const response = await fetch(url, requestOptions);

    // Verificar la respuesta
    if (!response.ok) {
      throw new Error(`Error al enviar el correo de baja: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    // Puedes hacer algo con 'data' si es necesario

  } catch (error) {
    console.error("Error al enviar el correo de baja:", error);
  }
}
