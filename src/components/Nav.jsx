import { Flex, Heading, Spacer, Box, Link } from '@chakra-ui/react'

export function Nav() {
  return (
    <Box
      bg='#181c24'
      p='3rem'
      pos='fixed'
      w='100%'>
      <Flex>
        <Box>
          <Heading color='#fff'>Red Laboral</Heading>
        </Box>
        <Spacer />
        <Flex gap={3}>
          <Link color='#fff'>Inicio</Link>
          <Link color='#fff'>Buscadores de Trabajo</Link>
          <Link color='#fff'>Empresas</Link>
        </Flex>
        {/* <ButtonGroup>
          <Button>Empresas</Button>
          <Button>Buscadores de Trabajo</Button>
        </ButtonGroup> */}
      </Flex>
    </Box>
  )
}
