import { Flex } from "@aws-amplify/ui-react";

export function Nav() {
  const { logOut, dataSession, nombreGrupo } = useSession();

  return (
    <Flex>
      <Link href="/">
        <Image src={logo} width={200} />
      </Link>
      <Spacer />
      <Flex gap={3}>
        <Link color="#fff" href="/">
          Inicio
        </Link>
        {dataSession?.session && nombreGrupo === "trabajador" && (
          <ButtonGroup>
            <Link color="#fff" href="#">
              Vacantes
            </Link>
            <Link color="#fff" onClick={logOut}>
              Logout
            </Link>
          </ButtonGroup>
        )}
        {dataSession?.session === false && (
          <ButtonGroup>
            <Link color="#fff" href="/login-bdt">
              Buscadores de Trabajo
            </Link>
            <Link color="#fff" href="/login-empresa">
              Empresas
            </Link>
          </ButtonGroup>
        )}
      </Flex>
    </Flex>
  );
}
