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
  Center,
  Divider,
} from "@chakra-ui/react";

export function NavMedium() {
  const [isSmallScreen, isMediumScreen] = useMediaQuery(
    "(max-width: 600px)",
    "(max-width: 1024px)"
  );

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
        <Card border="0" background={"transparent"} boxShadow="none">
          <Heading fontSize={{ base: "2xl", md: "4xl", lg: "56px" }} mb={4}>
            Únete a nuestra comunidad de red de trabajo.
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} mb={4}>
            Enlazamos empresas y profesionales a través de una plataforma
            sencilla y amigable.
          </Text>
        </Card>

        <Stack direction="row" gap={5}>
          <Image
            boxSize={{ base: "150px", md: "200px" }}
            mx={{ base: "auto", lg: "0" }}
            objectFit="cover"
            borderRadius="full"
            src="https://media.istockphoto.com/id/1144431688/es/foto/mujer-joven-sosteniendo-el-ordenador-port%C3%A1til-sentado-loto-pose-contento-con-el-trabajo-hecho.jpg?s=612x612&w=0&k=20&c=Jz-VC_w65m_QCjUH0DMJ8OY02m1-YIB4UoY7psK5ygI="
            alt="Dan Abramov"
          />
          <Image
            boxSize={{ base: "150px", md: "200px" }}
            mx={{ base: "auto", lg: "0" }}
            objectFit="cover"
            borderRadius="full"
            src="https://media.istockphoto.com/id/1144431688/es/foto/mujer-joven-sosteniendo-el-ordenador-port%C3%A1til-sentado-loto-pose-contento-con-el-trabajo-hecho.jpg?s=612x612&w=0&k=20&c=Jz-VC_w65m_QCjUH0DMJ8OY02m1-YIB4UoY7psK5ygI="
            alt="Dan Abramov"
          />
          {isSmallScreen ? null : (
            <Image
              boxSize={{ base: "150px", md: "200px" }}
              mx={{ base: "auto", lg: "0" }}
              objectFit="cover"
              borderRadius="full"
              src="https://media.istockphoto.com/id/1144431688/es/foto/mujer-joven-sosteniendo-el-ordenador-port%C3%A1til-sentado-loto-pose-contento-con-el-trabajo-hecho.jpg?s=612x612&w=0&k=20&c=Jz-VC_w65m_QCjUH0DMJ8OY02m1-YIB4UoY7psK5ygI="
              alt="Dan Abramov"
            />
          )}
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
      >
        <Card>
          <CardHeader>
            <Heading size="md"> Misión</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Crear una comunidad dinámica de trabajo que facilite la conexión
              entre empresas y profesionales de manera eficiente y amigable. Nos
              dedicamos a ofrecer una plataforma intuitiva y accesible que
              simplifique el proceso de reclutamiento y búsqueda de empleo,
              empoderando a individuos y organizaciones para alcanzar su máximo
              potencial.
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Visión</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Aspiramos a ser la red de trabajo más influyente y valorada a
              nivel estatal, reconocida por nuestra capacidad de unir talento y
              oportunidades. Nos comprometemos a innovar constantemente para
              anticipar y satisfacer las necesidades cambiantes de profesionales
              y empresas, fomentando un mercado laboral más inclusivo, flexible
              y conectado.
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Valores</Heading>
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
      >
        <Card border="0" background={"transparent"} boxShadow="none">
          <Heading fontSize={{ base: "2xl", md: "4xl", lg: "56px" }} mb={4}>
            Se parte de RedLaboral
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} mb={4}>
            Enlazamos empresas y profesionales a través de una plataforma
            sencilla y amigable.
          </Text>
        </Card>

        <Card border="0" background={"transparent"} boxShadow="none">
          <Heading fontSize={{ base: "2xl", md: "4xl", lg: "56px" }} mb={4}>
            Se parte de RedLaboral
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} mb={4}>
            Enlazamos empresas y profesionales a través de una plataforma
            sencilla y amigable.
          </Text>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
