import { Box, Card, CardBody, CardHeader, Flex, Grid, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import { TagsDatosVacante } from './TagsDatosVacante'

export function DatosVacanteBDT({ vacante }) {
  return (
    <Flex
      justifyContent='center'
      overflowY='scroll'>
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
  )
}
