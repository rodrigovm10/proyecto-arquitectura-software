import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  isSmallScreen,
} from "@chakra-ui/react";
import { Footer } from "../../landing/Footer";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";

export function PrincipalBdt() {
  const isSmallScreen = window.innerWidth <= 768;

  return (
    <Box>
      <Header />
      <Flex
        p={5}
        justify="flex-end"
        gap={4}
        direction={{ base: "column", md: "row" }}
      >
        <Link to="/login-bdt">
          <Button
            bg="#181c24"
            color="white"
            _hover={{ bg: "white", color: "#181c24" }}
            fontSize="20px"
          >
            Registrarse
          </Button>
        </Link>
      </Flex>

      <Flex flexDirection={{ base: "column", md: "row" }} flexWrap="wrap">
        <Box
          flex={{ base: "1", md: "1/2" }}
          bg="transparent"
          pt="6"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text className="Text">EMPLEADOS COMPETITIVOS</Text>
          <Text>
            Descubre a tu equipo ideal, encuentra a los mejores talentos para tu
            empresa.
          </Text>
          <Text>Reclutamiento Simplificado, Éxito Asegurado.</Text>
          <Stack direction="row">
            <Image
              p="5"
              w="full"
              borderRadius={20}
              objectFit="cover"
              src="https://media.istockphoto.com/id/183304802/es/foto/equipo-de-j%C3%B3venes-trabajando-en-los-ordenadores-port%C3%A1tiles-y-escritura.jpg?s=612x612&w=0&k=20&c=E1YNBQyvsGdksqqJr_SaBgzA3IsWEeMvkSxaeUcNe9A="
              alt="Dan Abramov"
            />
          </Stack>
        </Box>
        <Box
          flex={{ base: "1", md: "1/2" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          bg="transparent"
        >
          <Stack direction="row" pb="5" pt="5">
            <a href="https://www.vivaaerobus.com/" target="_blank">
              <Image
                boxSize="100px"
                objectFit="cover"
                borderRadius="full"
                src="https://media.istockphoto.com/id/1014950710/es/foto/retrato-de-un-alba%C3%B1il-feliz-en-un-sitio-de-edificio.jpg?s=612x612&w=0&k=20&c=7ETmKiJ1UZr2SeeQgqmRpykJg6YE7X7pVmibfrOavvk="
                alt="Dan Abramov"
                style={{
                  transition: "transform 0.3s ease-in-out",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              />
            </a>
            <Image
              boxSize="150px"
              objectFit="cover"
              borderRadius="full"
              src="https://media.istockphoto.com/id/475297582/es/foto/vista-a%C3%A9rea-de-las-personas-de-negocios-en-la-sala-de-reuniones.jpg?s=612x612&w=0&k=20&c=h5ZOc-skrBTC7Vp-dSYnIH_NdfUFDu6P7KaktuRPzvY="
              alt="Dan Abramov"
              style={{
                transition: "transform 0.3s ease-in-out",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
            <Image
              boxSize="100px"
              objectFit="cover"
              borderRadius="full"
              src="https://media.istockphoto.com/id/1454530428/es/foto/grupo-de-empresarios-hablando-en-la-oficina.jpg?s=612x612&w=0&k=20&c=59mrZNimCDuXzRqXCO9LjbZe_It6WW8f7qOtf0_Kd1I="
              alt="Dan Abramov"
              style={{
                transition: "transform 0.3s ease-in-out",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
            {isSmallScreen ? null : (
              <Image
                boxSize="200px"
                objectFit="cover"
                borderRadius="full"
                src="https://media.istockphoto.com/id/1430330223/es/foto/los-ingenieros-de-programaci%C3%B3n-est%C3%A1n-desarrollando-c%C3%B3digos-en-sus-computadoras.jpg?s=612x612&w=0&k=20&c=yaIrtifRRznTVhGntjHq6So4a3lJ9TUXz1G0qJp2kEw="
                alt="Soriana"
                style={{
                  transition: "transform 0.3s ease-in-out",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              />
            )}
          </Stack>
          <Stack direction="row" pb="5">
            <Image
              boxSize="100px"
              objectFit="cover"
              borderRadius="full"
              src="https://media.istockphoto.com/id/1450480638/es/foto/dos-trabajadores-industriales-metalististas-con-tableta-en-una-f%C3%A1brica-de-fabricaci%C3%B3n.jpg?s=612x612&w=0&k=20&c=d6LqZtsmZ6FM6W6F2QYMHUUk-DMqP1Ob6FXgi4-swuM="
              alt="Dan Abramov"
              style={{
                transition: "transform 0.3s ease-in-out",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
            <Image
              boxSize="150px"
              objectFit="cover"
              borderRadius="full"
              src="https://media.istockphoto.com/id/1436911537/es/foto/trabajadores-manuales-que-utilizan-el-panel-t%C3%A1ctil-con-la-inspectora-asi%C3%A1tica-en-una-f%C3%A1brica.jpg?s=612x612&w=0&k=20&c=_NZJ2CLuZygKEQ59VkOAwwAGKCNaqIJ8-3vPlCfhYr0="
              alt="BBVA"
              style={{
                transition: "transform 0.3s ease-in-out",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
            <Image
              boxSize="100px"
              objectFit="cover"
              borderRadius="full"
              src="https://media.istockphoto.com/id/1472229111/es/foto/software-de-planificaci%C3%B3n-de-proyectos-para-la-gesti%C3%B3n-de-proyectos-empresariales-modish.jpg?s=612x612&w=0&k=20&c=EAD6kniKPK88XTq66RHEQH9EEk6IjiqCkQ5PhfTn6B4="
              alt="Dan Abramov"
              style={{
                transition: "transform 0.3s ease-in-out",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
            {isSmallScreen ? null : (
              <Image
                boxSize="170px"
                objectFit="cover"
                borderRadius="full"
                src="https://media.istockphoto.com/id/475297582/es/foto/vista-a%C3%A9rea-de-las-personas-de-negocios-en-la-sala-de-reuniones.jpg?s=612x612&w=0&k=20&c=h5ZOc-skrBTC7Vp-dSYnIH_NdfUFDu6P7KaktuRPzvY="
                alt="Dan Abramov"
                style={{
                  transition: "transform 0.3s ease-in-out",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              />
            )}
          </Stack>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
}
