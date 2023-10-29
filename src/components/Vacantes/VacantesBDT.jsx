import { Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react'
import { useManageVacantes } from '../../hooks/useManageVacantes'
import { useSession } from '../../hooks/useSession'
import { useEffect } from 'react'
import { VacanteBDT } from './VacanteBDT'

export function VacantesBDT() {
  const { listVacantes, vacantesVisibles } = useManageVacantes()
  const { getDataSession } = useSession('Empresa')

  useEffect(() => {
    getDataSession()
    listVacantes()
  }, [])

  return (
    <>
      <Stack
        mt='2rem'
        ml='2rem'>
        <Heading
          as='h2'
          size='2xl'>
          Vacantes
        </Heading>
        <Text fontSize='xl'>En esta sección podrás visualizar las vacantes y postularte a ellas</Text>
        <Grid>
          <GridItem>
            <Text
              fontSize='md'
              as='i'
              opacity='0.8'>
              {`${vacantesVisibles.length} resultados`}
            </Text>
          </GridItem>
        </Grid>
      </Stack>
      <VacanteBDT vacantes={vacantesVisibles} />
    </>
  )
}
