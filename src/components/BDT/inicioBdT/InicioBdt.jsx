import {
  Box,
  Image,
  Text,
  Stack,
  Flex,
  Button,
  WrapItem,
  Wrap,
  CardBody,
  CardHeader,
  Card,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";

export function InicioBdt() {
  const isSmallScreen = window.innerWidth <= 768;
  return (
    <>
      <Box
        flex={{ base: "1", md: "1/2" }}
        bg="transparent"
        p="4"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <style>
          {`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');
      .Text {
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
      }
    `}
        </style>
      </Box>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        flexWrap="wrap"
        bg="#F9F5F6"
        p="5"
      >
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
              p="10"
              borderRadius={5}
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
            <Text className="Text">Trabajador</Text>
            <Text className="Text">Únete a la plataforma Red Laboral.</Text>
            <Text fontWeight="bold">
              INICIA LA BÚSQUEDA DE TU TRABAJO IDEAL
            </Text>
            <Wrap spacing={4}>
              <WrapItem>
                <Button colorScheme="facebook">Iniciar sesión</Button>
              </WrapItem>
            </Wrap>
          </Stack>
        </Box>
      </Flex>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        pt="3rem"
        pb="1rem"
      ></Box>

      <Box display="flex" alignItems="center" justifyContent="center">
        <Text as="i" textAlign="center" fontSize="xl">
          Comienza tu historia de éxito
        </Text>
      </Box>
      <SimpleGrid
        spacing={4}
        gap={"3rem"}
        p="4"
        pt="2rem"
        pb="4rem"
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
      >
        <Card>
          <CardHeader>
            <Heading size="md" alignItems="center">
              Crea tu cuenta y CV gratis
            </Heading>
          </CardHeader>
          <CardBody>
            <Image
              borderRadius={5}
              w="full"
              objectFit="cover"
              src="https://media.istockphoto.com/id/1463013729/es/foto/formulario-de-registro-en-l%C3%ADnea-para-rellenar-el-formulario-modish.jpg?s=612x612&w=0&k=20&c=pf7VbyLgV1ety8xij8Oj_urbWjkm7rMyLFv9Sg-oPuU="
              alt="Dan Abramov"
            />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md" alignItems="center">
              Descubre vacantes de tu intereses
            </Heading>
          </CardHeader>
          <CardBody>
            <Image
              borderRadius={5}
              objectFit="cover"
              src="https://media.istockphoto.com/id/1412921381/es/foto/buscar-buscar-web-online-tecnolog%C3%ADa-internet-concepto-de-sitio-web.jpg?s=612x612&w=0&k=20&c=kra67NWtYi_EKphM9taHg9O7PEEnE_iL4QtBTQ83CUw="
              alt="Dan Abramov"
            />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md" alignItems="center">
              Postúlate y conecta con reclutadores
            </Heading>
          </CardHeader>
          <CardBody>
            <Image
              borderRadius={5}
              objectFit="cover"
              h="full"
              src="https://media.istockphoto.com/id/1355302972/es/foto/mujer-cliente-afroamericana-hablando-con-empleado-de-servicio-de-soporte.jpg?s=612x612&w=0&k=20&c=ZP46V6LUGYWH947snJps9WjsW-Klj5shMc4nTY2j2gY="
              alt="Dan Abramov"
            />
          </CardBody>
        </Card>
      </SimpleGrid>
    </>
  );
}