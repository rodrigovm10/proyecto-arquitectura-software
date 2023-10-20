import { Box } from '@chakra-ui/react'
import { Nav } from './Nav'

export function Header() {
  return (
    <Box>
      <Box
        bg='#181c24'
        p='1rem'>
        <Nav />
      </Box>
    </Box>
  )
}
