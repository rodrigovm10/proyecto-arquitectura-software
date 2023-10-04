import { FormLabel, Input, Heading, Center, Select, Grid, GridItem } from '@chakra-ui/react'
import { Nav } from '../pages/Nav'
import { Genero, DiasLaborales, Idiomas, MUNICIPIOS, HabilidadesTecnicas, HabilidadesBlandas, Discapacidades, Prestaciones, Escolaridad, TipoEmpleo, CausaVacante, AreaEmpresa } from '../constants/Datos'

export function Vacante() {
  return (
    <>
      <Nav />
      <Heading as='h3'>
        <Center>Registro Vacantes</Center>
      </Heading>
      <Center py={6}>
        <Grid
          templateColumns='repeat(2, 1fr)'
          gap={10}>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Nombre Vacante</FormLabel>
            <Input type='text'></Input>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Descripción</FormLabel>
            <Input type='text'></Input>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Número de plazas</FormLabel>
            <Input type='text'></Input>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Dias laborales</FormLabel>
            <Select placeholder='Seleccione dias laborales'>
              {DiasLaborales.map(diaslaborales => (
                <option
                  key={diaslaborales}
                  value={diaslaborales}>
                  {diaslaborales}
                </option>
              ))}
            </Select>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Habilidades blandas</FormLabel>
            <Select placeholder='Seleccione sus habilidades blandas'>
              {HabilidadesBlandas.map(habilidadesblandas => (
                <option
                  key={habilidadesblandas}
                  value={habilidadesblandas}>
                  {habilidadesblandas}
                </option>
              ))}
            </Select>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Habilidades técnicas</FormLabel>
            <Select placeholder='Seleccione sus habilidades blandas'>
              {HabilidadesTecnicas.map(habilidadestecnicas => (
                <option
                  key={habilidadestecnicas}
                  value={habilidadestecnicas}>
                  {habilidadestecnicas}
                </option>
              ))}
            </Select>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Género</FormLabel>
            <Select placeholder='Seleccione un género'>
              {Genero.map(genero => (
                <option
                  key={genero}
                  value={genero}>
                  {genero}
                </option>
              ))}
            </Select>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Edad Min</FormLabel>
            <Input type='text'></Input>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Edad Max</FormLabel>
            <Input type='text'></Input>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Discapacidades Aceptadas</FormLabel>
            <Select placeholder='Seleccione las discapacidades aceptadas '>
              {Discapacidades.map(discapacidades => (
                <option
                  key={discapacidades}
                  value={discapacidades}>
                  {discapacidades}
                </option>
              ))}
            </Select>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Área</FormLabel>
            <Select placeholder='Seleccione el Área de la empresa'>
              {AreaEmpresa.map(areaempresa => (
                <option
                  key={areaempresa}
                  value={areaempresa}>
                  {areaempresa}
                </option>
              ))}
            </Select>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Tipo empleo</FormLabel>
            <Select placeholder='Seleccione el Tipo empleo'>
              {TipoEmpleo.map(tipoempleo => (
                <option
                  key={tipoempleo}
                  value={tipoempleo}>
                  {tipoempleo}
                </option>
              ))}
            </Select>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Causa vacante</FormLabel>
            <Select placeholder='Seleccione la Causa de la vacante'>
              {CausaVacante.map(causavacante => (
                <option
                  key={causavacante}
                  value={causavacante}>
                  {causavacante}
                </option>
              ))}
            </Select>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Disponibildad para vijar</FormLabel>
            <Input type='text'></Input>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Disponibildad para radicar</FormLabel>
            <Input type='text'></Input>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Escolaridad</FormLabel>
            <Select placeholder='Seleccione la Escolaridad'>
              {Escolaridad.map(escolaridad => (
                <option
                  key={escolaridad}
                  value={escolaridad}>
                  {escolaridad}
                </option>
              ))}
            </Select>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Vigencia Vacante</FormLabel>
            <Input type='date'></Input>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Prestaciones</FormLabel>
            <Select placeholder='Seleccione las Prestaciones'>
              {Prestaciones.map(prestaciones => (
                <option
                  key={prestaciones}
                  value={prestaciones}>
                  {prestaciones}
                </option>
              ))}
            </Select>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Direccion empresa</FormLabel>
            <Input type='text'></Input>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Municipio</FormLabel>
            <Select placeholder='Seleccione el municipio'>
              {MUNICIPIOS.map(municipios => (
                <option
                  key={municipios}
                  value={municipios}>
                  {municipios}
                </option>
              ))}
            </Select>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Colonia</FormLabel>
            <Input type='text'></Input>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Calle</FormLabel>
            <Input type='text'></Input>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>CP</FormLabel>
            <Input type='text'></Input>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Número</FormLabel>
            <Input type='text'></Input>
          </GridItem>
          <GridItem
            w='100%'
            h='10'>
            <FormLabel>Idioma</FormLabel>
            <Select placeholder='Seleccione el idioma'>
              {Idiomas.map(idiomas => (
                <option
                  key={idiomas}
                  value={idiomas}>
                  {idiomas}
                </option>
              ))}
            </Select>
          </GridItem>
        </Grid>
      </Center>
    </>
  )
}
