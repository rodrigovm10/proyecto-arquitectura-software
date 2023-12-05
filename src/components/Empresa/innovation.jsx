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
import vacantes from "../../img/vacantes.png";
import vacantes2 from "../../img/vacantes2.png";
import vacantes3 from "../../img/vacantes3.png";
import vacantes4 from "../../img/vacantes4.png";
import vacantes5 from "../../img/vacante5.png";
import { Footer } from "../../landing/Footer";

export function Innovation() {
  const { colorMode, toggleColorMode } = useColorMode();
  // Arreglo de URLs de tus imágenes
  const images = [vacantes, vacantes2, vacantes3, vacantes4, vacantes5];
  const imageDescriptions = [
    "En el apartado de vacantes seleccione una vacante",
    "Haz clic en el ícono de los tres puntos. Selecciona 'Versiones' para revisar y administrar las versiones anteriores de la publicación de la vacante.",
    "Haga clic en el menú desplegable situado en la parte superior izquierda para expandir la lista de todas las versiones disponibles. Luego, seleccione la versión que desea revisar.",
    " Aquí se muestra la 'versión' con su fecha de creación. En el panel izquierdo, se detalla la información de la versión. Si desea resturarla haga clic en el botón 'Recuperar versión'",
    "Se le presenta un cuadro de diálogo de confirmación solicitando su aprobación para proceder con la restauración de una versión anterior de su vacante.",
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
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 2000);

    return () => clearTimeout(timer);
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
            <AlertTitle mr={2}>¡Nueva funcionalidad disponible!</AlertTitle>
            <AlertDescription>
              Ahora puedes crear y administrar diferentes versiones de tus
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
