import {
  Box,
  Image,
  Text,
  Heading,
  CardBody,
  Stack,
  Card,
  Container,
  AbsoluteCenter,
  VStack,
  Flex,
  Square,
  Divider,
  Center,
  StackDivider,
} from "@chakra-ui/react";
import bdt from "../../src/img/bdt.jpg";
import negocio from "../../src/img/negocio.jpg";
import solucion from "../../src/img/solucion.png";

export function NavMedium() {
  const isSmallScreen = window.innerWidth <= 768;
  return (
    <>
      <Box
        flex={{ base: "1", md: "1/2" }}
        bg="transparent"
        p="4"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <style>
          {`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');
      .Text {
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
      }
    `}
        </style>
      </Box>
      <Flex flexDirection={{ base: "column", md: "row" }} flexWrap="wrap">
        <Box
          flex={{ base: "1", md: "1/2" }}
          bg="transparent"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text className="Text">EMPRESAS ASOCIADAS</Text>
          <Text>
            Movilizamos a las personas para alcanzar objetivos ambiciosos con
            rapidez.
          </Text>
          <Text>Construye tu red profesional y amplía tus conexiones.</Text>
          <Stack direction="row">
            <Image
              p="5"
              borderRadius={20}
              objectFit="cover"
              src="https://www.vision.com/wp-content/uploads/2008/11/AdobeStock_194355042-1024x475.jpeg"
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
          p="4"
        >
          <Stack direction="row" pb="5" pt="5">
            <a href="https://www.vivaaerobus.com/" target="_blank">
              <Image
                boxSize="100px"
                objectFit="cover"
                borderRadius="full"
                src="data:image/png;base64,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"
                alt="Dan Abramov"
              />
            </a>
            <Image
              boxSize="150px"
              objectFit="cover"
              borderRadius="full"
              src="data:image/png;base64,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"
              alt="Dan Abramov"
            />
            <Image
              boxSize="100px"
              objectFit="cover"
              borderRadius="full"
              src="data:image/png;base64,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"
              alt="Dan Abramov"
            />
            {isSmallScreen ? null : (
              <Image
                boxSize="200px"
                objectFit="cover"
                borderRadius="full"
                src="data:image/png;base64,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"
                alt="Soriana"
              />
            )}
          </Stack>
          <Stack direction="row" pb="5">
            <Image
              boxSize="100px"
              objectFit="cover"
              borderRadius="full"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX////8yRYAAAD8xwD8yAD+67f8yA6ZmZnq6upMTEzh4eFfX1/+67Xc3Nz8xQCysrLIyMhRUVFFRUWgoKAVFRW7u7vExMTz8/NWVlb9+ebn5+fx8fHOzs7845X8zz75+fmKioqnp6cNDQ0xMTF9fX1zc3P989P99dv8zCb856j+++393X/82Wv+/ff80Uk7OzsiIiJqamr978T84Yz81l373Hn+5qAeHh6Pj4/7zjL945L71Ff98cz80EP87sD82nDPifFoAAAL20lEQVR4nO1caVvqOhAui8BBERQRgSogKIIi7vvR//+vbpukyUy6RU5JeZ477wetoWnnTSazJeg4BAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAiEvLG8fHl8fLlcbq5DvljOz0oM7y9mIi9f3nmHs/mGRcsGs9tSpcBQKb0/GHR4eFcdbmcbl++fsVcuFyQqpdPUDi8BPx/lyp4FGf8JL6UCQuk6pcM17lApvViRc23oBD2Kj4kdPvZDHbZ6Me6FCHoSJ+ndTohgSoec8VUOy+utrXjrMYsYEY/ipUWZf4XFVSVK4PJtrNO4jRySSmFbHeOTmpFKCcgea1Dhqi0Dk1p6siq3MeYlxe/z+gZwrPQiO/QAv/LT9afiu50GtacIFnxHP1MSl34ie/yoGz79MXgoy2msbKPn/5RzFpiWG8UgynZcyg6BVirDU95CPVWOovQdtElDEinwjfz0Nmj6ls5j+1zGUtrR0rNs7BWCxv3wJF6qCVPL9DlorFwtrMhtjg+1CoGpl8ayfBPqIclAs7KUY1L6sCD1L6DMIg66zqTAujntBTpaOYPebx41s9sAoF2oXa7OUHgqJx2vuOV7hLZvAWbKLGpxswpztDhFKvU7/gBYrG3yGGoKdSKncqp2UPu3bNfWG5jEaC+aC5QfCwVoC8n9E7V/BjxC8c6petj2rMRnZR5CNl5RgUoniYc9JTBaWzOJC0Uw7BR2pDrCFTqPtjMMN2pRb4tPfIwIZySWUk1vQeutnNkwiW/1uOT6gDUs5ZjrdpHhSTo+tayUM/wMd1iCNHM7EkXlpCPLTvMINd2LVN0Aqji1JTUbad4Lpa+Ij3sRRkXmIZE+70tFgGcbk/oXAPJEKSmI3ArBmltcBT0KkY+USloomZSUN40nZfqi4yxpiKQdepAt0dXU6yTjbB29ctqA74T4XMcEOgGUWsQVQGwCVJNiUjoV1gRZxF+ZNsbIv1UVG7XK4ioPSz2FmilvEPNQpfmVv3k7jEugpHGFh+cyvkOqbewqm4NJzLs8DDZWYmvbUpGFKVKM41SwBximbe1sGCrX0XNfAFmRqbyzPjJki/SfDPCx+arpg8lgL9Q9vi1S1rcUK/wjeG441rWJHyBJtOV30KT59zzgKY3EDlD+XHMouBezH5/q/MiF5ycLskKTIPsCbHuU81TTb+CaY5chSNtZBiXzv6Qt8FuwT5Onmj6b2Ty1WsuoEBOr19hG5xi5qfptchleleL2Z6AikFRMg7vJ5ewlNwWwpLEBmA+1XL1pU5odLuooAI+YZ4IBbHpsAMagjOkpWJRnCSZEhXq51oaBJU1eLE+gaiENa3KXH7DBmjh6m8QMHKRIPhoEJhtsZSTWmU6hmuYVm74YrxVQqleeLjkx+oIPzyuF+lsBQiSWNpW4ZUA2cVDAJj8uRFrEEoxyTIkmgMqxKjeqbpW88wJ8fqGQT6b/DV1WcvCoYu/ClbpMrmjfwPMq+YQ18Mxd2hnEdzghYjaTnIWjmZp8/AU8AZU2yLcRDCPK3RDQ1KSNxmaAzqSlbUnfhI93pYWbMzgoCWfjNgcYOaYm4ij6EdOeUp5YQs3O5fAJCDoKlbQDPvMIhmlODmp2LluJaIjTLMF3BMOE3InhOeeFOIMrK3U+viIYxpahBOa/WegbAJqVVGkvIyxNmvFAo5LDQrz+1QgvwgxT4xSsJfbLptAOVN5TN9xD/tDg4NoVvD3+oPGG0EPSpjhvB4cHvE+67ThDHtH2qYVLpKTptaKzEMP0fAGFCalLPWugL1YYnJn4DDFMPyN7it5hO0fE45vm2nB8YDrvO7/Uk0yxhNmvSZUhFLYZGEfkLpIqzptAD02Jwbnz0NeFDL7z1UN9LB+Q0oY3/eWh7wuZHJXBDO1mwWhKTE697IQYGgiMXIxlU/OMGKa7Q1Qe5wIbFLKRAbZsalDObpLahEJvE/92nZ+pWSJDY2A0wt9SKxtUebF5it8x3gCwvAbuULOLBbPv/WDzZLXyrb3aQOGWoa9SGiR8WLWtJlAonjJSOCeUAhu4tx4aFpPFkBm0GMwk/9YYGh0iwRNvEMlmBy1TMDEBWlyasg0Q1cmmMcWmNOHQCEChUvh9J5xVWtztXiCVq/w16aOlwGanf3Gp3OKXaHCAYvZtSE2xzYYFl8ot7ufj+q7Ztom2c2G2JYhzLovn2j/wi42suJbkm8SyelBTtldv05THaGi1vRkz1Z6vsRwyAV5TJkFbyIWaZQo45zKzv5kAC2tmALT/YWK21aJlJPYcoiasUUSsFWrMzNNMi2ZtFTJwuGjopj40hkZWY4HfZBQAZwFNd8xKRFopyuxraUutk62qsFZzMctMdYZmiYK24o1sWgbQNnTNwsW1GC4LuJOtYtTpOgy1YTEUFp9SsbbF9oy9lJkN1xmaRWB/cXJhazf/Cb3W0A+vxxDHemahXgbAIY1ZlrAmQ20wbZ3gu1pnYHWGZmUlHM1a+0rpOhFmiKGZ4X/WqgmWSqaaKTVb/ntrzaEWzVr6pzV6oGFmwnWGZnOobzvaOVXTWyf+CjE02yvTGFr6B1naFoThPwNaj6EWr1s6oni5VoS5t1+C2DfTUj18spNc6AzN4q/eHobZinrJhaGePG2yAqbH63YYPuTI0E6CSAyzhM7QTtX7W7OKG2WovcvOiZPe3g7E3iZ91Ex7V/7/JYNAIBAI/2sMO00frn/tsstmxF39usJg3Vc1Oh5aoKF17KFb8360Yjv9O/pFhpV/PeHXw/Bdq6LC0Ukz4g4DvPm9D0HDq99Q73g/dtd6oBlcIXfdcWri0hUf1d2WW+OXf4oIh3Vxy6DVHr013agHB+jLWa/6XQ/49bDriBGtH3s/Ot7b3VbL7WfOz3HGQuix4zTFJVfTzqF/fX7iRjAsHjFRhtNz/uekw3qMx+O2M2ifrA5HQtTOwZ13y9GqOkQMm4evr3cXg5VkOKjv8ketjjNnOBUye3pyIC5Hfvu9ZFMNGJ6329UL0XjiNQ4mivLU+/vEvzgWDT7n4Yn8/LUGGIpnH90FWnrYUE+KMgP/hF3x4PNBV+ogIsiEZQyPWAcx097UHsJZHatHcTQcZwT+PFAMR/i+envsstmc8NW+3iKPRfcueFOrJV/qOGwmzjstNmV3iKHQ6zenw35XG+6uEAwznDpD9uy24x6xuQoYiuV+pEbCYYN7IRQqcVX/HjUp0WgqLwdcWF9fuCIhho6YkwPOw1PGCb+bM7zocE0+dLrTi+l05IjxcQOGXAnGg9qFZMikWNWd2rg5HtfjZF0PgSn1XiBns9gaync3XA9dzPCAT2xRDviUc90NKF9whh7q4+n9/WERMWQLYFcOlf+W4Tm7/DPt1LKl56HtP/n+VdLkk8cZgreFGU64fMxmMtFPOEPfFh4Lhn1laQBD1tiWD/IZSjPuUc94CvnwV+Xar/LpSGZY5ISiGfrRicsZdrmtXd1PEEPGi1nMXcnQ6Si7nLFP5K+TxrrOuK6U/nSqHhqIobAw/J6WHKZRiCEzSauuYILn0HdBPFJqCEkabWGpRtkyFAokDNuEa22RMxoHQrQgQ7Fy61xuzwAKe9wJMWQL7s0RsYtkeMEHMQgY2Ti2PQyEjzrJlCA3pYPARbX5Eir2OdGmy+1r4PG96XwTTvBCrLbitMWDn6ITzXDVcP8UEUOuA7ud5kQynIqxqAaDlh2OhXBCTfvi4nioDCtTGz1q++O7ZeT/OmGGVdRFMuzeoXafITc0F3w8sw1q2lwWoY2HgeZ4XvpciuArlMZwyuKOLjCVVSfMsBY49XPEUExi0M68BYj/slVSviZ8tWCZzThQW89b9UUEes7YgOzp9aQqDXpbSMbDc2a1fG/BoqOJx5R1u+vcc+oye2py6s3XgKFTk/owyjhoG9Q8+InM0L/wH+7/rrF0Z+CO202XZz61fi1AF/YfNprt9rGw7/2GB//jrn/hD8PQHY+9eKHLH14Lmp1up/o27jt9D3XBqN58G43eNuDxCQQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIPv4DGpLdKSI7qvUAAAAASUVORK5CYII="
              alt="Dan Abramov"
            />
            <Image
              boxSize="150px"
              objectFit="cover"
              borderRadius="full"
              src="data:image/png;base64,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"
              alt="BBVA"
            />
            <Image
              boxSize="100px"
              objectFit="cover"
              borderRadius="full"
              src="data:image/png;base64,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"
              alt="Dan Abramov"
            />
            {isSmallScreen ? null : (
              <Image
                boxSize="170px"
                objectFit="cover"
                borderRadius="full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu8S1ccCEyN2gQrEtoh6fQkm-Bii90Ol-TJg&usqp=CAU"
                alt="Dan Abramov"
              />
            )}
          </Stack>
        </Box>
      </Flex>
      <Box
        flex={{ base: "1", md: "1/2" }}
        bg="transparent"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text className="Text">
          Explora una amplia gama de ofertas de trabajo en diferentes industrias
        </Text>
      </Box>
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
          p="4"
        >
          <Stack direction="row" pb="5" pt="5">
            <a href="https://www.vivaaerobus.com/" target="_blank">
              <Image
                boxSize="100px"
                objectFit="cover"
                borderRadius="full"
                src="https://media.istockphoto.com/id/1014950710/es/foto/retrato-de-un-alba%C3%B1il-feliz-en-un-sitio-de-edificio.jpg?s=612x612&w=0&k=20&c=7ETmKiJ1UZr2SeeQgqmRpykJg6YE7X7pVmibfrOavvk="
                alt="Dan Abramov"
              />
            </a>
            <Image
              boxSize="150px"
              objectFit="cover"
              borderRadius="full"
              src="https://media.istockphoto.com/id/475297582/es/foto/vista-a%C3%A9rea-de-las-personas-de-negocios-en-la-sala-de-reuniones.jpg?s=612x612&w=0&k=20&c=h5ZOc-skrBTC7Vp-dSYnIH_NdfUFDu6P7KaktuRPzvY="
              alt="Dan Abramov"
            />
            <Image
              boxSize="100px"
              objectFit="cover"
              borderRadius="full"
              src="https://media.istockphoto.com/id/1454530428/es/foto/grupo-de-empresarios-hablando-en-la-oficina.jpg?s=612x612&w=0&k=20&c=59mrZNimCDuXzRqXCO9LjbZe_It6WW8f7qOtf0_Kd1I="
              alt="Dan Abramov"
            />
            {isSmallScreen ? null : (
              <Image
                boxSize="200px"
                objectFit="cover"
                borderRadius="full"
                src="https://media.istockphoto.com/id/1430330223/es/foto/los-ingenieros-de-programaci%C3%B3n-est%C3%A1n-desarrollando-c%C3%B3digos-en-sus-computadoras.jpg?s=612x612&w=0&k=20&c=yaIrtifRRznTVhGntjHq6So4a3lJ9TUXz1G0qJp2kEw="
                alt="Soriana"
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
            />
            <Image
              boxSize="150px"
              objectFit="cover"
              borderRadius="full"
              src="https://media.istockphoto.com/id/1436911537/es/foto/trabajadores-manuales-que-utilizan-el-panel-t%C3%A1ctil-con-la-inspectora-asi%C3%A1tica-en-una-f%C3%A1brica.jpg?s=612x612&w=0&k=20&c=_NZJ2CLuZygKEQ59VkOAwwAGKCNaqIJ8-3vPlCfhYr0="
              alt="BBVA"
            />
            <Image
              boxSize="100px"
              objectFit="cover"
              borderRadius="full"
              src="https://media.istockphoto.com/id/1472229111/es/foto/software-de-planificaci%C3%B3n-de-proyectos-para-la-gesti%C3%B3n-de-proyectos-empresariales-modish.jpg?s=612x612&w=0&k=20&c=EAD6kniKPK88XTq66RHEQH9EEk6IjiqCkQ5PhfTn6B4="
              alt="Dan Abramov"
            />
            {isSmallScreen ? null : (
              <Image
                boxSize="170px"
                objectFit="cover"
                borderRadius="full"
                src="https://media.istockphoto.com/id/1346422665/es/foto/estudiante-universitario-sonriente-listo-para-graduarse.jpg?s=612x612&w=0&k=20&c=q9wQc5rklMPyoFvhwhtLX49VAmqQAPa3wuR4yu5WAGw="
                alt="Dan Abramov"
              />
            )}
          </Stack>
        </Box>
      </Flex>
    </>
  );
}
