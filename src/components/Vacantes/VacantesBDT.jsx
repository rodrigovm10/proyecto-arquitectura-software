import { Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import { useManageVacantes } from "../../hooks/useManageVacantes";
import { useEffect } from "react";
import { VacanteBDT } from "./VacanteBDT";
import { Filtros } from "./Filtros";
import { useSession } from "../../hooks/useSession";
import { useFiltros } from "../../hooks/useFiltros";
import { SinVacantes } from "./SinVacantes";

export function VacantesBDT() {
  const { listVacantesFiltros, vacantesVisibles } = useManageVacantes();
  const { dataSession } = useSession();
  const { filtros, setFiltros } = useFiltros();

  useEffect(() => {
    listVacantesFiltros({ filtros });
  }, [filtros]);

  return (
    <>
      <Stack mt="2rem" p="1rem">
        <Heading as="h2" size="2xl">
          Vacantes
        </Heading>
        <Text fontSize="xl" mb="2rem">
          En esta sección podrás visualizar las vacantes y postularte a ellas
        </Text>
        <Filtros filtros={filtros} setFiltros={setFiltros} />
        <Grid mt="2rem">
          <GridItem p="0.4rem">
            <Text fontSize="md" as="i" opacity="0.8">
              {`${vacantesVisibles?.length} resultados`}
            </Text>
          </GridItem>
        </Grid>
      </Stack>
      {!vacantesVisibles?.length ? (
        <SinVacantes hasButton={false}>
          <Text p={5} justifyItems="center" alignItems="center">
            No hay vacantes con dichos filtros
          </Text>
        </SinVacantes>
      ) : (
        <VacanteBDT vacantes={vacantesVisibles} />
      )}
    </>
  );
}
