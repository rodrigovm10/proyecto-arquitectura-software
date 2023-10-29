import { useEffect } from 'react'
import { Header } from '../../components/Header'
import { useSession } from '../../hooks/useSession'
import { Box, Button, Card, CardBody, CardHeader, Flex, Grid, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import { TagsDatosVacante } from '../../components/Vacantes/TagsDatosVacante'
import { MenuVacante } from '../../components/Vacantes/Menu'
import { useParams } from 'react-router-dom'
import { useManageVacantes } from '../../hooks/useManageVacantes'
import { Footer } from '../../landing/Footer'
import { useNavigate } from 'react-router-dom'
import { ButtonVacante } from '../../components/ButtonVacante'

export function VacanteDatos() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getDataSession } = useSession('Empresa')
  const { listVacante, vacante } = useManageVacantes()

  useEffect(() => {
    listVacante(id)
    getDataSession()
  }, [])

  return (
    <Box>
      <Header nombreDelGrupo={'Empresa'} />
      <Flex
        mt='2rem'
        mx='8rem'
        mb='2rem'
        justifyContent='center'>
        <Card boxShadow='2xl'>
          <CardHeader>
            <Flex justifyContent='space-between'>
              <Box>
                <Heading
                  as='h2'
                  size='lg'>
                  {vacante.nombre}
                </Heading>
                <Text>{vacante.descripcion}</Text>
              </Box>
              <MenuVacante
                vacanteId={id}
                visible={vacante.visible}
              />
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
                    <strong>Dirección de la vacante:</strong> {vacante.ubicacion}
                  </Text>
                  <Text>
                    <strong>Número de plazas:</strong> {vacante.numeroPlazas}
                  </Text>
                  <Text>
                    <strong>Tipo de contrato:</strong> {vacante.tipoContrato}
                  </Text>
                  <Text>
                    <strong>Modalidad:</strong> {vacante.modalidad}
                  </Text>
                  <Text>
                    <strong>Días laborales:</strong> {vacante.diasLaborales}
                  </Text>
                  <Text>
                    <strong>Área:</strong> {vacante.area}
                  </Text>
                  <Text>
                    <strong>Salario:</strong> ${vacante.salarioMin} - ${vacante.salarioMax}
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
                  rowGap='1rem'>
                  <Text>
                    <strong>Experiencia laboral:</strong> {vacante.experienciaLaboral}
                  </Text>
                  <Text>
                    <strong>Género:</strong> {vacante.genero}
                  </Text>
                  <TagsDatosVacante
                    titulo={'Idiomas'}
                    tags={vacante.idioma}
                  />
                  <Text>
                    <strong>Escolaridad:</strong> {vacante.escolaridad}
                  </Text>
                  <Text>
                    <strong>Edad:</strong> {vacante.edadMin} años a {vacante.edadMax} años
                  </Text>
                </Grid>
              </Box>
              <TagsDatosVacante
                titulo={'Prestaciones'}
                tags={vacante.prestaciones}
              />
              <TagsDatosVacante
                titulo={'Habilidades blandas'}
                tags={vacante.habilidadesBlandas}
              />
              <TagsDatosVacante
                titulo={'Habilidades técnicas'}
                tags={vacante.habilidadesTecnicas}
              />
            </Stack>
          </CardBody>
        </Card>
      </Flex>
      <Flex
        justifyContent='center'
        alignItems='start'>
        <ButtonVacante
          mb='2rem'
          to='/vacantes'>
          Volver a las vacantes
        </ButtonVacante>
      </Flex>
      <Footer />
    </Box>
  )
}
