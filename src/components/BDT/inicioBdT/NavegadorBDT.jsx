import React, { useState, useEffect } from 'react'
import { useBreakpointValue, Flex, Avatar, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Link, Image, Spacer, useColorModeValue, useColorMode, IconButton, Center, ButtonGroup } from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import { Auth, DataStore } from 'aws-amplify'
import { BDT } from '../../../models'
import logo from '../../../img/logo.png'
import { useNavigate } from 'react-router-dom'
import { useSession } from '../../../hooks/useSession'
import { DATA_SESSION_STATE_INITIAL } from '../../../constants/EstadosIniciales'

function NavegadorBDT({ setSession }) {
  const { getDataSessionBDT, setDataSession, dataSession } = useSession('trabajador')
  const { colorMode, toggleColorMode } = useColorMode()
  const navigate = useNavigate()
  const [bde, setBde] = useState('Usuario')

  useEffect(() => {
    if (dataSession.session) return
    getDataSessionBDT()
  }, [dataSession])

  useEffect(() => {
    async function cargar() {
      const auth = await Auth.currentAuthenticatedUser()
      setTimeout(() => {
        DataStore.query(BDT, c => c.correo.eq(auth.attributes.email)).then(e => {
          if (e[0]?.nombre) {
            setBde(e[0].nombre)
            localStorage.setItem('nombreNav', e[0].nombre)
            return
          }
          localStorage.setItem('nombreNav', 'Usuario')
        })
      }, 950)
    }
    cargar()
  }, [])

  async function logOut() {
    try {
      await Auth.signOut({ global: true })
      await DataStore.clear()
      localStorage.clear()
      sessionStorage.clear()
      setDataSession(DATA_SESSION_STATE_INITIAL)
      setSession(false)
      navigate('/')
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }
  const isLargeScreen = useBreakpointValue({ base: false, md: true })

  return (
    <Flex
      bg={useColorModeValue('#181c24', '#181c24')}
      p={3}
      justifyContent='space-between'
      alignItems='center'
      color='white'>
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
        {isLargeScreen ? (
          <ButtonGroup>
            <RouterLink
              color='#fff'
              to='/inicio-bdt'>
              Inicio
            </RouterLink>
            <RouterLink to='/buscar-empleo'>Buscar empleo</RouterLink>
            <RouterLink to='/oportunidades-laborales'>Oportunidades laborales</RouterLink>
          </ButtonGroup>
        ) : (
          <Menu>
            <MenuButton
              backgroundColor='#181c24'
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon color='white' />}
              variant='outline'
            />
            <MenuList>
              <RouterLink
                color='#fff'
                to='/inicio-bdt'
                _hover={{ color: '#ea754b' }}>
                Inicio
              </RouterLink>
              <MenuItem
                as={RouterLink}
                to='/buscar-empleo'
                color='grey'>
                Buscar empleo
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to='/oportunidades-laborales'
                color='grey'>
                Oportunidades laborales
              </MenuItem>
            </MenuList>
          </Menu>
        )}
        {colorMode === 'light' ? (
          <MoonIcon
            cursor='pointer'
            onClick={toggleColorMode}
            color='#fff'
            margin='0 1rem'
          />
        ) : (
          <SunIcon
            marginRight='1rem'
            cursor='pointer'
            onClick={toggleColorMode}
          />
        )}
        <Menu>
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
            <Center color={colorMode === 'light' ? 'black' : 'white'}>
              <p>{localStorage.nombreNav === undefined ? bde : localStorage.nombreNav}</p>
            </Center>
            <br />
            <MenuDivider />
            <RouterLink to='/perfil-bdt'>
              <MenuItem color={colorMode === 'light' ? 'black' : 'white'}>Perfil</MenuItem>
            </RouterLink>
            <MenuItem
              onClick={logOut}
              color={colorMode === 'light' ? 'black' : 'white'}>
              Cerrar Sesión
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  )
}

export default NavegadorBDT
