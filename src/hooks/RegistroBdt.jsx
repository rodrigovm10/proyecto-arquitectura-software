import { DataStore } from '@aws-amplify/datastore';
import { BDT } from './models';
export const registarBdE = async (datosInfoPersonal,infoHabilidades, datosEducacion, datosSituacion, datosExperencia, datosCertificacion, ocupaciones, email, combinacionIdioma) =>{
await DataStore.save(
    new BDT({
        "nombre": datosInfoPersonal.nombre,
        "apellidos": datosInfoPersonal.apellidos,
        "correo": email,
        "telefono": datosInfoPersonal.telefono,
        "curp": datosInfoPersonal.curp,
        "escolaridad": datosEducacion.escolaridad,
        "fechaNacimiento": datosCertificacion.fechaNacimiento,
        "genero": datosInfoPersonal.genero,
        "idioma": combinacionIdioma,
        "habilidadesBlandas": infoHabilidades.habilidadesBlandas,
        "habilidadesTecnicas": infoHabilidades.habilidadesTecnicas,
        "buscaEmpleo": datosSituacion.buscasEmpleo === "false" || datosSituacion.buscasEmpleo === false  ? false : true,
        "trabajando": datosSituacion.trabajando  === "false" || datosSituacion.trabajando  === false ? false : true,
        "municipio": datosInfoPersonal.municipio,
        "colonia": datosInfoPersonal.colonia,
        "calle": datosInfoPersonal.calle,
        "codigoPostal": parseInt(datosInfoPersonal.codigoPostal, 10),
        "dispViaja": datosSituacion.dispViaja === "false"  || datosSituacion.dispViaja === false ? false : true,
        "dispRadicar": datosSituacion.dispRadicar === "false"  || datosSituacion.dispRadicar === false ? false : true,
        "aqueteDedicas": ocupaciones.aqueteDedicas,
        "queBuscas": ocupaciones.queBuscas,

	})
);
}