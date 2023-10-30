import { Box, Button, Flex, FormLabel, Heading, Select } from '@chakra-ui/react'
import { HabilidadesTecnicas } from '../../constants/Datos'
import { useRegisterVacante } from '../../hooks/useRegisterVacante'
import { Tags } from './Tags'

export function DatosHabilidadesTecnicasForm() {
  const { datosVacante, errors, handleInputChange, handleClickSave, stringToSave } = useRegisterVacante()

  return (
    <Flex
      gap='1rem'
      direction='column'
      justify='space-between'>
      <Heading
        as='h3'
        size='md'>
        Habilidades técnicas
      </Heading>
      <Flex
        gap='2rem'
        flexDirection={{ base: 'column', sm: 'column', md: 'row' }}>
        <Box flex='2'>
          <Box>
            <FormLabel>Habilidades técnicas</FormLabel>
            <Select
              placeholder='Seleccione las habilidades técnicas requeridas'
              name='habilidadesTecnicas'
              value={stringToSave}
              onChange={handleInputChange}>
              {HabilidadesTecnicas.map((habilidadesTecnicas, i) => (
                <option
                  key={i}
                  value={habilidadesTecnicas}>
                  {habilidadesTecnicas}
                </option>
              ))}
            </Select>
          </Box>
        </Box>
        <Box
          alignSelf='end'
          w={{ base: '100%', sm: '100%', md: 'auto' }}>
          <Button
            colorScheme='facebook'
            w={{ base: '100%', sm: '100%', md: 'auto' }}
            onClick={() => {
              handleClickSave({ name: 'habilidadesTecnicas', value: stringToSave })
            }}>
            Agregar habilidad
          </Button>
        </Box>
      </Flex>
      <Tags
        array={datosVacante.habilidadesTecnicas}
        arrayName='habilidadesTecnicas'
      />
    </Flex>
  )
}
