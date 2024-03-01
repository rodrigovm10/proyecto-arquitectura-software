import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  isSmallScreen,
  ButtonGroup,
  SimpleGrid,
} from "@chakra-ui/react";
import { Footer } from "../../landing/Footer";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";

export function PrincipalEmpresa() {
  const isSmallScreen = window.innerWidth <= 768;

  return (
    <Box>
      <style>
        {`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');
      .Text {
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
      }
      .Texto {
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
      }
    `}
      </style>
      <Header />
      {/** <Flex
        p={5}
        justify="flex-end"
        gap={4}
        direction={{ base: "column", md: "row" }}
      >
        <Link to="/login-bdt">
          <Button
            bg="#181c24"
            color="white"
            _hover={{ bg: "white", color: "#181c24" }}
            fontSize="20px"
          >
            Registrarse
          </Button>
        </Link>
      </Flex> */}
      <Flex flexDirection={{ base: "column", md: "row" }} flexWrap="wrap" p="5">
        <Box
          flex={{ base: "1", md: "1/2" }}
          bg="transparent"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Stack direction="row">
            <Image
              p="5"
              borderRadius="5rem"
              objectFit="cover"
              src="https://media.istockphoto.com/id/1428698219/es/foto/feliz-joven-empresaria-hablando-por-tel%C3%A9fono-en-un-almac%C3%A9n.jpg?s=612x612&w=0&k=20&c=jbrDrttkbVtpE1NrPirmqDv10tCv0AkolMs4HrYN0Zs="
              alt="Dan Abramov"
            />
          </Stack>
        </Box>
        <Box
          flex={{ base: "1", md: "1/2" }}
          display="flex"
          flexDirection="column"
          alignItems="left"
          justifyContent="center"
          bg="transparent"
        >
          <Stack direction="column" pb="9" pt="5">
            <Text className="Texto">
              ¡Bienvenido(a) a nuestra plataforma de empleo!
            </Text>
            <Text className="Texto">
              Aquí, te conectamos con las empresas más prestigiosas en busca de
              talento como el tuyo.
            </Text>
            <Text fontWeight="bold" fontSize="2xl">
              Regsitrate y explora las vacantes.
            </Text>
            <ButtonGroup gap="4">
              <Link to="/login-bdt">
                <Button
                  bg="#181c24"
                  color="white"
                  _hover={{ bg: "white", color: "#181c24" }}
                  fontSize="20px"
                >
                  Registrarse
                </Button>
              </Link>
            </ButtonGroup>
          </Stack>
        </Box>
      </Flex>
      <Box display="flex" alignItems="center" justifyContent="center" pb="1rem">
        <Text as="i" textAlign="center" fontSize="2xl">
          EMPRESAS ASOCIADAS
        </Text>
      </Box>
      <SimpleGrid
        direction="row"
        spacing={4}
        gap={"3rem"}
        p="4"
        pt="2rem"
        pb="4rem"
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
          xl: "repeat(6, 1fr)",
        }}
      >
        <Image
          boxSize="200px"
          objectFit="cover"
          borderRadius="full"
          src="data:image/png;base64,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"
          alt="Dan Abramov"
        />
        <Image
          boxSize="200px"
          objectFit="cover"
          borderRadius="full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RoNr6yXy483EQFZkT0UkXO1BC2h8eP6K0g&usqp=CAU"
          alt="pepsi"
        />
        <Image
          boxSize="200px"
          objectFit="cover"
          borderRadius="full"
          src="data:image/png;base64,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"
          alt="Soriana"
        />

        <Image
          boxSize="200px"
          objectFit="cover"
          borderRadius="full"
          src="data:image/png;base64,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"
          alt="Dan Abramov"
        />
        <Image
          boxSize="200px"
          objectFit="cover"
          borderRadius="full"
          src="data:image/png;base64,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"
          alt="Dan Abramov"
        />
        <Image
          boxSize="200px"
          objectFit="cover"
          borderRadius="full"
          src="data:image/png;base64,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"
          alt="Soriana"
        />
      </SimpleGrid>
      <Footer />
    </Box>
  );
}
