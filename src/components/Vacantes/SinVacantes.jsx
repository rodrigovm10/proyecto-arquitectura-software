import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import logo from '../../img/logo.png'
import { ButtonVacante } from '../ButtonVacante'

export function SinVacantes({ children, hasButton = true }) {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      mt='5rem'
      mb='5rem'
      gap='1rem'>
      <Box>
        <Image
          w='10rem'
          objectFit='cover'
          src={logo}
          alt='logo red laboral'
        />
      </Box>
      <Heading
        fontWeight={400}
        as='h3'
        size='md'>
        {children}
      </Heading>
      {hasButton && <ButtonVacante>Crear una vacante</ButtonVacante>}
    </Flex>
  )
}
