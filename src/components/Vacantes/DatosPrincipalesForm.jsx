import { FormLabel, Input, Heading, Select, Flex, Box, FormHelperText, Grid, GridItem } from '@chakra-ui/react'
import { AreaEmpresa, DiasLaborales } from '../../constants/Datos'
import { useRegisterVacante } from '../../hooks/useRegisterVacante'
import { DATOS_PRINCIPALES } from '../../constants/FormVacante'
import { MODALIDAD } from '../../constants/Datos'

export function DatosPrincipalesForm() {
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
        Datos principales
      </Heading>

      {DATOS_PRINCIPALES.map(dato => {
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
      <Box>
        <FormLabel>Área</FormLabel>
        <Select placeholder='Seleccione el Área de la empresa'>
          {AreaEmpresa.map((area, i) => (
            <option
              key={i}
              value={area}>
              {area}
            </option>
          ))}
        </Select>
      </Box>
      <Grid
        templateColumns='repeat(2, 1fr)'
        columnGap='1rem'>
        <GridItem>
          <FormLabel>Días laborales</FormLabel>
          <Select placeholder='Lunes - Viernes'>
            {MODALIDAD.map((modalidad, i) => (
              <option
                name='diasLaborales'
                value={datosVacante.modalidad}
                onChange={handleInputChange}
                key={i}>
                {
                modalidad}
              </option>
            ))}
          </Select>
        </GridItem>
        <GridItem>
          <FormLabel>Modalidad</FormLabel>
          <Select placeholder='Híbrida'>
            {DiasLaborales.map((diaslaborales, i) => (
              <option
                name='diasLaborales'
                value={datosVacante.diaslaborales}
                onChange={handleInputChange}
                key={i}>
                {diaslaborales}
              </option>
            ))}
          </Select>
        </GridItem>
      </Grid>
    </Flex>
  )
}
