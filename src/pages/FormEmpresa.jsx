import { FormControl, FormLabel, Input, Flex, Box, Heading, Center, Select, Grid, GridItem, Stack } from '@chakra-ui/react'

import { Nav } from '../components/Nav'
import { DATOS_UBICACION, DATOS_PRINCIPALES, MUNICIPIOS } from '../constants/FormEmpresa'

export function FormEmpresa() {
  return (
    <>
      <Nav />
      <Heading as='h3'>
        <Center>Registro Buscador de Trabajo</Center>
      </Heading>
      <FormControl
        display='flex'
        flexDirection='column'
        gap='2rem'
        boxShadow='dark-lg'
        p='6'
        rounded='md'
        bg='#fff'
        m='2rem auto 0'
        w={{ base: '80%', sm: '80%', md: '55%' }}>
        <Flex
          gap={2}
          direction='column'
          justify='space-between'>
          {DATOS_PRINCIPALES.map(campo => (
            <Box
              key={campo.id}
              flex='1'>
              <FormLabel>{campo.campo}</FormLabel>
              <Input type={campo.type} />
            </Box>
          ))}
        </Flex>
        <Flex
          gap={5}
          justify='space-between'
          direction={{ base: 'column', sm: 'row' }}>
          <Box flex='1'>
            <FormLabel>Tipo RFC</FormLabel>
            <Select>
              <option disabled>Tipo RFC</option>
              <option>RFC Moral</option>
              <option>RFC Físico</option>
            </Select>
          </Box>
          <Box flex='1'>
            <FormLabel>RFC</FormLabel>
            <Input type='text'></Input>
          </Box>
        </Flex>
        <Stack>
          <FormLabel>Municipio</FormLabel>
          <Select>
            {MUNICIPIOS.map((municipio, i) => (
              <option
                key={i}
                disabled={municipio === 'Municipios'}>
                {municipio}
              </option>
            ))}
          </Select>
        </Stack>

        <Grid
          templateRows={{ base: 'repeat(4, 1fr)', sm: 'repeat(2, 1fr)' }}
          templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
          gap={2}>
          {DATOS_UBICACION.map(campo => (
            <GridItem
              key={campo.id}
              flex='1'>
              <FormLabel key={campo.id}>{campo.campo}</FormLabel>
              <Input type={campo.type} />
            </GridItem>
          ))}
        </Grid>
      </FormControl>
    </>
  )
}
