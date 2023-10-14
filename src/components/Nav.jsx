import { Flex, Spacer, Link, Image, ButtonGroup, Button } from '@chakra-ui/react'
import logo from '../img/logo.png'
import { useSession } from '../hooks/useSession'

export function Nav() {
  const { logOut, dataSession, nombreGrupo } = useSession()

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
        {dataSession?.session && nombreGrupo === 'Empresa' && (
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
        {dataSession?.session && nombreGrupo === 'BDT' && (
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
