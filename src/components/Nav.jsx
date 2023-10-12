import { Flex, Spacer, Link, Image, ButtonGroup } from '@chakra-ui/react'
import logo from '../img/logo.png'

export function Nav() {
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
      </Flex>
    </Flex>
  )
}
