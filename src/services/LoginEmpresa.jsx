import { withAuthenticator } from '@aws-amplify/ui-react'
import { Navigate } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import { useState, useEffect } from 'react'
import { DataStore } from 'aws-amplify'
import { Empresa } from '../models'
import { useAddToGroup } from '../hooks/useAddToGroup'

function LoginEmpresa() {
  const [session, setSession] = useState(false)
  const [, setUserData] = useState({})
  const { callLambdaToAddToGroup, nombreGrupo } = useAddToGroup({ nombreDelGrupo: 'Empresa' })

  useEffect(() => {
    async function getData() {
      await Auth.currentAuthenticatedUser()
        .then(async data => {
          data.length === 0 ? setSession(false) : setSession(true)
          await callLambdaToAddToGroup(data.username)
          console.log(data)
          const sub = DataStore.observeQuery(Empresa, c => c.email.eq(data.attributes.email), { limit: 1 }).subscribe(({ items }) => {
            setUserData(items[0])
          })
          return () => {
            sub.unsubscribe()
          }
        })
        .catch(err => console.log(err))
    }
    getData()
  }, [])

  return (
    <div>
      Loading...
      {session ? nombreGrupo === 'Empresa' ? <Navigate to='/registro-empresa' /> : <Navigate to='/login-empresa' /> : <></>}
    </div>
  )
}

export default withAuthenticator(LoginEmpresa)
