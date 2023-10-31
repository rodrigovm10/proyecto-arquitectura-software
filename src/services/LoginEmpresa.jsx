import { withAuthenticator } from '@aws-amplify/ui-react'
import { Navigate } from 'react-router-dom'
import { useSession } from '../hooks/useSession'
import Loading2 from '../components/Loading2'
import { useEffect } from 'react'

function LoginEmpresa() {
  const { dataSession, nombreGrupo, saveDataIntoGroups } = useSession('Empresa')

  useEffect(() => {
    saveDataIntoGroups()
  }, [])

  return (
    <div>
      <Loading2 />
      {dataSession.session && nombreGrupo === 'Empresa' ? <Navigate to='/registro-empresa' /> : <Navigate to='/login-empresa' />}
    </div>
  )
}

export default withAuthenticator(LoginEmpresa)
