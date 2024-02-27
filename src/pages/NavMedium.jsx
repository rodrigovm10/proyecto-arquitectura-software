import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  CardBody,
  Card,
  CardHeader,
  Image,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";

export function NavMedium() {
  const isSmallScreen = useMediaQuery("(max-width: 550px)");

  return (
    <Box>
      <SimpleGrid
        p={5}
        pt={10}
        gap={4}
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
      >
        <Card
          border="0"
          background={"transparent"}
          boxShadow="none"
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Heading fontSize={{ base: "2xl", md: "4xl", lg: "5rem" }} mb={4}>
            Únete a nuestra comunidad de red de trabajo.
          </Heading>
          <Text fontSize={{ base: "lg", lg: "lg" }} mb={4}>
            Enlazamos empresas y profesionales a través de una plataforma
            sencilla y amigable.
          </Text>
        </Card>

        <Stack
          direction="row"
          alignItems={"Center"}
          justifyContent={"Center"}
          gap={10}
        >
          <Image
            boxSize={{ base: "150px", md: "200px" }}
            mx={{ base: "auto", lg: "0" }}
            objectFit="cover"
            borderRadius="full"
            src="https://media.istockphoto.com/id/1144431688/es/foto/mujer-joven-sosteniendo-el-ordenador-port%C3%A1til-sentado-loto-pose-contento-con-el-trabajo-hecho.jpg?s=612x612&w=0&k=20&c=Jz-VC_w65m_QCjUH0DMJ8OY02m1-YIB4UoY7psK5ygI="
            alt="RedLaboral"
          />
          <Image
            boxSize={{ base: "150px", md: "200px", lg: "270px" }}
            mx={{ base: "auto", lg: "0" }}
            objectFit="cover"
            src="https://media.istockphoto.com/id/1436767563/es/foto/feliz-t%C3%A9cnico-de-ti-trabajando-en-la-oficina-usando-su-computadora-port%C3%A1til.jpg?s=612x612&w=0&k=20&c=J-06FgHtHiP_3lidUuDS1fM56c19p-Hnsw0e3GmlSJs="
            borderRadius="full"
            alt="RedLaboral"
          />
        </Stack>
      </SimpleGrid>
      {/**Misión, visión y valores */}
      <SimpleGrid
        p={5}
        gap={4}
        templateColumns={{
          base: "repeat(1, 1fr)", // col-xs-12
          sm: "repeat(1, 1fr)", // col-sm-6
          md: "repeat(1, 1fr)", // col-md-4
          lg: "repeat(3, 1fr)", // col-lg-3
        }}
        fontSize="lg"
      >
        <Card border="0" background={"transparent"} boxShadow="none">
          <CardHeader>
            <Heading size="md" textAlign="center">
              Misión
            </Heading>
          </CardHeader>
          <CardBody>
            <Text textAlign="justify">
              Crear una comunidad dinámica de trabajo que facilite la conexión
              entre empresas y profesionales de manera eficiente y amigable. Nos
              dedicamos a ofrecer una plataforma intuitiva y accesible que
              simplifique el proceso de reclutamiento y búsqueda de empleo,
              empoderando a individuos y organizaciones para alcanzar su máximo
              potencial.
            </Text>
          </CardBody>
        </Card>
        <Card border="0" background={"transparent"} boxShadow="none">
          <CardHeader>
            <Heading size="md" textAlign="center">
              Visión
            </Heading>
          </CardHeader>
          <CardBody>
            <Text textAlign="justify">
              Aspiramos a ser la red de trabajo más influyente y valorada a
              nivel estatal, reconocida por nuestra capacidad de unir talento y
              oportunidades. Nos comprometemos a innovar constantemente para
              anticipar y satisfacer las necesidades cambiantes de profesionales
              y empresas, fomentando un mercado laboral más inclusivo, flexible
              y conectado.
            </Text>
          </CardBody>
        </Card>
        <Card border="0" background={"transparent"} boxShadow="none">
          <CardHeader>
            <Heading textAlign="center" size="md">
              Valores
            </Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Simplicidad
              <br />
              Conexión
              <br /> Amigabilidad
              <br /> Innovación constante
              <br /> Inclusión y diversidad
            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>

      <SimpleGrid
        p={5}
        pt={10}
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
      ></SimpleGrid>
    </Box>
  );
}
