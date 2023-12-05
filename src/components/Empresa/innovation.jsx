import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Image,
  Flex,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Nav } from "../../components/Nav";
import introduccion from "../../img/introduccion.png";
import vacantes from "../../img/vacantes.png";
import vacanteseditar from "../../img/vacanteeditar.png";
import vacantes2 from "../../img/vacantes2.png";
import vacanteseditada from "../../img/vacanteeditada.png";
import vacantesguardada from "../../img/vacanteguardada.png";
import vacantesactualizada from "../../img/vacanteactualizada.png";
import vacantevolver from "../../img/vacantevolver.png";
import vacantelista from "../../img/vacantelista.png";
import vacantes3 from "../../img/vacantes3.png";
import vacantes4 from "../../img/vacantes4.png";
import vacantes5 from "../../img/vacante5.png";
import vacantes6 from "../../img/vacantes6.png";
import { Footer } from "../../landing/Footer";

export function Innovation() {
  const { colorMode, toggleColorMode } = useColorMode();
  // Arreglo de URLs de tus imágenes
  const images = [
    introduccion,
    vacantes,
    vacanteseditar,
    vacanteseditada,
    vacantesguardada,
    vacantesactualizada,
    vacantevolver,
    vacantelista,
    vacantes2,
    vacantes3,
    vacantes4,
    vacantes5,
    vacantes6,
  ];
  const imageDescriptions = [
    "Sigue nuestra guía paso a paso para gestionar las versiones de tus vacantes de manera más efectiva.",
    "Dirígete a la sección 'Vacantes', identifica la vacante  que se desea editar y haz clic en ella para acceder a las opciones de edición disponibles.",
    "Selecciona la opción 'Editar' del menú de los tres puntos verticales al lado de la vacante para comenzar a editarla.",
    "Para actualizar la vacante, edita los campos necesarios. En este ejemplo, hemos modificado el 'Nombre Vacante'.",
    "Para finalizar la edición de la vacante, desplázate hacia abajo y haz clic en el botón 'Guardar'.",
    "Una vez que la vacante ha sido actualizada, confirma el cambio haciendo clic en 'OK' en el cuadro de diálogo de confirmación.",
    "Para regresar al listado general de vacantes, haz clic en el botón 'Volver a las vacantes'.",
    "En el listado general de vacantes, identifica la vacante editada y haz clic en ella para acceder a las versiones.",
    "Haz clic en el ícono de los tres puntos. Selecciona 'Versiones' para revisar y administrar las versiones anteriores de la vacante.",
    "Haz clic en el menú desplegable situado en la parte superior izquierda para expandir la lista de todas las versiones disponibles. Luego, seleccione la versión que desea revisar.",
    "Aquí se muestra la 'Versión' de la vacante y su fecha de creación. En el panel izquierdo, verás los cambios. Para restaurarla, haz clic en 'Recuperar versión anterior'.",
    "Se le presenta un cuadro de diálogo de confirmación solicitando su aprobación para proceder con la restauración de una versión anterior de su vacante.",
    "La versión se ha restaurado con éxito. Ahora puedes ver y gestionar los detalles de esta versión, que se ha establecido como la versión actual de la publicación.",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    setShowAlert(true);
  }, []);

  return (
    <>
      <Nav />
      <Box
        w="full"
        h="auto"
        p={4}
        borderRadius="lg"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {showAlert && (
          <Alert status="info" variant="solid" color="black" borderRadius="md">
            <AlertIcon />
            <AlertTitle>¡Nueva funcionalidad disponible!</AlertTitle>
            <AlertDescription>
              Ahora puedes crear y administrar diversas versiones de tus
              vacantes. ¡Prueba esta nueva herramienta para mejorar tu proceso
              de selección!
            </AlertDescription>
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={() => setShowAlert(false)}
            />
          </Alert>
        )}
        <Text fontSize="3xl" w="90%">
          {imageDescriptions[currentImageIndex]}
        </Text>
        <Flex direction="row" alignItems="center" mt={5} mb={5}>
          <Button
            onClick={previousImage}
            size="lg"
            color={colorMode === "light" ? "black" : "white"}
            mr={4}
          >
            &lt;
          </Button>
          <Image
            src={images[currentImageIndex]}
            alt={`Imagen ${currentImageIndex + 1}`}
            w="88%"
            objectFit="cover"
          />
          <Button
            onClick={nextImage}
            size="lg"
            color={colorMode === "light" ? "black" : "white"}
            ml={4}
          >
            &gt;
          </Button>
        </Flex>
      </Box>
      <Footer />
    </>
  );
}

export default Innovation;
