import { Flex, Spacer, Link, Image, ButtonGroup, Button, useColorMode } from '@chakra-ui/react'
import logo from '../img/logo.png'
import { useSession } from '../hooks/useSession'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'

export function Nav({ nombreDelGrupo }) {
  const { colorMode, toggleColorMode } = useColorMode()
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
      <Flex
        gap={3}
        alignItems='center'>
        {dataSession.session && nombreGrupo === 'Empresa' && (
          <ButtonGroup>
            <RouterLink
              color='#fff'
              to='/inicio-empresa'
              _hover={{ color: '#ea754b' }}>
              Inicio
            </RouterLink>
            <RouterLink
              color='#fff'
              to='/vacantes'
              _hover={{ color: '#ea754b' }}>
              Vacantes
            </RouterLink>
            <Link
              color='#fff'
              onClick={logOut}
              _hover={{ color: '#ea754b' }}>
              Cerrar Sesión
            </Link>
          </ButtonGroup>
        )}
        {dataSession?.session === false && (
          <ButtonGroup>
            <Link
              color='#fff'
              href='/'
              _hover={{ color: '#ea754b' }}>
              Inicio
            </Link>
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

        {colorMode === 'light' ? (
          <MoonIcon
            cursor='pointer'
            onClick={toggleColorMode}
            color='#fff'
          />
        ) : (
          <SunIcon
            cursor='pointer'
            onClick={toggleColorMode}
          />
        )}
      </Flex>
    </Flex>
  )
}
