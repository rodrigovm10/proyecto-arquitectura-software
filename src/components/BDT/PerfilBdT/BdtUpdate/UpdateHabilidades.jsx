import React, { useState, useEffect } from 'react'
import { Box, Button, Center, FormControl, FormLabel, Grid, HStack, Select, Tag, TagLabel, TagCloseButton } from '@chakra-ui/react'
import { idiomas, nivelIdiomas } from '../../../../constants/Idiomas'
import { habilidadesBlandas } from '../../../../constants/HabilidadesBlandas'
import { habilidadesTecnicas } from '../../../../constants/HabilidadesTecnicas'

const RegistroHabilidades = ({ habilidades, setHabilidades }) => {
  const [idiomasSeleccionados, setIdiomasSeleccionados] = useState([])
  const [idiomaSeleccionado, setIdiomaSeleccionado] = useState('')
  const [nivelSeleccionado, setNivelSeleccionado] = useState('')
  const [habilidadesBlandasSeleccionadas, setHabilidadesBlandasSeleccionadas] = useState([])
  const [habilidadBlandaSeleccionada, setHabilidadBlandaSeleccionada] = useState('')
  const [habilidadesTecnicasSeleccionadas, setHabilidadesTecnicasSeleccionadas] = useState([])
  const [habilidadTecnicaSeleccionada, setHabilidadTecnicaSeleccionada] = useState('')

  useEffect(() => {
    setIdiomasSeleccionados(habilidades.idioma)
    setHabilidadesBlandasSeleccionadas(habilidades.habilidadesBlandas)
    setHabilidadesTecnicasSeleccionadas(habilidades.habilidadesTecnicas)
  }, [])

  const IdiomaChange = event => {
    setIdiomaSeleccionado(event.target.value)
  }

  const NivelChange = event => {
    setNivelSeleccionado(event.target.value)
  }

  const HabilidadBlandaChange = event => {
    setHabilidadBlandaSeleccionada(event.target.value)
  }

  const HabilidadTecnicaChange = event => {
    setHabilidadTecnicaSeleccionada(event.target.value)
  }

  const removeIdioma = index => {
    const updatedIdiomas = [...idiomasSeleccionados]
    updatedIdiomas.splice(index, 1)
    setIdiomasSeleccionados(updatedIdiomas)
  }

  const removeHabilidadBlanda = index => {
    const updatedHabilidadesBlandas = [...habilidadesBlandasSeleccionadas]
    updatedHabilidadesBlandas.splice(index, 1)
    setHabilidadesBlandasSeleccionadas(updatedHabilidadesBlandas)
  }

  const removeHabilidadTecnica = index => {
    const updatedHabilidadesTecnicas = [...habilidadesTecnicasSeleccionadas]
    updatedHabilidadesTecnicas.splice(index, 1)
    setHabilidadesTecnicasSeleccionadas(updatedHabilidadesTecnicas)
  }
  const concatenarIdioma = () => {
    if (idiomaSeleccionado && nivelSeleccionado) {
      const idiomaConcatenado = `${idiomaSeleccionado}/${nivelSeleccionado}`
      setIdiomasSeleccionados([...idiomasSeleccionados, idiomaConcatenado])
      setIdiomaSeleccionado('')
      setNivelSeleccionado('')

      // Actualiza el estado de habilidades con el nuevo idioma
      setHabilidades(prevHabilidades => ({
        ...prevHabilidades,
        idioma: [...prevHabilidades.idioma, idiomaConcatenado]
      }))
    }
  }

  const concatenarHabilidadBlanda = () => {
    if (habilidadBlandaSeleccionada) {
      setHabilidadesBlandasSeleccionadas([...habilidadesBlandasSeleccionadas, habilidadBlandaSeleccionada])
      setHabilidadBlandaSeleccionada('')

      // Actualiza el estado de habilidades con la nueva habilidad blanda
      setHabilidades(prevHabilidades => ({
        ...prevHabilidades,
        habilidadesBlandas: [...prevHabilidades.habilidadesBlandas, habilidadBlandaSeleccionada]
      }))
    }
  }

  const concatenarHabilidadTecnica = () => {
    if (habilidadTecnicaSeleccionada) {
      setHabilidadesTecnicasSeleccionadas([...habilidadesTecnicasSeleccionadas, habilidadTecnicaSeleccionada])
      setHabilidadTecnicaSeleccionada('')

      // Actualiza el estado de habilidades con la nueva habilidad técnica
      setHabilidades(prevHabilidades => ({
        ...prevHabilidades,
        habilidadesTecnicas: [...prevHabilidades.habilidadesTecnicas, habilidadTecnicaSeleccionada]
      }))
    }
  }

  useEffect(() => {
    setHabilidades(hab => ({
      ...hab,
      idioma: idiomasSeleccionados,
      habilidadesBlandas: habilidadesBlandasSeleccionadas,
      habilidadesTecnicas: habilidadesTecnicasSeleccionadas
    }))
  }, [idiomasSeleccionados, habilidadesBlandasSeleccionadas, habilidadesTecnicasSeleccionadas])

  return (
    <Center py={6}>
      <Box
        boxShadow='xl'
        borderWidth='2px'
        borderColor='gray.200'
        borderRadius='lg'
        p='4'
        maxW='md'>
        <Grid
          templateColumns='repeat(2, 1fr)'
          gap={4}>
          <FormControl>
            <FormLabel>Selecciona un idioma</FormLabel>
            <Select
              onChange={IdiomaChange}
              value={idiomaSeleccionado}>
              <option value=''>Seleccionar idioma</option>
              {idiomas.map(idioma => (
                <option
                  key={idioma}
                  value={idioma}>
                  {idioma}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Selecciona el nivel</FormLabel>
            <Select
              onChange={NivelChange}
              value={nivelSeleccionado}>
              <option value=''>Seleccionar nivel</option>
              {nivelIdiomas.map(nivel => (
                <option
                  key={nivel}
                  value={nivel}>
                  {nivel}
                </option>
              ))}
            </Select>
          </FormControl>
          <Box gridColumn='span 2'>
            <Button onClick={concatenarIdioma}>Agregar idioma</Button>
          </Box>
          <Box gridColumn='span 2'>
            <Center>
              <HStack spacing={4}>
                {idiomasSeleccionados.map((idioma, index) => (
                  <Tag
                    key={index}
                    size='md'
                    borderRadius='full'
                    variant='solid'
                    colorScheme='green'>
                    <TagLabel>{idioma}</TagLabel>
                    <TagCloseButton onClick={() => removeIdioma(index)} />
                  </Tag>
                ))}
              </HStack>
            </Center>
          </Box>
          <FormControl>
            <FormLabel>Selecciona una habilidad blanda</FormLabel>
            <Select
              onChange={HabilidadBlandaChange}
              value={habilidadBlandaSeleccionada}>
              <option value=''>Seleccionar habilida blanda</option>
              {habilidadesBlandas.map(habilidad => (
                <option
                  key={habilidad}
                  value={habilidad}>
                  {habilidad}
                </option>
              ))}
            </Select>
          </FormControl>
          <Box gridColumn='span 2'>
            <Button onClick={concatenarHabilidadBlanda}>Agregar</Button>
          </Box>
          <Box gridColumn='span 2'>
            <Center>
              <HStack spacing={4}>
                {habilidadesBlandasSeleccionadas.map((habilidad, index) => (
                  <Tag
                    key={index}
                    size='md'
                    borderRadius='full'
                    variant='solid'
                    colorScheme='blue'>
                    <TagLabel>{habilidad}</TagLabel>
                    <TagCloseButton onClick={() => removeHabilidadBlanda(index)} />
                  </Tag>
                ))}
              </HStack>
            </Center>
          </Box>
          <FormControl>
            <FormLabel>Selecciona una habilidad técnica</FormLabel>
            <Select
              onChange={HabilidadTecnicaChange}
              value={habilidadTecnicaSeleccionada}>
              <option value=''>Seleccionar habilida técnica</option>
              {habilidadesTecnicas.map(habilidad => (
                <option
                  key={habilidad}
                  value={habilidad}>
                  {habilidad}
                </option>
              ))}
            </Select>
          </FormControl>
          <Box gridColumn='span 2'>
            <Button onClick={concatenarHabilidadTecnica}>Agregar</Button>
          </Box>
          <Box gridColumn='span 2'>
            <Center>
              <HStack spacing={4}>
                {habilidadesTecnicasSeleccionadas.map((habilidad, index) => (
                  <Tag
                    key={index}
                    size='md'
                    borderRadius='full'
                    variant='solid'
                    colorScheme='purple'>
                    <TagLabel>{habilidad}</TagLabel>
                    <TagCloseButton onClick={() => removeHabilidadTecnica(index)} />
                  </Tag>
                ))}
              </HStack>
            </Center>
          </Box>
        </Grid>
      </Box>
    </Center>
  )
}

export default RegistroHabilidades
