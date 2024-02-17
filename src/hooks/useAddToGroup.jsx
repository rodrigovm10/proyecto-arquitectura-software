import { Auth } from 'aws-amplify'
import { useContext, useEffect } from 'react'
import { SessionContext } from '../context/SessionContext'

export function useAddToGroup(nombreDelGrupo) {
  const { nombreGrupo, setNombreGrupo } = useContext(SessionContext)
  useEffect(() => {
    setNombreGrupo(nombreDelGrupo)
  }, [])

  const callLambdaToAddToGroup = async username => {
    try {
      const sessionData = await Auth.currentSession()
      const token = sessionData.idToken.jwtToken
      const requestOptions = {
        method: 'POST',
        headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
        body: JSON.stringify({ groupname: nombreDelGrupo, username: username, idAplicacion: process.env.REACT_APP_API_USER_GROUP })
      }
      console.log(requestOptions)

      const response = await fetch(process.env.REACT_APP_API_REDLABORAL + '/agregar-usuario', requestOptions)
      const responseData = await response.json()

      const body = JSON.parse(responseData.body)
      console.log(body)
      setNombreGrupo(body.GroupName)
    } catch (error) {
      console.error('Error al realizar la operación:', error)
    }
  }

  return { callLambdaToAddToGroup, nombreGrupo, setNombreGrupo }
}
