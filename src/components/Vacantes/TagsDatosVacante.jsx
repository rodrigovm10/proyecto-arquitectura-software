import { Box, HStack, Heading, Tag, TagLabel } from '@chakra-ui/react'

export function TagsDatosVacante({ titulo, tags }) {
  // Agrega la prop "tags" aquí
  return (
    <Box>
      <Heading
        color='#ea754b'
        as='h3'
        size='md'>
        {titulo}
      </Heading>
      <HStack
        mt='1rem'
        spacing={4}>
        {tags?.map((habilidad, i) => (
          <Tag
            size='md'
            key={i}
            borderRadius='full'
            variant='solid'
            colorScheme='facebook'>
            <TagLabel>{habilidad}</TagLabel>
          </Tag>
        ))}
      </HStack>
    </Box>
  )
}
