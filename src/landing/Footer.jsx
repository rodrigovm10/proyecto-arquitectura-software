import { Grid, Link, Image, Flex } from "@chakra-ui/react";
import logo from "../img/logo.png";
import { Facebook, Instagram, X } from "../assets/Icons";

export function Footer() {
  return (
    <>
      <Grid
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
          <p>
            Únete a nuestra comunidad de red de trabajo. Enlazamos empresas y
            profesionales a través de una plataforma sencilla y amigable.
          </p>
        </Flex>

        {/**Nav */}
        <Flex direction="column" textColor={"white"}>
          <h2>Navegación</h2>
          <Link href="/">Inicio</Link>
          <Link href="/login-bdt">Buscadores de trabajo</Link>
          <Link href="/login-empresa">Empresas</Link>
        </Flex>

        {/**Enlaces*/}
        <Flex direction="column" textColor={"white"}>
          <h2>Legal</h2>
          <Link href="/" style={{ textDecoration: "underline" }}>
            Términos y condiciones de usuarios
          </Link>
          <Link href="/" style={{ textDecoration: "underline" }}>
            Aviso de privacidad de usuarios
          </Link>
          <Link href="/" style={{ textDecoration: "underline" }}>
            Términos y condiciones de empresas
          </Link>
          <Link href="/" style={{ textDecoration: "underline" }}>
            Aviso de privacidad de empresas
          </Link>
        </Flex>

        {/**Contact */}
        <Flex direction="column" textColor={"white"}>
          <h2>Contacto</h2>
          <p>León Gto, NY 10012, US</p>
          <p>redlaboral@gmail.com</p>
          <p>+ 01 123 675 78</p>
          <p>+ 477 688 89 09</p>
        </Flex>
        {/**Derechos */}
        <Flex color="white">@ Derechos reservados por Red Laboral</Flex>
        {/**Redes */}
        <Flex color="white" justify="end">
          <Facebook />
          <Instagram />
          <X />
        </Flex>
      </Grid>
    </>
  );
}
