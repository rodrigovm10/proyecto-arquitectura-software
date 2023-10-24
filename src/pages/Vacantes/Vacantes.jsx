import { useEffect } from 'react'
import { Header } from '../../components/Header'
import { useSession } from '../../hooks/useSession'
import { Flex, Grid, GridItem, Heading, Select, Stack, Text } from '@chakra-ui/react'
import { SinVacantes } from '../../components/Vacantes/SinVacantes'
import { Vacante } from '../../components/Vacantes/Vacante'
import { ButtonVacante } from '../../components/ButtonVacante'

export function Vacantes() {
  const { getDataSession } = useSession('Empresa')
  useEffect(() => {
    getDataSession()
  }, [])

  return (
    <>
      <Header nombreDelGrupo={'Empresa'} />
      <Stack
        mt='2rem'
        ml='2rem'>
        <Heading
          as='h2'
          size='2xl'>
          Vacantes
        </Heading>
        <Text fontSize='xl'>En esta sección podrás administrar tus vacantes</Text>
        <Grid>
          <GridItem>
            <Text
              fontSize='md'
              as='i'
              opacity='0.8'>
              3 resultados
            </Text>
          </GridItem>
          <GridItem>
            <Flex
              flexDir='column'
              alignItems='end'
              gap='1rem'
              mr='2rem'>
              <ButtonVacante w='10rem'>Crear una vacante</ButtonVacante>

              <Select w='12rem'>
                <option value='activas'>Vacantes activas</option>
                <option value='inactivas'>Vacantes inactivas</option>
              </Select>
            </Flex>
          </GridItem>
        </Grid>
      </Stack>
      {/*<SinVacantes />*/}
      <Vacante />
    </>
  )
}
