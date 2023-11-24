import { useState, useContext } from "react";
import { DataVacanteContext } from "../context/DataVacanteContext";
import { DATOS_VACANTE_STATE_INITIAL_ERRORS } from "../constants/EstadosIniciales";
import { basicAlert } from "../utilities/Alerts";

export function useRegisterVacante() {
  const { datosVacante, setDatosVacante } = useContext(DataVacanteContext);
  const [errors, setErrors] = useState(DATOS_VACANTE_STATE_INITIAL_ERRORS);
  const [stringToSave, setStringToSave] = useState("");
  const [secondStringToSave, setSecondStringToSave] = useState("");

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    if (
      name === "prestaciones" ||
      name === "habilidadesTecnicas" ||
      name === "habilidadesBlandas" ||
      name === "idioma"
    ) {
      setStringToSave(value);
      return;
    }
    if (name)
      if (name === "nivelIdioma") {
        setSecondStringToSave(value);
      }

    setDatosVacante((prevDatosVacante) => ({
      ...prevDatosVacante,
      [name]: value,
    }));
    inputValidation({ value, name });
  };

  const handleNumberChange = ({ value, name }) => {
    setDatosVacante((prevDatosVacante) => ({
      ...prevDatosVacante,
      [name]: value,
    }));
  };

  const inputValidation = ({ value, name }) => {
    if (value === " ") {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: true }));
      return;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
  };

  const handleClickSave = ({ name, value }) => {
    if (name === "idiomaConNivel")
      value = stringToSave + "/" + secondStringToSave;
    if (validations({ name, value })) return;

    setDatosVacante((prevDatosVacante) => ({
      ...prevDatosVacante,
      [name]: [...prevDatosVacante[name], value],
    }));
    setStringToSave("");
    setSecondStringToSave("");
  };

  const handleClickDelete = ({ name, value }) => {
    const newArr = datosVacante[name].filter((valueArr) => valueArr !== value);
    setDatosVacante((prevDatosVacante) => ({
      ...prevDatosVacante,
      [name]: newArr,
    }));
  };

  const validations = ({ name, value }) => {
    if (name === "idiomaConNivel") {
      if (value === "/") {
        basicAlert({
          title: "Valor invalido",
          icon: "info",
          text: "No se pueden ingresar valores vacíos",
        });
        return true;
      }
      if (!secondStringToSave) {
        basicAlert({
          title: "Valor invalido",
          icon: "info",
          text: "Debe de añadir el nivel del idioma",
        });
        return true;
      }
      if (!stringToSave) {
        basicAlert({
          title: "Valor invalido",
          icon: "info",
          text: "Debe de añadir el idioma",
        });
        return true;
      }
    }
    if (!value) {
      basicAlert({
        title: "Valor invalido",
        icon: "info",
        text: "No se pueden ingresar valores vacíos",
      });
      return true;
    }
    if (datosVacante[name].includes(value)) {
      basicAlert({
        title: "Valor repetido",
        icon: "info",
        text: `El valor "${value}" ya se encuentra ingresado, ingresa uno diferente.`,
      });
      return true;
    }
  };

  const somePropertyIsNull = (object) => {
    for (const property in object) {
      if (
        property === "emailEmpresa" ||
        property === "idioma" ||
        property === "nombreEmpresa" ||
        property === "ubicacion"
      )
        return false;
      if (object.hasOwnProperty(property)) {
        const valor = object[property];
        if (
          valor === null ||
          valor === undefined ||
          valor === "" ||
          property.length === 0
        ) {
          return true;
        }
      }
    }
    return false;
  };

  return {
    datosVacante,
    errors,
    setDatosVacante,
    handleInputChange,
    handleClickSave,
    stringToSave,
    secondStringToSave,
    handleClickDelete,
    handleNumberChange,
    somePropertyIsNull,
  };
}
