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
import logo from "../img/logo.png";
import { useSession } from "../hooks/useSession";
import { MdNotificationsActive } from "react-icons/md";

export function Nav({ nombreDelGrupo = "Empresa" }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const nombreDelGrupoNew = nombreDelGrupo || "Empresa";
  const { logOut, dataSession, nombreGrupo } = useSession(nombreDelGrupoNew);
  const isSmallDevice = useBreakpointValue({ base: true, md: false });

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
                  <RouterLink to="/innovation">
                    <Text
                      color="#fff"
                      mt={1}
                      _hover={{
                        color: "#ea754b",
                        transform: "scale(1.5)",
                        transition: "transform 0.2s ease", // Agrega una transición suave
                      }}
                    >
                      <MdNotificationsActive />
                    </Text>
                  </RouterLink>
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
                  <Text color="#fff" _hover={{ color: "#ea754b" }}>
                    Inicio
                  </Text>
                </RouterLink>
                <RouterLink to="/vacantes">
                  <Text color="#fff" _hover={{ color: "#ea754b" }}>
                    Vacantes
                  </Text>
                </RouterLink>
                <RouterLink to="/postulados">
                  <Text color="#fff" _hover={{ color: "#ea754b" }}>
                    Postulados
                  </Text>
                </RouterLink>
                <Link
                  color="#fff"
                  onClick={logOut}
                  _hover={{ color: "#ea754b" }}
                >
                  Cerrar Sesión
                </Link>
                <RouterLink to="/innovation">
                  <Text
                    color="#fff"
                    mt={1}
                    _hover={{
                      color: "#ea754b",
                      transform: "scale(1.5)",
                      transition: "transform 0.2s ease", // Agrega una transición suave
                    }}
                  >
                    <MdNotificationsActive />
                  </Text>
                </RouterLink>
              </ButtonGroup>
            )}
            {dataSession.session === false && (
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
