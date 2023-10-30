import { Header } from '../components/Header'
import { Heading, Center, FormControl, Stack, StackDivider, Flex } from '@chakra-ui/react'
import { DatosPrincipalesForm } from '../components/Vacantes/DatosPrincipalesForm'
import { DatosRequisitosForm } from '../components/Vacantes/DatosRequisitosForm'
import { DatosPrestacionesForm } from '../components/Vacantes/DatosPrestacionesForm'
import { DatosHabilidadesBlandasForm } from '../components/Vacantes/DatosHabilidadesBlandasForm'
import { DatosHabilidadesTecnicasForm } from '../components/Vacantes/DatosHabilidadesTecnicasForm'
import { BotonesForm } from '../components/BotonesForm'
import { useRegisterVacante } from '../hooks/useRegisterVacante'
import { useSession } from '../hooks/useSession'
import { useManageVacantes } from '../hooks/useManageVacantes'
import { basicAlert } from '../utilities/Alerts'
import { useEffect } from 'react'
import { DATOS_VACANTE_STATE_INITIAL } from '../constants/EstadosIniciales'
import { Footer } from '../landing/Footer'
import { DatosUbicacionForm } from '../components/Vacantes/DatosUbicacionForm'

export function FormVacante() {
  const { dataSession, getDataSession, setDataSession } = useSession('Empresa')
  const { datosVacante, somePropertyIsNull } = useRegisterVacante()
  const { saveVacanteOnDataStore } = useManageVacantes({ emailEmpresa: dataSession.email })

  useEffect(() => {
    getDataSession()
    console.log(dataSession)
  }, [datosVacante])

  const handleSubmitForm = e => {
    e.preventDefault()
    if (somePropertyIsNull(datosVacante)) {
      basicAlert({ title: 'Error al guardar vacante', icon: 'error', text: 'No puede almacenar una vacante con campos vacíos.' })
      return
    }
    saveVacanteOnDataStore({ datosVacante, email: dataSession.email, idOwner: dataSession.idOwner })
    setDataSession(DATOS_VACANTE_STATE_INITIAL)
    console.log(datosVacante)
  }

  return (
    <>
      <Header nombreDelGrupo={'Empresa'} />
      <Flex
        mt='2rem'
        gap='2rem'
        mb='2rem'>
        <FormControl
          p='6'
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
            <DatosUbicacionForm />
            <DatosPrestacionesForm />
            <DatosHabilidadesBlandasForm />
            <DatosHabilidadesTecnicasForm />
          </Stack>
        </FormControl>
      </Flex>
      <BotonesForm
        onClick={handleSubmitForm}
        botonCancelar={true}
        url={'/vacantes'}
      />
      <Footer />
    </>
  )
}
