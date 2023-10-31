import { Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react'
import { useJobsApplications } from '../../hooks/useJobsApplications'
import { useEffect } from 'react'
import { useSession } from '../../hooks/useSession'
import { Oportunidad } from './Oportunidad'

export function Oportunidades() {
  const { listOportunidadesBDT, oportunidades } = useJobsApplications()
  const { dataSession } = useSession()

  useEffect(() => {
    listOportunidadesBDT({ emailBDT: dataSession.email })
  }, [])

  return (
    <>
      <Stack
        mt='2rem'
        ml='2rem'>
        <Heading
          as='h2'
          size='2xl'>
          Oportunidades laborales
        </Heading>
        <Text
          fontSize='xl'
          mb='2rem'>
          En esta sección podrás visualizar las vacantes a las que estas postulado
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
      <Oportunidad oportunidades={oportunidades} />
    </>
  )
}
