import { useState, useEffect } from "react";
import {Box,Center,Card,Radio,RadioGroup,FormControl,FormLabel, HStack,} from "@chakra-ui/react";


function RegistroBdESituacionActual({ datosSituacion, setDatosSituacion }) {

  const handleChange = (event, value) => {
    const valor = value === "true"; // Convertir a un valor booleano
    setDatosSituacion((prev) => ({ ...prev, [event]: valor }));
    localStorage.setItem(event, valor);
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
    <div className="d-flex justify-content-center pt-4">
      <Card variant="outlined">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Box spacing={2} className="m-4 text-center">
          
            <FormControl display="flex"
              alignItems="center"
              justifyContent="space-between" // Añade esta línea
              mb={6} // También puedes ajustar el espaciado vertical aquí
              >
              <FormLabel as="legend" className="d-flex justify-content-center" mb="0">
                ¿Buscas empleo?
              </FormLabel>
              <RadioGroup
                defaultValue={datosSituacion.buscasEmpleo}
                onChange={(value) => handleChange("buscasEmpleo",value)}
              >
                <HStack spacing="24px">
                  <Radio value="true">Sí</Radio>
                  <Radio value="false">No</Radio>
                </HStack>
              </RadioGroup>
             
            </FormControl>
            <FormControl display="flex"
              alignItems="center"
              justifyContent="space-between" // Añade esta línea
              mb={6} // También puedes ajustar el espaciado vertical aquí
              >
              <FormLabel as="legend" className="d-flex justify-content-center">
                ¿Actualmente estás trabajando?
              </FormLabel>
              <RadioGroup
                defaultValue={datosSituacion.trabajando}
                onChange={(value) => handleChange("trabajando",value)}
              >
                <HStack spacing="24px">
                  <Radio value="true">Sí</Radio>
                  <Radio value="false">No</Radio>
                </HStack>
              </RadioGroup>
            
            </FormControl>
            <FormControl display="flex"
              alignItems="center"
              justifyContent="space-between" // Añade esta línea
              mb={6} // También puedes ajustar el espaciado vertical aquí
              >
              <FormLabel as="legend" className="d-flex justify-content-center">
                ¿Disponibilidad de viajar?
              </FormLabel>
              <RadioGroup
                defaultValue={datosSituacion.dispViaja}
                onChange={(value) => handleChange("dispViaja",value)}
              >
                <HStack spacing="24px">
                  <Radio value="true">Sí</Radio>
                  <Radio value="false">No</Radio>
                </HStack>
              </RadioGroup>
            
            </FormControl>
            <FormControl display="flex"
              alignItems="center"
              justifyContent="space-between" // Añade esta línea
              mb={6} // También puedes ajustar el espaciado vertical aquí
              >
              <FormLabel as="legend" className="d-flex justify-content-center">
                ¿Disponibilidad para realizar cambio de residencia?
              </FormLabel>
              <RadioGroup
                defaultValue={datosSituacion.dispRadicar}
                onChange={(value) => handleChange("dispRadicar", value)}
              >
                <HStack spacing="24px">
                  <Radio value="true">Sí</Radio>
                  <Radio value="false">No</Radio>
                </HStack>
              </RadioGroup>
           
            </FormControl>
          </Box>
        </div>
      </Card>
    </div>
    </Box>
  </Center>
  );
}

export default RegistroBdESituacionActual;
