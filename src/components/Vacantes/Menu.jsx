import { MenuButton, MenuList, MenuItem, IconButton, Menu, Button } from '@chakra-ui/react'
import { DotsVertical, Edit, Delete, Circle } from '../../assets/Icons'
import { useAlerts } from '../../hooks/useAlerts'

export function MenuVacante({ vacanteId, visible = '' }) {
  const { deleteAlert, updateAlert, updateVisibleAlert } = useAlerts()

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
        {visible ? (
          <MenuItem
            icon={<Circle />}
            as={Button}
            onClick={() => updateAlert({ id: vacanteId, visible: false })}>
            Dar de baja
          </MenuItem>
        ) : (
          <MenuItem
            icon={<Circle />}
            as={Button}
            onClick={() => updateVisibleAlert({ id: vacanteId, visible: true })}>
            Dar de alta
          </MenuItem>
        )}

        <MenuItem
          as={Button}
          icon={<Delete />}
          onClick={() => deleteAlert({ id: vacanteId })}>
          Eliminar
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
