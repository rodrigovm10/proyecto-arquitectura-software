import { Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react'
import { useManageVacantes } from '../../hooks/useManageVacantes'
import { useEffect } from 'react'
import { VacanteBDT } from './VacanteBDT'
import { Filtros } from './Filtros'
import { useSession } from '../../hooks/useSession'

export function VacantesBDT() {
  const { listVacantes, vacantesVisibles } = useManageVacantes()
  const { dataSession } = useSession()

  useEffect(() => {
    listVacantes({ emailEmpresa: dataSession.email })
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
        <Text
          fontSize='xl'
          mb='2rem'>
          En esta sección podrás visualizar las vacantes y postularte a ellas
        </Text>
        <Filtros />
        <Grid mt='2rem'>
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
