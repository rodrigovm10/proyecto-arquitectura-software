import { Center, Flex, FormControl, Heading, Stack, StackDivider } from '@chakra-ui/react'
import { DatosPrincipalesForm } from './DatosPrincipalesForm'
import { DatosRFCForm } from './DatosRFCForm'
import { DatosUbicacionForm } from './DatosUbicacionForm'
import { DatosSucursalForm } from './DatosSucursalForm'
import { BotonesForm } from '../BotonesForm'
import { guardarEmpresaEnDataStore } from '../../services/CrearEmpresas'
import { useRegister } from '../../hooks/useRegister'
import { Header } from '../Header'

export function FormEmpresa({ email }) {
  const { datosEmpresa, errors } = useRegister()

  const handleSubmitForm = e => {
    e.preventDefault()
    guardarEmpresaEnDataStore({ datosEmpresa, email })
    console.log(datosEmpresa)
  }

  return (
    <>
      <Header />
      <Flex
        mt='2rem'
        gap='2rem'
        mb='2rem'>
        <FormControl
          onSubmit={handleSubmitForm}
          p='6'
          bg='#fff'
          rounded='md'
          boxShadow='dark-lg'
          m='2rem auto 0'
          w={{ base: '80%', sm: '80%', md: '70%' }}>
          <Heading
            as='h2'
            size='lg'>
            <Center>Registro Empresa</Center>
          </Heading>
          <Stack
            divider={<StackDivider />}
            spacing='4'>
            <DatosPrincipalesForm />
            <DatosRFCForm />
            <DatosUbicacionForm />
            <DatosSucursalForm />
          </Stack>
        </FormControl>
      </Flex>

      <BotonesForm onClick={handleSubmitForm} />
    </>
  )
}
