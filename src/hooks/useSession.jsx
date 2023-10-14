import { useContext, useEffect } from 'react'
import { SessionContext } from '../context/SessionContext'
import { DataStore } from '@aws-amplify/datastore'
import { Empresa } from '../models'
import { Auth } from 'aws-amplify'
import { useAddToGroup } from './useAddToGroup'
import { useNavigate } from 'react-router-dom'

export function useSession() {
  const navigate = useNavigate()
  const { dataSession, setDataSession } = useContext(SessionContext)
  const { callLambdaToAddToGroup, nombreGrupo } = useAddToGroup({ nombreDelGrupo: 'Empresa' })

  useEffect(() => {
    console.log(dataSession)
  }, [])

  async function logOut() {
    try {
      await Auth.signOut()
      setDataSession(prevDataSession => ({ ...prevDataSession, session: false }))
      navigate('/')
      // Puedes redirigir al usuario a la página de inicio de sesión u otra página después del logout.
    } catch (error) {
      console.error('Error al cerrar sesión', error)
    }
  }

  async function getDataSession() {
    try {
      const userData = await Auth.currentAuthenticatedUser()
      console.log(userData)
      setDataSession(prevDataSession => ({
        ...prevDataSession,
        session: true,
        idOwner: userData.username,
        email: userData.attributes.email
      }))
      callLambdaToAddToGroup(userData.username)
      const sub = DataStore.observeQuery(Empresa, c => c.email.eq(userData.attributes.email), { limit: 1 }).subscribe(({ items }) => {
        setDataSession(prevDataSession => ({ ...prevDataSession, cuentaExistente: items.length }))
      })
      return () => {
        sub.unsubscribe()
      }
    } catch (err) {
      console.log(err)
    }
  }

  return { dataSession, setDataSession, getDataSession, logOut, nombreGrupo }
}
