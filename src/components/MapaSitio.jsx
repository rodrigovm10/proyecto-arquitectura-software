import {
  Box,
  Card,
  Heading,
  SimpleGrid,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { MUNICIPIOSM } from "../constants/Datos";
import { AreaEmpresa } from "../constants/Datos";
import { Header } from "./Header";
import { Footer } from "../landing/Footer";
import { Link } from "react-router-dom";

export function MapaSitio() {
  return (
    <>
      <Header />
      <Box p={5}>
        <Heading>Mapa del sitio</Heading>
        <SimpleGrid
          pt={3}
          gap={4}
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
        >
          <Card p={4}>
            <Text as="i" fontSize={24}>
              Inicio y ayuda
            </Text>
            <UnorderedList p={4} spacing={3}>
              <ListItem>
                <Link href="/">
                  <Text fontSize={21} _hover={{ color: "#79f0f7" }} href="/">
                    Inicio
                  </Text>
                </Link>
              </ListItem>
              <ListItem>
                <Text fontSize={21} _hover={{ color: "#79f0f7" }}>
                  Registro gratuito
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={21} _hover={{ color: "#79f0f7" }}>
                  Términos y condiciones usuarios
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={21} _hover={{ color: "#79f0f7" }}>
                  Aviso de privacidad usuarios
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={21} _hover={{ color: "#79f0f7" }}>
                  Términos y condiciones empresa
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={21} _hover={{ color: "#79f0f7" }}>
                  Aviso de privacidad empresas
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={21} _hover={{ color: "#79f0f7" }}>
                  Empresas
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={21} _hover={{ color: "#79f0f7" }}>
                  Busadores de trabajo
                </Text>
              </ListItem>
            </UnorderedList>
          </Card>
          <Card p={4}>
            <Text as="i" fontSize={24}>
              Servicios reclutadores
            </Text>
            <UnorderedList p={4} spacing={3}>
              <ListItem>
                <Text fontSize={21} _hover={{ color: "#79f0f7" }}>
                  Registro gratuito
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={21} _hover={{ color: "#79f0f7" }}>
                  Entrar a su cuenta
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={21} _hover={{ color: "#79f0f7" }}>
                  Publicar vacantes
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={21} _hover={{ color: "#79f0f7" }}>
                  Elegir candidatos
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={21} _hover={{ color: "#79f0f7" }}>
                  Ver postulados
                </Text>
              </ListItem>
            </UnorderedList>
          </Card>
          <Card p={4}>
            <Text as="i" fontSize={24}>
              Servicios candidados
            </Text>
            <UnorderedList p={4} spacing={3}>
              <ListItem>
                <Text fontSize={21} _hover={{ color: "#79f0f7" }}>
                  Registro gratuito
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={21} _hover={{ color: "#79f0f7" }}>
                  Entrar a su cuenta
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={21} _hover={{ color: "#79f0f7" }}>
                  Ver vacantes
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={21} _hover={{ color: "#79f0f7" }}>
                  Postularse
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={21} _hover={{ color: "#79f0f7" }}>
                  Cargar CV
                </Text>
              </ListItem>
            </UnorderedList>
          </Card>
          <Card p={4}>
            <Text as="i" fontSize={24}>
              Empleos por área
            </Text>
            <UnorderedList p={4} spacing={3}>
              {AreaEmpresa.map((AreaEmpresa, index) => (
                <ListItem
                  textAlign="justify"
                  key={index}
                  size={{ base: "lg", md: "xl", xs: "sm", xl: "lg", lg: "xl" }}
                >
                  <Text fontSize={20} _hover={{ color: "#79f0f7" }}>
                    {AreaEmpresa}
                  </Text>
                </ListItem>
              ))}
            </UnorderedList>
          </Card>
          <Card p={4}>
            <Text as="i" fontSize={24}>
              Busqueda de empleo por municipio
            </Text>
            <UnorderedList p={5} spacing={3}>
              {MUNICIPIOSM.map((MUNICIPIOSM, index) => (
                <ListItem
                  textAlign="justify"
                  key={index}
                  size={{ base: "lg", md: "xl", xs: "sm", xl: "lg", lg: "xl" }}
                >
                  <Text fontSize={20} _hover={{ color: "#79f0f7" }}>
                    {MUNICIPIOSM}
                  </Text>
                </ListItem>
              ))}
            </UnorderedList>
          </Card>
          <Card p={4}>
            <Text as="i" fontSize={24}>
              Perfiles
            </Text>
            <UnorderedList p={4} spacing={3}>
              <ListItem>
                <Text fontSize={21} _hover={{ color: "#79f0f7" }}>
                  Facebook
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={21} _hover={{ color: "#79f0f7" }}>
                  Instagram
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={21} _hover={{ color: "#79f0f7" }}>
                  Twitter
                </Text>
              </ListItem>
            </UnorderedList>
          </Card>
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  );
}
