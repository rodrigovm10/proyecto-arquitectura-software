import {
  Box,
  Text,
  ListItem,
  UnorderedList,
  VStack,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { Header } from "../Header";
import { Footer } from "../../landing/Footer";

export function TerminosEmpresa() {
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
            Al acceder o utilizar nuestra plataforma RedLaboral para empresas,
            usted acepta estar sujeto a los siguientes términos y condiciones.
            Estos términos están diseñados para asegurar una colaboración
            efectiva y segura entre todas las partes involucradas.
          </Text>
          <Divider />
          <UnorderedList p={5} spacing={3}>
            {/* Aquí comienzan los términos y condiciones detallados */}
            <ListItem textAlign="justify">
              <strong>Alcance de Servicio:</strong> RedLaboral ofrece una
              plataforma para publicar ofertas de trabajo y buscar candidatos
              adecuados, con herramientas para gestionar el proceso de
              reclutamiento.
            </ListItem>
            <ListItem textAlign="justify">
              <strong>Creación y Manejo de Cuentas:</strong> Las empresas deben
              proporcionar información precisa al crear una cuenta y son
              responsables de mantener la confidencialidad de sus datos de
              acceso.
            </ListItem>
            <ListItem textAlign="justify">
              <strong>Publicación de Ofertas de Trabajo:</strong> Las empresas
              deben asegurarse de que el contenido de sus ofertas de empleo sea
              veraz y no engañoso.
            </ListItem>
            <ListItem textAlign="justify">
              <strong>Uso de Datos de Candidatos:</strong> Las empresas deben
              manejar los datos de los candidatos en conformidad con las leyes
              de protección de datos aplicables.
            </ListItem>
            <ListItem textAlign="justify">
              <strong>Propiedad Intelectual:</strong> Se debe respetar la
              propiedad intelectual de los contenidos proporcionados por los
              candidatos.
            </ListItem>
            <ListItem textAlign="justify">
              <strong>Confidencialidad:</strong> Las empresas tienen la
              obligación de mantener la confidencialidad de la información
              recibida de los candidatos.
            </ListItem>
            <ListItem textAlign="justify">
              <strong>Indemnización:</strong> Las empresas acuerdan indemnizar a
              RedLaboral en caso de violación de los términos o daño a la
              plataforma.
            </ListItem>
            <ListItem textAlign="justify">
              <strong>Modificaciones de los Términos:</strong> RedLaboral puede
              modificar estos términos y condiciones en cualquier momento, con
              notificación a las empresas.
            </ListItem>
            <ListItem textAlign="justify">
              <strong>Jurisdicción y Leyes Aplicables:</strong> El acuerdo se
              rige por las leyes del país de operación de la plataforma y
              cualquier disputa legal se resolverá en sus tribunales.
            </ListItem>
            {/* Aquí terminan los términos y condiciones detallados */}
          </UnorderedList>
          <Text textAlign="justify">
            Al utilizar RedLaboral, reconoce que ha leído y comprendido estos
            términos y está de acuerdo con estar legalmente obligado por ellos.
          </Text>
        </VStack>
      </Box>
      <Footer />
    </Box>
  );
}
