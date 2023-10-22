import { Center, Box, Stack, Heading, FormControl, FormLabel, Switch, Button,Flex } from "@chakra-ui/react";

export default function SituacionActualList({ usuario, setUsuario, setSitEdit }) {
  const etiquetas = [
    '¿Buscas empleo?',
    '¿Actualmente estás trabajando?',
    '¿Disponibilidad de viajar?',
    '¿Disponibilidad de cambio de residencia?'
  ];

  const camposKeys = [
    'buscaEmpleo',
    'trabajando',
    'dispViajar',
    'dispRadicar',
  ];

  return (
    <Center py={6}>
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
          <Heading size="md">Situación actual</Heading>
          {etiquetas.map((etiqueta, index) => (
            <FormControl key={etiqueta}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={6}
            >
              <FormLabel htmlFor={etiqueta} mb="0">
                {etiqueta}
              </FormLabel>
              <Switch
                id={etiqueta}
                isChecked={usuario[camposKeys[index]]}
                onChange={() =>
                  setUsuario((prevUsuario) => ({
                    ...prevUsuario,
                    [camposKeys[index]]: !usuario[camposKeys[index]],
                  }))
                }
              />
            </FormControl>
          ))}
        </Stack>
        <Flex justifyContent={'end'}>
        <Button colorScheme="blue" onClick={() => setSitEdit(true)}>Editar</Button>
        </Flex>
      </Box>
    </Center>
  );
}
