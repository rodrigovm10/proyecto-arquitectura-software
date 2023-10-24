import { useEffect } from 'react'
import { Header } from '../../components/Header'
import { useSession } from '../../hooks/useSession'
import { Box, Card, CardBody, CardHeader, Flex, Grid, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import { vacanteEjemplo } from '../../mockups/vacante'
import { TagsDatosVacante } from '../../components/Vacantes/TagsDatosVacante'
import { MenuVacante } from '../../components/Vacantes/Menu'

export function VacanteDatos() {
  const { getDataSession } = useSession('Empresa')
  useEffect(() => {
    getDataSession()
  }, [])
  return (
    <Box>
      <Header nombreDelGrupo={'Empresa'} />
      <Flex
        mt='2rem'
        mx='8rem'
        justifyContent='center'>
        <Card boxShadow='2xl'>
          <CardHeader>
            <Flex>
              <Box>
                <Heading
                  color='#000'
                  as='h2'
                  size='lg'>
                  {vacanteEjemplo.nombreVacante}
                </Heading>
                <Text>{vacanteEjemplo.descripcion}</Text>
              </Box>
              <MenuVacante />
            </Flex>
          </CardHeader>
          <CardBody>
            <Stack
              divider={<StackDivider />}
              spacing='4'>
              <Box>
                <Heading
                  color='#ea754b'
                  as='h3'
                  size='md'>
                  Detalles de la vacante
                </Heading>
                <Grid
                  templateColumns='repeat(2, 1fr)'
                  columnGap='4rem'
                  rowGap='1rem'>
                  <Text>
                    <strong>Dirección de la vacante:</strong> {vacanteEjemplo.direccionEmpresa}
                  </Text>
                  <Text>
                    <strong>Número de plazas:</strong> {vacanteEjemplo.numeroPlazas}
                  </Text>
                  <Text>
                    <strong>Jornada laboral:</strong> {vacanteEjemplo.jornadaLaboral}
                  </Text>
                  <Text>
                    <strong>Modalidad:</strong> {vacanteEjemplo.modalidad}
                  </Text>
                  <Text>
                    <strong>Días laborales:</strong> {vacanteEjemplo.diasLaborales}
                  </Text>
                  <Text>
                    <strong>Área:</strong> {vacanteEjemplo.area}
                  </Text>
                </Grid>
              </Box>
              <Box>
                <Heading
                  color='#ea754b'
                  as='h3'
                  size='md'>
                  Requisitos
                </Heading>
                <Grid
                  templateColumns='repeat(2, 1fr)'
                  columnGap='4rem'
                  roGap='1rem'>
                  <Text>
                    <strong>Experiencia laboral:</strong> {vacanteEjemplo.experienciaLaboral}
                  </Text>
                  <Text>
                    <strong>Género:</strong> {vacanteEjemplo.generoBDT}
                  </Text>
                  <Text>
                    <strong>Idiomas:</strong> {vacanteEjemplo.Idioma.map(idioma => idioma + ' - ')}
                  </Text>
                  <Text>
                    <strong>Escolaridad:</strong> {vacanteEjemplo.escolaridad}
                  </Text>
                  <Text>
                    <strong>Edad:</strong> {vacanteEjemplo.edadMin} años a {vacanteEjemplo.edadMax} años
                  </Text>
                </Grid>
              </Box>
              <TagsDatosVacante
                titulo={'Prestaciones'}
                tags={vacanteEjemplo.prestaciones}
              />
              <TagsDatosVacante
                titulo={'Habilidades blandas'}
                tags={vacanteEjemplo.habilidadesBlandas}
              />
              <TagsDatosVacante
                titulo={'Habilidades técnicas'}
                tags={vacanteEjemplo.habilidadesTecnicas}
              />
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  )
}
