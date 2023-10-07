import {FormControl,FormLabel,Grid,Input,Select, Center, Box} from '@chakra-ui/react';
import { useState } from 'react';
import {escolaridad} from '../../../files/Escolaridad';

export default function RegistroInfoPersonal() {
  const initialFormData = {
    nombre: '',
    apellidos: '',
    curp: '',
    fechaNacimiento: '',
    telefono: '', // Cambiado a string para manejar números
    escolaridad: '',
    genero: '',
    correo: '',
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
      [name]: type === 'checkbox' ? checked : type === 'number' ? Number(value) : value,
    }));
  };

  const attributes = ['Nombre','Apellidos','Curp', 'Fecha de Nacimiento','Teléfono', 'Genero','Municipio','Colonia', 'Calle','Codigo Postal', 'escolaridad'];

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
          {attributes.map((attribute) => (
            <FormControl key={attribute}>
              <FormLabel>{attribute}</FormLabel>
              {attribute === 'Fecha de Nacimiento' ? (
                <Input
                  placeholder="Select Date and Time"
                  size="md"
                  type="date"
                  name="fechaNacimiento"
                  value={formData.fechaNacimiento}
                  onChange={handleChange}
                />
              ) : attribute === 'Escolaridad' ? (
                <Select
                  name={attribute}
                  value={formData[attribute]}
                  onChange={handleChange}
                >
                  <option value="">Seleccionar Escolaridad</option>
                  {escolaridad.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              ) : (
                <Input
                  type={
                    attribute === 'Teléfono' || attribute === 'Codigo Postal'
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