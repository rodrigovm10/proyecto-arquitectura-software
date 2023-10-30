import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, IconButton } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useState } from 'react';
import { BDT } from '../../../../models';
import { DataStore } from '@aws-amplify/datastore';
import { Storage } from 'aws-amplify';

export function ImageEditModal({ imageUrl, onSave, usuario }) {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSave = async () => {
    try {
      if (selectedFile) {
        const fileName = 'img/' + selectedFile.name;
        await Storage.put(fileName, selectedFile, { level: 'public', type: selectedFile.type });
  
        const imagenBDTUrl = `https://redlaboral19257eadb6ca46f884138dce31d01e60230004-dev.s3.amazonaws.com/${fileName}`;
  
        if (usuario) { // Check if 'usuario' is defined
          const original = await DataStore.query(BDT, usuario.id);
          await DataStore.save(
            BDT.copyOf(original, (updated) => {
              updated.imagenBDTUrl = imagenBDTUrl;
            })
          );
          handleCloseModal();
        } else {
          console.error('No user information provided');
        }
  
        // Provide feedback to the user
        console.log('Image uploaded successfully');
      } else {
        console.error('No file selected');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <>
      <IconButton
        icon={<EditIcon />}
        colorScheme="blue"
        size="sm"
        onClick={handleOpenModal}
      />

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Imagen</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mt={4}>
              <FormLabel>Cargar Nueva Imagen</FormLabel>
              <Input type="file" onChange={handleImageUpload} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Guardar
            </Button>
            <Button onClick={handleCloseModal}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export function PdfEditModal({ pdfUrl, onSave, usuario }) {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSave = async () => {
    try {
      if (selectedPdf) {
        const pdfFileName = 'pdf/' + selectedPdf.name;
        await Storage.put(pdfFileName, selectedPdf, { level: 'public', type: selectedPdf.type });
  
        const pdfUrl = `https://redlaboral19257eadb6ca46f884138dce31d01e60230004-dev.s3.amazonaws.com/${pdfFileName}`;
  
        if (usuario) { // Verifica si 'usuario' está definido
          const original = await DataStore.query(BDT, usuario.id);
          await DataStore.save(
            BDT.copyOf(original, (updated) => {
              updated.pdfImagenUrl = pdfUrl;
            })
          );
        } else {
          console.error('No user information provided');
        }
       
        handleCloseModal();
        // Proporciona retroalimentación al usuario
        console.log('PDF uploaded successfully');
      } else {
        console.error('No file selected');
      }
    } catch (error) {
      console.error('Error uploading PDF:', error);
    }
  };
  
  const handlePdfUpload = (event) => {
    const file = event.target.files[0];
    setSelectedPdf(file);
  };

  return (
    <>
      <IconButton
        icon={<EditIcon />}
        colorScheme="blue"
        size="sm"
        onClick={handleOpenModal}
      />

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar PDF</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mt={4}>
              <FormLabel>Cargar Nuevo PDF</FormLabel>
              <Input type="file" accept="application/pdf" onChange={handlePdfUpload} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Guardar
            </Button>
            <Button onClick={handleCloseModal}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}