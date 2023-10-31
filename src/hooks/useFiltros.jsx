import { useState } from 'react'

export function useFiltros() {
  const [filtros, setFiltros] = useState({ municipio: 'Todos', area: 'Todas', salarioMin: 0, salarioMax: 100000 })

  return { filtros, setFiltros }
}
