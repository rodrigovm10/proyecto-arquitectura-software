import { Center, Box, Stack, Heading, Text, Grid, GridItem, Tag, TagLabel, Tooltip, Button } from '@chakra-ui/react';

function Habilidades({ usuario, setUsuario,setHabEdit }) {
  const etiquetas = ['Idiomas', 'Habilidades Tecnicas', 'Habilidadades Blandas'];

  const campos = [usuario.idioma, usuario.habilidadesTecnicas, usuario.habilidadesBlandas];

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
        <Stack mt="6" spacing="3">
          <Heading size="md">Información Personal</Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {etiquetas.map((etiqueta, index) => (
              <GridItem key={etiqueta}>
                <strong>{etiqueta}:</strong>
                <div>
                  {campos[index].map((item, i) => (
                    <Tooltip key={i} label={item} fontSize="md" hasArrow>
                      <Tag size="lg" colorScheme="red" borderRadius="full" mr={2} mb={2}>
                        <TagLabel>
                          {item.length > 10 ? `${item.slice(0, 10)}...` : item}
                        </TagLabel>
                      </Tag>
                    </Tooltip>
                  ))}
                </div>
              </GridItem>
            ))}
          </Grid>
        </Stack>
        <Button colorScheme="blue" onClick={() => setHabEdit(true)}>Editar</Button>
      </Box>
    </Center>
  );
}

export default Habilidades;
