import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Navigate } from 'react-router-dom'
import { useSession } from '../../hooks/useSession'
import Loading2 from '../../components/Loading2'
import { useEffect } from 'react'

function LoginBdt() {
  const { dataSession, nombreGrupo, saveDataIntoGroupsBDT } = useSession('trabajador')

  useEffect(() => {
    saveDataIntoGroupsBDT()
    console.log(dataSession);
    console.log(nombreGrupo);
  }, [])
  return (
    <div>
      <Loading2 />
      {dataSession.session && nombreGrupo === 'trabajador' ? <Navigate to='/registro-bdt' /> : <Navigate to='/login-bdt' />}
    </div>
  )
}

export default withAuthenticator(LoginBdt)
