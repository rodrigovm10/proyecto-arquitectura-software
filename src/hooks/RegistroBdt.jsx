import { DataStore } from "@aws-amplify/datastore";
import { BDT } from "../models";

export const registarBdE = async (
  datosInforPersonal,
  habilidades,
  datosSituacion,
  files,
  email
) => {
  await DataStore.save(
    new BDT({
      nombre: datosInforPersonal.nombre,
      apellidos: datosInforPersonal.apellidos,
      correo: datosInforPersonal.correo,
      telefono: datosInforPersonal.telefono,
      curp: datosInforPersonal.curp,
      escolaridad: datosInforPersonal.escolaridad,
      fechaNacimiento: String(datosInforPersonal.fechaNacimiento),
      genero: datosInforPersonal.genero,
      municipio: datosInforPersonal.municipio,
      colonia: datosInforPersonal.colonia,
      calle: datosInforPersonal.calle,
      codigoPostal: parseInt(datosInforPersonal.codigoPostal, 10),
      idioma: habilidades.idioma,
      habilidadesBlandas: habilidades.habilidadesBlandas,
      habilidadesTecnicas: habilidades.habilidadesTecnicas,
      buscaEmpleo:
        datosSituacion.buscasEmpleo === "false" ||
        datosSituacion.buscasEmpleo === false
          ? false
          : true,
      trabajando:
        datosSituacion.trabajando === "false" ||
        datosSituacion.trabajando === false
          ? false
          : true,
      dispRadicar:
        datosSituacion.dispRadicar === "false" ||
        datosSituacion.dispRadicar === false
          ? false
          : true,
      dispViajar:
        datosSituacion.dispViaja === "false" ||
        datosSituacion.dispViaja === false
          ? false
          : true,
      imagenBDTUrl: files.imagenBDTUrl,
      pdfImagenUrl: files.pdfImagenUrl,
    })
  );
  console.log(BDT);
};
