import { Flex, Spacer, Link, Image, ButtonGroup } from '@chakra-ui/react'
import logo from '../img/logo.png'
import { useSession } from '../hooks/useSession'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export function Nav({ nombreDelGrupo }) {
  // const { colorMode, toggleColorMode } = useColorMode()
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
{
  /* <Box>
  <Flex
    
    p={3}
    justifyContent='space-between'
    alignItems='center'>
    <Box>
      <RouterLink to='/inicio-bde'>
        <img
          src={logo}
          alt='Red Laboral'
          style={{ width: '10rem' }}
        />
      </RouterLink>
    </Box>
    <Flex alignItems='center'>
      <RouterLink
        to='/inicio-bdt'
        style={{ marginLeft: '1rem' }}>
        Inicio
      </RouterLink>
      <RouterLink
        to='/buscar-empleo'
        style={{ marginLeft: '1rem' }}>
        Buscar empleo
      </RouterLink>
      <RouterLink
        to='/oportunidades-laborales'
        style={{ marginLeft: '1rem' }}>
        Oportunidades laborales
      </RouterLink>
      <Menu>
        <Button
          onClick={toggleColorMode}
          mr='2'
          ml='2'>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
        <MenuButton
          as={Button}
          rounded={'full'}
          variant={'link'}
          cursor={'pointer'}>
          <Avatar
            size={'sm'}
            src={'https://avatars.dicebear.com/api/male/username.svg'}
          />
        </MenuButton>
        <MenuList alignItems={'center'}>
          <br />
          <Center>
            <Avatar
              size={'2xl'}
              src={'https://avatars.dicebear.com/api/male/username.svg'}
            />
          </Center>
          <br />
          <Center>
            <p>{localStorage.nombreNav === undefined ? bde : localStorage.nombreNav}</p>
          </Center>
          <br />
          <MenuDivider />
          <RouterLink to='/perfil-bdt'>
            <MenuItem>Perfil</MenuItem>
          </RouterLink>
          <MenuItem onClick={logOut}>Cerrar Sesión</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  </Flex>
</Box> */
}
