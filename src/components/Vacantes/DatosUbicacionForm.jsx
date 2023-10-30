import { Checkbox, Flex, FormHelperText, FormLabel, Grid, GridItem, Heading, Input, Select, Stack, Text } from '@chakra-ui/react'
import { useRegisterVacante } from '../../hooks/useRegisterVacante'
import { MUNICIPIOS } from '../../constants/Datos'
import { DATOS_UBICACION } from '../../constants/FormVacante'
import { useState } from 'react'

export function DatosUbicacionForm() {
  const { datosVacante, errors, handleInputChange, setDatosVacante } = useRegisterVacante()
  const [isCheck, setIsCheck] = useState(false)

  const handleCheckboxChange = () => {
    setIsCheck(!isCheck)
    setDatosVacante(prevDatosVacante => ({ ...prevDatosVacante, isCheck }))
  }

  return (
    <Flex
      gap='1rem'
      direction='column'
      justify='space-between'>
      <Heading
        as='h3'
        size='md'>
        Datos de la ubicación
      </Heading>
      <Stack>
        <Text>¿La ubicación de la vacante es la misma que la de la empresa?</Text>
        <Flex
          justifyContent='center'
          gap='8rem'>
          <Checkbox
            isChecked={isCheck}
            onChange={handleCheckboxChange}>
            Sí
          </Checkbox>
          <Checkbox
            isChecked={!isCheck}
            onChange={handleCheckboxChange}>
            No
          </Checkbox>
        </Flex>
      </Stack>
      {!isCheck && (
        <Grid
          templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gap={2}>
          <GridItem>
            <FormLabel>Municipio</FormLabel>
            <Select
              focusBorderColor='#ea754b'
              name='municipio'
              value={datosVacante.municipio}
              onChange={handleInputChange}>
              {MUNICIPIOS.map((municipio, i) => (
                <option
                  key={i}
                  disabled={municipio === 'Municipios'}>
                  {municipio}
                </option>
              ))}
            </Select>
            {errors.municipio && <FormHelperText>El campo de municipio es obligatorio</FormHelperText>}
          </GridItem>
          {DATOS_UBICACION.map(campo => (
            <GridItem
              key={campo.id}
              flex='1'>
              <FormLabel key={campo.id}>{campo.campo}</FormLabel>
              <Input
                type={campo.type}
                placeholder={campo.placeholder}
                focusBorderColor='#ea754b'
                name={campo.nombre}
                value={datosVacante[campo.nombre]}
                onChange={handleInputChange}
              />
              {errors[campo.nombre] && <FormHelperText>{campo.errorMessage}</FormHelperText>}
            </GridItem>
          ))}
        </Grid>
      )}
    </Flex>
  )
}
