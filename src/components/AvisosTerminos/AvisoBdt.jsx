import { Box, Text, Heading, VStack, Center } from "@chakra-ui/react";
import { Footer } from "../../landing/Footer";
import { Header } from "../Header";

export function AvisoBdt() {
  return (
    <Box>
      <Header />
      <Box p={10} height="100vh">
        <Heading as="h1" size="lg" mb={5}>
          Aviso de privacidad
        </Heading>
        <VStack align="stretch" spacing={4} p={10}>
          <h1>DATOS PERSONALES SOMETIDOS A TRATAMIENTO</h1>
          <Text>
            Al momento de Usted ingresar en la plataforma RedLaboral, con el
            interés de obtener y buscar nuevas propuestas laborales, y generar
            un usuario, se le solicitará los siguientes datos personales en los
            diversos apartados que a continuación se señalan: Generación de
            usuario: Correo electrónico Generación de contraseña se recabarán
            los siguientes datos personales: • Nombre • Clave Única de Registro
            de Población (CURP) • Número de teléfono • Género • Fecha de
            nacimiento • Domicilio (calle, municipio, número, colonia, C.P.) •
            Registro Federal de Contribuyentes (RFC) • Número de Seguridad
            Social • Constancia de situación fiscal
          </Text>
          <Text>
            Al visitar nuestro sitio y/o comprar algo de nosotros, participas en
            nuestro “Servicio” y aceptas los siguientes términos y condiciones
            (“Términos de Servicio”, “Términos”), incluidos todos los términos y
            condiciones adicionales y las políticas a las que se hace referencia
            en el presente documento y/o disponible a través de hipervínculos.
            Estas Condiciones de Servicio se aplican a todos los usuarios del
            sitio, incluyendo sin limitación a usuarios que sean navegadores,
            proveedores, clientes, comerciantes, y/o colaboradores de contenido.
          </Text>
        </VStack>
      </Box>
      <Footer />
    </Box>
  );
}
