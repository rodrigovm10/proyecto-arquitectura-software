import RegistrarBdt from '../../components/BDT/FormulariosResgitroBdt/RegistrarBdt'
import { Navigate } from 'react-router-dom'
import { useSession } from '../../hooks/useSession'
import { useEffect } from 'react'

function RegistroBdT() {
  const { dataSession, getDataSession, nombreGrupo } = useSession()
  console.log(dataSession)

  useEffect(() => {
    getDataSession()
  }, [])

  return (
    <div>
      {dataSession.session && nombreGrupo === 'trabajador' && dataSession.cuentaExistente === 1 && <Navigate to='/inicio-bdt' />}
      {dataSession.session && nombreGrupo === 'trabajador' && dataSession.cuentaExistente === 0 && <RegistrarBdt email={dataSession.email} />}
      {dataSession.session && nombreGrupo === 'Empresa' && dataSession.cuentaExistente === 0 && <Navigate to='/login-empresa' />}
      {dataSession.session === false && <Navigate to='/' />}
    </div>
  )
}

export default RegistroBdT
