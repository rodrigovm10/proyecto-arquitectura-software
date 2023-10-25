import { Flex, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react'
import { useRegisterVacante } from '../../hooks/useRegisterVacante'

export function Tags({ array, arrayName }) {
  const { handleClickDelete } = useRegisterVacante()
  return (
    <Flex
      flexWrap='wrap'
      gap='1rem'>
      {Array.isArray(array) &&
        array.length !== 0 &&
        array.map((item, i) => (
          <Tag
            key={i}
            borderRadius='full'
            variant='solid'
            colorScheme='facebook'>
            <TagLabel>{item}</TagLabel>
            <TagCloseButton onClick={() => handleClickDelete({ name: arrayName, value: item })} />
          </Tag>
        ))}
    </Flex>
  )
}
