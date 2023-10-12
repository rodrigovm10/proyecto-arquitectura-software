import { Box, Flex, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import { DATOS_PRINCIPALES } from '../../constants/FormEmpresa'
import { useRegister } from '../../hooks/useRegister'

export function DatosPrincipalesForm({ errors }) {
  const { datosEmpresa, inputValidation, setDatosEmpresa } = useRegister()

  const handleInputChange = e => {
    let { value, name } = e.target
    setDatosEmpresa({
      ...datosEmpresa,
      [name]: value
    })

    console.log(datosEmpresa)

    inputValidation({ value, name })
  }
  return (
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
