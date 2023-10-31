import React from 'react';
import { Box, Text, Center } from '@chakra-ui/react';
import { Storage } from 'aws-amplify';

export default function FilesBDT({ files, setFiles }) {
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    console.log(file);
   
    try {
      const fileName = 'img/' + file.name; 
      await Storage.put(fileName, file, { level: 'public', type: file.type });

      const imageUrl = `https://redlaboral19257eadb6ca46f884138dce31d01e60230004-dev.s3.amazonaws.com/public/${fileName}`;
      setFiles({ ...files, imagenBDTUrl: imageUrl });
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handlePdfUpload = async (event) => {
    const file = event.target.files[0];

    console.log(file);

    try {
      const fileName = 'pdf/' + file.name; 
      await Storage.put(fileName, file, { level: 'public', type: file.type });

      const pdfUrl = `https://redlaboral19257eadb6ca46f884138dce31d01e60230004-dev.s3.amazonaws.com/public/${fileName}`;
      setFiles({ ...files, 	pdfImagenUrl: pdfUrl });

      console.log('Uploaded PDF URL:', pdfUrl);
    } catch (error) {
      console.error('Error uploading PDF:', error);
    }
  };

  return (
    <Center py={6}>
      <Box
        boxShadow="xl"
        borderWidth="2px"
        borderColor="gray.200"
        borderRadius="lg"
        p="4"
        maxW="md"
      >
        <Text fontSize="xl" mb={4}>Subir una foto:</Text>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        
        <Text fontSize="xl" mt={4} mb={4}>Subir un archivo PDF:</Text>
        <input type="file" accept=".pdf" onChange={handlePdfUpload} />
      </Box>
    </Center>
  );
}
