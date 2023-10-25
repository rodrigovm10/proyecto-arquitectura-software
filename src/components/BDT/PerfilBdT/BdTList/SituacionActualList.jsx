import {
  Center,
  Box,
  Stack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Switch,
  Button,
  Flex,
} from "@chakra-ui/react";

export default function SituacionActualList({
  usuario,
  setUsuario,
  setSitEdit,
}) {
  const etiquetas = [
    "¿Buscas empleo?",
    "¿Actualmente estás trabajando?",
    "¿Disponibilidad de viajar?",
    "¿Disponibilidad para radicar",
  ];

  const campos = [
    usuario.buscaEmpleo,
    usuario.trabajando,
    usuario.dispViajar,
    usuario.dispRadicar,
  ];

  return (
    <Flex
      boxShadow="xl"
      borderWidth="2px"
      borderColor="gray.200"
      borderRadius="lg"
      flexDirection="column"
      p="4"
      _hover={{ transform: "scale(1.02)" }}
    >
      <Heading size="md">Situacion Actual</Heading>
      {etiquetas.map((etiqueta, index) => (
        <FormControl
          key={etiqueta}
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
      <Flex justifyContent={"end"}>
        <Button colorScheme="blue" onClick={() => setSitEdit(true)}>
          Editar
        </Button>
      </Flex>
    </Flex>
  );
}
