import {
  Flex,
  Spacer,
  Box,
  Link,
  Image,
  Text,
  Heading,
  CardBody,
  Stack,
  Card,
  ButtonGroup,
} from "@chakra-ui/react";
import logo from "../img/logo.png";
import bdt from "../img/bdt.jpg";
import negocio from "../img/negocio.jpg";
import solucion from "../img/solucion.png";

export function Nav() {
  return (
    <Box>
      <Box bg="#181c24" p="1rem">
        <Flex>
          <Image src={logo} width={200} />
          <Spacer />
          <Flex gap={3}>
            <Link color="#fff">Inicio</Link>
            <ButtonGroup>
              <Link color="#fff" href="/login-bdt">
                Buscadores de Trabajo
              </Link>
              <Link color="#fff" href="/login-empresa">
                Empresas
              </Link>
            </ButtonGroup>
          </Flex>
        </Flex>
      </Box>
      {/**Empleados & Empresas */}
      <Box>
        <Box w="100%" pos="relative" mb="4rem">
          <Image src={solucion} w="100%" boxSize="full" />
          <Text
            pos="absolute"
            fontSize="4xl"
            color="gray.400"
            top="7rem"
            right="0"
            bottom="0"
            left="0"
            textAlign="center"
            fontStyle="italic"
            fontFamily="Avapore"
          >
            Estamos construyendo el futuro.
          </Text>

          <Text
            pos="absolute"
            fontSize="6xl"
            color="#cb43b3"
            top="16rem"
            right="0"
            bottom="0"
            left="0"
            textAlign="center"
            fontFamily="Avapore"
            bgColor="rgba(0,0,0,0.6)"
          >
            CREANDO NUEVAS SOLUCIONES A TUS NECESIDADES.
          </Text>
        </Box>

        <Card direction={{ base: "column", sm: "row" }} overflow="hidden">
          <Image
            objectFit="cover"
            maxW={{
              base: "100%",
              sm: "100px",
              lg: "900px",
              md: "600",
              xs: "1px",
            }}
            borderRadius={"2rem"}
            paddingBottom={"1rem"}
            src={bdt}
            alt="red laboral"
          />
          <Stack>
            <CardBody>
              <Heading size="md">Empleados</Heading>

              <Text py="4">
                Estamos encantados de que hayan elegido esta plataforma para
                encontrar nuevas oportunidades. ¡Tu próxima aventura laboral te
                espera!
              </Text>
            </CardBody>
          </Stack>
        </Card>
        <Card
          direction={{ base: "column", sm: "row" }}
          pb={"1rem"}
          overflow="hidden"
        >
          <Stack>
            <CardBody>
              <Heading size="md">Empresas</Heading>
              <Text py="4">
                Agradecemos la confianza depositada en nosotros para encontrar
                talento. Juntos, construiremos un futuro lleno de posibilidades.
              </Text>
            </CardBody>
          </Stack>
          <Image
            objectFit="cover"
            maxW={{
              base: "100%",
              sm: "100px",
              lg: "900px",
              md: "600",
              xs: "1px",
            }}
            borderRadius={"2rem"}
            src={negocio}
            alt="red laboral"
          />
        </Card>
      </Box>
    </Box>
  );
}
