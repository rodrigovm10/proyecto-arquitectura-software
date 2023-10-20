import { createContext, useState } from 'react'
import { DATOS_EMPRESA_STATE_INITIAL } from '../constants/EstadosIniciales'

// 1. Crear el Contexto
export const DataEmpresaContext = createContext()

// 2. Crear el Provider, para proveer el contexto
export function DatosEmpresaProvider({ children }) {
  const [datosEmpresa, setDatosEmpresa] = useState(DATOS_EMPRESA_STATE_INITIAL)

  return <DataEmpresaContext.Provider value={{ datosEmpresa, setDatosEmpresa }}>{children}</DataEmpresaContext.Provider>
}
