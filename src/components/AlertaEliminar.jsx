import { AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Button } from '@chakra-ui/react'
import { useRef } from 'react'

export function AlertaEliminar({ isOpen, onOpen, onClose }) {
  const cancelRef = useRef()

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader
              fontSize='lg'
              fontWeight='bold'>
              Eliminar Vacante
            </AlertDialogHeader>
            <AlertDialogBody>¿Está seguro de eliminar la vacante? Esta acción no puede ser reversible.</AlertDialogBody>
            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={onClose}>
                Cancelar
              </Button>
              <Button
                colorScheme='red'
                onClick={onClose}
                ml={3}>
                Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
