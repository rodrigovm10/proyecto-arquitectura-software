import { Box, Button, Flex, FormLabel, Heading, Select, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react'
import { Prestaciones } from '../../constants/Datos'
import { useRegisterVacante } from '../../hooks/useRegisterVacante'
import { Tags } from './Tags'

export function DatosPrestacionesForm() {
  const { datosVacante, errors, handleInputChange, handleClickSave, stringToSave } = useRegisterVacante()

  return (
    <Flex
      gap='1rem'
      direction='column'
      justify='space-between'>
      <Heading
        as='h3'
        size='md'>
        Prestaciones
      </Heading>
      <Flex
        gap='2rem'
        flexDirection={{ base: 'column', sm: 'column', md: 'row' }}>
        <Box flex='2'>
          <FormLabel>Prestaciones</FormLabel>
          <Select
            placeholder='Seleccione las prestaciones requeridas'
            focusBorderColor='#ea754b'
            name='prestaciones'
            value={stringToSave}
            onChange={handleInputChange}>
            {Prestaciones.map((prestaciones, i) => (
              <option
                value={prestaciones}
                key={i}>
                {prestaciones}
              </option>
            ))}
          </Select>
        </Box>
        <Box
          alignSelf='end'
          w={{ base: '100%', sm: '100%', md: 'auto' }}>
          <Button
            colorScheme='facebook'
            w={{ base: '100%', sm: '100%', md: 'auto' }}
            onClick={() => {
              handleClickSave({ name: 'prestaciones', value: stringToSave })
            }}>
            Agregar prestación
          </Button>
        </Box>
      </Flex>
      <Tags
        array={datosVacante.prestaciones}
        arrayName='prestaciones'
      />
    </Flex>
  )
}
