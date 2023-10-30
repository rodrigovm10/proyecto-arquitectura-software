import { Box, Button, Flex, FormLabel, Heading, Select } from '@chakra-ui/react'
import { HabilidadesBlandas } from '../../constants/Datos'
import { useRegisterVacante } from '../../hooks/useRegisterVacante'
import { Tags } from './Tags'

export function DatosHabilidadesBlandasForm() {
  const { datosVacante, errors, handleInputChange, handleClickSave, stringToSave } = useRegisterVacante()

  return (
    <Flex
      gap='1rem'
      direction='column'
      justify='space-between'>
      <Heading
        as='h3'
        size='md'>
        Habilidades blandas
      </Heading>
      <Flex
        gap='2rem'
        flexDirection={{ base: 'column', sm: 'column', md: 'row' }}>
        <Box flex='2'>
          <Box>
            <FormLabel>Habilidades blandas</FormLabel>
            <Select
              placeholder='Seleccione las habilidades blandas requeridas'
              name='habilidadesBlandas'
              focusBorderColor='#ea754b'
              value={stringToSave}
              onChange={handleInputChange}>
              {HabilidadesBlandas.map((habilidadesBlandas, i) => (
                <option
                  key={i}
                  value={habilidadesBlandas}>
                  {habilidadesBlandas}
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
              handleClickSave({ name: 'habilidadesBlandas', value: stringToSave })
            }}>
            Agregar habilidad
          </Button>
        </Box>
      </Flex>
      <Tags
        array={datosVacante.habilidadesBlandas}
        arrayName='habilidadesBlandas'
      />
    </Flex>
  )
}
