import {Center,Box,Stack,Heading,Text,FormControl,FormLabel,Switch,Button} from "@chakra-ui/react";
  
  export default function SituacionActualList({ usuario, setUsuario,setSitEdit }) {
    const etiquetas = [
      '¿Buscas empleo?',
      '¿Actualmente estás trabajando?',
      '¿Disponibilidad de viajar?',
      '¿Disponibilidad para radicar',
    ];
  
    const campos = [
      usuario.buscaEmpleo,
      usuario.trabajando,
      usuario.dispViajar,
      usuario.dispRadicar,
    ];
  
    return (
      <Center py={6}>
        <Box
        boxShadow="xl"
        borderWidth="2px"
        borderColor="gray.200"
        borderRadius="lg"
        p="4"
        maxW="md" // Alinea el ancho máximo con el otro Box
        w="auto"   // Alinea el ancho con el otro Box
        >
          <Stack mt="6" spacing="3">
            <Heading size="md">Situacion Actual</Heading>
            {etiquetas.map((etiqueta, index) => (
              <FormControl key={etiqueta}
              display="flex"
              alignItems="center"
              justifyContent="space-between" // Añade esta línea
              mb={6} // También puedes ajustar el espaciado vertical aquí
              >
                <FormLabel htmlFor={etiqueta} mb="0">
                  {etiqueta}
                </FormLabel>
                <Switch
                  id={etiqueta}
                  isChecked={campos[index]}
                  onChange={() =>
                    setUsuario((prevUsuario) => ({
                      ...prevUsuario,
                      [etiqueta]: !campos[index],
                    }))
                  }
                />
              </FormControl>
            ))}
          </Stack>
          <Button colorScheme="blue" onClick={() => setSitEdit(true)}>Editar</Button>
        </Box>
      </Center>
    );
  }
  