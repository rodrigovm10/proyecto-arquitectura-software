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
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import logo from "../img/logo-sinfondo.png";
import { useSession } from "../hooks/useSession";
import { useLocation } from "react-router-dom";

export function Nav({ nombreDelGrupo = "Empresa" }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const nombreDelGrupoNew = nombreDelGrupo || "Empresa";
  const { logOut, dataSession, nombreGrupo } = useSession(nombreDelGrupoNew);
  const isSmallDevice = useBreakpointValue({ base: true, md: false });
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Flex>
      <Link as={RouterLink} to="/">
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
                    <Link as={RouterLink} to="/inicio-empresa">
                      Inicio
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link as={RouterLink} to="/vacantes">
                      Vacantes
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link as={RouterLink} to="/postulados">
                      Postulados
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={logOut}>Cerrar Sesión</MenuItem>
                </>
              )}
              {dataSession?.session === false && (
                <>
                  <MenuItem>
                    <Link as={RouterLink} to="/">
                      Inicio
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link as={RouterLink} to="/login-bdt">
                      Buscadores de Trabajo
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link as={RouterLink} to="/login-empresa">
                      Empresas
                    </Link>
                  </MenuItem>
                </>
              )}
            </MenuList>
          </Menu>
        ) : (
          <>
            {dataSession.session && nombreGrupo === "Empresa" && (
              <ButtonGroup>
                <RouterLink to="/inicio-empresa">
                  <Text color="#fff" _hover={{ color: "#79f0f7" }}>
                    Inicio
                  </Text>
                </RouterLink>
                <RouterLink to="/vacantes">
                  <Text color="#fff" _hover={{ color: "#79f0f7" }}>
                    Vacantes
                  </Text>
                </RouterLink>
                <RouterLink to="/postulados">
                  <Text color="#fff" _hover={{ color: "#79f0f7" }}>
                    Postulados
                  </Text>
                </RouterLink>
                <Link
                  color="#fff"
                  onClick={logOut}
                  _hover={{ color: "#79f0f7" }}
                >
                  Cerrar Sesión
                </Link>
              </ButtonGroup>
            )}
            {dataSession.session === false && (
              <ButtonGroup>
                <Link
                  color="#fff"
                  href="/"
                  _hover={{ color: "#79f0f7" }}
                  style={isActive("/") ? { color: "#79f0f7" } : null}
                >
                  Inicio
                </Link>
                <Link
                  color="#fff"
                  href="/iniciop-bdt"
                  _hover={{ color: "#79f0f7" }}
                  style={isActive("/iniciop-bdt") ? { color: "#79f0f7" } : null}
                >
                  Buscadores de trabajo
                </Link>
                <Link
                  color="#fff"
                  href="/login-empresa"
                  _hover={{ color: "#79f0f7" }}
                  style={
                    isActive("/login-empresa") ? { color: "#79f0f7" } : null
                  }
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
