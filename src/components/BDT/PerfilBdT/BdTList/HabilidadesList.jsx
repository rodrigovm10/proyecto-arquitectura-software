import {
  Center,
  Box,
  Stack,
  Heading,
  Grid,
  GridItem,
  Tag,
  TagLabel,
  Tooltip,
  Button,
  Divider,
  Flex,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";

function Habilidades({ usuario, setUsuario, setHabEdit }) {
  const etiquetas = ["Idiomas", "Habilidades blandas", "Habilidades técnicas"];

  const campos = [
    usuario.idioma,
    usuario.habilidadesBlandas,
    usuario.habilidadesTecnicas,
  ];

  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Flex
      boxShadow="xl"
      borderWidth="2px"
      borderColor="gray.200"
      borderRadius="lg"
      flexDirection="column"
      p="4"
      mb="4"
      _hover={{ transform: "scale(1.02)" }}
    >
      <Stack mt="3" spacing="3">
        {etiquetas.map((etiqueta, index) => (
          <div key={etiqueta}>
            <Heading size="md" mb={2}>
              {etiqueta}
            </Heading>
            <Box maxW="max">
              <SimpleGrid
                templateColumns={{
                  base: "repeat(1, 1fr)", // col-xs-12
                  sm: "repeat(2, 1fr)", // col-sm-6
                  md: "repeat(3, 1fr)", // col-md-4
                  lg: "repeat(3, 1fr)", // col-lg-3
                }}
                gap={4}
              >
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
              </SimpleGrid>
            </Box>
            {index < etiquetas.length - 1 && <Divider my={4} />}
          </div>
        ))}
      </Stack>
      <Flex justifyContent={"end"}>
        <Button colorScheme="blue" onClick={() => setHabEdit(true)} mt={4}>
          Editar
        </Button>
      </Flex>
    </Flex>
  );
}

export default Habilidades;
