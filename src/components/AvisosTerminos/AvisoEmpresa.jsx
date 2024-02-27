import {
  Box,
  Text,
  Heading,
  VStack,
  ListItem,
  UnorderedList,
  Divider,
  Link,
} from "@chakra-ui/react";
import { Header } from "../Header";
import { Footer } from "../../landing/Footer";

export function AvisoEmpresa() {
  return (
    <Box>
      <Header />
      <Box p={1} fontSize="lg">
        <Heading
          as="h1"
          display="flex"
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
          size="lg"
          mt={5}
        >
          Aviso de privacidad
        </Heading>
        <VStack align="stretch" spacing={6} p={10} textAlign="justify">
          <Text textAlign="justify" fontSize="lg">
            Al registrarse y utilizar RedLaboral, las empresas acuerdan
            proporcionar información veraz y precisa. La información que se
            solicitará incluye:
          </Text>
          <Divider />
          <UnorderedList p={5} spacing={3}>
            <ListItem>Nombre de la empresa o razón social.</ListItem>
            <ListItem>
              RFC (Registro Federal de Contribuyentes) o equivalente.
            </ListItem>
            <ListItem>
              Dirección de la oficina principal (calle, municipio, número,
              colonia, C.P.).
            </ListItem>
            <ListItem>Número de teléfono de contacto empresarial.</ListItem>
            <ListItem>Correo electrónico de contacto empresarial.</ListItem>
            <ListItem>Sector o industria de la empresa.</ListItem>
          </UnorderedList>
          <UnorderedList p={5} spacing={3}>
            {/* Definiciones */}
            <ListItem textAlign="justify">
              <strong>Datos Personales:</strong> Cualquier información
              relacionada a una persona física identificada o identificable.
            </ListItem>
            {/* Procedimientos de registro y responsabilidades */}
            <ListItem textAlign="justify">
              <strong>Registro de Usuario:</strong> Usted se compromete a
              proporcionar información precisa y actualizada durante el proceso
              de registro y a actualizar dicha información si es necesario.
            </ListItem>
            {/* Directrices sobre la privacidad */}
            <ListItem textAlign="justify">
              <strong>Privacidad de Datos:</strong> Implementamos medidas de
              seguridad para proteger sus datos personales contra el acceso no
              autorizado o el procesamiento ilegal.
            </ListItem>
            {/* Instrucciones de uso */}
            <ListItem textAlign="justify">
              <strong>Uso de la Plataforma:</strong> Debe utilizar RedLaboral
              solo para fines de búsqueda de empleo y no para actividades
              prohibidas por la ley o nuestros términos de servicio.
            </ListItem>
            {/* Obligaciones sobre la exactitud de la información */}
            <ListItem textAlign="justify">
              <strong>Exactitud de la Información:</strong> Es su
              responsabilidad asegurarse de que su currículum y cualquier otra
              información que proporcione sean completos, veraces y estén
              actualizados.
            </ListItem>
            {/* Propiedad intelectual */}
            <ListItem textAlign="justify">
              <strong>Respeto a la Propiedad Intelectual:</strong> No debe
              infringir los derechos de propiedad intelectual de terceros al
              usar la plataforma.
            </ListItem>
            {/* Limitaciones de responsabilidad */}
            <ListItem textAlign="justify">
              <strong>Limitaciones de Responsabilidad:</strong> RedLaboral no es
              responsable por daños indirectos, incidentales o consecuentes que
              resulten del uso o la incapacidad de usar nuestros servicios.
            </ListItem>
            {/* Cambios en los términos */}
            <ListItem textAlign="justify">
              <strong>Cambios en los Términos:</strong> Nos reservamos el
              derecho de modificar este aviso de privacidad. Cualquier cambio
              entrará en vigor inmediatamente después de su publicación en la
              plataforma.
            </ListItem>
            {/* Resolución de disputas */}
            <ListItem textAlign="justify">
              <strong>Resolución de Disputas:</strong> Cualquier disputa
              relacionada con el uso de RedLaboral será resuelta a través de
              mediación y, si fuera necesario, legalmente bajo la jurisdicción
              de las leyes locales.
            </ListItem>
            {/* Legislación aplicable y jurisdicción */}
            <ListItem textAlign="justify">
              <strong>Jurisdicción:</strong> Este aviso se rige por las leyes
              del país de la sede principal de RedLaboral y cualquier disputa
              legal será resuelta en los tribunales competentes de ese país.
            </ListItem>
          </UnorderedList>

          <Text textAlign="justify">
            Este aviso de privacidad aclara que la información recopilada se
            utiliza exclusivamente para los fines del servicio proporcionado por
            RedLaboral y no será compartida con terceros sin consentimiento,
            salvo en los casos que estipulen las leyes aplicables. Además, la
            plataforma implementa medidas de seguridad para proteger la
            información de accesos no autorizados, alteración, divulgación o
            destrucción de datos.
          </Text>

          <Text textAlign="justify">
            Las empresas tienen derecho a acceder, rectificar y cancelar sus
            datos, así como a oponerse al tratamiento de los mismos o revocar el
            consentimiento que para tal fin nos hayan otorgado. Para ejercer
            esos derechos, las empresas pueden contactarnos a través de los
            medios que proporcionamos en la plataforma.
          </Text>

          <Text textAlign="justify">
            RedLaboral se reserva el derecho de efectuar en cualquier momento
            modificaciones o actualizaciones al presente aviso de privacidad
            para la atención de novedades legislativas, políticas internas o
            nuevos requerimientos para la prestación u ofrecimiento de nuestros
            servicios. Estas modificaciones estarán disponibles al público a
            través de nuestra
            <Link color="teal.500" href="/">
              {" "}
              plataforma web
            </Link>
            , sección aviso de privacidad.
          </Text>

          <Text textAlign="justify">
            Si la empresa decide terminar su cuenta, RedLaboral procederá a la
            eliminación de la información de acuerdo con los términos y
            condiciones y la legislación aplicable.
          </Text>

          <Text textAlign="justify">
            Para cualquier asunto relacionado con el tratamiento de datos y el
            aviso de privacidad, las empresas pueden contactar al departamento
            de atención a usuarios de RedLaboral.
          </Text>

          <Text textAlign="justify">
            Este aviso de privacidad se rige por las leyes del país en el que
            opera RedLaboral, y cualquier disputa surgida en relación con su
            interpretación o aplicación se someterá a los tribunales de dicho
            país.
          </Text>
        </VStack>
      </Box>
      <Footer />
    </Box>
  );
}
