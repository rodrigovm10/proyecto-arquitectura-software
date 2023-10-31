import { Box, Card, CardBody, CardHeader, Flex, Grid, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import { TagsDatosVacante } from '../Vacantes/TagsDatosVacante'

export function DatosPostulado({ postulado }) {
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
                {postulado.nombre}
              </Heading>
              <Text>{postulado.descripcion}</Text>
            </Box>
          </Flex>
          <Heading
            as='h3'
            size='sm'
            color='#ea754b'>
            Postulado(a)
          </Heading>
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
                Detalles del postulado
              </Heading>
              <Grid
                templateColumns='repeat(2, 1fr)'
                columnGap='4rem'
                rowGap='1rem'>
                <Text>
                  <strong>Dirección de la vacante:</strong> {postulado.ubicacion}
                </Text>
                <Text>
                  <strong>Número de plazas:</strong> {postulado.numeroPlazas}
                </Text>
                <Text>
                  <strong>Tipo de contrato:</strong> {postulado.tipoContrato}
                </Text>
                <Text>
                  <strong>Modalidad:</strong> {postulado.modalidad}
                </Text>
                <Text>
                  <strong>Días laborales:</strong> {postulado.diasLaborales}
                </Text>
                <Text>
                  <strong>Área:</strong> {postulado.area}
                </Text>
                <Text>
                  <strong>Salario:</strong> ${postulado.salarioMin} - ${postulado.salarioMax} - {postulado.periodoPago}
                </Text>
                <Text>
                  <strong>Jornada laboral:</strong> {postulado.jornadaLaboral}
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
                  <strong>Experiencia laboral:</strong> {postulado.experienciaLaboral}
                </Text>
                <Text>
                  <strong>Género:</strong> {postulado.genero}
                </Text>
                <TagsDatosVacante
                  titulo={'Idiomas'}
                  tags={postulado.idioma}
                />
                <Text>
                  <strong>Escolaridad:</strong> {postulado.escolaridad}
                </Text>
                <Text>
                  <strong>Edad:</strong> {postulado.edadMin} años a {postulado.edadMax} años
                </Text>
              </Grid>
            </Box>
            <TagsDatosVacante
              titulo={'Prestaciones'}
              tags={postulado.prestaciones}
            />
            <TagsDatosVacante
              titulo={'Habilidades blandas'}
              tags={postulado.habilidadesBlandas}
            />
            <TagsDatosVacante
              titulo={'Habilidades técnicas'}
              tags={postulado.habilidadesTecnicas}
            />
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  )
}
