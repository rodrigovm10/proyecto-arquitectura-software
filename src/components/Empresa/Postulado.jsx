import { Card, CardBody, CardHeader, Flex, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { LiaAddressCardSolid, LiaCalendarCheckSolid, LiaClockSolid, LiaMailBulkSolid, LiaMoneyBillWaveAltSolid, LiaPhoneAltSolid, LiaSchoolSolid } from 'react-icons/lia'
import { SinVacantes } from '../Vacantes/SinVacantes'
import { DatosPostulado } from './DatosPostulado'
import { useSession } from '../../hooks/useSession'

export function Postulado({ postulados }) {
  const { getDataSession } = useSession('empresa')
  const [isPostuladoSelected, setIsPostuladoSelected] = useState(false)
  const [postuladoSelected, setPostuladoSelected] = useState()

  const handleClickOpenVacante = oportunidad => {
    getDataSession()
    setPostuladoSelected(oportunidad)
    setIsPostuladoSelected(true)
  }
  return (
    <Grid
      templateColumns={{ md: '1fr', xl: 'repeat(2, 1fr)' }}
      m='1rem 4rem 2rem'
      gap='2rem'>
      <GridItem>
        <Flex
          gap='2rem'
          flexDir='column'>
          {postulados?.map(postulado => {
            const { nombre, area, diasLaborales, escolaridad, salarioMin, salarioMaximo, modalidad, id, nombreBDT, emailBDT, apellidosBDT, telefonoBDT } = postulado
            return (
              <Card
                onClick={() => handleClickOpenVacante(postulado)}
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
                    Usuario: {nombreBDT} {apellidosBDT}
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Stack>
                    <Flex
                      gap='1rem'
                      alignItems='center'>
                      <LiaMailBulkSolid />
                      <Text>{emailBDT}</Text>
                    </Flex>
                    <Flex
                      gap='1rem'
                      alignItems='center'>
                      <LiaPhoneAltSolid />
                      <Text>{telefonoBDT}</Text>
                    </Flex>
                    <Heading
                      as='h3'
                      size='md'
                      p='0'>
                      Vacante: {nombre}
                    </Heading>
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
                      <Text>{`$${salarioMin} - $${salarioMaximo}`}</Text>
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
                  </Stack>
                </CardBody>
              </Card>
            )
          })}
        </Flex>
      </GridItem>
      <GridItem alignSelf='start'>{isPostuladoSelected ? <DatosPostulado postulado={postuladoSelected} /> : <SinVacantes hasButton={false}>Selecciona al usuario para ver su información e información de la vacante</SinVacantes>}</GridItem>
    </Grid>
  )
}
