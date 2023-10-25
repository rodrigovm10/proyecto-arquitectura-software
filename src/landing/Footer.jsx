import { Flex, Link, Image } from "@chakra-ui/react";
import logo from "../img/logo.png";
import { Facebook, Instagram, X } from "../assets/Icons";

export function Footer() {
  return (
    <>
      <Flex
        as="footer"
        width="100%"
        justify="space-between"
        backgroundColor="#181c24"
        padding="1rem"
      >
        {/**logo */}
        <Flex
          width="30%"
          color="white"
          align="left"
          justify="left"
          flexDirection="column"
        >
          <Link href="/">
            <Image src={logo} width={200} />
          </Link>
          <p align="left">
            Únete a nuestra comunidad de red de trabajo. Enlazamos empresas y
            profesionales a través de una plataforma sencilla y amigable.
          </p>
        </Flex>

        {/**Nav */}
        <Flex
          width="20%"
          textColor={"white"}
          align="left"
          justify="space-between"
          direction="column"
        >
          <h2>Navegación</h2>
          <Link href="/">Inicio</Link>
          <Link href="/login-bdt">Buscadores de trabajo</Link>
          <Link href="/login-empresa">Empresas</Link>
        </Flex>
        {/**Enlaces*/}
        <Flex
          textColor={"white"}
          width="25%"
          align="left"
          justify="space-between"
          direction="column"
        >
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
        <Flex
          textColor={"white"}
          width="25%"
          align="left"
          justify="space-between"
          direction="column"
        >
          <h2>Contacto</h2>
          <p href="/">León Gto, NY 10012, US</p>
          <p href="/">redlaboral@gmail.com</p>
          <p href="/">+ 01 123 675 78</p>
          <p href="/">+ 477 688 89 09</p>
        </Flex>
      </Flex>

      <Flex
        as="footer"
        width="100%"
        justify="end"
        backgroundColor="#181c24"
        padding="1rem"
      >
        <Flex width="50%" color="white" align="left" justify="left">
          @ Derechos reservados por Red Laboral
        </Flex>
        <Flex width="50%" color="white" align="" justify="end" mr="250">
          <Facebook />
          <Instagram />
          <X />
        </Flex>
      </Flex>
    </>
  );
}
