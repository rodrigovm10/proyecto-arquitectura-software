import { Box, Flex, FormLabel, Input, Select } from '@chakra-ui/react'

export function DatosRFCForm({ datosEmpresa, handleInputChange }) {
  return (
    <Flex
      gap={5}
      justify='space-between'
      direction={{ base: 'column', sm: 'row' }}>
      <Box flex='1'>
        <FormLabel>Tipo RFC</FormLabel>
        <Select
          name='tipoRFC'
          value={datosEmpresa.tipoRFC}
          onChange={handleInputChange}
          placeholder='Tipo RFC'>
          <option>RFC Moral</option>
          <option>RFC Físico</option>
        </Select>
      </Box>
      <Box flex='1'>
        <FormLabel>RFC</FormLabel>
        <Input
          type='text'
          placeholder='VEMR031106RA5'
          focusBorderColor='#ea754b'
          name='rfc'
          value={datosEmpresa.rfc}
          onChange={handleInputChange}
        />
      </Box>
    </Flex>
  )
}
