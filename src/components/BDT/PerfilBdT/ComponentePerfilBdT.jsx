import React, { useState } from "react";
import BuscadorDeTrabajo from './BdTList/BuscadorDeTrabajoList'
import Habilidades from "./BdTList/HabilidadesList";
import SituacionActualList from "./BdTList/SituacionActualList";
import UpdateInfoPersonal from "./BdtUpdate/UpdateInfoPersonal";
import UpdateHabilidades from './BdtUpdate/UpdateHabilidades';
import UpdateSituacionActual from './BdtUpdate/UpdateSituacionActual';
import { updateBdT } from "../../../hooks/EditarBdt";
import {  Text, Button, Flex } from '@chakra-ui/react'

const ComponentePerfilBdT = ({ usuario, setUsuario, userID }) => {
    const [InfoEdit, setInfoEdit] = useState(false);
    const [habEdit, setHabEdit] = useState(false);
    const [sitEdit, setSitEdit] = useState(false);
    const [originalUsuario, setOriginalUsuario] = useState(usuario);
  
    // Función de guardado genérica
    const GuardarCambios = () => {
       console.log( usuario.idioma);
      updateBdT(usuario); // Llama a la función de actualización con el usuario actual
      setInfoEdit(false);
      setHabEdit(false);
      setSitEdit(false);
    };
  
    const CancelarCambios = () => {
      setUsuario(originalUsuario);
      setInfoEdit(false);
      setHabEdit(false);
      setSitEdit(false);
    };


    return (
      <>
        <Flex justifyContent={'column'} ml='200' mt='10' ><Text fontSize='4xl'>Mi perfil</Text></Flex>
        {InfoEdit ? (
          // Componente de edición de información personal
          <>
            <UpdateInfoPersonal datosInforPersonal={usuario} setEDatosInforPersonal={setUsuario} />
            <Flex justify="center">
              <Button colorScheme="blue" onClick={GuardarCambios} m="2">Guardar</Button>
              <Button colorScheme="red" onClick={CancelarCambios} m="2">Cancelar</Button>
            </Flex>
          </>
        ) : (
          // Componente de visualización de información personal
          <>
            <BuscadorDeTrabajo usuario={usuario} setUsuario={setUsuario} setInfoEdit={setInfoEdit} />
          </>
        )}
  
        {habEdit ? (
          // Componente de edición de habilidades
          <>
            <UpdateHabilidades habilidades={usuario} setHabilidades={setUsuario} />
            <Flex justify="center">
              <Button colorScheme="blue" onClick={GuardarCambios} m="2">Guardar</Button>
              <Button colorScheme="red" onClick={CancelarCambios} m="2">Cancelar</Button>
            </Flex>
          </>
        ) : (
          // Componente de visualización de habilidades
          <>
            <Habilidades usuario={usuario} setUsuario={setUsuario} setHabEdit={setHabEdit} />
          </>
        )}
  
        {sitEdit ? (
          // Componente de edición de situación actual
          <>
            <UpdateSituacionActual datosSituacion={usuario} setDatosSituacion={setUsuario} />
            <Flex justify="center">
              <Button colorScheme="blue" onClick={GuardarCambios} m="2">Guardar</Button>
              <Button colorScheme="red" onClick={CancelarCambios} m="2">Cancelar</Button>
            </Flex>
          </>
        ) : (
          // Componente de visualización de situación actual
          <>
            <SituacionActualList usuario={usuario} setUsuario={setUsuario} setSitEdit={setSitEdit} />
          </>
        )}
      
        <Flex justify="flex-end" mr="20" mb="20" _hover={{ transform: 'scale(1)' }}>
      <Button 
          onClick={() => {}}
          m="2"
          color="red.500" // Letras rojas
          bg="transparent" // Sin color de fondo
          _hover={{
              backgroundColor: 'red.500', // Cambiar color de fondo a rojo al pasar el ratón
              color: 'white' // Cambiar color de letras a blanco al pasar el ratón
          }}
      >
          Eliminar Perfil
      </Button>
      </Flex>

      </>
    );
  };
  
  export default ComponentePerfilBdT;
  