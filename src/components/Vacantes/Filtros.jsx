import {
  Box,
  Flex,
  FormLabel,
  Heading,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import {
  AREA_EMPRESA_FILTROS,
  MUNICIPIOS_FILTROS,
} from "../../constants/Datos";

export function Filtros({ filtros, setFiltros }) {
  const handleChangeFiltros = (e) => {
    const { name, value } = e.target;
    setFiltros((prevFiltros) => ({ ...prevFiltros, [name]: value }));
  };

  const handleClickCleanFilter = () => {
    setFiltros({
      municipio: "Todos",
      area: "Todas",
      salarioMin: 0,
      salarioMax: 100000,
    });
  };

  const handleNumberChange = ({ value, name }) => {
    setFiltros((prevFiltros) => ({
      ...prevFiltros,
      [name]: parseFloat(value),
    }));
  };

  return (
    <>
      <Heading as="h4" fontSize="2rem">
        Filtros
      </Heading>

      <Flex
        flexDirection={{ base: "column", md: "row" }}
        flexWrap="wrap"
        gap={"2"}
        p={1}
      >
        <Box
          flex={{ base: "1", md: "1/2", sm: "2", lg: "" }}
          bg="transparent"
          display="flex"
          flexDirection="column"
        >
          <FormLabel>Municipio</FormLabel>
          <Select
            focusBorderColor="#ea754b"
            name="municipio"
            value={filtros.municipio}
            onChange={handleChangeFiltros}
          >
            {MUNICIPIOS_FILTROS.map((municipio, i) => (
              <option value={municipio} key={i}>
                {municipio}
              </option>
            ))}
          </Select>
        </Box>
        <Box
          flex={{ base: "1", md: "1/2", sm: "2", lg: "" }}
          bg="transparent"
          display="flex"
          flexDirection="column"
        >
          <FormLabel>Área</FormLabel>
          <Select
            name="area"
            focusBorderColor="#ea754b"
            onChange={handleChangeFiltros}
            value={filtros.area}
          >
            {AREA_EMPRESA_FILTROS.map((area, i) => (
              <option value={area} key={i}>
                {area}
              </option>
            ))}
          </Select>
        </Box>
        <Box
          flex={{ base: "1", md: "1/2", sm: "2", lg: "" }}
          bg="transparent"
          display="flex"
          flexDirection="column"
        >
          <FormLabel>Salario Mínimo</FormLabel>
          <NumberInput
            focusBorderColor="#ea754b"
            defaultValue={0}
            name={"salarioMin"}
            min={0}
            max={100000}
            value={filtros.salarioMin ? parseFloat(filtros.salarioMin) : 0}
            onChange={(value) =>
              handleNumberChange({ value, name: "salarioMin" })
            }
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
        <Box
          flex={{ base: "1", md: "1/2", sm: "2", lg: "" }}
          bg="transparent"
          display="flex"
          flexDirection="column"
        >
          <FormLabel>Salario Máximo</FormLabel>
          <NumberInput
            focusBorderColor="#ea754b"
            defaultValue={100000}
            min={0}
            max={100000}
            value={filtros.salarioMax ? parseFloat(filtros.salarioMax) : 0}
            onChange={(value) =>
              handleNumberChange({ value, name: "salarioMax" })
            }
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
      </Flex>

      <ButtonGroup mt="2rem" spacing="6">
        <Button
          color="white"
          bg="#ea754b"
          _hover={{ bg: "#ff964f" }}
          onClick={handleClickCleanFilter}
        >
          Limpiar filtros
        </Button>
      </ButtonGroup>
    </>
  );
}
