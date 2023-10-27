import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { Auth, DataStore } from "aws-amplify";
import { BDT } from "../../../models";
import logo from "../../../img/logo.png";
import { useNavigate } from "react-router-dom";

function NavegadorBDT({ setSession }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [bde, setBde] = useState("Usuario");

  useEffect(() => {
    async function cargar() {
      const auth = await Auth.currentAuthenticatedUser();
      setTimeout(() => {
        DataStore.query(BDT, (c) => c.correo.eq(auth.attributes.email)).then(
          (e) => {
            if (e[0]?.nombre) {
              setBde(e[0].nombre);
              localStorage.setItem("nombreNav", e[0].nombre);
              return;
            }
            localStorage.setItem("nombreNav", "Usuario");
          }
        );
      }, 950);
    }
    cargar();
  }, []);

  async function logOut() {
    try {
      await Auth.signOut({ global: true });
      await DataStore.clear();
      localStorage.clear();
      sessionStorage.clear();
      setSession(false);
      navigate("/");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return (
    <Box>
      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        p={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <RouterLink to="/inicio-bde">
            <img src={logo} alt="Red Laboral" style={{ width: "10rem" }} />
          </RouterLink>
        </Box>
        <Flex alignItems="center">
          <RouterLink to="/inicio-bdt" style={{ marginLeft: "1rem" }}>
            Inicio
          </RouterLink>
          <RouterLink to="/buscar-empleo" style={{ marginLeft: "1rem" }}>
            Buscar empleo
          </RouterLink>
          <RouterLink
            to="/oportunidades-laborales"
            style={{ marginLeft: "1rem" }}
          >
            Oportunidades laborales
          </RouterLink>
          <Menu>
            <Button onClick={toggleColorMode} mr="2" ml="2">
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
            >
              <Avatar
                size={"sm"}
                src={"https://avatars.dicebear.com/api/male/username.svg"}
              />
            </MenuButton>
            <MenuList alignItems={"center"}>
              <br />
              <Center>
                <Avatar
                  size={"2xl"}
                  src={"https://avatars.dicebear.com/api/male/username.svg"}
                />
              </Center>
              <br />
              <Center>
                <p>
                  {localStorage.nombreNav === undefined
                    ? bde
                    : localStorage.nombreNav}
                </p>
              </Center>
              <br />
              <MenuDivider />
              <RouterLink to="/perfil-bdt">
                <MenuItem>Perfil</MenuItem>
              </RouterLink>
              <MenuItem onClick={logOut}>Cerrar Sesión</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}

export default NavegadorBDT;
