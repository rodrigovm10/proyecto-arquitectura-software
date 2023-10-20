import { withAuthenticator } from '@aws-amplify/ui-react'
import { Navigate } from 'react-router-dom'
import { useSession } from '../hooks/useSession'
import { Loading } from '../components/Loading'
import { useEffect } from 'react'

function LoginEmpresa() {
  const { dataSession, getDataSession, nombreGrupo } = useSession('Empresa')

  useEffect(() => {
    getDataSession()
  })

  return (
    <div>
      <Loading />
      {dataSession.session && nombreGrupo === 'Empresa' ? <Navigate to='/registro-empresa' /> : <Navigate to='/login-empresa' />}
    </div>
  )
}

export default withAuthenticator(LoginEmpresa)
