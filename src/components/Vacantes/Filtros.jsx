import { Box, Flex, FormLabel, Heading, Select, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, ButtonGroup, Button } from '@chakra-ui/react'
import { AREA_EMPRESA_FILTROS, MUNICIPIOS_FILTROS } from '../../constants/Datos'

export function Filtros() {
  return (
    <Box>
      <Heading
        as='h4'
        fontSize='2rem'>
        Filtros
      </Heading>
      <Flex
        gap='1rem'
        mt='1rem'>
        <Box>
          <FormLabel>Municipio</FormLabel>
          <Select
            focusBorderColor='#ea754b'
            name='municipio'
            // value={datosVacante.municipio}
            // onChange={handleInputChange}
          >
            {MUNICIPIOS_FILTROS.map((municipio, i) => (
              <option
                value={municipio}
                key={i}>
                {municipio}
              </option>
            ))}
          </Select>
        </Box>
        <Box>
          <FormLabel>Área</FormLabel>
          <Select
            placeholder='Seleccione el área de la empresa'
            name='area'
            focusBorderColor='#ea754b'
            // onChange={handleInputChange}
            // value={datosVacante.area}
          >
            {AREA_EMPRESA_FILTROS.map((area, i) => (
              <option
                value={area}
                key={i}>
                {area}
              </option>
            ))}
          </Select>
        </Box>
        <Box alignSelf='end'>
          <FormLabel>Salario Mínimo</FormLabel>
          <NumberInput
            focusBorderColor='#ea754b'
            defaultValue={0}
            min={0}
            max={100000}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
        <Box alignSelf='end'>
          <FormLabel>Salario Máximo</FormLabel>
          <NumberInput
            focusBorderColor='#ea754b'
            defaultValue={0}
            min={0}
            max={100000}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
      </Flex>

      <ButtonGroup
        mt='2rem'
        spacing='6'>
        <Button
          color='white'
          bg='#ea754b'
          _hover={{ bg: '#ff964f' }}>
          Buscar
        </Button>
        <Button
          bg='#181c24'
          color='#fff'>
          Limpiar Filtros
        </Button>
      </ButtonGroup>
    </Box>
  )
}
