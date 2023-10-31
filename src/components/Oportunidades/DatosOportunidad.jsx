import { Box, Card, CardBody, CardHeader, Flex, Grid, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import { TagsDatosVacante } from '../Vacantes/TagsDatosVacante'

export function DatosOportunidad({ oportunidad }) {
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
                {oportunidad.nombre}
              </Heading>
              <Text>{oportunidad.descripcion}</Text>
            </Box>
          </Flex>
          <Text
            mt='1rem'
            opacity='0.6'>
            Postulado(a), la empresa en cuestión se pondrá en contacto contigo
          </Text>
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
                Detalles de la oportunidad
              </Heading>
              <Grid
                templateColumns='repeat(2, 1fr)'
                columnGap='4rem'
                rowGap='1rem'>
                <Text>
                  <strong>Dirección de la vacante:</strong> {oportunidad.ubicacion}
                </Text>
                <Text>
                  <strong>Número de plazas:</strong> {oportunidad.numeroPlazas}
                </Text>
                <Text>
                  <strong>Tipo de contrato:</strong> {oportunidad.tipoContrato}
                </Text>
                <Text>
                  <strong>Modalidad:</strong> {oportunidad.modalidad}
                </Text>
                <Text>
                  <strong>Días laborales:</strong> {oportunidad.diasLaborales}
                </Text>
                <Text>
                  <strong>Área:</strong> {oportunidad.area}
                </Text>
                <Text>
                  <strong>Salario:</strong> ${oportunidad.salarioMin} - ${oportunidad.salarioMaximo} - {oportunidad.periodoPago}
                </Text>
                <Text>
                  <strong>Jornada laboral:</strong> {oportunidad.jornadaLaboral}
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
                  <strong>Experiencia laboral:</strong> {oportunidad.experienciaLaboral}
                </Text>
                <Text>
                  <strong>Género:</strong> {oportunidad.genero}
                </Text>
                <TagsDatosVacante
                  titulo={'Idiomas'}
                  tags={oportunidad.idioma}
                />
                <Text>
                  <strong>Escolaridad:</strong> {oportunidad.escolaridad}
                </Text>
                <Text>
                  <strong>Edad:</strong> {oportunidad.edadMin} años a {oportunidad.edadMax} años
                </Text>
              </Grid>
            </Box>
            <TagsDatosVacante
              titulo={'Prestaciones'}
              tags={oportunidad.prestaciones}
            />
            <TagsDatosVacante
              titulo={'Habilidades blandas'}
              tags={oportunidad.habilidadesBlandas}
            />
            <TagsDatosVacante
              titulo={'Habilidades técnicas'}
              tags={oportunidad.habilidadesTecnicas}
            />
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  )
}
