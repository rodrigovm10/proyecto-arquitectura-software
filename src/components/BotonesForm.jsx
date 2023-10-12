import { Button, ButtonGroup, Flex } from '@chakra-ui/react'

export function BotonesForm({ onClick }) {
  return (
    <Flex
      justifyContent='center'
      mt='2rem'>
      <ButtonGroup>
        <Button colorScheme='red'>Cancelar</Button>
        <Button
          bg='#ea754b'
          color='#fff'
          _hover={{ bg: 'rgb(234, 117, 90)' }}
          type='submit'
          onClick={onClick}>
          Guardar
        </Button>
      </ButtonGroup>
    </Flex>
  )
}
