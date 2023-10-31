import { DataStore } from '@aws-amplify/datastore';
import { BDT } from '../models';

// Función para actualizar el usuario (datos personales)
export const updateBdT = async (usuario) => {
  try {
    // Se consulta el usuario original desde el DataStore
    const original = await DataStore.query(BDT, usuario.id);
    console.log(usuario.codigoPostal);
    console.log(usuario.habilidadesBlandas);
    // Se guarda el usuario actualizado en el DataStore
    await DataStore.save(
      BDT.copyOf(original, (updated) => {
        updated.nombre = usuario.nombre;
        updated.apellidos = usuario.apellidos;
        updated.telefono =  usuario.telefono;
        updated.genero = usuario.genero;
        updated.municipio = usuario.municipio;
        updated.colonia = usuario.colonia;
        updated.calle = usuario.calle;
        updated.fechaNacimiento = String(usuario.fechaNacimiento)
        updated.curp = usuario.curp;
        updated.codigoPostal = parseInt(usuario.codigoPostal,10);
        updated.escolaridad = usuario.escolaridad;
    
      })
    );
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
  }
}

export const updateBdTHab = async (usuario) => {
  try {
    // Se consulta el usuario original desde el DataStore
    const original = await DataStore.query(BDT, usuario.id);
    console.log(usuario.codigoPostal);
    console.log(usuario.habilidadesBlandas);
    // Se guarda el usuario actualizado en el DataStore
    await DataStore.save(
      BDT.copyOf(original, (updated) => {
      
        updated.idioma = usuario.idioma;
        updated.habilidadesBlandas=usuario.habilidadesBlandas
        updated.habilidadesTecnicas=usuario.habilidadesTecnicas
      })
    );
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
  }
}

export const updateBdTSit = async (usuario) => {
  try {
    // Se consulta el usuario original desde el DataStore
    const original = await DataStore.query(BDT, usuario.id);
    console.log(usuario.codigoPostal);
    console.log(usuario.habilidadesBlandas);
    // Se guarda el usuario actualizado en el DataStore
    await DataStore.save(
      BDT.copyOf(original, (updated) => {
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
