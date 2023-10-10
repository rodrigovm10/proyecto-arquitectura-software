import { createContext } from 'react'

// 1. Crear el Contexto
export const SessionContext = createContext()

// 2. Crear el Provider, para proveer el contexto
export function SessionProvider({ children }) {
  return <SessionContext.Provider value={'2'}></SessionContext.Provider>
}
