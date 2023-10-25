import { Box, Flex, FormHelperText, FormLabel, Grid, GridItem, Heading, Input, Select } from '@chakra-ui/react'
import { DATOS_REQUISITOS } from '../../constants/FormVacante'
import { useRegisterVacante } from '../../hooks/useRegisterVacante'
import { EXPERIENCIA_LABORAL, Idiomas } from '../../constants/Datos'

export function DatosRequisitosForm() {
  const { datosVacante, errors, handleInputChange } = useRegisterVacante()

  return (
    <Flex
      gap='1rem'
      direction='column'
      justify='space-between'>
      <Heading
        as='h3'
        size='md'
        m='1rem 0 0'>
        Requisitos
      </Heading>
      {DATOS_REQUISITOS.map(dato => {
        const { id, campo, nombre, length, type, placeholder } = dato
        return (
          <Box
            key={id}
            flex='1'>
            <FormLabel>{campo}</FormLabel>
            <Input
              isInvalid={errors[nombre]}
              maxLength={length}
              type={type}
              placeholder={placeholder}
              focusBorderColor='#ea754b'
              name={nombre}
              value={datosVacante[nombre]}
              onChange={handleInputChange}
            />
            {errors[campo.nombre] && <FormHelperText>{campo.errorMessage}</FormHelperText>}
          </Box>
        )
      })}
      <Grid
        templateColumns='repeat(2, 1fr)'
        columnGap='1rem'>
        <GridItem>
          <FormLabel>Dias laborales</FormLabel>
          <Select placeholder='Lunes - Viernes'>
            {EXPERIENCIA_LABORAL.map((experiencia, i) => (
              <option
                name='diasLaborales'
                value={datosVacante.experiencia}
                onChange={handleInputChange}
                key={i}>
                {experiencia}
              </option>
            ))}
          </Select>
        </GridItem>
        <GridItem>
          <FormLabel>Modalidad</FormLabel>
          <Select placeholder='Inglés'>
            {Idiomas.map((idioma, i) => (
              <option
                name='idiomas'
                value={idioma.idioma}
                onChange={handleInputChange}
                key={i}>
                {idioma}
              </option>
            ))}
          </Select>
        </GridItem>
      </Grid>
    </Flex>
  )
}
