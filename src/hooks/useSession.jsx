import { useContext } from 'react'
import { SessionContext } from '../context/SessionContext'
import { DataStore } from '@aws-amplify/datastore'
import { Empresa } from '../models'
import { Auth } from 'aws-amplify'
import { useAddToGroup } from './useAddToGroup'

export function useSession() {
  const { dataSession, setDataSession } = useContext(SessionContext)
  const { callLambdaToAddToGroup, nombreGrupo } = useAddToGroup({ nombreDelGrupo: 'Empresa' })

  async function getSessionData() {
    await Auth.currentAuthenticatedUser()
      .then(async data => {
        console.log(data)
        await setDataSession({ ...dataSession, session: true, idOwner: data.username, email: data.attributes.email })
        await callLambdaToAddToGroup(data.username)
        const sub = DataStore.observeQuery(Empresa, c => c.email.eq(data.attributes.email), { limit: 1 }).subscribe(({ items }) => {
          setDataSession({ ...dataSession, existeCuenta: items.length })
        })
        return () => {
          sub.unsubscribe()
        }
      })
      .catch(err => {
        setDataSession({ ...dataSession, session: false })
        console.log(err)
      })
  }

  return { dataSession, getSessionData, nombreGrupo }
}
