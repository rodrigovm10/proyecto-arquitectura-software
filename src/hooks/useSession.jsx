import { useContext } from 'react'
import { SessionContext } from '../context/SessionContext'
import { DataStore } from '@aws-amplify/datastore'
import { BDT } from '../models'
import { Empresa } from '../models'
import { Auth } from 'aws-amplify'
import { useAddToGroup } from './useAddToGroup'
import { useNavigate } from 'react-router-dom'
import { DATA_SESSION_STATE_INITIAL } from '../constants/EstadosIniciales'

export function useSession(nombreDelGrupo) {
  const navigate = useNavigate()
  const { dataSession, setDataSession } = useContext(SessionContext)
  const { callLambdaToAddToGroup, nombreGrupo } = useAddToGroup(nombreDelGrupo)

  async function logOut() {
    try {
      await Auth.signOut()
      setDataSession(DATA_SESSION_STATE_INITIAL)
      sessionStorage.clear()
      navigate('/')
    } catch (error) {
      console.error('Error al cerrar sesión', error)
    }
  }

  async function getDataSession() {
    try {
      const userData = await Auth.currentAuthenticatedUser()
      setDataSession(prevDataSession => ({
        ...prevDataSession,
        session: true,
        idOwner: userData.username,
        email: userData.attributes.email
      }))
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

  async function saveDataIntoGroups() {
    try {
      const userData = await Auth.currentAuthenticatedUser()
      setDataSession(prevDataSession => ({
        ...prevDataSession,
        session: true,
        idOwner: userData.username,
        email: userData.attributes.email
      }))

      await callLambdaToAddToGroup(userData.username)
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

  async function saveDataIntoGroupsBDT() {
    try {
      const userData = await Auth.currentAuthenticatedUser()
      setDataSession(prevDataSession => ({
        ...prevDataSession,
        session: true,
        idOwner: userData.username,
        email: userData.attributes.email
      }))
      callLambdaToAddToGroup(userData.username)
      const sub = DataStore.observeQuery(BDT, c => c.correo.eq(userData.attributes.email), { limit: 1 }).subscribe(({ items }) => {
        setDataSession(prevDataSession => ({ ...prevDataSession, cuentaExistente: items.length }))
      })
      return () => {
        sub.unsubscribe()
      }
    } catch (err) {
      console.log(err)
    }
  }

  async function getDataSessionBDT() {
    try {
      const userData = await Auth.currentAuthenticatedUser()
      setDataSession(prevDataSession => ({
        ...prevDataSession,
        session: true,
        idOwner: userData.username,
        email: userData.attributes.email
      }))
      const sub = DataStore.observeQuery(BDT, c => c.correo.eq(userData.attributes.email), { limit: 1 }).subscribe(({ items }) => {
        setDataSession(prevDataSession => ({ ...prevDataSession, cuentaExistente: items.length }))
      })
      return () => {
        sub.unsubscribe()
      }
    } catch (err) {
      console.log(err)
    }
  }

  return { dataSession, setDataSession, getDataSession, logOut, nombreGrupo, saveDataIntoGroups, saveDataIntoGroupsBDT, getDataSessionBDT }
}
