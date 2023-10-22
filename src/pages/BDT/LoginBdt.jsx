import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Navigate } from 'react-router-dom'
import { useSession } from '../../hooks/useSession'
import  Loading2  from '../../components/Loading2'
import { useEffect } from 'react'

function LoginBdt() {
  const { dataSession, getDataSession, nombreGrupo } = useSession('trabajador')
  console.log(nombreGrupo)
  console.log(dataSession.session)
  useEffect(() => {
    getDataSession()
  })
  return (
    <div>
      <Loading2 />
      {dataSession.session && nombreGrupo === 'trabajador' ? <Navigate to='/registro-bdt' /> : <Navigate to='/registro-bdt' />}
    </div>
  )
}

export default withAuthenticator(LoginBdt)
