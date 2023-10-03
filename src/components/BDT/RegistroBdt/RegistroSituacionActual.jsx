import React, { useState } from 'react';
import {
  Center,
  FormControl,
  FormLabel,
  Switch,
  Box,
} from '@chakra-ui/react';

export default function RegistroInfoPersonal() {
  const initialFormData = {
    buscaEmpleo: false,
    trabajando: false,
    dispViajar: false,
    dispRadicar: false,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  return (
    <Center py={6}>
      <Box
        boxShadow="xl"
        borderWidth="2px"
        borderColor="gray.200"
        borderRadius="lg"
        p="16"
        maxW="md"
      >
        <FormControl
          display="flex"
          alignItems="center"
          justifyContent="space-between" // Añade esta línea
          mb={6} // También puedes ajustar el espaciado vertical aquí
        >
          <FormLabel htmlFor="buscaEmpleo" mb="0">
            ¿Estás buscando empleo?
          </FormLabel>
          <Switch
            id="buscaEmpleo"
            name="buscaEmpleo"
            isChecked={formData.buscaEmpleo}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl
          display="flex"
          alignItems="center"
          justifyContent="space-between" // Añade esta línea
          mb={6} // También puedes ajustar el espaciado vertical aquí
        >
          <FormLabel htmlFor="trabajando" mb="0">
            ¿Estás trabajando actualmente?
          </FormLabel>
          <Switch
            id="trabajando"
            name="trabajando"
            isChecked={formData.trabajando}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl
          display="flex"
          alignItems="center"
          justifyContent="space-between" // Añade esta línea
          mb={6} // También puedes ajustar el espaciado vertical aquí
        >
          <FormLabel htmlFor="dispViajar" mb="0">
            ¿Estás dispuesto a viajar?
          </FormLabel>
          <Switch
            id="dispViajar"
            name="dispViajar"
            isChecked={formData.dispViajar}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl
          display="flex"
          alignItems="center"
          justifyContent="space-between" // Añade esta línea
          mb={6} // También puedes ajustar el espaciado vertical aquí
        >
          <FormLabel htmlFor="dispRadicar" mb="0">
            ¿Estás dispuesto a radicar en otro lugar?
          </FormLabel>
          <Switch
            id="dispRadicar"
            name="dispRadicar"
            isChecked={formData.dispRadicar}
            onChange={handleChange}
          />
        </FormControl>
      </Box>
    </Center>
  );
}
