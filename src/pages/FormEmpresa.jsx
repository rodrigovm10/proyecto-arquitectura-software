import { FormControl, FormLabel, Input, Flex, Box, Heading, Center, Select, Grid, GridItem, Stack, Button, ButtonGroup } from '@chakra-ui/react'
import { Nav } from '../../src/pages/Nav'
import { DATOS_UBICACION, DATOS_PRINCIPALES, DATOS_EMPRESA } from '../constants/FormEmpresa'
import { MUNICIPIOS } from '../constants/Datos'
import { useState, useEffect } from 'react'

export function FormEmpresa() {
  const [datosEmpresa, setDatosEmpresa] = useState({
    nombreComercial: '',
    razonSocial: '',
    actividad: '',
    tipoRFC: '',
    rfc: '',
    municipio: '',
    colonia: '',
    calle: '',
    numero: '',
    codigoPostal: '',
    tipoSucursal: '',
    sector: ''
  })

  useEffect(() => {
    console.log(datosEmpresa)
  }, [datosEmpresa])

  const handleInputChange = e => {
    const { value, name } = e.target
    setDatosEmpresa({
      ...datosEmpresa,
      [name]: value
    })
    console.log(value)
    console.log(name)
  }

  const handleSubmitForm = e => {
    e.preventDefault()
    console.log(datosEmpresa)
  }

  return (
    <>
      <Nav />
      <Heading as='h3'>
        <Center>Registro Empresa</Center>
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
              <Input
                type={campo.type}
                placeholder={campo?.placeholder}
                focusBorderColor='#ea754b'
                name={datosEmpresa[campo?.datoNombre]}
                value={datosEmpresa[campo.campo]}
                onChange={handleInputChange}
              />
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
            <Input
              type='text'
              placeholder='VEMR031106RA5'
              focusBorderColor='#ea754b'
            />
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
              <Input
                type={campo.type}
                placeholder={campo.placeholder}
                focusBorderColor='#ea754b'
              />
            </GridItem>
          ))}
        </Grid>
        <Flex
          gap={5}
          justify='space-between'
          direction={{ base: 'column', sm: 'row' }}>
          {DATOS_EMPRESA.map(campo => {
            const { id, nombre, datos } = campo
            return (
              <Box
                key={id}
                flex='1'>
                <FormLabel>{nombre}</FormLabel>
                <Select>
                  {datos.map((dato, i) => (
                    <option
                      key={i}
                      disabled={dato === 'Tipo Sucursal' || dato === 'Sector'}>
                      {dato}
                    </option>
                  ))}
                </Select>
              </Box>
            )
          })}
        </Flex>
      </FormControl>
      <Flex
        justifyContent='center'
        mt='2rem'>
        <ButtonGroup>
          <Button colorScheme='red'>Cancelar</Button>
          <Button
            bg='#ea754b'
            color='#fff'
            _hover={{ bg: 'rgb(234, 117, 90)' }}
            type='submit'
            onSubmit={handleSubmitForm}>
            Guardar
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  )
}
