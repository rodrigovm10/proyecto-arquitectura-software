import {
  Flex,
  Spacer,
  Link,
  Image,
  ButtonGroup,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import logo from "../img/logo.png";
import { useSession } from "../hooks/useSession";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

export function Nav({ nombreDelGrupo }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const nombreDelGrupoNew = "" || nombreDelGrupo;
  const { logOut, dataSession, nombreGrupo } = useSession(nombreDelGrupoNew);
  const isSmallDevice = useBreakpointValue({ base: true, md: false });

  return (
    <Flex>
      <Link href="/">
        <Image src={logo} width={200} />
      </Link>
      <Spacer />
      <Flex gap={3} alignItems="center">
        {isSmallDevice ? (
          <Menu>
            <MenuButton
              backgroundColor="#181c24"
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon color="white" />}
              variant="outline"
            />
            <MenuList>
              {dataSession.session && nombreGrupo === "Empresa" && (
                <>
                  <MenuItem>
                    <RouterLink to="/inicio-empresa">Inicio</RouterLink>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/vacantes">Vacantes</Link>
                  </MenuItem>
                  <MenuItem onClick={logOut}>Cerrar Sesión</MenuItem>
                </>
              )}
              {dataSession?.session === false && (
                <>
                  <MenuItem>
                    <Link to="/">Inicio</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/login-bdt">Buscadores de Trabajo</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/login-empresa">Empresas</Link>
                  </MenuItem>
                </>
              )}
            </MenuList>
          </Menu>
        ) : (
          <>
            {dataSession.session && nombreGrupo === "Empresa" && (
              <ButtonGroup>
                <Link
                  color="#fff"
                  to="/inicio-empresa"
                  _hover={{ color: "#ea754b" }}
                >
                  Inicio
                </Link>
                <Link color="#fff" to="/vacantes" _hover={{ color: "#ea754b" }}>
                  Vacantes
                </Link>
                <Link
                  color="#fff"
                  onClick={logOut}
                  _hover={{ color: "#ea754b" }}
                >
                  Cerrar Sesión
                </Link>
              </ButtonGroup>
            )}
            {dataSession?.session === false && (
              <ButtonGroup>
                <Link color="#fff" href="/" _hover={{ color: "#ea754b" }}>
                  Inicio
                </Link>
                <Link
                  color="#fff"
                  href="/login-bdt"
                  _hover={{ color: "#ea754b" }}
                >
                  Buscadores de Trabajo
                </Link>
                <Link
                  color="#fff"
                  href="/login-empresa"
                  _hover={{ color: "#ea754b" }}
                >
                  Empresas
                </Link>
              </ButtonGroup>
            )}
          </>
        )}
        {colorMode === "light" ? (
          <MoonIcon cursor="pointer" onClick={toggleColorMode} color="#fff" />
        ) : (
          <SunIcon cursor="pointer" onClick={toggleColorMode} />
        )}
      </Flex>
    </Flex>
  );
}
