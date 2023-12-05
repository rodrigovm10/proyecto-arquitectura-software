import { useEffect, useState } from 'react'
import ComponentePerfilBdT from '../../components/BDT/PerfilBdT/ComponentePerfilBdT'
import { Auth } from 'aws-amplify'
import { NombreGrupo } from '../../hooks/NombreGrupo'
import { Navigate } from 'react-router-dom'
import { DataStore } from '@aws-amplify/datastore'
import { BDT,Styles } from '../../models'
import NavegadorBDT from '../../components/BDT/inicioBdT/NavegadorBDT'
import Loading2 from '../../components/Loading2'

function PerfilBdT() {
  const [nombreGrupo, setNombreGrupo] = useState('')
  const [session, setSession] = useState('')
  const [userData, setUserData] = useState('')
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [styles, setStyles] = useState('')

  //BDE
  useEffect(() => {
    async function saves() {
      try {
        await Auth.currentAuthenticatedUser().then(async user => {
          await setSession(true)
          await NombreGrupo(user.username, 'trabajador', setNombreGrupo)
          await setEmail(user.attributes.email)
          await setUser(user.username) // establecer user.username en el estado del usuario
          const sub = DataStore.observeQuery(BDT, c => c.correo.eq(user.attributes.email), { limit: 1 }).subscribe(({ items }) => {
            setUserData(items[0])
          })
          return () => {
            sub.unsubscribe()
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
    saves()
  }, [])
  ;

  //Styles
  useEffect(() => {
    if (userData && userData.id) {  // Se agrega esta línea para verificar userData
      try {
        const sub = DataStore.observeQuery(Styles, (c) => c.bdtID.eq(userData.id)).subscribe(({ items }) => {
          setStyles(items[0]);
        });

        return () => {
          sub.unsubscribe();
        };
      } catch (error) {
        console.log(error);
      }
    }
  }, [userData])
console.log(styles);

  if (!nombreGrupo) {
    if (session) {
      return <Loading2 />
    }
  }

  return (
    <div>
      {session ? (
        <>
          {nombreGrupo === 'trabajador' ? (
            <>
              {userData !== '' && userData !== undefined ? (
                <>
                  <NavegadorBDT setSession={setSession} />
                  <ComponentePerfilBdT
                    email={email}
                    userID={user}
                    usuario={userData}
                    setUsuario={setUserData}
                    styles={styles}
                  />
                </>
              ) : (
                <></>
              )}
            </>
          ) : nombreGrupo === 'Empresa' ? (
            <Navigate to='/login-empresa' />
          ) : (
            <></>
          )}
        </>
      ) : session === false ? (
        <Navigate to='/login-bdt' />
      ) : (
        <></>
      )}
    </div>
  )
}

export default PerfilBdT
