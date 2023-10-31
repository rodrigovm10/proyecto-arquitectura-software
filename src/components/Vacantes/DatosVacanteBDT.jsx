import { Box, Button, Card, CardBody, CardHeader, Flex, Grid, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import { TagsDatosVacante } from './TagsDatosVacante'
import { useAlerts } from '../../hooks/useAlerts'
import { useJobsApplications } from '../../hooks/useJobsApplications'
import { useSession } from '../../hooks/useSession'
import { useEffect, useState } from 'react'

export function DatosVacanteBDT({ vacante }) {
  const { applicationSubmissionAlert } = useAlerts()
  const { dataSession } = useSession()
  const { getBDT } = useJobsApplications()
  const [bdt, setBdt] = useState()
  const handleClickApplicationSubmission = () => {
    applicationSubmissionAlert({ vacante })
  }
  useEffect(() => {
    const getBDTVacante = async () => {
      const newBdt = await getBDT({ emailBDT: dataSession.email })
      setBdt(newBdt)
      console.log(newBdt)
    }
    getBDTVacante()
  }, [])
  return (
    <Flex justifyContent='center'>
      <Card
        boxShadow='2xl'
        h='40rem'
        overflowY='scroll'>
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
          </Flex>
          {bdt?.buscaEmpleo ? (
            <Button
              mt='1rem'
              bg='#ea754b'
              color='#fff'
              _hover={{ bg: '#ff964f' }}
              onClick={handleClickApplicationSubmission}>
              Postularse
            </Button>
          ) : (
            <Flex flexDir='column'>
              <Text opacity='0.6'>Postulación no disponible</Text>
              <Text opacity='0.6'>Lo sentimos, actualmente tu perfil indica que no estás buscando empleo. Si deseas postularte a esta vacante, por favor cambia tu estado a "¿Buscas empleo?" en tu perfil.</Text>
            </Flex>
          )}
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
                  <strong>Salario:</strong> ${vacante.salarioMin} - ${vacante.salarioMax} - {vacante.periodoPago}
                </Text>
                <Text>
                  <strong>Jornada laboral:</strong> {vacante.jornadaLaboral}
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
  )
}
