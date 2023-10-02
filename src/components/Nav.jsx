import { Flex, Heading, Spacer, Box, Link, ButtonGroup } from '@chakra-ui/react'

export function Nav() {
  return (
    <Box
      bg='#181c24'
      p={2}>
      <Flex>
        <Box>
          <Heading color='#fff'>Red Laboral</Heading>
        </Box>
        <Spacer />
        <Flex gap={3}>
          <Link color='#fff'>Inicio</Link>
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
        {/* <ButtonGroup>
          <Button>Empresas</Button>
          <Button>Buscadores de Trabajo</Button>
        </ButtonGroup> */}
      </Flex>
    </Box>
  )
}
