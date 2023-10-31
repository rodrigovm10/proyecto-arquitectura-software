import { Avatar, Box, Card, CardBody, CardHeader, Flex, Grid, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import { TagsDatosVacante } from '../Vacantes/TagsDatosVacante'
import { useJobsApplications } from '../../hooks/useJobsApplications'
import { useEffect, useState } from 'react'

export function DatosPostulado({ postulado }) {
  const { getBDT } = useJobsApplications()
  const [bdt, setBdt] = useState()

  useEffect(() => {
    const fetchBDT = async () => {
      const newBdt = await getBDT({ emailBDT: postulado.emailBDT })
      setBdt(newBdt)
    }
    fetchBDT()
  }, [postulado])
  return (
    <Flex justifyContent='center'>
      <Card
        boxShadow='2xl'
        h='40rem'
        overflowY='scroll'>
        <CardHeader>
          <Flex
            justifyContent='space-between'
            gap='2rem'>
            <Box>
              {' '}
              <Avatar
                bg='gray.400'
                color='white'
                alt={'foto postulado'}
                src={postulado.imagenBDTUrl}
                sx={{ width: '8rem', height: '8rem', fontSize: '8rem' }}
              />
            </Box>
            <Box>
              <Heading
                as='h2'
                size='lg'>
                {postulado.nombreBDT} {postulado.apellidosBDT}
              </Heading>
              <Text
                mt='1rems'
                opacity='0.6'>
                Pongasé en contacto con el usuario para continuar con su proceso de contratación
              </Text>
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
                Detalles del postulado
              </Heading>
              <Grid
                templateColumns='repeat(2, 1fr)'
                columnGap='4rem'
                rowGap='1rem'>
                <Text>
                  <strong>Escolaridad:</strong> {postulado.escolaridadBDT}
                </Text>
                <Text>
                  <strong>Género:</strong> {postulado.generoBDT}
                </Text>
              </Grid>
            </Box>
            {/* <Box>
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
            </Box> */}
            <TagsDatosVacante
              titulo={'Idiomas del usuario'}
              tags={bdt?.idioma}
            />
            <TagsDatosVacante
              titulo={'Habilidades blandas del usuario'}
              tags={bdt?.habilidadesBlandas}
            />
            <TagsDatosVacante
              titulo={'Habilidades técnicas del usuario'}
              tags={bdt?.habilidadesTecnicas}
            />
            <TagsDatosVacante
              titulo={'Prestaciones de la vacante'}
              tags={postulado.prestaciones}
            />
            <TagsDatosVacante
              titulo={'Habilidades blandas de la vacante'}
              tags={postulado.habilidadesBlandas}
            />
            <TagsDatosVacante
              titulo={'Habilidades técnicas de la vacante'}
              tags={postulado.habilidadesTecnicas}
            />
          </Stack>
        </CardBody>
        <Flex>
          <a
            href={postulado.pdfImagenUrl}
            download='nombre-del-archivo.pdf'>
            Descargar CV
          </a>
        </Flex>
      </Card>
    </Flex>
  )
}
