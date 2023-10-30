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
  ButtonGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function InicioEmpresa() {
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
        bg="#transparent"
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
              p="3"
              borderRadius={5}
              objectFit="cover"
              src="https://t3.ftcdn.net/jpg/04/36/28/06/240_F_436280648_fv3CYRiAYZSVsIBLXnFyXZOczqaLHJEn.jpg"
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
            <Text className="Text">¡Bienvenido(a) a nuestra plataforma!</Text>
            <Text className="Texto">
              Estás en el lugar correcto para encontrar el talento que tu
              empresa necesita
            </Text>
            <Text fontWeight="bold" fontSize="2xl">
              Crea tus vacantes
            </Text>
            <ButtonGroup gap="4">
              <Link to="/vacantes">
                <Button colorScheme="facebook">Vacantes</Button>
              </Link>
            </ButtonGroup>
          </Stack>
        </Box>
      </Flex>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Text as="i" textAlign="center" fontSize="xl">
          Generación de Vacantes en Diversas Áreas de su Empresa
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
              Ventas - Contabilidad - Finanzas
            </Heading>
          </CardHeader>
          <CardBody>
            <Image
              borderRadius={5}
              w="full"
              objectFit="cover"
              src="https://t4.ftcdn.net/jpg/01/95/52/11/240_F_195521191_TUqiw760KFDyVDQaHNzkV60iWtaFDiBW.jpg"
              alt="Dan Abramov"
            />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md" alignItems="center">
              Ingeniería
            </Heading>
          </CardHeader>
          <CardBody>
            <Image
              borderRadius={5}
              objectFit="cover"
              src="https://media.istockphoto.com/id/1431874851/es/foto/ingenier%C3%ADa-trabajando-con-inspecci%C3%B3n-de-dibujos-en-computadora-port%C3%A1til-en-la-oficina-y.jpg?s=612x612&w=0&k=20&c=8ZDh6FGavbdC6636d2v-m8nQdYxGGXAZYOSbtV3n6f8="
              alt="Dan Abramov"
            />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md" alignItems="center">
              Manufactura - Producción - Operación
            </Heading>
          </CardHeader>
          <CardBody>
            <Image
              borderRadius={5}
              objectFit="cover"
              h="full"
              src="https://media.istockphoto.com/id/1367303200/es/foto/car-factory-digitalization-industry-4-0-5g-iot-concept-automated-robot-arm-assembly-line.jpg?s=612x612&w=0&k=20&c=C9XeEzlXvmhvFNCg5p5kLN7_z_QAejyRlIDqtQWTvUk="
              alt="Dan Abramov"
            />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md" alignItems="center">
              Logística - Transporte
            </Heading>
          </CardHeader>
          <CardBody>
            <Image
              borderRadius={5}
              objectFit="cover"
              h="full"
              src="https://media.istockphoto.com/id/1442346522/es/foto/concepto-de-importaci%C3%B3n-log%C3%ADstica-exportaci%C3%B3n-y-transporte-gente-de-negocios-d%C3%A1ndose-la-mano.jpg?s=612x612&w=0&k=20&c=1tPGLhHsAIeXpTXSl5I-BUlyjlX5Pg6Jyf_oCXMNUC4="
              alt="Dan Abramov"
            />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md" alignItems="center">
              Recursos humanos - Administrativo
            </Heading>
          </CardHeader>
          <CardBody>
            <Image
              borderRadius={5}
              objectFit="cover"
              src="https://media.istockphoto.com/id/1434742171/es/foto/presentaci%C3%B3n-ppt-port%C3%A1til-reuni%C3%B3n-de-negocios-y-equipo-trabajando-en-la-revisi%C3%B3n-para-el.jpg?s=612x612&w=0&k=20&c=KY8R3iobVxja4nFC3oLD4HshoclijUNmxXilYNDpjbU="
              alt="Dan Abramov"
            />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md" alignItems="center">
              Distribución - Almacén
            </Heading>
          </CardHeader>
          <CardBody>
            <Image
              borderRadius={5}
              objectFit="cover"
              h="full"
              src="https://media.istockphoto.com/id/1435295895/es/foto/carretilla-elevadora-con-palets-dentro-de-un-almac%C3%A9n.jpg?s=612x612&w=0&k=20&c=_PqOk7HrHz0ZsRy7MFAgFYtD6E4u6c9ZMzBsLrrbtr4="
              alt="Dan Abramov"
            />
          </CardBody>
        </Card>
      </SimpleGrid>
    </>
  );
}
