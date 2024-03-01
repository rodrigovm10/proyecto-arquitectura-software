import React, { useState } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Buscador = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const navigate = useNavigate();

  // Opciones de búsqueda predeterminadas
  const searchOptions = {
    "Mapa del sitio": "/mapa-sitio",
    Vacantes: "/vacantes",
    Empresas: "/login-empresa",
    "Terminos y condiciones de empresa": "/terminos-empresa",
    "Aviso de privacidad empresa": "/aviso-empresa",
    "Terminos y condiciones de empleados": "/terminos-bdt",
    "Aviso de privacidad empleados": "/aviso-bdt",
    "Oportunidades laborales": "/oportunidades-laborales",
  };

  const handleInputChange = (event) => {
    const input = event.target.value;
    setSearchTerm(input);

    if (input.length > 0) {
      const filtered = Object.keys(searchOptions).filter((option) =>
        option.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions([]);
    }
  };

  const executeSearch = (option) => {
    const path = searchOptions[option];
    if (path) {
      navigate(path);
    } else {
      navigate("/error");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const exactMatch = filteredOptions.find(
        (option) => option.toLowerCase() === searchTerm.toLowerCase()
      );
      if (exactMatch) {
        executeSearch(exactMatch);
      } else if (filteredOptions.length > 0) {
        executeSearch(filteredOptions[0]);
      } else {
        navigate("/error");
      }
    }
  };

  return (
    <Box p={2}>
      <InputGroup>
        <Input
          fontSize={30}
          placeholder="Buscador"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <InputRightElement width="4.5rem" />
      </InputGroup>
      {filteredOptions.length > 0 && (
        <List
          spacing={2}
          mt={2}
          style={{ maxHeight: "200px", overflowY: "auto" }}
        >
          {filteredOptions.map((option, index) => (
            <ListItem
              key={index}
              cursor="pointer"
              onClick={() => executeSearch(option)}
            >
              {option}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default Buscador;
