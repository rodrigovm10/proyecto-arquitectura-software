import { FormLabel, Input, Heading, Select, Flex, Box, FormHelperText } from '@chakra-ui/react'
import { DiasLaborales } from '../../constants/Datos'
import { useRegisterVacante } from '../../hooks/useRegisterVacante'
import { DATOS_PRINCIPALES } from '../../constants/FormVacante'

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
        <FormLabel>Dias laborales</FormLabel>
        <Select placeholder='Seleccione dias laborales'>
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
      </Box>
    </Flex>
  )
}
