import { Box, Flex, FormHelperText, FormLabel, Heading, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react'
import { DATOS_PRINCIPALES } from '../../constants/FormEmpresa'
import { useRegister } from '../../hooks/useRegister'
import { DATOS_SALARIO } from '../../constants/FormVacante'

export function DatosPrincipalesForm() {
  const { datosEmpresa, handleInputChange, errors } = useRegister()

  return (
    <Flex
      gap={2}
      direction='column'
      justify='space-between'>
      <Heading
        as='h3'
        size='md'
        m='1rem 0'>
        Datos principales
      </Heading>
      {DATOS_PRINCIPALES.map(campo => (
        <Box
          key={campo.id}
          flex='1'>
          <FormLabel>{campo.campo}</FormLabel>
          <Input
            isInvalid={errors[campo.nombre]}
            maxLength={campo.length}
            type={campo.type}
            placeholder={campo.placeholder}
            focusBorderColor='#ea754b'
            name={campo.nombre}
            value={datosEmpresa[campo.nombre]}
            onChange={handleInputChange}
          />
          {errors[campo.nombre] && <FormHelperText>{campo.errorMessage}</FormHelperText>}
        </Box>
      ))}
      
    </Flex>
  )
}
