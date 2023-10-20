import React, { useState } from 'react';
import {Box,Center,Button,ButtonGroup,} from '@chakra-ui/react';
import { registarBdE } from '../../../hooks/RegistroBdt';
import RegistroHabilidades from './RegistroHabilidades';
import RegistroSituacionActual from './RegistroSituacionActual';
import RegistroInfoPersonal from './RegistroInfoPersonal';

import Swal from 'sweetalert2'

export default function RegistrarBdt({email}) {
  const [datosInforPersonal, setEDatosInforPersonal] = useState({nombre: '',apellidos: '', curp: '', fechaNacimiento: '',telefono: '',escolaridad: '',genero: '',correo: email,municipio: '',colonia: '',calle: '',codigoPostal: '',});
  const [habilidades, setHabilidades] = useState({
    idioma: [], // Asegúrate de que idioma sea un array vacío por defecto
    habilidadesBlandas: [],
    habilidadesTecnicas: [],
  });

  const [datosSituacion, setDatosSituacion] = useState({buscasEmpleo: "", trabajando: "",dispViaja: "", dispRadicar: "",})
  

  const handleSubmit = async () => {
    // Verifica si algún campo en datosInforPersonal está vacío
    const datosInforPersonalIsEmpty = Object.values(datosInforPersonal).some(value => value === '');
  
    // Verifica si algún campo en habilidades está vacío
    const habilidadesIsEmpty = Object.values(habilidades).some(value => Array.isArray(value) && value.length === 0);
  
    // Verifica si algún campo en datosSituacion está vacío
    const datosSituacionIsEmpty = Object.values(datosSituacion).some(value => value === '');
  
    if (datosInforPersonalIsEmpty || habilidadesIsEmpty || datosSituacionIsEmpty) {
      // Muestra una alerta o swal si alguno de los campos está vacío
      // Por ejemplo, puedes usar la librería SweetAlert2 para mostrar una alerta
      Swal.fire({
        title: "Campos vacíos",
        text: "Por favor, completa todos los campos antes de guardar.",
        icon: "warning",
      });
    } else {
      // Todos los campos están completos, procede con el registro en la base de datos
      console.log("Situación", datosSituacion);
      await registarBdE(datosInforPersonal, habilidades, datosSituacion);
    }
  }

  return (
    <div>
      <div>
        <RegistroInfoPersonal datosInforPersonal={datosInforPersonal} setEDatosInforPersonal={setEDatosInforPersonal}/>
      </div>
      <div>
        <RegistroHabilidades habilidades={habilidades} setHabilidades={setHabilidades} />
      </div>
      <div>
        <RegistroSituacionActual datosSituacion={datosSituacion} setDatosSituacion={setDatosSituacion}/>
      </div>
      <Center>
        <ButtonGroup>
          <Button colorScheme="blue" onClick={handleSubmit}>
            Guardar
          </Button>
        </ButtonGroup>
      </Center>
      <br />
    </div>
  );
}
