import { createContext, useState } from 'react'
import { DATA_SESSION_STATE_INITIAL } from '../constants/EstadosIniciales'

// 1. Crear el Contexto
export const SessionContext = createContext()

// 2. Crear el Provider, para proveer el contexto
export function SessionProvider({ children }) {
  const [dataSession, setDataSession] = useState(DATA_SESSION_STATE_INITIAL)
  const [nombreGrupo, setNombreGrupo] = useState('')
  return <SessionContext.Provider value={{ dataSession, setDataSession, nombreGrupo, setNombreGrupo }}>{children}</SessionContext.Provider>
}
