import { Navigate } from 'react-router-dom'
import { FormEmpresa } from '../components/Empresa/FormEmpresa'
import { useSession } from '../hooks/useSession'
import { useEffect } from 'react'
import { DatosEmpresaProvider } from '../context/DataEmpresaContext'

export function RegistroEmpresa() {
  const { dataSession, getSessionData, nombreGrupo } = useSession()
  console.log(dataSession)
  useEffect(() => {
    getSessionData()
  }, [])
  return (
    <div>
      {dataSession.session ? (
        <>
          {nombreGrupo === 'Empresa' ? (
            dataSession.cuentaExistente === 1 ? (
              <Navigate to='/inicio-empresa' />
            ) : dataSession.cuentaExistente === 0 ? (
              <>
                <DatosEmpresaProvider>
                  <FormEmpresa email={dataSession.email} />
                </DatosEmpresaProvider>
              </>
            ) : (
              <></>
            )
          ) : nombreGrupo === 'trabajador' ? (
            <Navigate to='/login-empresa' />
          ) : (
            <></>
          )}
        </>
      ) : dataSession.session === false ? (
        <Navigate to='/' />
      ) : (
        <></>
      )}
    </div>
  )
}
