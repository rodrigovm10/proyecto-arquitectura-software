import {Center,Box,Heading,Text,Button, Avatar, Divider,Flex} from "@chakra-ui/react";
 // Importa el ícono de edición
import { useState } from 'react'; // Importa useState

import {ImageEditModal} from '../BdtUpdate/FilesEdit'
import { CambioColorDecorator,CambioTipografiaDecorator, PersonalizacionDecorator} from "./DecoratorStyle";

import {estilosTarjetas} from '../../../../constants/DecoratorCard'



function BuscadorDeTrabajo({ usuario, setInfoEdit,styles }) {
  const nombreCompleto = `${usuario.nombre} ${usuario.apellidos}`;
  const direccionCompleta = `${usuario.municipio}, ${usuario.colonia}, ${usuario.calle}, ${usuario.codigoPostal}`;
  const [showEditIcon, setShowEditIcon] = useState(false); // Estado para mostrar/ocultar el ícono de edición
  const [color, setColor] = useState(usuario.color || 'defaultColor');
  const [font, setFont] = useState(usuario.font || 'defaultFont');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardStyleDefault = estilosTarjetas.find(e => e.id === 'default');
  const cardStyleInicial = styles && styles.cardInfo ? estilosTarjetas.find(e => e.id === styles.cardInfo) : cardStyleDefault;
  const [cardStyle, setCardStyle] = useState(cardStyleInicial);
  
  function calcularEdad(fechaNacimiento) {
    const partes = fechaNacimiento.split("-");
    const fechaNac = new Date(partes[0], partes[1] - 1, partes[2]);
    const fechaActual = new Date();
    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    if (
      fechaActual.getMonth() < fechaNac.getMonth() ||
      (fechaActual.getMonth() === fechaNac.getMonth() &&
        fechaActual.getDate() < fechaNac.getDate())
    ) {
      edad--;
    }
    return edad;
  }

  const edad = calcularEdad(usuario.fechaNacimiento);

  const imagenSrc = usuario.imagenBDTUrl ? usuario.imagenBDTUrl : `name=${usuario.nombre}`;
  
  
  return (
    <PersonalizacionDecorator color={color}  font={font}  styleId={styles ? styles.cardInfo : 'default'}>
    
    <Flex
      boxShadow="xl"
      borderWidth="2px"
      borderColor="gray.200"
      borderRadius="lg"
      flexDirection="column"
      p="4"
      mb="5"
      _hover={{ transform: "scale(1.02)" }}
      className={cardStyle.className}
    >
      <>
        <Heading fontSize="xl" mb="4" textAlign="center" p="4">
          Información personal
        </Heading>
        <Center>
        <Box
            position="relative"
            cursor="pointer"
            onMouseEnter={() => setShowEditIcon(true)}
            onMouseLeave={() => setShowEditIcon(false)}
            _hover={{ opacity: showEditIcon ? 1 : 0.8 }}
          >
          <Avatar
            bg="gray.400"
            color="white"
            name={usuario.imagenBDTUrl ? usuario.nombre : usuario.nombre}
            alt={usuario.nombre}
            src={usuario.imagenBDTUrl || ''}
            sx={{ width: "8rem", height: "8rem", fontSize: "2rem" }}
          />

            {showEditIcon && (
              <ImageEditModal
                imageUrl={usuario.imagenBDTUrl}
                usuario={usuario}
                onSave={(newImageUrl) => {
                  setInfoEdit(true);
                }}
              />
                
            )}
          </Box>

        </Center>
        <Text fontSize="2xl" mt="4" mb="2" textAlign="center">
          {nombreCompleto}
        </Text>
        <Text fontSize="lg" mt="4" mb="2" textAlign="center">
          {usuario.escolaridad}
        </Text>
        <Text fontSize="lg"  textAlign="center" mb="4">
          {usuario.genero} - {edad} años
        </Text>
        <Divider borderColor="gray.200" my="1rem" />
        <Text fontSize="lg"  textAlign="center" mb="2">
          {usuario.telefono}
        </Text>
        <Text fontSize="lg"  textAlign="center" mb="4">
          {usuario.correo}
        </Text>
        <Text fontSize="lg"  textAlign="center" mb="4">
          {direccionCompleta}
        </Text>
        <Divider borderColor="gray.200" my="1rem" />
        <Text fontSize="lg" textAlign="center" mb="4">
          {usuario.curp}
        </Text>
        <Center mb="4" justifyContent={"end"} p="4">
          <Button colorScheme="blue" onClick={() => setInfoEdit(true)}>
            Editar
          </Button>
         
        </Center>
      </>
    </Flex>

    </ PersonalizacionDecorator>

    );
}

export default BuscadorDeTrabajo;
