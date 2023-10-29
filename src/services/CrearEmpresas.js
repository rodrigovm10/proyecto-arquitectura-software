import { DataStore } from 'aws-amplify'
import { Empresa } from '../models'

export const guardarEmpresaEnDataStore = async ({ datosEmpresa, email }) => {
  const { nombreComercial, razonSocial, actividad, telefono, rfc, municipio, calle, colonia, numero, codigoPostal, tipoSucursal, sector } = datosEmpresa
  const empresa = new Empresa({
    nombreComercial,
    razonSocial,
    rfc,
    numero: parseInt(numero),
    email,
    telefono: parseInt(telefono),
    municipio,
    codigoPostal,
    colonia: parseInt(colonia),
    calle,
    actividad,
    sector,
    tipoSucursal
  })
  try {
    await DataStore.save(empresa)
    console.log(empresa)
    console.log('guardo')
  } catch (e) {
    console.log(e)
  }
}
