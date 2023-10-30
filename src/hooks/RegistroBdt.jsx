import { DataStore } from '@aws-amplify/datastore';
import { BDT } from '../models';

export const registarBdE = async (datosInforPersonal, habilidades, datosSituacion, files, email) => {
  // Parse 'telefono' and 'codigoPostal' consistently using 'Number'
  const telefono = Number(datosInforPersonal.telefono);
  const codigoPostal = Number(datosInforPersonal.codigoPostal);

  await DataStore.save(
    new BDT({
      "nombre": datosInforPersonal.nombre,
      "apellidos": datosInforPersonal.apellidos,
      "correo": datosInforPersonal.correo,
      "telefono": telefono, // Use the parsed 'telefono' value
      "curp": datosInforPersonal.curp,
      "escolaridad": datosInforPersonal.escolaridad,
      "fechaNacimiento": datosInforPersonal.fechaNacimiento,
      "genero": datosInforPersonal.genero,
      "municipio": datosInforPersonal.municipio,
      "colonia": datosInforPersonal.colonia,
      "calle": datosInforPersonal.calle,
      "codigoPostal": codigoPostal, // Use the parsed 'codigoPostal' value
      "idioma": habilidades.idioma,
      "habilidadesBlandas": habilidades.habilidadesBlandas,
      "habilidadesTecnicas": habilidades.habilidadesTecnicas,
      "buscaEmpleo": datosSituacion.buscasEmpleo === "false" || datosSituacion.buscasEmpleo === false ? false : true,
      "trabajando": datosSituacion.trabajando === "false" || datosSituacion.trabajando === false ? false : true,
      "dispRadicar": datosSituacion.dispRadicar === "false" || datosSituacion.dispRadicar === false ? false : true,
      "dispViajar": datosSituacion.dispViaja === "false" || datosSituacion.dispViaja === false ? false : true,
      "imagenBDTUrl": files.imagenBDTUrl,
      "pdfImagenUrl": files.pdfImagenUrl
    })
  );
  console.log(BDT);
};
