import {
  Center,
  Box,
  Stack,
  Heading,
  Text,
  Grid,
  GridItem,
  Button,
  Avatar,
  Divider,
  Flex,
} from "@chakra-ui/react";

function BuscadorDeTrabajo({ usuario, setInfoEdit }) {
  const nombreCompleto = `${usuario.nombre} ${usuario.apellidos}`;
  const direccionCompleta = `${usuario.municipio}, ${usuario.colonia}, ${usuario.calle}, ${usuario.codigoPostal}`;

  function calcularEdad(fechaNacimiento) {
    const partes = fechaNacimiento.split("-");
    const fechaNac = new Date(partes[0], partes[1] - 1, partes[2]);
    const fechaActual = new Date();
    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    if (
      fechaActual.getMonth() < fechaNac.getMonth() ||
      (fechaActual.getMonth() === fechaNac.getMonth() &&
        fechaActual.getDate() < fechaNac.getDate())
    ) {
      edad--;
    }
    return edad;
  }

  const edad = calcularEdad(usuario.fechaNacimiento);

  return (
    <Flex
      boxShadow="xl"
      borderWidth="2px"
      borderColor="gray.200"
      borderRadius="lg"
      flexDirection="column"
      p="4"
      mb="5"
      _hover={{ transform: "scale(1.02)" }}
    >
      <>
        <Heading fontSize="xl" mb="4" textAlign="center" p="4">
          Información personal
        </Heading>
        <Center>
          <Avatar
            bg="gray.400"
            color="white"
            alt={usuario.nombre}
            src={usuario.imagenBDTUrl}
            sx={{ width: "8rem", height: "8rem", fontSize: "8rem" }}
          />
        </Center>
        <Text fontSize="2xl" mt="4" mb="2" textAlign="center">
          {nombreCompleto}
        </Text>
        <Text fontSize="lg" mt="4" mb="2" textAlign="center">
          {usuario.escolaridad}
        </Text>
        <Text fontSize="lg"  textAlign="center" mb="4">
          {usuario.genero} - {edad} años
        </Text>
        <Divider borderColor="gray.200" my="1rem" />
        <Text fontSize="lg"  textAlign="center" mb="2">
          {usuario.telefono}
        </Text>
        <Text fontSize="lg"  textAlign="center" mb="4">
          {usuario.correo}
        </Text>
        <Text fontSize="lg"  textAlign="center" mb="4">
          {direccionCompleta}
        </Text>
        <Divider borderColor="gray.200" my="1rem" />
        <Text fontSize="lg" textAlign="center" mb="4">
          {usuario.curp}
        </Text>
        <Center mb="4" justifyContent={"end"} p="4">
          <Button colorScheme="blue" onClick={() => setInfoEdit(true)}>
            Editar
          </Button>
        </Center>
      </>
    </Flex>
  );
}

export default BuscadorDeTrabajo;
