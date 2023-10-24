import { Box, FormHelperText, FormLabel, Grid, GridItem, Heading, Input, Select } from '@chakra-ui/react'
import { MUNICIPIOS } from '../../constants/Datos'
import { DATOS_UBICACION } from '../../constants/FormEmpresa'
import { useRegister } from '../../hooks/useRegister'

export function DatosUbicacionForm() {
  const { datosEmpresa, handleInputChange, errors } = useRegister()

  return (
    <Box>
      <Heading
        as='h3'
        size='md'
        mb='1rem'>
        Datos de la ubicación
      </Heading>
      <Grid
        templateRows={{ base: 'repeat(4, 1fr)', sm: 'repeat(2, 1fr)' }}
        templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
        gap={2}>
        <GridItem>
          <FormLabel>Municipio</FormLabel>
          <Select
            name='municipio'
            value={datosEmpresa.municipio}
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
              value={datosEmpresa[campo.nombre]}
              onChange={handleInputChange}
            />
            {errors[campo.nombre] && <FormHelperText>{campo.errorMessage}</FormHelperText>}
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}
