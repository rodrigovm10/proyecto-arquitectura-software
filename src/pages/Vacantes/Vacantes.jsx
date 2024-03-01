import { useEffect } from "react";
import { Header } from "../../components/Header";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SinVacantes } from "../../components/Vacantes/SinVacantes";
import { Vacante } from "../../components/Vacantes/Vacante";
import { ButtonVacante } from "../../components/ButtonVacante";
import { useManageVacantes } from "../../hooks/useManageVacantes";
import { Footer } from "../../landing/Footer";
import { useSession } from "../../hooks/useSession";

export function Vacantes() {
  const {
    listVacantes,
    vacantesVisibles,
    vacantesNoVisibles,
    listVacantesNoVisibles,
    isVacanteVisible,
    handleChangeVacanteStatus,
  } = useManageVacantes();
  const { dataSession } = useSession("Empresa");

  useEffect(() => {
    if (isVacanteVisible) listVacantes({ emailEmpresa: dataSession.email });
    else listVacantesNoVisibles({ emailEmpresa: dataSession.email });
  }, []);

  return (
    <>
      <Header nombreDelGrupo={"Empresa"} />
      <Stack mt="2rem" ml="2rem">
        <Heading as="h2" size="2xl">
          Vacantes
        </Heading>
        <Text fontSize="xl">
          En esta sección podrás administrar tus vacantes
        </Text>
        <Grid>
          <GridItem>
            <Text fontSize="md" as="i" opacity="0.8">
              {isVacanteVisible
                ? `${vacantesVisibles.length} resultados`
                : `${vacantesNoVisibles.length} resultados`}
            </Text>
          </GridItem>
          <GridItem>
            <Flex flexDir="column" alignItems="end" gap="1rem" mr="2rem">
              <ButtonVacante to="/registro-vacante">
                Crear una vacante
              </ButtonVacante>
              <Select w="12rem" onChange={handleChangeVacanteStatus}>
                <option value="activas">Vacantes activas</option>
                <option value="inactivas">Vacantes inactivas</option>
              </Select>
            </Flex>
          </GridItem>
        </Grid>
      </Stack>
      {isVacanteVisible ? (
        vacantesVisibles.length ? (
          <Vacante vacantes={vacantesVisibles} />
        ) : (
          <SinVacantes>Aún no has registrado ninguna vacante</SinVacantes>
        )
      ) : vacantesNoVisibles.length ? (
        <Vacante vacantes={vacantesNoVisibles} />
      ) : (
        <SinVacantes>Aún no has registrado ninguna vacante</SinVacantes>
      )}
      <Footer />
    </>
  );
}
