import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export function ButtonVacante({ children }) {
  return (
    <Button
      w='10rem'
      color='white'
      bg='#ea754b'>
      <Link to='/registro-vacante'>{children}</Link>
    </Button>
  )
}
