import { Header } from '../components/Header'
import { Heading, Center, FormControl, Stack, StackDivider, Flex } from '@chakra-ui/react'
import { DatosPrincipalesForm } from '../components/Vacantes/DatosPrincipalesForm'
import { DatosRequisitosForm } from '../components/Vacantes/DatosRequisitosForm'
import { DatosPrestacionesForm } from '../components/Vacantes/DatosPrestacionesForm'
import { DatosHabilidadesBlandasForm } from '../components/Vacantes/DatosHabilidadesBlandasForm'
import { DatosHabilidadesTecnicasForm } from '../components/Vacantes/DatosHabilidadesTecnicasForm'
import { BotonesForm } from '../components/BotonesForm'

export function FormVacante() {
  return (
    <>
      <Header nombreDelGrupo={'Empresa'} />
      <Flex
        mt='2rem'
        gap='2rem'
        mb='2rem'>
        <FormControl
          p='6'
          bg='#fff'
          rounded='md'
          boxShadow='dark-lg'
          m='2rem auto 0'
          w={{ base: '80%', sm: '80%', md: '70%' }}>
          <Heading
            as='h2'
            size='lg'>
            <Center>Registro Vacante</Center>
          </Heading>
          <Stack
            divider={<StackDivider />}
            spacing='4'>
            <DatosPrincipalesForm />
            <DatosRequisitosForm />
            <DatosPrestacionesForm />
            <DatosHabilidadesBlandasForm />
            <DatosHabilidadesTecnicasForm />
          </Stack>
        </FormControl>
      </Flex>
      <BotonesForm
        botonCancelar={true}
        url={'/vacantes'}
      />
    </>
  )
}
