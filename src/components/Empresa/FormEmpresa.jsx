import { Center, FormControl, Heading } from '@chakra-ui/react'
import { Nav } from '../../pages/Nav'
import { DatosPrincipalesForm } from './DatosPrincipalesForm'
import { DatosRFCForm } from './DatosRFCForm'
import { DatosUbicacionForm } from './DatosUbicacionForm'
import { DatosSucursalForm } from './DatosSucursalForm'
import { BotonesForm } from '../BotonesForm'
import { guardarEmpresaEnDataStore } from '../../services/CrearEmpresas'
import { useRegister } from '../../hooks/useRegister'

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
      <Nav />
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
        w={{ base: '80%', sm: '80%', md: '55%' }}>
        <Heading
          as='h2'
          size='lg'>
          <Center>Registro Empresa</Center>
        </Heading>
        <DatosPrincipalesForm errors={errors} />
        <DatosRFCForm
          datosEmpresa={datosEmpresa}
          handleInputChange={handleInputChange}
        />
        <DatosUbicacionForm />
        <DatosSucursalForm
          datosEmpresa={datosEmpresa}
          handleInputChange={handleInputChange}
        />
      </FormControl>
      <BotonesForm onClick={handleSubmitForm} />
    </>
  )
}
