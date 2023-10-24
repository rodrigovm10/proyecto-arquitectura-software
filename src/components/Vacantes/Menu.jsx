import { MenuButton, MenuList, MenuItem, IconButton, Menu, Button, useDisclosure } from '@chakra-ui/react'
import { DotsVertical, Edit, Delete, Circle } from '../../assets/Icons'
import { AlertaEliminar } from '../AlertaEliminar'
import { AlertaBaja } from '../AlertaBaja'

export function MenuVacante() {
  const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure()
  const { isOpen: isOpenDown, onOpen: onOpenDown, onClose: onCloseDown } = useDisclosure()

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<DotsVertical />}
        variant='outline'
      />
      <MenuList>
        <MenuItem icon={<Edit />}>Editar</MenuItem>
        <MenuItem
          icon={<Circle />}
          as={Button}
          onClick={onOpenDown}>
          Dar de baja
        </MenuItem>
        <MenuItem
          as={Button}
          icon={<Delete />}
          onClick={onOpenDelete}>
          Eliminar
        </MenuItem>
      </MenuList>
      <AlertaBaja
        isOpen={isOpenDown}
        onClose={onCloseDown}
      />{' '}
      <AlertaEliminar
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
      />{' '}
      {/* Renderiza la alerta condicionalmente */}
    </Menu>
  )
}
