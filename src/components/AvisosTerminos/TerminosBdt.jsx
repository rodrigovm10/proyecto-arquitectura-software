import {
  Box,
  Text,
  ListItem,
  UnorderedList,
  VStack,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { Footer } from "../../landing/Footer";
import { Header } from "../Header";

export function TerminosBdt() {
  return (
    <Box>
      <Header />
      <Box p={1} fontSize="lg">
        <VStack align="stretch" spacing={8} p={10}>
          <Heading
            as="h1"
            size={{ base: "lg", md: "xl", xs: "sm" }}
            textAlign="center"
          >
            Términos y Condiciones
          </Heading>
          <Text textAlign="justify">
            Al acceder o utilizar nuestra plataforma de búsqueda de trabajo,
            usted acepta estar sujeto a los siguientes términos y condiciones
            (los "Términos"). Por favor, lea los Términos cuidadosamente antes
            de utilizar nuestro servicio.
          </Text>
          <Divider />
          <UnorderedList p={5} spacing={3}>
            {terminos.map((termino, index) => (
              <ListItem
                textAlign="justify"
                key={index}
                size={{ base: "lg", md: "xl", xs: "sm", xl: "lg", lg: "xl" }}
              >
                {termino}
              </ListItem>
            ))}
          </UnorderedList>
          <Text textAlign="justify">
            Al utilizar nuestra plataforma, usted reconoce y acepta que el
            contenido publicado en la misma, incluyendo textos, gráficos, logos,
            iconos, imágenes y software, es propiedad de la plataforma o de sus
            proveedores de contenido y está protegido por leyes de derechos de
            autor, marcas registradas, patentes u otros derechos y leyes de
            propiedad intelectual. Nuestros usuarios se comprometen a respetar
            dichos derechos y a no realizar actos de infracción, como la
            reproducción, modificación, distribución o exhibición del contenido
            sin el debido consentimiento. La plataforma se reserva el derecho de
            tomar acciones legales frente a cualquier violación de los derechos
            de propiedad intelectual.
          </Text>
        </VStack>
      </Box>
      <Footer />
    </Box>
  );
}

const terminos = [
  "Definiciones de términos clave utilizados en los términos y condiciones.",
  "Procedimientos de registro y responsabilidades del usuario respecto a sus credenciales.",
  "Directrices sobre la privacidad y protección de datos personales.",
  "Instrucciones sobre el uso apropiado de la plataforma y restricciones aplicables.",
  "Obligaciones de los usuarios en cuanto a la exactitud de la información proporcionada.",
  "Derechos de propiedad intelectual relacionados con el contenido en la plataforma.",
  "Limitaciones de responsabilidad de la plataforma.",
  "Información sobre cómo y cuándo pueden cambiar los términos y servicios ofrecidos.",
  "Métodos para la resolución de disputas entre usuarios y la plataforma.",
  "Detalles sobre la legislación aplicable y jurisdicción.",
];
