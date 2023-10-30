import { Button, Container, Flex, Heading, Image, Center } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons'; // Importa el ícono de flecha hacia atrás

import logo from '../img/logo.png';

function Error() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh">
        <Center>
      <Container>
        <Image src={logo} alt="Coneecta GTO" />
      </Container>
      </Center>
      <Heading as="h1" size="2xl" color="gray.500" textAlign="center" mt={8}>
        Error 404
      </Heading>

      <Heading as="h2" size="xl" color="gray.500" textAlign="center" mt={4}>
        Página no encontrada
      </Heading>

      <Heading as="h3" size="md" color="gray.500" textAlign="center" mt={4}>
        Lo sentimos, no se ha encontrado la página solicitada
      </Heading>

      <Button
        onClick={goBack}
        colorScheme="blue"
        leftIcon={<ArrowBackIcon />} // Agrega el ícono de flecha hacia atrás al botón
        mt={8}
      >
        Volver a la página anterior
      </Button>
    </Flex>
  );
}

export default Error;
