import React, { useState } from "react";
import BuscadorDeTrabajo from "./BdTList/BuscadorDeTrabajoList";
import Habilidades from "./BdTList/HabilidadesList";
import SituacionActualList from "./BdTList/SituacionActualList";
import UpdateInfoPersonal from "./BdtUpdate/UpdateInfoPersonal";
import UpdateHabilidades from "./BdtUpdate/UpdateHabilidades";
import UpdateSituacionActual from "./BdtUpdate/UpdateSituacionActual";
import { updateBdT } from "../../../hooks/EditarBdt";
import {Text,Button,Flex,Wrap,Center,WrapItem,Grid,} from "@chakra-ui/react";
import { deleteUserMail } from "../../../hooks/DeleteUsuario";
import Swal from "sweetalert2";
import { BDT } from "../../../models";
import { DataStore } from "aws-amplify";
import { useNavigate } from "react-router-dom";

const ComponentePerfilBdT = ({ usuario, setUsuario, userID }) => {
  console.log(usuario.habilidadesBlandas);

  const navigate = useNavigate();
  const [InfoEdit, setInfoEdit] = useState(false);
  const [habEdit, setHabEdit] = useState(false);
  const [sitEdit, setSitEdit] = useState(false);
  const [originalUsuario, setOriginalUsuario] = useState(usuario);

  const [updateKey, setUpdateKey] = useState(0); // Estado para forzar la recarga

  // Función de guardado genérica
  const GuardarCambios = (section) => {
    // Revertir los cambios solo para la sección especificada
    switch (section) {
      case "info":
        updateBdT(usuario)
        setUsuario(originalUsuario);
        setInfoEdit(false);
        break;
      case "hab":
        updateBdT(usuario)
        setUsuario(originalUsuario);
        setHabEdit(false);
        break;
      case "sit":
        updateBdT(usuario)
        setUsuario(originalUsuario);
        setSitEdit(false);
        break;
      default:
        break;
    };
     // Incrementar el estado updateKey para forzar la recarga
     setUpdateKey((prevKey) => prevKey + 1);
     updateBdT(usuario);
  };

  const CancelarCambios = (section) => {
    // Revertir los cambios solo para la sección especificada
    switch (section) {
      case 'info':
        setUsuario(originalUsuario);
        setInfoEdit(false);
        break;
      case 'hab':
        setUsuario(originalUsuario);
        setHabEdit(false);
        break;
      case 'sit':
        setUsuario(originalUsuario);
        setSitEdit(false);
        break;
      default:
        break;
    }
  };
  
  const eliminarPerfil = async () => {
    try {
      // Muestra un SweetAlert de confirmación
      const result = await Swal.fire({
        title: "¿Está seguro de que desea eliminar su cuenta?",
        text: "Esta acción no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "red",
        cancelButtonColor: "gray",
        confirmButtonText: "Sí, estoy seguro",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        console.log("Usuario ID:", usuario.id);
        try {
          // Intenta eliminar el registro de DataStore
          const bdeToDelete = await DataStore.query(BDT, (c) =>
            c.id.eq(usuario.id)
          );
          for (let bde of bdeToDelete) {
            await DataStore.delete(BDT, bde);
          }

          // Intenta eliminar el correo del usuario
          await deleteUserMail(userID);

          // Ambas operaciones se realizaron con éxito, puedes continuar
          navigate("/");
          await DataStore.clear();
          localStorage.clear();
          sessionStorage.clear();
          Swal.fire("¡Gracias!", "Tu perfil ha sido eliminado.", "success");
        } catch (error) {
          // Maneja errores de DataStore o deleteUserMail aquí.
          console.error("Error al eliminar la cuenta:", error);
        }
      }
    } catch (error) {
      // Maneja errores de SweetAlert aquí.
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Text fontSize="4xl" ml="170">
        Mi perfil
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)", // col-xs-12
          sm: "repeat(1, 1fr)", // col-sm-6
          md: "repeat(2, 1fr)", // col-md-4
          lg: "repeat(2, 1fr)", // col-lg-3
        }}
        gap={10}
        p={8}
      >
        <div>
          {InfoEdit ? (
            // Componente de edición de información personal
            <>
              <UpdateInfoPersonal
                datosInforPersonal={usuario}
                setEDatosInforPersonal={setUsuario}
              />
              <Flex justify="center">
                <Button colorScheme="blue" onClick={() => GuardarCambios('info')} m="2">
                  Guardar
                </Button>
                <Button colorScheme="red" onClick={() => CancelarCambios('info')} m="2">
                  Cancelar
                </Button>
              </Flex>
            </>
          ) : (
            // Componente de visualización de información personal
            <>
              <BuscadorDeTrabajo
                usuario={usuario}
                setUsuario={setUsuario}
                setInfoEdit={setInfoEdit}
              />
            </>
          )}
        </div>
        <div>
          {habEdit ? (
            // Componente de edición de habilidades
            <>
              <UpdateHabilidades
                habilidades={usuario}
                setHabilidades={setUsuario}
              />
              <Flex justify="center">
                <Button colorScheme="blue"  onClick={() => GuardarCambios('hab')} m="2">
                  Guardar
                </Button>
                <Button colorScheme="red" onClick={() => CancelarCambios('hab')} m="2">
                  Cancelar
                </Button>
              </Flex>
            </>
          ) : (
            // Componente de visualización de habilidades
            <>
              <Habilidades
                usuario={usuario}
                setUsuario={setUsuario}
                setHabEdit={setHabEdit}
              />
            </>
          )}
        </div>
        <div>
          {sitEdit ? (
            // Componente de edición de situación actual
            <>
              <UpdateSituacionActual
                datosSituacion={usuario}
                setDatosSituacion={setUsuario}
              />
              <Flex justify="center">
                <Button colorScheme="blue"  onClick={() => GuardarCambios('sit')} m="2">
                  Guardar
                </Button>
                <Button colorScheme="red"  onClick={() => CancelarCambios('sit')} m="2">
                  Cancelar
                </Button>
              </Flex>
            </>
          ) : (
            // Componente de visualización de situación actual
            <>
              <SituacionActualList
                usuario={usuario}
                setUsuario={setUsuario}
                setSitEdit={setSitEdit}
              />
            </>
          )}
        </div>
      </Grid>
      <Wrap justify="center"></Wrap>
      <Flex justify="flex-end" mr="20" mb="20" _hover={{ transform: "scale(1)" }}>
  <a href={usuario.pdfImagenUrl} download="nombre-del-archivo.pdf">
    <Button id="button-download" m="2"color="blue.500"bg="transparent"
      _hover={{
        backgroundColor: "blue.500",
        color:"white",
      }}
    >
      Descargar PDF
    </Button>
  </a>
  <Button onClick={eliminarPerfil} m="2" color="red.500" bg="transparent"
    _hover={{
      backgroundColor: "red.500",
      color:"white",
    }}
  >
    Eliminar Perfil
  </Button>
</Flex>
<Wrap justify="center"></Wrap>


    </>
  );
};

export default ComponentePerfilBdT;
