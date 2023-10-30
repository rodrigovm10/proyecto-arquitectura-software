import { Button, ButtonGroup, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export function BotonesForm({ botonCancelar = false, onClick, url }) {
  const navigate = useNavigate()
  const redirect = () => {
    navigate(url)
  }
  return (
    <Flex
      justifyContent='center'
      mt='2rem'>
      <ButtonGroup mb='3rem'>
        {botonCancelar && (
          <Button
            bg='#181c24'
            color='#fff'
            onClick={redirect}>
            Cancelar
          </Button>
        )}
        <Button
          bg='#ea754b'
          color='#fff'
          _hover={{ bg: '#ff964f' }}
          type='submit'
          onClick={onClick}>
          Guardar
        </Button>
      </ButtonGroup>
    </Flex>
  )
}
