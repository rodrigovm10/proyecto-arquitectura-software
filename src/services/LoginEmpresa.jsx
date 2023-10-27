import { withAuthenticator } from '@aws-amplify/ui-react'
import { Navigate } from 'react-router-dom'
import { useSession } from '../hooks/useSession'
import { Loading } from '../components/Loading'
import { useEffect } from 'react'

function LoginEmpresa() {
  const { dataSession, nombreGrupo, saveDataIntoGroups } = useSession('Empresa')

  useEffect(() => {
    saveDataIntoGroups()
  }, [])

  return (
    <div>
      <Loading />
      {dataSession.session && nombreGrupo === 'Empresa' ? <Navigate to='/registro-empresa' /> : <Navigate to='/login-empresa' />}
    </div>
  )
}

export default withAuthenticator(LoginEmpresa)
