import { Box } from '@chakra-ui/react'
import { Nav } from './Nav'

export function Header({ nombreDelGrupo }) {
  return (
    <Box>
      <Box
        bg='#181c24'
        p='1rem'>
        <Nav nombreDelGrupo={nombreDelGrupo} />
      </Box>
    </Box>
  )
}
