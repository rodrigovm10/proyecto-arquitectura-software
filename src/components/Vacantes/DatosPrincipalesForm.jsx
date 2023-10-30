import { FormLabel, Input, Heading, Select, Flex, Box, FormHelperText, Grid, GridItem, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'
import { AreaEmpresa, DiasLaborales, JORNADA_LABORAL, PERIODO_PAGO, TipoContrato } from '../../constants/Datos'
import { useRegisterVacante } from '../../hooks/useRegisterVacante'
import { DATOS_PRINCIPALES, DATOS_SALARIO } from '../../constants/FormVacante'
import { MODALIDAD } from '../../constants/Datos'

export function DatosPrincipalesForm() {
  const { datosVacante, errors, handleInputChange, handleNumberChange } = useRegisterVacante()

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
      <Grid
        templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap='1rem'>
        <GridItem>
          <FormLabel>Área</FormLabel>
          <Select
            placeholder='Seleccione el área de la empresa'
            name='area'
            focusBorderColor='#ea754b'
            onChange={handleInputChange}
            value={datosVacante.area}>
            {AreaEmpresa.map((area, i) => (
              <option
                value={area}
                key={i}>
                {area}
              </option>
            ))}
          </Select>
        </GridItem>
        <GridItem>
          <FormLabel>Periodo de pago</FormLabel>
          <Select
            placeholder='Seleccione el periodo de pago'
            name='periodoPago'
            focusBorderColor='#ea754b'
            onChange={handleInputChange}
            value={datosVacante.periodoPago}>
            {PERIODO_PAGO.map((periodo, i) => (
              <option
                value={periodo}
                key={i}>
                {periodo}
              </option>
            ))}
          </Select>
        </GridItem>
        <GridItem>
          <FormLabel>Tipo de Contrato</FormLabel>
          <Select
            placeholder='Seleccione el tipo de contrato'
            name='tipoContrato'
            focusBorderColor='#ea754b'
            onChange={handleInputChange}
            value={datosVacante.tipoContrato}>
            {TipoContrato.map((tipo, i) => (
              <option
                value={tipo}
                key={i}>
                {tipo}
              </option>
            ))}
          </Select>
        </GridItem>
        <GridItem>
          <FormLabel>Jornada laboral</FormLabel>
          <Select
            placeholder='Seleccione la jornada laboral'
            name='jornadaLaboral'
            focusBorderColor='#ea754b'
            onChange={handleInputChange}
            value={datosVacante.jornadaLaboral}>
            {JORNADA_LABORAL.map((jornada, i) => (
              <option
                value={jornada}
                key={i}>
                {jornada}
              </option>
            ))}
          </Select>
        </GridItem>
        <GridItem>
          <FormLabel>Modalidad</FormLabel>
          <Select
            placeholder='Seleccione la modalidad'
            name='modalidad'
            focusBorderColor='#ea754b'
            onChange={handleInputChange}
            value={datosVacante.modalidad}>
            {MODALIDAD.map((modalidad, i) => (
              <option
                value={modalidad}
                key={i}>
                {modalidad}
              </option>
            ))}
          </Select>
        </GridItem>
        <GridItem>
          <FormLabel>Días laborales</FormLabel>
          <Select
            placeholder='Seleccione los días laborales'
            name='diasLaborales'
            focusBorderColor='#ea754b'
            value={datosVacante.diaslaborales}
            onChange={handleInputChange}>
            {DiasLaborales.map((diaslaborales, i) => (
              <option
                value={diaslaborales}
                key={i}>
                {diaslaborales}
              </option>
            ))}
          </Select>
        </GridItem>

        {DATOS_SALARIO.map(dato => {
          const { id, campo, min, nombre } = dato
          return (
            <GridItem key={id}>
              <FormLabel>{campo}</FormLabel>
              <NumberInput
                focusBorderColor='#ea754b'
                name={nombre}
                defaultValue={min}
                min={min}
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
      </Grid>
    </Flex>
  )
}
