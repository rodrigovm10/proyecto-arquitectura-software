import { Center, Box, Stack, Heading, Text, Grid, GridItem, Button, Avatar, Divider } from '@chakra-ui/react';

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
      (fechaActual.getMonth() === fechaNac.getMonth() && fechaActual.getDate() < fechaNac.getDate())
    ) {
      edad--;
    }
    return edad;
  }

  const edad = calcularEdad(usuario.fechaNacimiento);

  return (
    <Center py={6}>
      <Box
        borderWidth="2px"
        borderColor="gray.200"
        borderRadius="lg"
        p="4"
        maxW="md"
        w="auto"
        boxShadow="lg"
        _hover={{ transform: 'scale(1.02)' }}
      >
        <Heading fontSize="xl" mb="4" textAlign="center">Información personal</Heading>
        <Center>
        <Avatar
        bg="gray.400"
        color="white"
        alt={usuario.nombre}
        src="#"
        sx={{ width: '12rem', height: '12rem', fontSize: '12rem' }} // Aumenta el valor de 'fontSize' aquí
      />

        </Center>
        <Text fontSize="2xl" mt="4" mb="1" textAlign="center">
          {nombreCompleto}
        </Text>
        <Text fontSize="lg" color="gray.600" textAlign="center" mb="4">
          {usuario.genero} - {edad} años
        </Text>
        <Divider borderColor="gray.200" my="1rem" />
        <Text fontSize="lg" color="gray.600" textAlign="center" mb="2">
          {usuario.telefono}
        </Text>
        <Text fontSize="lg" color="gray.600" textAlign="center" mb="4">
          {usuario.correo}
        </Text>
        <Divider borderColor="gray.200" my="1rem" />
        <Text fontSize="lg" color="gray.600" textAlign="center" mb="4">
          {usuario.curp}
        </Text>
        <Center mb="4" justifyContent={'end'}>
          <Button colorScheme="blue" onClick={() => setInfoEdit(true)}>
            Editar
          </Button>
        </Center>
      </Box>
    </Center>
  );
}

export default BuscadorDeTrabajo;
