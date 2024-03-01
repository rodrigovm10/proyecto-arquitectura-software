import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Center,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

import logo from "../img/logo-sinfondo.png";

function Error() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh">
      <Center>
        <Container>
          <Image src={logo} alt="RedLaboral" />
        </Container>
      </Center>
      <Heading as="h1" size="2xl" color="gray.500" textAlign="center" mt={8}>
        Error 404
      </Heading>

      <Heading as="h2" size="xl" color="gray.500" textAlign="center" mt={4}>
        Página no encontrada
      </Heading>

      <Heading as="h3" size="md" color="gray.500" textAlign="center" mt={4}>
        La página que está buscando no existe o se ha movido. Vuelve a la página
        de inicio.
      </Heading>

      <Button
        onClick={goBack}
        colorScheme="blue"
        leftIcon={<ArrowBackIcon />}
        mt={8}
      >
        Volver a la página anterior
      </Button>
    </Flex>
  );
}

export default Error;
