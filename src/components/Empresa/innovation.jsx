import React, { useState, useEffect } from "react";
import { Box, Button, Image, Flex, useToast } from "@chakra-ui/react";
import { MdNotificationsActive } from "react-icons/md";
import { Nav } from "../../components/Nav";

export function Innovation() {
  const toast = useToast();

  useEffect(() => {
    toast({
      status: "info",
      duration: 9000,
      isClosable: true,
      position: "top",
      icon: <MdNotificationsActive />, // Icono de notificación
    });
  }, [toast]);

  // Arreglo de URLs de tus imágenes
  const images = [
    "https://media.istockphoto.com/id/879813798/es/foto/manos-de-hombre-de-negocios-trabajando-en-ordenador.jpg?s=612x612&w=0&k=20&c=kT-IVSqKc-MMPCJLXfeXFsafArq3Tbn4FbKd0s_nG38=",
    "https://media.istockphoto.com/id/1165260383/es/foto/manos-masculinas-escribiendo-texto-o-c%C3%B3digo-de-programaci%C3%B3n-en-el-ordenador-port%C3%A1til.jpg?s=612x612&w=0&k=20&c=t0AL7bS2FYrC5lYn72gd_kxKLqjXKSpSIg8NxhKxezA=",
    "https://media.istockphoto.com/id/1165260383/es/foto/manos-masculinas-escribiendo-texto-o-c%C3%B3digo-de-programaci%C3%B3n-en-el-ordenador-port%C3%A1til.jpg?s=612x612&w=0&k=20&c=t0AL7bS2FYrC5lYn72gd_kxKLqjXKSpSIg8NxhKxezA=",
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
        <Flex direction="row" alignItems="center" mb={4}>
          <Button onClick={previousImage} size="lg" color="black" mr={4}>
            &lt;
          </Button>
          <Image
            src={images[currentImageIndex]}
            alt={`Imagen ${currentImageIndex + 1}`}
            w="full"
            objectFit="cover"
          />
          <Button onClick={nextImage} size="lg" color="black" ml={4}>
            &gt;
          </Button>
        </Flex>
      </Box>
    </>
  );
}

export default Innovation;
