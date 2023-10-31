import { Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react'
import { useJobsApplications } from '../../hooks/useJobsApplications'
import { useEffect } from 'react'
import { useSession } from '../../hooks/useSession'
import { Postulado } from './Postulado'

export function Postulados() {
  const { listOportunidadesEmpresa, oportunidades } = useJobsApplications()
  const { dataSession } = useSession('Empresa')

  useEffect(() => {
    listOportunidadesEmpresa({ emailEmpresa: dataSession.email })
  }, [])

  return (
    <>
      <Stack
        mt='2rem'
        ml='2rem'>
        <Heading
          as='h2'
          size='2xl'>
          Postulados
        </Heading>
        <Text
          fontSize='xl'
          mb='2rem'>
          En esta sección podrás visualizar las vacantes a los que los usuarios se han postulado
        </Text>
        <Grid mt='2rem'>
          <GridItem>
            <Text
              fontSize='md'
              as='i'
              opacity='0.8'>
              {`${oportunidades?.length} resultados`}
            </Text>
          </GridItem>
        </Grid>
      </Stack>
      <Postulado postulados={oportunidades} />
    </>
  )
}
