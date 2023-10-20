import { Center, FormControl, Heading } from '@chakra-ui/react'
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

  const handleInputChange = e => {}

  const handleSubmitForm = e => {
    e.preventDefault()
    guardarEmpresaEnDataStore({ datosEmpresa, email })
    console.log(datosEmpresa)
  }

  return (
    <>
      <Header />
      <FormControl
        onSubmit={handleSubmitForm}
        display='flex'
        flexDirection='column'
        gap='2rem'
        boxShadow='dark-lg'
        p='6'
        rounded='md'
        bg='#fff'
        m='2rem auto 0'
        w={{ base: '80%', sm: '80%', md: '70%' }}>
        <Heading
          as='h2'
          size='lg'>
          <Center>Registro Empresa</Center>
        </Heading>
        <DatosPrincipalesForm />
        <DatosRFCForm />
        <DatosUbicacionForm />
        <DatosSucursalForm />
      </FormControl>
      <BotonesForm onClick={handleSubmitForm} />
    </>
  )
}
