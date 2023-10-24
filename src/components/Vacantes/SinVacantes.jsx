import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
import { ButtonVacante } from '../ButtonVacante'

export function SinVacantes() {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      mt='5rem'
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
        Aún no has registrado ninguna vacante
      </Heading>
      <ButtonVacante>Crear una vacante</ButtonVacante>
    </Flex>
  )
}
