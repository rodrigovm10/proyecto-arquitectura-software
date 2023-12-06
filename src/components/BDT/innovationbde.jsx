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
import Nav from "../BDT/inicioBdT/NavegadorBDT";
import perfilbde from "../../img/perfilbde.png";
import personalizar from "../../img/personalizar.png";
import personalizar2 from "../../img/personalizar2.png";
import seleccion1 from "../../img/seleccion1.png";
import estiloaplicado from "../../img/estiloaplicado.png";
import estiloaplicado2 from "../../img/estiloaplicado2.png";
import estiloaplicado3 from "../../img/estiloaplicado3.png";
import editar from "../../img/Editar.png";
import sec2Guardar from "../../img/sec2Guardar.png";
import sec3Guardar from "../../img/sec3Guardar.png";
import editar3 from "../../img/editar3.png";
import seleccion3 from "../../img/seleccion3.png";
import introduccionbde from "../../img/introduccionbde.png";
import { Footer } from "../../landing/Footer";

export function Innovationbde() {
  const { colorMode, toggleColorMode } = useColorMode();
  // Arreglo de URLs de tus imágenes
  const images = [
    introduccionbde,
    perfilbde,
    personalizar,
    personalizar2,
    seleccion1,
    estiloaplicado,
    editar,
    sec2Guardar,
  ];
  const imageDescriptions = [
    "Sigue los sencillos pasos que te proporcionamos para que tu perfil refleje con precisión y atractivo tus habilidades y preferencias.",
    "Primero, selecciona tu avatar de usuario en la esquina superior derecha, luego elige la opción 'Perfil' para acceder a la personalización de tu cuenta.",
    "Haz clic en el botón 'Personalizar' para comenzar a configurar las opciones de diseño de card.",
    "Tras hacer clic en 'Personalizar', te aparecerá un menú con varias opciones para que ajustes la apariencia de tu perfil. ",
    "Una vez que selecciones el estilo que más te guste, asegúrate de hacer clic en 'Guardar' para aplicar los cambios a tu perfil.",
    "Aqui se muestra el estilo seleccionado que ya se ha aplicado a la sección 'Situación Actual' de tu perfil, como se puede ver en la imagen.",
    "Para continuar con la personalización de tu perfil, debes hacer clic en este botón 'Editar' nuevamente.",
    "Continuando con la personalización de tu perfil, ahora es momento de seleccionar un estilo para 'Información personal' y las 'Habilidades blandas'",
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
              Ahora tienes la libertad de personalizar tu perfil con un toque
              único y personal. ¡Empieza a experimentar con estas nuevas
              funciones!
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

export default Innovationbde;
