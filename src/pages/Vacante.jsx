import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Box,
  Heading,
  Center,
  Select,
  Grid,
  GridItem,
  Stack,
  Container,
} from "@chakra-ui/react";
import { Nav } from "../pages/Nav";

export function Vacante() {
  return (
    <>
      <Nav />
      <Heading as="h3">
        <Center>Registro Vacantes</Center>
      </Heading>
      <Center py={6}>
        <Grid templateColumns="repeat(2, 1fr)" gap={10}>
          <GridItem w="100%" h="10">
            <FormLabel>Nombre Vacante</FormLabel>
            <Input type="text"></Input>
          </GridItem>
          <GridItem w="100%" h="10">
            <FormLabel>Descripción</FormLabel>
            <Input type="text"></Input>
          </GridItem>
          <GridItem w="100%" h="10">
            <FormLabel>Número de plazas</FormLabel>
            <Input type="text"></Input>
          </GridItem>
          <GridItem w="100%" h="10">
            <FormLabel>Dias laborales</FormLabel>
            <Input type="text"></Input>
          </GridItem>
          <GridItem w="100%" h="10">
            <FormLabel>Habilidades blandas</FormLabel>
            <Input type="text"></Input>
          </GridItem>
          <GridItem w="100%" h="10">
            <FormLabel>Habilidades técnicas</FormLabel>
            <Input type="text"></Input>
          </GridItem>
          <GridItem w="100%" h="10">
            <FormLabel>Género</FormLabel>
            <Input type="text"></Input>
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
            <FormLabel>Discapacidades Aceptadas</FormLabel>
            <Input type="text"></Input>
          </GridItem>
          <GridItem w="100%" h="10">
            <FormLabel>Área</FormLabel>
            <Input type="text"></Input>
          </GridItem>
          <GridItem w="100%" h="10">
            <FormLabel>Tipo empleo</FormLabel>
            <Input type="text"></Input>
          </GridItem>
          <GridItem w="100%" h="10">
            <FormLabel>Causa vacante</FormLabel>
            <Input type="text"></Input>
          </GridItem>
          <GridItem w="100%" h="10">
            <FormLabel>Disponibildad para vijar</FormLabel>
            <Input type="text"></Input>
          </GridItem>
          <GridItem w="100%" h="10">
            <FormLabel>Disponibildad para radicar</FormLabel>
            <Input type="text"></Input>
          </GridItem>
          <GridItem w="100%" h="10">
            <FormLabel>Escolaridad</FormLabel>
            <Input type="text"></Input>
          </GridItem>
          <GridItem w="100%" h="10">
            <FormLabel>Vigencia Vacante</FormLabel>
            <Input type="text"></Input>
          </GridItem>
          <GridItem w="100%" h="10">
            <FormLabel>Prestaciones</FormLabel>
            <Input type="text"></Input>
          </GridItem>
          <GridItem w="100%" h="10">
            <FormLabel>Direccion empresa</FormLabel>
            <Input type="text"></Input>
          </GridItem>
          <GridItem w="100%" h="10">
            <FormLabel>Municipio</FormLabel>
            <Input type="text"></Input>
          </GridItem>
          <GridItem w="100%" h="10">
            <FormLabel>Colonia</FormLabel>
            <Input type="text"></Input>
          </GridItem>
          <GridItem w="100%" h="10">
            <FormLabel>Calle</FormLabel>
            <Input type="text"></Input>
          </GridItem>
          <GridItem w="100%" h="10">
            <FormLabel>CP</FormLabel>
            <Input type="text"></Input>
          </GridItem>
          <GridItem w="100%" h="10">
            <FormLabel>Núnero</FormLabel>
            <Input type="text"></Input>
          </GridItem>
          <GridItem w="100%" h="10">
            <FormLabel>Idioma</FormLabel>
            <Input type="text"></Input>
          </GridItem>
        </Grid>
      </Center>
    </>
  );
}
