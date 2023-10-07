import { useLayoutEffect, useState } from 'react';
import InicioPrincipal from '../../components/BDT/inicioBdT/InicioPrincipal';
import { Auth, DataStore } from 'aws-amplify';
import { NombreGrupo } from '../../hooks/NombreGrupo';
import { Navigate } from 'react-router-dom';
import { BDT } from '../../models';

function InicioBdT() {
  const [nombreGrupo, setNombreGrupo] = useState('');
  const [session, setSession] = useState(true);
  const [loadingData, setLoadingData] = useState(true);
  const [existe, setExiste] = useState("Si");

  useLayoutEffect(() => {
    async function getData() {
      await Auth.currentAuthenticatedUser().then(async (data) => {
        setLoadingData(true);
        await setSession(true);
        await NombreGrupo(data.username, 'trabajador', setNombreGrupo);

        setTimeout(async () => {
          DataStore.query(BDT, c => c.correo.eq(data.attributes.email)).then((e) => {
            const resp = e.length === 0 ? "No" : "Si";
            localStorage.setItem("registrado", resp);
            setExiste(resp);
          })
          setLoadingData(false);
        }, 1200);
      }).catch((err) => { setSession(false); console.log(err) });
    }
    getData();
  }, []);

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



  return (
    <div>
      {session ? (
        <div>
          {nombreGrupo === 'trabajador' ? (
            <div>
              { (
                <div>
                 
                 
                  <InicioPrincipal  />
                 
                </div>
              )}
            </div>
          ) : nombreGrupo === 'Empresa' && (
            <Navigate to='/login-empresa' />
          )}
        </div>
      ) : (
      session === false && <Navigate to='/' />
      )}
    </div>
  );
}

export default InicioBdT;
