import { useState, useEffect } from "react";
import {Box,Center,Card,Radio,RadioGroup,FormControl,FormLabel, HStack,Switch} from "@chakra-ui/react";
import Swal from "sweetalert2";
function UpdateSituacionActual({ datosSituacion, setDatosSituacion }) {
  const handleChange = (event, value) => {
    setDatosSituacion((prev) => ({ ...prev, [event]: value }));

    if (event === "buscaEmpleo" && !value) {
      Swal.fire({
        icon: "warning",
        title: "¡Advertencia!",
        text: "Ya no serás recomendado para empresas.",
        showCancelButton: false,
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <Center py={6}>
      <Box boxShadow="xl" borderWidth="2px" borderColor="gray.200" borderRadius="lg" p={16} maxW="md">
        <div className="d-flex justify-content-center pt-4">
          <Card variant="outlined">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Box spacing={2} className="m-4 text-center">
              <FormControl display="flex" alignItems="center" justifyContent="space-between" mb={6}>
                  <FormLabel as="legend" className="d-flex justify-content-center" mb="0">
                    ¿Buscas empleo?
                  </FormLabel>
                  <Switch
                    id="buscaEmpleo"
                    defaultChecked={datosSituacion.buscaEmpleo}
                    onChange={(e) => handleChange('buscaEmpleo', e.target.checked)}
                  />
                </FormControl>
                <FormControl display="flex" alignItems="center" justifyContent="space-between" mb={6}>
                  <FormLabel as="legend" className="d-flex justify-content-center">
                    ¿Actualmente estás trabajando?
                  </FormLabel>
                  <Switch
                    id="trabajando"
                    defaultChecked={datosSituacion.trabajando}
                    onChange={(e) => handleChange('trabajando', e.target.checked)}
                  />
                </FormControl>
                <FormControl display="flex" alignItems="center" justifyContent="space-between" mb={6}>
                  <FormLabel as="legend" className="d-flex justify-content-center">
                    ¿Disponibilidad de viajar?
                  </FormLabel>
                  <Switch
                    id="dispViaja"
                    defaultChecked={datosSituacion.dispViajar}
                    onChange={(e) => handleChange('dispViajar', e.target.checked)}
                  />
                </FormControl>
                <FormControl display="flex" alignItems="center" justifyContent="space-between" mb={6}>
                  <FormLabel as="legend" className="d-flex justify-content-center">
                    ¿Disponibilidad para realizar cambio de residencia?
                  </FormLabel>
                  <Switch
                    id="dispRadicar"
                    defaultChecked={datosSituacion.dispRadicar}
                    onChange={(e) => handleChange('dispRadicar', e.target.checked)}
                  />
                </FormControl>
              </Box>
            </div>
          </Card>
        </div>
      </Box>
    </Center>
  );
}

export default UpdateSituacionActual;