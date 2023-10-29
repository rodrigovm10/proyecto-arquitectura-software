import { Card, CardBody, CardHeader, Flex, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react'
import { LiaAddressCardSolid, LiaCalendarCheckSolid, LiaClockSolid, LiaMoneyBillWaveAltSolid, LiaSchoolSolid } from 'react-icons/lia'
import { SinVacantes } from './SinVacantes'
import { useState } from 'react'
import { DatosVacanteBDT } from './DatosVacanteBDT'

export function VacanteBDT({ vacantes }) {
  const [isVacanteSelected, setIsVacanteSelected] = useState(false)
  const [vacanteSelected, setVacanteSelected] = useState()
  const handleClickOpenVacante = vacante => {
    console.log(vacante)
    setVacanteSelected(vacante)
    setIsVacanteSelected(true)
  }
  return (
    <Grid
      templateColumns={{ md: '1fr', xl: 'repeat(2, 1fr)' }}
      m='1rem 4rem 2rem'
      gap='2rem'>
      <GridItem>
        {vacantes.map(vacante => {
          const { nombre, nombreEmpresa, area, diasLaborales, escolaridad, salarioMin, salarioMax, modalidad, id } = vacante
          return (
            <Card
              onClick={() => handleClickOpenVacante(vacante)}
              borderColor='transparent transparent transparent #ea754b'
              borderWidth='0.2rem'
              boxShadow='xl'
              cursor='pointer'
              key={id}
              borderRadius='sm'
              p='2'
              transition='transform 0.3s'
              _hover={{ transform: 'scale(1.05)' }}>
              <CardHeader>
                <Heading
                  as='h3'
                  size='md'
                  p='0'>
                  {nombre}
                </Heading>
              </CardHeader>
              <CardBody>
                <Stack>
                  <Flex
                    gap='1rem'
                    alignItems='center'>
                    <LiaAddressCardSolid />
                    <Text>{area}</Text>
                  </Flex>
                  <Flex
                    gap='1rem'
                    alignItems='center'>
                    <LiaMoneyBillWaveAltSolid />
                    <Text>{`$${salarioMin} - $${salarioMax}`}</Text>
                  </Flex>
                  <Flex
                    gap='1rem'
                    alignItems='center'>
                    <LiaClockSolid />
                    <Text>{modalidad}</Text>
                  </Flex>
                  <Flex
                    gap='1rem'
                    alignItems='center'>
                    <LiaCalendarCheckSolid />
                    <Text>{diasLaborales}</Text>
                  </Flex>
                  <Flex
                    gap='1rem'
                    alignItems='center'>
                    <LiaSchoolSolid />
                    <Text>{escolaridad}</Text>
                  </Flex>
                  <Heading
                    as='h3'
                    size='md'
                    p='0'>
                    {nombreEmpresa}
                  </Heading>
                </Stack>
              </CardBody>
            </Card>
          )
        })}
      </GridItem>
      {isVacanteSelected ? <DatosVacanteBDT vacante={vacanteSelected} /> : <SinVacantes hasButton={false}>Selecciona una vacante para visualizar su información</SinVacantes>}
    </Grid>
  )
}
