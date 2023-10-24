import { Flex, Spacer, Link, Image, ButtonGroup } from '@chakra-ui/react'
import logo from '../img/logo.png'
import { useSession } from '../hooks/useSession'

export function Nav({ nombreDelGrupo }) {
  const nombreDelGrupoNew = '' || nombreDelGrupo
  const { logOut, dataSession, nombreGrupo } = useSession(nombreDelGrupoNew)

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
          href='/'
          _hover={{ color: '#ea754b' }}>
          Inicio
        </Link>
        {dataSession.session && nombreGrupo === 'Empresa' && (
          <ButtonGroup>
            <Link
              color='#fff'
              href='/vacantes'
              _hover={{ color: '#ea754b' }}>
              Vacantes
            </Link>
            <Link
              color='#fff'
              onClick={logOut}
              _hover={{ color: '#ea754b' }}>
              Logout
            </Link>
          </ButtonGroup>
        )}
        {dataSession?.session === false && (
          <ButtonGroup>
            <Link
              color='#fff'
              href='/login-bdt'
              _hover={{ color: '#ea754b' }}>
              Buscadores de Trabajo
            </Link>
            <Link
              color='#fff'
              href='/login-empresa'
              _hover={{ color: '#ea754b' }}>
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
              onClick={logOut}
              _hover={{ color: '#ea754b' }}>
              Logout
            </Link>
          </ButtonGroup>
        )}
      </Flex>
    </Flex>
  )
}
