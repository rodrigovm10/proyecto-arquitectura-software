import React, { useState } from 'react';
import { FormControl, FormLabel, Grid, Input, Select, Center, Box } from '@chakra-ui/react';
import { Escolaridad,Genero } from '../../../constants/Datos';

export default function RegistroInfoPersonal({ datosInforPersonal, setEDatosInforPersonal }) {
  const initialFormData = {
    nombre: '',
    apellidos: '',
    curp: '',
    fechaNacimiento: '',
    telefono: '', // Cambiado a string para manejar números
    escolaridad: '',
    genero: '',
   
    municipio: '',
    colonia: '',
    calle: '',
    codigoPostal: '', // Cambiado a string para manejar números
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'number' ? value : value,
    }));

    // Llama a setEDatosInforPersonal para actualizar los datos en el componente padre
    setEDatosInforPersonal((prevDatos) => ({
      ...prevDatos,
      [name]: type === 'checkbox' ? checked : type === 'number' ? value : value,
    }));
  };

  const attributes = [
    'nombre',
    'apellidos',
    'curp',
    'fechaNacimiento',
    'telefono',
    'genero',
    'municipio',
    'colonia',
    'calle',
    'codigoPostal',
    'escolaridad',
  ];

  const labels = [
    'Nombre',
    'Apellidos',
    'CURP',
    'Fecha de Nacimiento',
    'Teléfono',
    'Género',
    'Municipio',
    'Colonia',
    'Calle',
    'Código Postal',
    'Escolaridad',
  ];

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
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          {attributes.map((attribute, index) => (
            <FormControl key={attribute}>
              <FormLabel>{labels[index]}</FormLabel>
              {attribute === 'fechaNacimiento' ? (
                <Input
                  placeholder="Select Date and Time"
                  size="md"
                  type="date"
                  name="fechaNacimiento"
                  value={formData.fechaNacimiento}
                  onChange={handleChange}
                />
              ) : attribute === 'escolaridad' ? (
                // Inside the 'Select' component
                // ...
                <Select
                  name="escolaridad"
                  value={formData.escolaridad}
                  onChange={handleChange}
                >
                  <option value="">Seleccionar Escolaridad</option>
                  {Escolaridad.map((escuela, index) => (
                    <option key={index} value={escuela}>
                      {escuela}
                    </option>
                  ))}
                </Select>

              ): attribute === 'genero' ?(
                <Select
                name="genero"
                value={formData.genero}
                onChange={handleChange}
              >
                <option value="">Género </option>
                {Genero.map((sexo, index) => (
                  <option key={index} value={sexo}>
                    {sexo}
                  </option>
                ))}
              </Select>
              ) : (
                <Input
                  type={
                    attribute === 'telefono' || attribute === 'codigoPostal'
                      ? 'number'
                      : 'text'
                  }
                  name={attribute}
                  value={formData[attribute]}
                  onChange={handleChange}
                />
              )}
            </FormControl>
          ))}
        </Grid>
      </Box>
    </Center>
  );
}
