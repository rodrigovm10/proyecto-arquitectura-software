import { withAuthenticator } from '@aws-amplify/ui-react'
import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAddToGroup } from '../hooks/useAddToGroup'
import { useSession } from '../hooks/useSession'
import { Loading } from '../components/Loading'

function LoginEmpresa() {
  const { dataSession, getDataSession } = useSession()
  const { nombreGrupo } = useAddToGroup({ nombreDelGrupo: 'Empresa' })

  useEffect(() => {
    getDataSession()
  }, [])

  return (
    <div>
      <Loading />
      {dataSession.session && nombreGrupo === 'Empresa' ? <Navigate to='/registro-empresa' /> : <Navigate to='/login-empresa' />}
    </div>
  )
}

export default withAuthenticator(LoginEmpresa)
