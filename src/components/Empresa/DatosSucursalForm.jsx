import { Box, Flex, FormLabel, Heading, Select } from '@chakra-ui/react'
import { DATOS_EMPRESA } from '../../constants/FormEmpresa'
import { useRegister } from '../../hooks/useRegister'

export function DatosSucursalForm() {
  const { datosEmpresa, handleInputChange } = useRegister()
  return (
    <Box>
      <Heading
        as='h3'
        size='md'
        mb='1rem'>
        Datos sucursales
      </Heading>
      <Flex
        gap={5}
        justify='space-between'
        direction={{ base: 'column', sm: 'row' }}>
        {DATOS_EMPRESA.map(campos => {
          const { id, campo, nombre, datos } = campos
          return (
            <Box
              key={id}
              flex='1'>
              <FormLabel>{campo}</FormLabel>
              <Select
                name={nombre}
                value={datosEmpresa[nombre]}
                onChange={handleInputChange}>
                {datos.map((dato, i) => (
                  <option key={i}>{dato}</option>
                ))}
              </Select>
            </Box>
          )
        })}
      </Flex>
    </Box>
  )
}
