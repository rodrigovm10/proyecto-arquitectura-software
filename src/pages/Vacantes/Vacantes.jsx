import { useEffect } from 'react'
import { Header } from '../../components/Header'
import { useSession } from '../../hooks/useSession'

export function Vacantes() {
  const { getDataSession } = useSession('Empresa')
  useEffect(() => {
    getDataSession()
  }, [])
  return (
    <>
      <Header nombreDelGrupo={'Empresa'} />
      <p>Holiwi</p>
    </>
  )
}
