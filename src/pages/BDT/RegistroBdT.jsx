import React, { useEffect, useState } from 'react';
import RegistrarBdt from '../../components/BDT/FormulariosResgitroBdt/RegistrarBdt';
import { Navigate } from 'react-router-dom';
import { useSession } from '../../hooks/useSession';
import Loading2 from '../../components/Loading2';

function RegistroBdT() {
  const { dataSession, getDataSession, nombreGrupo } = useSession();
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    getDataSession()
      .then(() => {
        // Una vez que los datos se han cargado, actualiza el estado de carga
        setLoading(false);
      });
  }, []);

  if (loading) {
    // Muestra el componente Loading2 mientras se cargan los datos
    return <Loading2 />;
  }

  // Una vez que los datos se han cargado, muestra las rutas o componentes según las condiciones
  return (
    <div>
      {dataSession.session && nombreGrupo === 'trabajador' && dataSession.cuentaExistente === 1 && <Navigate to='/inicio-bdt' />}
      {dataSession.session && nombreGrupo === 'trabajador' && dataSession.cuentaExistente === 0 && <RegistrarBdt email={dataSession.email} />}
      {dataSession.session && nombreGrupo === 'Empresa' && dataSession.cuentaExistente === 0 && <Navigate to='/login-empresa' />}
      {dataSession.session === false && <Navigate to='/' />}
    </div>
  );
}

export default RegistroBdT;
