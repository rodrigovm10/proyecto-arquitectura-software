import { Grid, Link, Image, Flex, Text } from "@chakra-ui/react";
import logo from "../img/logo-sinfondo.png";
import { Facebook, Instagram, X } from "../assets/Icons";
import { useLocation } from "react-router-dom";

export function Footer() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <>
      <Grid
        fontSize={{ base: "lg", md: "sm", lg: "xl" }}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
        width="100%"
        backgroundColor="#181c24"
        padding="1rem"
      >
        {/**logo */}
        <Flex color="white" flexDirection="column">
          <Link href="/">
            <Image src={logo} width={{ base: "150px", md: "200px" }} />
          </Link>
          <Text textAlign="justify">
            Únete a nuestra comunidad de red de trabajo. Enlazamos empresas y
            profesionales a través de una plataforma sencilla y amigable.
          </Text>
        </Flex>

        {/**Nav */}
        <Flex direction="column" textColor={"white"}>
          <Text>Navegación</Text>
          <Link
            color="#fff"
            href="/"
            _hover={{ color: "#79f0f7" }}
            style={isActive("/") ? { color: "#79f0f7" } : null}
          >
            Inicio
          </Link>
          <Link
            color="#fff"
            href="/iniciop-bdt"
            _hover={{ color: "#79f0f7" }}
            style={isActive("/iniciop-bdt") ? { color: "#79f0f7" } : null}
          >
            Buscadores de trabajo
          </Link>
          <Link
            color="#fff"
            href="/login-empresa"
            _hover={{ color: "#79f0f7" }}
            style={isActive("/login-empresa") ? { color: "#79f0f7" } : null}
          >
            Empresas
          </Link>
        </Flex>

        {/**Enlaces*/}
        <Flex direction="column" textColor={"white"}>
          <Text>Legal</Text>
          <Link
            href="/terminos-bdt"
            target="_blank"
            style={isActive("/terminos-bdt") ? { color: "#79f0f7" } : null}
            _hover={{ color: "#79f0f7" }}
          >
            Términos y condiciones de usuarios
          </Link>
          <Link
            href="/aviso-bdt"
            target="_blank"
            style={isActive("/aviso-bdt") ? { color: "#79f0f7" } : null}
            _hover={{ color: "#79f0f7" }}
          >
            Aviso de privacidad de usuarios
          </Link>
          <Link
            href="/terminos-empresa"
            target="_blank"
            style={isActive("/terminos-empresa") ? { color: "#79f0f7" } : null}
            _hover={{ color: "#79f0f7" }}
          >
            Términos y condiciones de empresas
          </Link>
          <Link
            href="/aviso-empresa"
            target="_blank"
            style={isActive("/aviso-empresa") ? { color: "#79f0f7" } : null}
            _hover={{ color: "#79f0f7" }}
          >
            Aviso de privacidad de empresas
          </Link>
        </Flex>

        {/**Contact */}
        <Flex direction="column" textColor={"white"}>
          <Text>Contacto</Text>
          <Text>León Gto, NY 10012, US</Text>
          <Text>redlabolal@gmail.com</Text>
          <Text>477 688 89 09</Text>

          <Link
            color="#fff"
            href="/mapa-sitio"
            _hover={{ color: "#79f0f7" }}
            style={isActive("/mapa-sitio") ? { color: "#79f0f7" } : null}
          >
            Mapa del sitio
          </Link>
        </Flex>
        {/**Derechos */}
        <Flex color="white">@ Derechos reservados por Red Laboral</Flex>
        {/**Redes */}
        <Flex color="white" justify="end">
          <a
            href="https://www.facebook.com/profile.php?id=61556749311225"
            target="_blank"
          >
            <Facebook />
          </a>
          <a href="https://www.instagram.com/redlaboral2/" target="_blank">
            <Instagram />
          </a>
          <a href="https://twitter.com/RedLaboral56859" target="_blank">
            <X />
          </a>
        </Flex>
      </Grid>
    </>
  );
}
