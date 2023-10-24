import { Card, CardBody, CardHeader, Flex, Grid, GridItem, Heading, Link } from '@chakra-ui/react' // Asegúrate de importar los componentes necesarios de Chakra UI
import { vacantes } from '../../mockups/vacante'
import { LiaAddressCardSolid, LiaCalendarCheckSolid, LiaClockSolid, LiaMoneyBillWaveAltSolid, LiaSchoolSolid } from 'react-icons/lia'

export function Vacante() {
  return (
    <Link
      href='/vacantes/1'
      target='_blank'>
      <Flex
        mt='2rem'
        flexDirection='column'
        gap='2rem'
        mb='2rem'>
        {vacantes.map((vacante, i) => {
          const { nombreVacante: nombre, area, diasLaborales, escolaridad, salario, tipoEmpleo } = vacante
          return (
            <Card
              borderColor='#ea754b'
              borderWidth='1.5px'
              boxShadow='xl'
              cursor='pointer'
              m='0 3rem'
              key={i}
              borderRadius='lg'
              p='2'
              transition='transform 0.3s'
              _hover={{ transform: 'scale(1.05)' }}>
              <CardHeader>
                <Heading
                  color='#000'
                  as='h3'
                  size='md'>
                  {nombre}
                </Heading>
              </CardHeader>
              <CardBody>
                <Grid templateColumns='repeat(2, 1fr)'>
                  <GridItem>
                    <Flex
                      gap='1rem'
                      alignItems='center'>
                      <LiaAddressCardSolid />
                      {area}
                    </Flex>
                  </GridItem>
                  <GridItem>
                    <Flex
                      gap='1rem'
                      alignItems='center'>
                      <LiaCalendarCheckSolid />
                      {diasLaborales}
                    </Flex>
                  </GridItem>
                  <GridItem>
                    <Flex
                      gap='1rem'
                      alignItems='center'>
                      <LiaSchoolSolid />
                      {escolaridad}
                    </Flex>
                  </GridItem>
                  <GridItem>
                    <Flex
                      gap='1rem'
                      alignItems='center'>
                      <LiaMoneyBillWaveAltSolid height='1.5em' />
                      {`$${salario}`}
                    </Flex>
                  </GridItem>
                  <GridItem>
                    <Flex
                      gap='1rem'
                      alignItems='center'>
                      <LiaClockSolid />
                      {tipoEmpleo}
                    </Flex>
                  </GridItem>
                </Grid>
              </CardBody>
            </Card>
          )
        })}
      </Flex>
    </Link>
  )
}
