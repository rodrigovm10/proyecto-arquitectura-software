import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Select } from "@chakra-ui/react";
import {opcionesTipografias,opcionesColores} from '../../../../constants/DecoratorCard'
import { useState } from "react";
import { estilosTarjetas } from "../../../../constants/DecoratorCard";
import { registrarStyle } from "../../../../hooks/RegistroBdt";
import { updatedStyle } from "../../../../hooks/EditarBdt";


export  function PersonalizarPerfil({ isOpen, onClose, bde, styles }) {
  const [situacion, setSituacion] = useState('');
  const [bdeInfo, setBdeInfo] = useState('');
  const [hab, setHab] = useState('');

  const handleGuardar = async () => {
  await registrarStyle(situacion, bdeInfo, hab, bde);
  window.location.reload(); // Recargar la página
  onClose();
};


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Personalizar Perfil</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Select
            placeholder="Estilo de Tarjeta para Situación"
            value={situacion}
            onChange={(e) => setSituacion(e.target.value)}
          >
            {estilosTarjetas.map((estilo) => (
              <option key={estilo.id} value={estilo.id}>{`Estilo ${estilo.id}`}</option>
            ))}
          </Select>
          
          <Select
            placeholder="Estilo de Tarjeta para BDE Info"
            value={bdeInfo}
            onChange={(e) => setBdeInfo(e.target.value)}
          >
            {estilosTarjetas.map((estilo) => (
              <option key={estilo.id} value={estilo.id}>{`Estilo ${estilo.id}`}</option>
            ))}
          </Select>

          <Select
            placeholder="Estilo de Tarjeta para HAB"
            value={hab}
            onChange={(e) => setHab(e.target.value)}
          >
            {estilosTarjetas.map((estilo) => (
              <option key={estilo.id} value={estilo.id}>{`Estilo ${estilo.id}`}</option>
            ))}
          </Select>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleGuardar}>
            Guardar
          </Button>
          <Button colorScheme="blue" onClick={onClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}


export const PersonalizarPerfilEdicion = ({ isOpen, onClose, bde, styles }) => {
  const [situacion, setSituacion] = useState(styles.cardSit);
  const [bdeInfo, setBdeInfo] = useState(styles.cardInfo);
  const [hab, setHab] = useState(styles.cardHab);

  const handleGuardar = async () => {
    await updatedStyle(situacion, bdeInfo, hab, bde,styles);
    window.location.reload(); // Recargar la página
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Personalizar Perfil</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <Select
            placeholder="Estilo de Tarjeta para Situación"
            value={situacion}
            onChange={(e) => setSituacion(e.target.value)}
          >
            {estilosTarjetas.map((estilo) => (
              <option key={estilo.id} value={estilo.id}>{`Estilo ${estilo.id}`}</option>
            ))}
          </Select>
          
          <Select
            placeholder="Estilo de Tarjeta para BDE Info"
            value={bdeInfo}
            onChange={(e) => setBdeInfo(e.target.value)}
          >
            {estilosTarjetas.map((estilo) => (
              <option key={estilo.id} value={estilo.id}>{`Estilo ${estilo.id}`}</option>
            ))}
          </Select>

          <Select
            placeholder="Estilo de Tarjeta para HAB"
            value={hab}
            onChange={(e) => setHab(e.target.value)}
          >
            {estilosTarjetas.map((estilo) => (
              <option key={estilo.id} value={estilo.id}>{`Estilo ${estilo.id}`}</option>
            ))}
          </Select>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleGuardar}>
            Guardar
          </Button>
          <Button colorScheme="blue" onClick={onClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

