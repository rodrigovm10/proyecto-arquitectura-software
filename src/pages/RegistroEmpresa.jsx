import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { Navigate } from 'react-router-dom'
import { useAddToGroup } from '../hooks/useAddToGroup'
import { DataStore } from '@aws-amplify/datastore'
import { Empresa } from '../models'
import { FormEmpresa } from '../components/Empresa/FormEmpresa'

export function RegistroEmpresa() {
  const { callLambdaToAddToGroup, nombreGrupo } = useAddToGroup({ nombreDelGrupo: 'Empresa' })
  const [session, setSession] = useState('')
  const [idOwner, setIdOwner] = useState('')
  const [email, setEmail] = useState('')
  const [existeBde, setExisteBde] = useState('')

  useEffect(() => {
    async function getData() {
      await Auth.currentAuthenticatedUser()
        .then(async data => {
          console.log(data)
          await setSession(true)
          await setIdOwner(data.username)
          await setEmail(data.attributes.email)
          await callLambdaToAddToGroup(data.username)
          const sub = DataStore.observeQuery(Empresa, c => c.email.eq(data.attributes.email), { limit: 1 }).subscribe(({ items }) => {
            setExisteBde(items.length)
          })
          return () => {
            sub.unsubscribe()
          }
        })
        .catch(err => {
          setSession(false)
          console.log(err)
        })
    }
    getData()
  }, [])

  return (
    <div>
      {session ? (
        <>
          {nombreGrupo === 'Empresa' ? (
            existeBde === 1 ? (
              <Navigate to='/inicio-empresa' />
            ) : existeBde === 0 ? (
              <>
                <FormEmpresa email={email} />
              </>
            ) : (
              <></>
            )
          ) : nombreGrupo === 'trabajador' ? (
            <Navigate to='/login-empresa' />
          ) : (
            <></>
          )}
        </>
      ) : session === false ? (
        <Navigate to='/' />
      ) : (
        <></>
      )}
    </div>
  )
}
