import { DataStore } from '@aws-amplify/datastore';
import { BDT } from '../models';

// Función para actualizar el usuario (datos personales)
export const updateBdT = async (usuario) => {
  try {
    // Se consulta el usuario original desde el DataStore
    const original = await DataStore.query(BDT, usuario.id);

    // Se guarda el usuario actualizado en el DataStore
    await DataStore.save(
      BDT.copyOf(original, (updated) => {
        updated.nombre = usuario.nombre;
        updated.apellidos = usuario.apellidos;
        updated.correo = usuario.correo;
        updated.telefono = usuario.telefono;
        updated.genero = usuario.genero;
        updated.municipio = usuario.municipio;
        updated.colonia = usuario.colonia;
        updated.calle = usuario.calle;
        updated.fechaNacimiento = String(usuario.fechaNacimiento)
        updated.curp = usuario.curp;
        updated.codigoPostal = Number(usuario.codigoPostal);
        updated.escolaridad = usuario.escolaridad;
        updated.idioma = usuario.idioma;
        updated.habilidadesBlandas=usuario.habilidadesBlandas;
        updated.habilidadesTecnicas=usuario.habilidadesTecnicas;
        updated.buscaEmpleo = usuario.buscaEmpleo === "true" || usuario.buscaEmpleo === true;
        updated.trabajando = usuario.trabajando === "true" || usuario.trabajando === true;
        updated.dispViajar = usuario.dispViajar === "true" || usuario.dispViajar === true;
        updated.dispRadicar = usuario.dispRadicar === "true" || usuario.dispRadicar === true;
      })
    );
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
  }
}