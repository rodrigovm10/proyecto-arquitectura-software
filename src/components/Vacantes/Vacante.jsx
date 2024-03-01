import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import {
  LiaAddressCardSolid,
  LiaCalendarCheckSolid,
  LiaClockSolid,
  LiaMoneyBillWaveAltSolid,
  LiaSchoolSolid,
} from "react-icons/lia";
import { useNavigate } from "react-router-dom";

export function Vacante({ vacantes }) {
  const navigate = useNavigate();

  const handleClick = (vacante) => {
    navigate(`/vacantes/vacante/${vacante.id}`);
  };
  return (
    <Flex mt="2rem" flexDirection="column" gap="2rem" mb="5rem">
      {vacantes.map((vacante, i) => {
        const {
          nombre,
          area,
          diasLaborales,
          escolaridad,
          salarioMin,
          salarioMax,
          modalidad,
        } = vacante;
        return (
          <Card
            onClick={() => handleClick(vacante)}
            borderColor="#949cc6"
            borderWidth="1.5px"
            boxShadow="xl"
            cursor="pointer"
            m="0 3rem"
            key={i}
            borderRadius="lg"
            p="2"
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.05)" }}
          >
            <CardHeader>
              <Heading as="h3" size="md">
                {nombre}
              </Heading>
            </CardHeader>
            <CardBody>
              <Grid templateColumns="repeat(2, 1fr)">
                <GridItem>
                  <Flex gap="1rem" alignItems="center">
                    <LiaAddressCardSolid />
                    {area}
                  </Flex>
                </GridItem>
                <GridItem>
                  <Flex gap="1rem" alignItems="center">
                    <LiaCalendarCheckSolid />
                    {diasLaborales}
                  </Flex>
                </GridItem>
                <GridItem>
                  <Flex gap="1rem" alignItems="center">
                    <LiaSchoolSolid />
                    {escolaridad}
                  </Flex>
                </GridItem>
                <GridItem>
                  <Flex gap="1rem" alignItems="center">
                    <LiaMoneyBillWaveAltSolid height="1.5em" />
                    {`$${salarioMin} - $${salarioMax}`}
                  </Flex>
                </GridItem>
                <GridItem>
                  <Flex gap="1rem" alignItems="center">
                    <LiaClockSolid />
                    {modalidad}
                  </Flex>
                </GridItem>
              </Grid>
            </CardBody>
          </Card>
        );
      })}
    </Flex>
  );
}
