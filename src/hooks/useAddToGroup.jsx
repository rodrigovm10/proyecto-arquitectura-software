import { Auth } from 'aws-amplify'
import { useState } from 'react'

export function useAddToGroup({ nombreDelGrupo }) {
  const [nombreGrupo, setNombreGrupo] = useState(nombreDelGrupo)

  const callLambdaToAddToGroup = async username => {
    await Auth.currentSession().then(data => {
      let token = data.idToken.jwtToken
      const requestOptions = {
        method: 'POST',
        headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
        body: JSON.stringify({ groupname: nombreGrupo, username: username, idAplicacion: process.env.REACT_APP_API_USER_GROUP })
      }
      console.log(requestOptions)
      fetch(process.env.REACT_APP_API_REDLABORAL + '/agregar-usuarios', requestOptions)
        .then(response => {
          return response.json()
        })
        .then(async data => {
          const body = JSON.parse(data.body)
          setNombreGrupo(body.GroupName)
        })
    })
  }

  return { callLambdaToAddToGroup, nombreGrupo, setNombreGrupo }
}
