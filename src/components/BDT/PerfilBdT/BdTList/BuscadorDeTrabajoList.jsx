import { Center, Box, Stack, Heading, Text, Grid, GridItem,Button } from '@chakra-ui/react';

function BuscadorDeTrabajo({ usuario,setInfoEdit }) {
  const etiquetas = [
    'Nombre Completo',
    'CURP',
    'Fecha de Nacimiento',
    'Teléfono',
    'Escolaridad',
    'Género',
    'Correo Electrónico',
    'Dirección'
  ];

  // Concatenar nombre y apellidos
  const nombreCompleto = `${usuario.nombre} ${usuario.apellidos}`;

  // Concatenar colonia, calle y código postal
  const direccionCompleta = `${usuario.municipio},${usuario.colonia}, ${usuario.calle}, ${usuario.codigoPostal}`;

  const campos = [
    nombreCompleto,
    usuario.curp,
    usuario.fechaNacimiento,
    usuario.telefono,
    usuario.escolaridad,
    usuario.genero,
    usuario.correo,
    direccionCompleta,
  ];

  return (
    <Center py={6}>
      <Box
        boxShadow="xl"
        borderWidth="2px"
        borderColor="gray.200"
        borderRadius="lg"
        p="4"
        maxW="md"
        w="auto"
      >
        <Stack mt='6' spacing='3'>
          <Heading size='md'>Información Personal</Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {etiquetas.map((etiqueta, index) => (
              <GridItem key={etiqueta}>
                <strong>{etiqueta}:</strong>
                <Text>{campos[index]}</Text>
              </GridItem>
            ))}
          </Grid>
        </Stack>
        <Button colorScheme="blue" onClick={() => setInfoEdit(true)}>Editar</Button>
      </Box>
    </Center>
  );
}

export default BuscadorDeTrabajo;
