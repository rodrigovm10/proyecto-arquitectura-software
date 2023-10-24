import { Center, Box, Stack, Heading, Grid, GridItem, Tag, TagLabel, Tooltip, Button, Divider,Flex } from '@chakra-ui/react';

function Habilidades({ usuario, setUsuario, setHabEdit }) {
  const etiquetas = ['Idiomas', 'Habilidades blandas', 'Habilidades técnicas'];

  const campos = [usuario.idioma, usuario.habilidadesBlandas, usuario.habilidadesTecnicas];

  return (
    <Flex py={6} whileHover={{ scale: 1.02 }} ml={'20px'}>
      <Box
        boxShadow="xl"
        borderWidth="2px"
        borderColor="gray.200"
        borderRadius="lg"
        p="4"
        w="800px"
        _hover={{ transform: 'scale(1.02)' }}
      >
        <Stack mt="6" spacing="3">
          {etiquetas.map((etiqueta, index) => (
            <div key={etiqueta}>
              <Heading size="md" mb={2}>{etiqueta}</Heading>
              <Box maxW="max">
                <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                  {campos[index].map((item, i) => (
                    <GridItem key={i}>
                      <Tooltip label={item} fontSize="md" hasArrow>
                        <Tag size="md" borderRadius="full" mr={2} mb={2}>
                          <TagLabel>
                            {item.length > 25 ? `${item.slice(0, 25)}...` : item}
                          </TagLabel>
                        </Tag>
                      </Tooltip>
                    </GridItem>
                  ))}
                </Grid>
              </Box>
              {index < etiquetas.length - 1 && <Divider my={4} />}
            </div>
          ))}
        </Stack>
        <Flex justifyContent={'end'}>
        <Button colorScheme="blue" onClick={() => setHabEdit(true)} mt={4}>Editar</Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Habilidades;
