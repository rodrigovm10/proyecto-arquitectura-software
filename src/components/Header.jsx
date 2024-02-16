import { Box } from "@chakra-ui/react";
import { Nav } from "./Nav";
import NavegadorBDT from "./BDT/inicioBdT/NavegadorBDT";

export function Header({ nombreDelGrupo = "Empresa", setSession }) {
  return (
    <Box>
      <Box bg="#181c24" p="1rem">
        {nombreDelGrupo === "trabajador" ? (
          <NavegadorBDT setSession={setSession} />
        ) : (
          <Nav nombreDelGrupo={nombreDelGrupo} />
        )}
      </Box>
    </Box>
  );
}
