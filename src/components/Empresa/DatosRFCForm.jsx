import { Box, Flex, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react'
import { useRegister } from '../../hooks/useRegister'

export function DatosRFCForm() {
  const { datosEmpresa, handleInputChange, errors } = useRegister()

  return (
    <Box>
      <Heading
        as='h3'
        size='md'
        mb='1rem'>
        Datos físcales
      </Heading>
      <Flex
        gap={5}
        justify='space-between'
        direction={{ base: 'column', sm: 'row' }}>
        <Box flex='1'>
          <FormLabel>RFC</FormLabel>
          <Input
            type='text'
            placeholder='VEMR031106RA5'
            focusBorderColor='#ea754b'
            name='rfc'
            value={datosEmpresa.rfc.toUpperCase()}
            onChange={handleInputChange}
          />
          {errors.rfc && <FormHelperText>El RFC es obligatorio</FormHelperText>}
        </Box>
      </Flex>
    </Box>
  )
}
