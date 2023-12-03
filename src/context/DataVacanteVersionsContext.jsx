import { createContext, useState } from 'react'

// 1. Crear el Contexto
export const DataVacanteVersionsContext = createContext()

// 2. Crear el Provider, para proveer el contexto
export function DataVacanteProvider({ children }) {
	const [versionData, setVersionData] = useState(null)

	return (
		<DataVacanteVersionsContext.Provider value={{ versionData, setVersionData }}>
			{children}
		</DataVacanteVersionsContext.Provider>
	)
}
