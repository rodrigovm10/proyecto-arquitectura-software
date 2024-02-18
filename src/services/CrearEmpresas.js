import { DataStore } from 'aws-amplify'
import { Empresa } from '../models'

export const guardarEmpresaEnDataStore = async ({ datosEmpresa, email }) => {
  const { nombreComercial, razonSocial, actividad, telefono, rfc, municipio, calle, colonia, numero, codigoPostal, tipoSucursal, sector } = datosEmpresa
  const telefonoNumero = isNaN(telefono) ? telefono : parseInt(telefono);
  const empresa = new Empresa({
    nombreComercial,
    razonSocial,
    rfc,
    numero: parseInt(numero),
    email,
    telefono: telefonoNumero,
    municipio,
    codigoPostal: parseInt(codigoPostal),
    colonia,
    calle,
    actividad,
    sector,
    tipoSucursal
  })
  console.log(empresa)
  try {
    await DataStore.save(empresa)
    console.log(empresa)
    console.log('guardo')
  } catch (e) {
    throw new Error('Error al guardar empresa')
  }
}
