import { Box, Button, Flex, FormLabel, Grid, GridItem, Heading, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from '@chakra-ui/react'
import { DATOS_REQUISITOS } from '../../constants/FormVacante'
import { useRegisterVacante } from '../../hooks/useRegisterVacante'
import { EXPERIENCIA_LABORAL, Idiomas, Genero, NivelIdiomas, Escolaridad } from '../../constants/Datos'
import { Tags } from './Tags'

export function DatosRequisitosForm() {
  const { datosVacante, handleNumberChange, handleInputChange, handleClickSave, stringToSave, secondStringToSave } = useRegisterVacante()

  return (
    <Flex
      gap='1rem'
      direction='column'
      justify='space-between'>
      <Heading
        as='h3'
        size='md'>
        Requisitos
      </Heading>
      <Grid
        templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap='1rem'>
        {DATOS_REQUISITOS.map(dato => {
          const { id, campo, min, max, nombre } = dato
          return (
            <GridItem key={id}>
              <FormLabel>{campo}</FormLabel>
              <NumberInput
                focusBorderColor='#ea754b'
                name={nombre}
                defaultValue={min}
                min={min}
                max={max}
                value={datosVacante[nombre] ? parseFloat(datosVacante[nombre]) : min}
                onChange={value => handleNumberChange({ value, name: nombre })}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </GridItem>
          )
        })}
        <GridItem>
          <FormLabel>Género</FormLabel>
          <Select
            placeholder='Ingrese el género requerido'
            focusBorderColor='#ea754b'
            name='genero'
            value={datosVacante.genero}
            onChange={handleInputChange}>
            {Genero.map((genero, i) => (
              <option
                value={genero}
                key={i}>
                {genero}
              </option>
            ))}
          </Select>
        </GridItem>
        <GridItem>
          <FormLabel>Experiencia laboral</FormLabel>
          <Select
            placeholder='Ingrese la experencia laboral requerida'
            focusBorderColor='#ea754b'
            name='experienciaLaboral'
            value={datosVacante.experienciaLaboral}
            onChange={handleInputChange}>
            {EXPERIENCIA_LABORAL.map((experiencia, i) => (
              <option
                value={experiencia}
                key={i}>
                {experiencia}
              </option>
            ))}
          </Select>
        </GridItem>
        <GridItem gridColumn={{ base: 'auto', sm: 'auto', md: '1 / 3' }}>
          <FormLabel>Escolaridad</FormLabel>
          <Select
            placeholder='Ingrese la escolaridad requerida'
            focusBorderColor='#ea754b'
            name='escolaridad'
            value={datosVacante.escolaridad}
            onChange={handleInputChange}>
            {Escolaridad.map((escolaridad, i) => (
              <option
                key={i}
                value={escolaridad}>
                {escolaridad}
              </option>
            ))}
          </Select>
        </GridItem>
      </Grid>
      <Flex
        gap='1rem'
        flexDirection={{ base: 'column', sm: 'column', md: 'row' }}>
        <Box flex='2'>
          <FormLabel>Idiomas</FormLabel>
          <Select
            placeholder='Ingresa el idioma requerido'
            focusBorderColor='#ea754b'
            name='idioma'
            value={stringToSave}
            onChange={handleInputChange}>
            {Idiomas.map((idioma, i) => (
              <option
                value={idioma}
                key={i}>
                {idioma}
              </option>
            ))}
          </Select>
        </Box>
        <Box flex='2'>
          <FormLabel>Nivel de idioma</FormLabel>
          <Select
            placeholder='Ingrese el nivel de idioma requerido'
            focusBorderColor='#ea754b'
            name='nivelIdioma'
            value={secondStringToSave}
            onChange={handleInputChange}>
            {NivelIdiomas.map((nivelIdioma, i) => (
              <option
                value={nivelIdioma}
                key={i}>
                {nivelIdioma}
              </option>
            ))}
          </Select>
        </Box>
        <Box
          alignSelf='end'
          w={{ base: '100%', sm: '100%', md: 'auto' }}>
          <Button
            w={{ base: '100%', sm: '100%', md: 'auto' }}
            colorScheme='facebook'
            onClick={() => {
              handleClickSave({ name: 'idiomaConNivel', value: stringToSave })
            }}>
            Agregar idioma
          </Button>
        </Box>
      </Flex>
      <Tags
        array={datosVacante.idiomaConNivel}
        arrayName='idiomaConNivel'
      />
    </Flex>
  )
}
