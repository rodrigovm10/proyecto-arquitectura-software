import { createContext, useState } from 'react'
import { DATOS_VACANTE_STATE_INITIAL } from '../constants/EstadosIniciales'

// 1. Crear el Contexto
export const DataVacanteContext = createContext()

// 2. Crear el Provider, para proveer el contexto
export function DataVacanteProvider({ children }) {
  const [datosVacante, setDatosVacante] = useState(DATOS_VACANTE_STATE_INITIAL)

  return <DataVacanteContext.Provider value={{ datosVacante, setDatosVacante }}>{children}</DataVacanteContext.Provider>
}
