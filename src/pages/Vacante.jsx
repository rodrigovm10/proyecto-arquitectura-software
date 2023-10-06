import {
  FormLabel,
  Input,
  Heading,
  Center,
  Select,
  Button,
  Grid,
  GridItem,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberInput,
  NumberInputField,
  Switch,
  Box,
  Divider,
} from "@chakra-ui/react";
import { Nav } from "../pages/Nav";
import {
  Genero,
  DiasLaborales,
  Idiomas,
  HabilidadesTecnicas,
  HabilidadesBlandas,
  Prestaciones,
  Escolaridad,
  TipoEmpleo,
  AreaEmpresa,
} from "../constants/Datos";

export function Vacante() {
  {
    /**const GuardarVacanteEnDataStore = async () => {
    await DataStore.save(
      new Vacante({
        nombreVacante: "Lorem ipsum dolor sit amet",
        descripcion: "Lorem ipsum dolor sit amet",
        diasLaborales: "Lorem ipsum dolor sit amet",
        habilidadesBlandas: [],
        habilidadesTecnicas: [],
        generoBDT: "Lorem ipsum dolor sit amet",
        edadMin: 0,
        edadMax: 0,
        area: "Lorem ipsum dolor sit amet",
        tipoEmpleo: "Lorem ipsum dolor sit amet",
        dispViajar: true,
        dispRadicar: true,
        escolaridad: "Lorem ipsum dolor sit amet",
        prestaciones: "Lorem ipsum dolor sit amet",
        direccionEmpresa: "Lorem ipsum dolor sit amet",
        idioma: "Lorem ipsum dolor sit amet",
        salarioMax: 0,
        salarioMin: 0,
      })
    );
  }; */
  }

  return (
    <>
      <Nav />
      <Center py={6}>
        <Box
          borderRadius="lg"
          boxShadow="dark-lg"
          rounded="md"
          bg="#fff"
          p={12}
          w="80%"
          bgColor="white"
        >
          <Heading as="h3" mb={4}>
            Registro Vacantes
          </Heading>
          <Grid
            templateColumns={{
              base: "1fr",
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
            }}
            gap={9}
          >
            <GridItem w="100%" h="10">
              <FormLabel>Nombre Vacante</FormLabel>
              <Input type="text"></Input>
            </GridItem>
            <GridItem w="100%" h="10">
              <FormLabel>Descripción</FormLabel>
              <Input type="text"></Input>
            </GridItem>
            <GridItem w="100%" h="10">
              <FormLabel>Dias laborales</FormLabel>
              <Select placeholder="Seleccione dias laborales">
                {DiasLaborales.map((diaslaborales) => (
                  <option key={diaslaborales} value={diaslaborales}>
                    {diaslaborales}
                  </option>
                ))}
              </Select>
            </GridItem>
            <GridItem w="100%" h="10">
              <FormLabel>Habilidades blandas</FormLabel>
              <Select placeholder="Seleccione sus habilidades blandas">
                {HabilidadesBlandas.map((habilidadesblandas) => (
                  <option key={habilidadesblandas} value={habilidadesblandas}>
                    {habilidadesblandas}
                  </option>
                ))}
              </Select>
            </GridItem>
            <Divider />
            <GridItem w="100%" h="10">
              <FormLabel>Habilidades técnicas</FormLabel>
              <Select placeholder="Seleccione sus habilidades blandas">
                {HabilidadesTecnicas.map((habilidadestecnicas) => (
                  <option key={habilidadestecnicas} value={habilidadestecnicas}>
                    {habilidadestecnicas}
                  </option>
                ))}
              </Select>
            </GridItem>
            <GridItem w="100%" h="10">
              <FormLabel>Género</FormLabel>
              <Select placeholder="Seleccione un género">
                {Genero.map((genero) => (
                  <option key={genero} value={genero}>
                    {genero}
                  </option>
                ))}
              </Select>
            </GridItem>
            <GridItem w="100%" h="10">
              <FormLabel>Sueldo max</FormLabel>
              <NumberInput>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </GridItem>
            <GridItem w="100%" h="10">
              <FormLabel>Sueldo min</FormLabel>
              <NumberInput>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </GridItem>
            <GridItem w="100%" h="10">
              <FormLabel>Edad Min</FormLabel>
              <Input type="text"></Input>
            </GridItem>
            <GridItem w="100%" h="10">
              <FormLabel>Edad Max</FormLabel>
              <Input type="text"></Input>
            </GridItem>
            <GridItem w="100%" h="10">
              <FormLabel>Área</FormLabel>
              <Select placeholder="Seleccione el Área de la empresa">
                {AreaEmpresa.map((areaempresa) => (
                  <option key={areaempresa} value={areaempresa}>
                    {areaempresa}
                  </option>
                ))}
              </Select>
            </GridItem>
            <GridItem w="100%" h="10">
              <FormLabel>Tipo empleo</FormLabel>
              <Select placeholder="Seleccione el Tipo empleo">
                {TipoEmpleo.map((tipoempleo) => (
                  <option key={tipoempleo} value={tipoempleo}>
                    {tipoempleo}
                  </option>
                ))}
              </Select>
            </GridItem>
            <GridItem w="100%" h="10">
              <FormLabel>Disponibildad para viajar</FormLabel>
              <Switch size="md" />
            </GridItem>
            <GridItem w="100%" h="10">
              <FormLabel>Disponibildad para radicar</FormLabel>
              <Switch size="md" />
            </GridItem>
            <GridItem w="100%" h="10">
              <FormLabel>Escolaridad</FormLabel>
              <Select placeholder="Seleccione la Escolaridad">
                {Escolaridad.map((escolaridad) => (
                  <option key={escolaridad} value={escolaridad}>
                    {escolaridad}
                  </option>
                ))}
              </Select>
            </GridItem>
            <GridItem w="100%" h="10">
              <FormLabel>Prestaciones</FormLabel>
              <Select placeholder="Seleccione las Prestaciones">
                {Prestaciones.map((prestaciones) => (
                  <option key={prestaciones} value={prestaciones}>
                    {prestaciones}
                  </option>
                ))}
              </Select>
            </GridItem>
            <GridItem w="100%" h="10">
              <FormLabel>Direccion empresa</FormLabel>
              <Input type="text"></Input>
            </GridItem>
            <GridItem w="100%" h="10">
              <FormLabel>Direccion de la vacante</FormLabel>
              <Input type="text"></Input>
            </GridItem>
            <GridItem w="100%" h="10">
              <FormLabel>Idioma</FormLabel>
              <Select placeholder="Seleccione el idioma">
                {Idiomas.map((idiomas) => (
                  <option key={idiomas} value={idiomas}>
                    {idiomas}
                  </option>
                ))}
              </Select>
            </GridItem>
            <GridItem w="100%" h="10">
              <FormLabel>Periodo de pago</FormLabel>
              <Select></Select>
            </GridItem>
          </Grid>
        </Box>
      </Center>
      <Center>
        <Button colorScheme="teal" variant="solid" mb={3}>
          Siguiente
        </Button>
      </Center>
    </>
  );
}
