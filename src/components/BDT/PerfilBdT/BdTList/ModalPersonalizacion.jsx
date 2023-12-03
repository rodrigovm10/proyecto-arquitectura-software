import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Select } from "@chakra-ui/react";
import {opcionesTipografias,opcionesColores} from '../../../../constants/DecoratorCard'
export default function  ({ isOpen, onClose, setColor, setFont })  {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Personalizar Perfil</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Select placeholder="Color" onChange={(e) => setColor(e.target.value)}>
          {opcionesColores.map(color => (
            <option key={color.value} value={color.value}>{color.label}</option>
          ))}
          </Select>
          <Select placeholder="Tipografía" onChange={(e) => setFont(e.target.value)}>
          {opcionesTipografias.map(font => (
            <option key={font.value} value={font.value}>{font.label}</option>
          ))}
        
          </Select>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>Cerrar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
