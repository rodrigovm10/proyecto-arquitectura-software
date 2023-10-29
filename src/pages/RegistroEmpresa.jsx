import { Navigate } from 'react-router-dom'
import { FormEmpresa } from '../components/Empresa/FormEmpresa'
import { useSession } from '../hooks/useSession'
import { DatosEmpresaProvider } from '../context/DataEmpresaContext'
import { useEffect } from 'react'

export function RegistroEmpresa() {
  const { dataSession, getDataSession, nombreGrupo } = useSession('Empresa')
  useEffect(() => {
    getDataSession()
  }, [])
  return (
    <div>
      {dataSession.session && nombreGrupo === 'Empresa' && dataSession.cuentaExistente === 1 && <Navigate to='/inicio-empresa' />}
      {dataSession.session && nombreGrupo === 'Empresa' && dataSession.cuentaExistente === 0 && (
        <DatosEmpresaProvider>
          <FormEmpresa email={dataSession.email} />
        </DatosEmpresaProvider>
      )}
      {dataSession.session && nombreGrupo === 'trabajador' && dataSession.cuentaExistente === 0 && <Navigate to='/login-bdt' />}
      {dataSession.session === false && <Navigate to='/' />}
    </div>
  )
}
