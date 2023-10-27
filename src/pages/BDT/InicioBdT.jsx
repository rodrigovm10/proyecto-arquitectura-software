import { useLayoutEffect, useState } from 'react'
import InicioPrincipal from '../../components/BDT/inicioBdT/InicioPrincipal'
import { Auth, DataStore } from 'aws-amplify'
import { NombreGrupo } from '../../hooks/NombreGrupo'
import { Navigate } from 'react-router-dom'
import { BDT } from '../../models'
import NavegadorBDT from '../../components/BDT/inicioBdT/NavegadorBDT'
import Loading2 from '../../components/Loading2'

function InicioBdT() {
  const [nombreGrupo, setNombreGrupo] = useState('')
  const [session, setSession] = useState(true)
  const [loadingData, setLoadingData] = useState(true)
  const [existe, setExiste] = useState('Si')

  useLayoutEffect(() => {
    async function getData() {
      await Auth.currentAuthenticatedUser()
        .then(async data => {
          setLoadingData(true)
          await setSession(true)
          await NombreGrupo(data.username, 'trabajador', setNombreGrupo)

          setTimeout(async () => {
            DataStore.query(BDT, c => c.correo.eq(data.attributes.email)).then(e => {
              const resp = e.length === 0 ? 'No' : 'Si'
              localStorage.setItem('registrado', resp)
              setExiste(resp)
            })
            setLoadingData(false)
          }, 1200)
        })
        .catch(err => {
          setSession(false)
          console.log(err)
        })
    }
    getData()
  }, [])

  /*   useEffect(() => {
      async function cargar(correo) {
        //Se agregó setTimeout ya que la consulta lleva tiempo y si no establecemos un retraso, no se realizará.
        setTimeout(async () => {
          setLoadingData(true);
          const bdeList = await DataStore.query(BDE, c => c.correo.eq(correo));
          const resp = bdeList.length === 0 ? "No" : "Si";
          localStorage.setItem("registrado", resp);
          setExiste(resp);
          setLoadingData(false);
        }, 950);
      }
      cargar()
    }, []); */

  if (!nombreGrupo) {
    if (session) {
      return <Loading2 />
    }
  }

  return (
    <div>
      {session ? (
        <div>
          {nombreGrupo === 'trabajador' ? (
            existe === 'Si' ? (
              <div>
                <NavegadorBDT />
                <InicioPrincipal existe={existe} />
              </div>
            ) : existe === 'No' ? (
              <>
                <Navigate to='/registro-bdt' />
              </>
            ) : (
              <></>
            )
          ) : (
            nombreGrupo === 'Empresa' && <Navigate to='/login-empresa' />
          )}
        </div>
      ) : (
        session === false && <Navigate to='/' />
      )}
    </div>
  )
}

export default InicioBdT
