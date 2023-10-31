import { useState, useEffect } from 'react'

export function useFiltros() {
  const [filtros, setFiltros] = useState({ municipio: 'Todos', area: 'Todas', salarioMin: 0, salarioMax: 100000 })
  useEffect(() => {
    console.log(filtros)
  }, [filtros])
  return { filtros, setFiltros }
}
