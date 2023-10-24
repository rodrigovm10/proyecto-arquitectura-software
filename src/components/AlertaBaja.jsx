import { AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Button } from '@chakra-ui/react'
import { useRef } from 'react'

export function AlertaBaja({ isOpen, onOpen, onClose }) {
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
              Dar de baja
            </AlertDialogHeader>
            <AlertDialogBody>¿Está seguro de dar de baja la vacante? Esta acción puede ser reversible, las vacantes dadas de baja apareceran en la sección de vacantes inactivas en su apartado de vacantes.</AlertDialogBody>
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
                Dar de baja
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
