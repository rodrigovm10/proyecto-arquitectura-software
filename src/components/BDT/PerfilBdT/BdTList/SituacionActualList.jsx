import React, { useState } from 'react';
import {
  Center,
  Box,
  Stack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Switch,
  Button,
  Flex,
} from "@chakra-ui/react";
import ModalPersonalizacion,{PersonalizarPerfil3,PersonalizarPerfil2} from './ModalPersonalizacion'; // Importa el modal de personalización
import { CambioColorDecorator,CambioTipografiaDecorator, PersonalizacionDecorator,CombinedDecorator } from "./DecoratorStyle";
import {estilosTarjetas} from '../../../../constants/DecoratorCard'
export default function SituacionActualList({
  usuario,
  setUsuario,
  setSitEdit,
  styles
}) {
  const etiquetas = [
    "¿Buscas empleo?",
    "¿Actualmente estás trabajando?",
    "¿Disponibilidad de viajar?",
    "¿Disponibilidad para radicar",
  ];

  const campos = [
    usuario.buscaEmpleo,
    usuario.trabajando,
    usuario.dispViajar,
    usuario.dispRadicar,
  ];

  // Estado para controlar la apertura del modal de personalización

  const [color, setColor] = useState(usuario.color || 'defaultColor');
  const [font, setFont] = useState(usuario.font || 'defaultFont');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardStyleDefault = estilosTarjetas.find(e => e.id === 'default');
  const cardStyleInicial = styles && styles.cardSit ? estilosTarjetas.find(e => e.id === styles.cardSit) : cardStyleDefault;
  const [cardStyle, setCardStyle] = useState(cardStyleInicial);
  
  return (
    <PersonalizacionDecorator color={color} font={font} styleId={styles ? styles.cardSit : 'default'}>
       <Flex
      boxShadow="xl"
      borderWidth="2px"
      borderColor="gray.200"
      borderRadius="lg"
      flexDirection="column"
      p="4"
      _hover={{ transform: "scale(1.02)" }}
       className={cardStyle.className}
    >
      <Heading size="md">Situacion Actual</Heading>
      {etiquetas.map((etiqueta, index) => (
        <FormControl
          key={etiqueta}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={6}
        >
          <FormLabel htmlFor={etiqueta} mb="0">
            {etiqueta}
          </FormLabel>
          <Switch
            id={etiqueta}
            isChecked={campos[index]}
            onChange={() =>
              setUsuario((prevUsuario) => ({
                ...prevUsuario,
                [etiqueta]: !campos[index],
              }))
            }
          />
        </FormControl>
      ))}
      <Flex justifyContent={"end"}>
        <Button colorScheme="blue" onClick={() => setSitEdit(true)} style={{marginLeft:'5px'}}>
          Editar
        </Button>

      </Flex>

    </Flex>
  </PersonalizacionDecorator>
  );
}
