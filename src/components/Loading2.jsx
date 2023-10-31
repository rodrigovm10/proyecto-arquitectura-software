import React, { useState, useLayoutEffect } from "react";
import { Box, Progress, Flex, useColorMode } from "@chakra-ui/react";
import logosinfondo from "../img/logo-sinfondo.png";
import logo from "../img/logo-blanco.png";

function Loading2() {
  const { colorMode } = useColorMode();
  const [currentMessage, setCurrentMessage] = useState(
    "¡Bienvenido a Red Laboral! Conectamos a personas talentosas con empresas que buscan profesionales."
  );

  useLayoutEffect(() => {
    const mensajitos = [
      "¿Buscas nuevas oportunidades laborales? Explora nuestras ofertas y descubre el trabajo de tus sueños.",
      "Las mejores oportunidades laborales te esperan aquí. Tenemos algo para ti, sin importar tu experiencia o especialización.",
      "Para las empresas que buscan empleados excepcionales: ¡están en el lugar adecuado!",
      "El trabajo de tus sueños está a solo un paso de distancia. Encuentra oportunidades emocionantes y desafiantes.",
      "¿Quieres hacer una diferencia en el mundo a través de tu trabajo? Descubre oportunidades laborales con un propósito.",
      "En nuestro mundo laboral, las oportunidades abundan para aquellos que buscan con determinación.",
      "¡Deja atrás la búsqueda tradicional de empleo! Encuentra un proceso simplificado y eficiente.",
      "El camino hacia el éxito profesional no siempre es fácil, pero estamos aquí para apoyarte en cada paso del camino.",
      "En nuestra plataforma, creemos en el poder de los sueños y la pasión. Encuentra la oportunidad perfecta.",
    ];

    let currentIndex = 0;

    const changeMessage = () => {
      setCurrentMessage(mensajitos[currentIndex]);
      currentIndex = (currentIndex + 1) % mensajitos.length;
    };

    const interval = setInterval(changeMessage, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex direction="column" align="center" justify="center" h="100vh">
      <img
        src={colorMode === "light" ? logosinfondo : logo}
        alt="Red Laboral GTO"
        style={{ width: "15rem" }}
      />
      <Box w="60%" pt="1.5rem" textAlign="center">
        <Progress size="xs" isIndeterminate colorScheme="blue" />
        <Flex justify="center" style={{ color: "#7F8C8D" }}>
          {currentMessage}
        </Flex>
      </Box>
    </Flex>
  );
}

export default Loading2;
