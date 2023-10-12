import { createContext, useState } from 'react'

// 1. Crear el Contexto
export const SessionContext = createContext()

// 2. Crear el Provider, para proveer el contexto
export function SessionProvider({ children }) {
  const [dataSession, setDataSession] = useState({
    session: true,
    idOwner: '',
    email: '',
    cuentaExistente: 0
  })
  return <SessionContext.Provider value={{ dataSession, setDataSession }}>{children}</SessionContext.Provider>
}
