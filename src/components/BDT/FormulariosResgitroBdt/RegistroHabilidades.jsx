import React, { useState,useEffect } from 'react';
import {Box,Button,Center,FormControl,FormLabel,Grid,HStack,Select,Tag,TagLabel,TagCloseButton,} from '@chakra-ui/react';
import { idiomas, nivelIdiomas } from '../../../constants/Idiomas';
import { habilidadesBlandas} from '../../../constants/HabilidadesBlandas';
import { habilidadesTecnicas} from '../../../constants/HabilidadesTecnicas';
import Swal from 'sweetalert2';
const RegistroHabilidades = ({habilidades, setHabilidades}) => {
  const [idiomasSeleccionados, setIdiomasSeleccionados] = useState([]);
  const [idiomaSeleccionado, setIdiomaSeleccionado] = useState('');
  const [nivelSeleccionado, setNivelSeleccionado] = useState('');
  const [habilidadesBlandasSeleccionadas, setHabilidadesBlandasSeleccionadas] = useState([]);
  const [habilidadBlandaSeleccionada, setHabilidadBlandaSeleccionada] = useState('');
  const [habilidadesTecnicasSeleccionadas, setHabilidadesTecnicasSeleccionadas] = useState([]);
  const [habilidadTecnicaSeleccionada, setHabilidadTecnicaSeleccionada] = useState('');


  const IdiomaChange = (event) => {
    setIdiomaSeleccionado(event.target.value);
  };

  const NivelChange = (event) => {
    setNivelSeleccionado(event.target.value);
  };

  const HabilidadBlandaChange = (event) => {
    setHabilidadBlandaSeleccionada(event.target.value);
  };

  const HabilidadTecnicaChange = (event) => {
    setHabilidadTecnicaSeleccionada(event.target.value);
  };



  const removeIdioma = (index) => {
    const updatedIdiomas = [...idiomasSeleccionados];
    updatedIdiomas.splice(index, 1);
    setIdiomasSeleccionados(updatedIdiomas);
  
    // Actualiza el estado de habilidades con el nuevo array de idiomas
    setHabilidades((prevHabilidades) => ({
      ...prevHabilidades,
      idioma: updatedIdiomas,
    }));
  };
  
  const removeHabilidadBlanda = (index) => {
    const updatedHabilidadesBlandas = [...habilidadesBlandasSeleccionadas];
    updatedHabilidadesBlandas.splice(index, 1);
    setHabilidadesBlandasSeleccionadas(updatedHabilidadesBlandas);
  
    // Actualiza el estado de habilidades con el nuevo array de habilidades blandas
    setHabilidades((prevHabilidades) => ({
      ...prevHabilidades,
      habilidadesBlandas: updatedHabilidadesBlandas,
    }));
  };
  
  const removeHabilidadTecnica = (index) => {
    const updatedHabilidadesTecnicas = [...habilidadesTecnicasSeleccionadas];
    updatedHabilidadesTecnicas.splice(index, 1);
    setHabilidadesTecnicasSeleccionadas(updatedHabilidadesTecnicas);
  
    // Actualiza el estado de habilidades con el nuevo array de habilidades Tecnicas
    setHabilidades((prevHabilidades) => ({
      ...prevHabilidades,
      habilidadesTecnicas: updatedHabilidadesTecnicas,
    }));

  };
  const concatenarIdioma = () => {
    if (idiomaSeleccionado && nivelSeleccionado) {
      const idiomaConcatenado = `${idiomaSeleccionado}/${nivelSeleccionado}`;
      // Verificar si el idioma ya existe en la lista
      if (!idiomasSeleccionados.includes(idiomaConcatenado)) {
        setIdiomasSeleccionados([...idiomasSeleccionados, idiomaConcatenado]);
        setIdiomaSeleccionado('');
        setNivelSeleccionado('');

        // Actualiza el estado de habilidades con el nuevo idioma
        setHabilidades((prevHabilidades) => ({
          ...prevHabilidades,
          idioma: [...prevHabilidades.idioma, idiomaConcatenado],
        }));
      } else {
        // Muestra una alerta de SweetAlert si el idioma ya existe
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Este idioma ya ha sido agregado.',
        });
      }
    }
  };

  const concatenarHabilidadBlanda = () => {
    if (habilidadBlandaSeleccionada) {
      // Verificar si la habilidad blanda ya existe en la lista
      if (!habilidadesBlandasSeleccionadas.includes(habilidadBlandaSeleccionada)) {
        setHabilidadesBlandasSeleccionadas([...habilidadesBlandasSeleccionadas, habilidadBlandaSeleccionada]);
        setHabilidadBlandaSeleccionada('');

        // Actualiza el estado de habilidades con la nueva habilidad blanda
        setHabilidades((prevHabilidades) => ({
          ...prevHabilidades,
          habilidadesBlandas: [...prevHabilidades.habilidadesBlandas, habilidadBlandaSeleccionada],
        }));
      } else {
        // Muestra una alerta de SweetAlert si la habilidad blanda ya existe
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Esta habilidad blanda ya ha sido agregada.',
        });
      }
    }
  };

  const concatenarHabilidadTecnica = () => {
    if (habilidadTecnicaSeleccionada) {
      // Verificar si la habilidad técnica ya existe en la lista
      if (!habilidadesTecnicasSeleccionadas.includes(habilidadTecnicaSeleccionada)) {
        setHabilidadesTecnicasSeleccionadas([...habilidadesTecnicasSeleccionadas, habilidadTecnicaSeleccionada]);
        setHabilidadTecnicaSeleccionada('');

        // Actualiza el estado de habilidades con la nueva habilidad técnica
        setHabilidades((prevHabilidades) => ({
          ...prevHabilidades,
          habilidadesTecnicas: [...prevHabilidades.habilidadesTecnicas, habilidadTecnicaSeleccionada],
        }));
      } else {
        // Muestra una alerta de SweetAlert si la habilidad técnica ya existe
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Esta habilidad técnica ya ha sido agregada.',
        });
      }
    }
  };
  
  return (
    <Center
    templateColumns={{
      base: "repeat(1, 1fr)", // col-xs-12
      sm: "repeat(1, 1fr)", // col-sm-6
      md: "repeat(2, 1fr)", // col-md-4
      lg: "repeat(1, 1fr)", // col-lg-3
    }}
    justifyItems="center"
    alignItems="center"
  >
    <Box
      boxShadow="xl"
      borderWidth="2px"
      borderColor="gray.200"
      borderRadius="lg"
      p="4"
      maxW="md"
    >
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <FormControl>
          <FormLabel>Selecciona un idioma</FormLabel>
          <Select onChange={IdiomaChange} value={idiomaSeleccionado}>
            <option value="">Seleccionar idioma</option>
            {idiomas.map((idioma) => (
              <option key={idioma} value={idioma}>
                {idioma}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Selecciona el nivel</FormLabel>
          <Select onChange={NivelChange} value={nivelSeleccionado}>
            <option value="">Seleccionar nivel</option>
            {nivelIdiomas.map((nivel) => (
              <option key={nivel} value={nivel}>
                {nivel}
              </option>
            ))}
          </Select>
        </FormControl>
        <Box gridColumn="span 2">
          <Button onClick={concatenarIdioma}>Agregar idioma</Button>
        </Box>
        <Box gridColumn="span 2">
          <Grid
            templateColumns={{
              base: "repeat(3, 1fr)", // col-xs-12
              sm: "repeat(3, 1fr)", // col-sm-6
              md: "repeat(3, 1fr)", // col-md-4
              lg: "repeat(3, 1fr)", // col-lg-3
            }}
            gap={5}
          >
            {idiomasSeleccionados.map((idioma, index) => (
              <Tag
                key={index}
                size="md"
                borderRadius="full"
                variant="solid"
                borderColor="gray.200"
                style={{ maxWidth: "150px" }} 
               
              >
                <TagLabel>{idioma}</TagLabel>
                <TagCloseButton onClick={() => removeIdioma(index)} />
              </Tag>
            ))}
          </Grid>
        </Box>
        <FormControl>
          <FormLabel>Selecciona una habilidad blanda</FormLabel>
          <Select
            onChange={HabilidadBlandaChange}
            value={habilidadBlandaSeleccionada}
          >
            <option value="">Seleccionar habilida blanda</option>
            {habilidadesBlandas.map((habilidad) => (
              <option key={habilidad} value={habilidad}>
                {habilidad}
              </option>
            ))}
          </Select>
        </FormControl>
        <Box gridColumn="span 2">
          <Button onClick={concatenarHabilidadBlanda}>Agregar</Button>
        </Box>
        <Box gridColumn="span 2">
          <Grid
            templateColumns={{
              base: "repeat(3, 1fr)", // col-xs-12
              sm: "repeat(3, 1fr)", // col-sm-6
              md: "repeat(3, 1fr)", // col-md-4
              lg: "repeat(3, 1fr)", // col-lg-3
            }}
            gap={5}
          >
            <>
              {habilidadesBlandasSeleccionadas.map((habilidad, index) => (
                <Tag
                  key={index}
                  size="md"
                  borderRadius="full"
                  variant="solid"
                  borderColor="gray.200"
                  style={{ maxWidth: "150px" }} 
                >
                  <TagLabel>{habilidad}</TagLabel>
                  <TagCloseButton
                    onClick={() => removeHabilidadBlanda(index)}
                  />
                </Tag>
              ))}
            </>
          </Grid>
        </Box>
        <FormControl>
          <FormLabel>Selecciona una habilidad técnica</FormLabel>
          <Select
            onChange={HabilidadTecnicaChange}
            value={habilidadTecnicaSeleccionada}
          >
            <option value="">Seleccionar habilida técnica</option>
            {habilidadesTecnicas.map((habilidad) => (
              <option key={habilidad} value={habilidad}>
                {habilidad}
              </option>
            ))}
          </Select>
        </FormControl>
        <Box gridColumn="span 2">
          <Button onClick={concatenarHabilidadTecnica}>Agregar</Button>
        </Box>
        <Box gridColumn="span 2">
          <Grid
            templateColumns={{
              base: "repeat(3, 1fr)", // col-xs-12
              sm: "repeat(3, 1fr)", // col-sm-6
              md: "repeat(3, 1fr)", // col-md-4
              lg: "repeat(3, 1fr)", // col-lg-3
            }}
            gap={5}
          >
            <>
              {habilidadesTecnicasSeleccionadas.map((habilidad, index) => (
                <Tag
                  key={index}
                  size="md"
                  borderRadius="full"
                  variant="solid"
                  borderColor="gray.200"
                 style={{ maxWidth: "150px" }} 
                >
                  <TagLabel>{habilidad}</TagLabel>
                  <TagCloseButton
                    onClick={() => removeHabilidadTecnica(index)}
                  />
                </Tag>
              ))}
            </>
          </Grid>
        </Box>
      </Grid>
    </Box>
  </Center>
  );
};

export default RegistroHabilidades;