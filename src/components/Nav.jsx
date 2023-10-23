import { Flex, Spacer, Link, Image, ButtonGroup } from '@chakra-ui/react'
import logo from '../img/logo.png'
import { useSession } from '../hooks/useSession'

export function Nav({ nombreDelGrupo }) {
  const nombreDelGrupoNew = '' || nombreDelGrupo
  const { logOut, dataSession, nombreGrupo } = useSession(nombreDelGrupoNew)
  console.log(nombreGrupo)
  console.log(dataSession)

  return (
    <Flex>
      <Link href='/'>
        <Image
          src={logo}
          width={200}
        />
      </Link>
      <Spacer />
      <Flex gap={3}>
        <Link
          color='#fff'
          href='/'>
          Inicio
        </Link>
        {dataSession.session && nombreGrupo === 'Empresa' && (
          <ButtonGroup>
            <Link
              color='#fff'
              href='/vacantes'>
              Vacantes
            </Link>
            <Link
              color='#fff'
              onClick={logOut}>
              Logout
            </Link>
          </ButtonGroup>
        )}
        {dataSession?.session === false && (
          <ButtonGroup>
            <Link
              color='#fff'
              href='/login-bdt'>
              Buscadores de Trabajo
            </Link>
            <Link
              color='#fff'
              href='/login-empresa'>
              Empresas
            </Link>
          </ButtonGroup>
        )}
        {dataSession?.session && nombreGrupo === 'trabajador' && (
          <ButtonGroup>
            <Link
              color='#fff'
              href='#'>
              Vacantes
            </Link>
            <Link
              color='#fff'
              onClick={logOut}>
              Logout
            </Link>
          </ButtonGroup>
        )}
      </Flex>
    </Flex>
  )
}
