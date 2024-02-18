/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { Oportunidades } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function OportunidadesCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nombre: "",
    descripcion: "",
    numeroPlazas: "",
    area: "",
    tipoContrato: "",
    modaiidad: "",
    diasLaborales: "",
    edadMax: "",
    edadMin: "",
    genero: "",
    experienciaLaboral: "",
    escolaridad: "",
    idioma: [],
    nivelIdioma: [],
    prestaciones: [],
    habilidadesBlandas: [],
    habilidadesTecnicas: [],
    emailEmpresa: "",
    visible: false,
    ubicacion: "",
    nombreEmpresa: "",
    salarioMaximo: "",
    salarioMin: "",
    idiomaConNivel: [],
    municipio: "",
    jornadaLaboral: "",
    emailBDT: "",
    nombreBDT: "",
    periodoPago: "",
    apellidosBDT: "",
    imagenBDTUrl: "",
    pdfimagenUrl: "",
    escolaridadBDT: "",
    telefonoBDT: "",
    generoBDT: "",
    bdtID: "",
    empresaID: "",
    vacanteID: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [descripcion, setDescripcion] = React.useState(
    initialValues.descripcion
  );
  const [numeroPlazas, setNumeroPlazas] = React.useState(
    initialValues.numeroPlazas
  );
  const [area, setArea] = React.useState(initialValues.area);
  const [tipoContrato, setTipoContrato] = React.useState(
    initialValues.tipoContrato
  );
  const [modaiidad, setModaiidad] = React.useState(initialValues.modaiidad);
  const [diasLaborales, setDiasLaborales] = React.useState(
    initialValues.diasLaborales
  );
  const [edadMax, setEdadMax] = React.useState(initialValues.edadMax);
  const [edadMin, setEdadMin] = React.useState(initialValues.edadMin);
  const [genero, setGenero] = React.useState(initialValues.genero);
  const [experienciaLaboral, setExperienciaLaboral] = React.useState(
    initialValues.experienciaLaboral
  );
  const [escolaridad, setEscolaridad] = React.useState(
    initialValues.escolaridad
  );
  const [idioma, setIdioma] = React.useState(initialValues.idioma);
  const [nivelIdioma, setNivelIdioma] = React.useState(
    initialValues.nivelIdioma
  );
  const [prestaciones, setPrestaciones] = React.useState(
    initialValues.prestaciones
  );
  const [habilidadesBlandas, setHabilidadesBlandas] = React.useState(
    initialValues.habilidadesBlandas
  );
  const [habilidadesTecnicas, setHabilidadesTecnicas] = React.useState(
    initialValues.habilidadesTecnicas
  );
  const [emailEmpresa, setEmailEmpresa] = React.useState(
    initialValues.emailEmpresa
  );
  const [visible, setVisible] = React.useState(initialValues.visible);
  const [ubicacion, setUbicacion] = React.useState(initialValues.ubicacion);
  const [nombreEmpresa, setNombreEmpresa] = React.useState(
    initialValues.nombreEmpresa
  );
  const [salarioMaximo, setSalarioMaximo] = React.useState(
    initialValues.salarioMaximo
  );
  const [salarioMin, setSalarioMin] = React.useState(initialValues.salarioMin);
  const [idiomaConNivel, setIdiomaConNivel] = React.useState(
    initialValues.idiomaConNivel
  );
  const [municipio, setMunicipio] = React.useState(initialValues.municipio);
  const [jornadaLaboral, setJornadaLaboral] = React.useState(
    initialValues.jornadaLaboral
  );
  const [emailBDT, setEmailBDT] = React.useState(initialValues.emailBDT);
  const [nombreBDT, setNombreBDT] = React.useState(initialValues.nombreBDT);
  const [periodoPago, setPeriodoPago] = React.useState(
    initialValues.periodoPago
  );
  const [apellidosBDT, setApellidosBDT] = React.useState(
    initialValues.apellidosBDT
  );
  const [imagenBDTUrl, setImagenBDTUrl] = React.useState(
    initialValues.imagenBDTUrl
  );
  const [pdfimagenUrl, setPdfimagenUrl] = React.useState(
    initialValues.pdfimagenUrl
  );
  const [escolaridadBDT, setEscolaridadBDT] = React.useState(
    initialValues.escolaridadBDT
  );
  const [telefonoBDT, setTelefonoBDT] = React.useState(
    initialValues.telefonoBDT
  );
  const [generoBDT, setGeneroBDT] = React.useState(initialValues.generoBDT);
  const [bdtID, setBdtID] = React.useState(initialValues.bdtID);
  const [empresaID, setEmpresaID] = React.useState(initialValues.empresaID);
  const [vacanteID, setVacanteID] = React.useState(initialValues.vacanteID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombre(initialValues.nombre);
    setDescripcion(initialValues.descripcion);
    setNumeroPlazas(initialValues.numeroPlazas);
    setArea(initialValues.area);
    setTipoContrato(initialValues.tipoContrato);
    setModaiidad(initialValues.modaiidad);
    setDiasLaborales(initialValues.diasLaborales);
    setEdadMax(initialValues.edadMax);
    setEdadMin(initialValues.edadMin);
    setGenero(initialValues.genero);
    setExperienciaLaboral(initialValues.experienciaLaboral);
    setEscolaridad(initialValues.escolaridad);
    setIdioma(initialValues.idioma);
    setCurrentIdiomaValue("");
    setNivelIdioma(initialValues.nivelIdioma);
    setCurrentNivelIdiomaValue("");
    setPrestaciones(initialValues.prestaciones);
    setCurrentPrestacionesValue("");
    setHabilidadesBlandas(initialValues.habilidadesBlandas);
    setCurrentHabilidadesBlandasValue("");
    setHabilidadesTecnicas(initialValues.habilidadesTecnicas);
    setCurrentHabilidadesTecnicasValue("");
    setEmailEmpresa(initialValues.emailEmpresa);
    setVisible(initialValues.visible);
    setUbicacion(initialValues.ubicacion);
    setNombreEmpresa(initialValues.nombreEmpresa);
    setSalarioMaximo(initialValues.salarioMaximo);
    setSalarioMin(initialValues.salarioMin);
    setIdiomaConNivel(initialValues.idiomaConNivel);
    setCurrentIdiomaConNivelValue("");
    setMunicipio(initialValues.municipio);
    setJornadaLaboral(initialValues.jornadaLaboral);
    setEmailBDT(initialValues.emailBDT);
    setNombreBDT(initialValues.nombreBDT);
    setPeriodoPago(initialValues.periodoPago);
    setApellidosBDT(initialValues.apellidosBDT);
    setImagenBDTUrl(initialValues.imagenBDTUrl);
    setPdfimagenUrl(initialValues.pdfimagenUrl);
    setEscolaridadBDT(initialValues.escolaridadBDT);
    setTelefonoBDT(initialValues.telefonoBDT);
    setGeneroBDT(initialValues.generoBDT);
    setBdtID(initialValues.bdtID);
    setEmpresaID(initialValues.empresaID);
    setVacanteID(initialValues.vacanteID);
    setErrors({});
  };
  const [currentIdiomaValue, setCurrentIdiomaValue] = React.useState("");
  const idiomaRef = React.createRef();
  const [currentNivelIdiomaValue, setCurrentNivelIdiomaValue] =
    React.useState("");
  const nivelIdiomaRef = React.createRef();
  const [currentPrestacionesValue, setCurrentPrestacionesValue] =
    React.useState("");
  const prestacionesRef = React.createRef();
  const [currentHabilidadesBlandasValue, setCurrentHabilidadesBlandasValue] =
    React.useState("");
  const habilidadesBlandasRef = React.createRef();
  const [currentHabilidadesTecnicasValue, setCurrentHabilidadesTecnicasValue] =
    React.useState("");
  const habilidadesTecnicasRef = React.createRef();
  const [currentIdiomaConNivelValue, setCurrentIdiomaConNivelValue] =
    React.useState("");
  const idiomaConNivelRef = React.createRef();
  const validations = {
    nombre: [],
    descripcion: [],
    numeroPlazas: [],
    area: [],
    tipoContrato: [],
    modaiidad: [],
    diasLaborales: [],
    edadMax: [],
    edadMin: [],
    genero: [],
    experienciaLaboral: [],
    escolaridad: [],
    idioma: [],
    nivelIdioma: [],
    prestaciones: [],
    habilidadesBlandas: [],
    habilidadesTecnicas: [],
    emailEmpresa: [],
    visible: [],
    ubicacion: [],
    nombreEmpresa: [],
    salarioMaximo: [],
    salarioMin: [],
    idiomaConNivel: [],
    municipio: [],
    jornadaLaboral: [],
    emailBDT: [],
    nombreBDT: [],
    periodoPago: [],
    apellidosBDT: [],
    imagenBDTUrl: [],
    pdfimagenUrl: [],
    escolaridadBDT: [],
    telefonoBDT: [],
    generoBDT: [],
    bdtID: [{ type: "Required" }],
    empresaID: [{ type: "Required" }],
    vacanteID: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          nombre,
          descripcion,
          numeroPlazas,
          area,
          tipoContrato,
          modaiidad,
          diasLaborales,
          edadMax,
          edadMin,
          genero,
          experienciaLaboral,
          escolaridad,
          idioma,
          nivelIdioma,
          prestaciones,
          habilidadesBlandas,
          habilidadesTecnicas,
          emailEmpresa,
          visible,
          ubicacion,
          nombreEmpresa,
          salarioMaximo,
          salarioMin,
          idiomaConNivel,
          municipio,
          jornadaLaboral,
          emailBDT,
          nombreBDT,
          periodoPago,
          apellidosBDT,
          imagenBDTUrl,
          pdfimagenUrl,
          escolaridadBDT,
          telefonoBDT,
          generoBDT,
          bdtID,
          empresaID,
          vacanteID,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Oportunidades(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "OportunidadesCreateForm")}
      {...rest}
    >
      <TextField
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre: value,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.nombre ?? value;
          }
          if (errors.nombre?.hasError) {
            runValidationTasks("nombre", value);
          }
          setNombre(value);
        }}
        onBlur={() => runValidationTasks("nombre", nombre)}
        errorMessage={errors.nombre?.errorMessage}
        hasError={errors.nombre?.hasError}
        {...getOverrideProps(overrides, "nombre")}
      ></TextField>
      <TextField
        label="Descripcion"
        isRequired={false}
        isReadOnly={false}
        value={descripcion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion: value,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.descripcion ?? value;
          }
          if (errors.descripcion?.hasError) {
            runValidationTasks("descripcion", value);
          }
          setDescripcion(value);
        }}
        onBlur={() => runValidationTasks("descripcion", descripcion)}
        errorMessage={errors.descripcion?.errorMessage}
        hasError={errors.descripcion?.hasError}
        {...getOverrideProps(overrides, "descripcion")}
      ></TextField>
      <TextField
        label="Numero plazas"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numeroPlazas}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas: value,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.numeroPlazas ?? value;
          }
          if (errors.numeroPlazas?.hasError) {
            runValidationTasks("numeroPlazas", value);
          }
          setNumeroPlazas(value);
        }}
        onBlur={() => runValidationTasks("numeroPlazas", numeroPlazas)}
        errorMessage={errors.numeroPlazas?.errorMessage}
        hasError={errors.numeroPlazas?.hasError}
        {...getOverrideProps(overrides, "numeroPlazas")}
      ></TextField>
      <TextField
        label="Area"
        isRequired={false}
        isReadOnly={false}
        value={area}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area: value,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.area ?? value;
          }
          if (errors.area?.hasError) {
            runValidationTasks("area", value);
          }
          setArea(value);
        }}
        onBlur={() => runValidationTasks("area", area)}
        errorMessage={errors.area?.errorMessage}
        hasError={errors.area?.hasError}
        {...getOverrideProps(overrides, "area")}
      ></TextField>
      <TextField
        label="Tipo contrato"
        isRequired={false}
        isReadOnly={false}
        value={tipoContrato}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato: value,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.tipoContrato ?? value;
          }
          if (errors.tipoContrato?.hasError) {
            runValidationTasks("tipoContrato", value);
          }
          setTipoContrato(value);
        }}
        onBlur={() => runValidationTasks("tipoContrato", tipoContrato)}
        errorMessage={errors.tipoContrato?.errorMessage}
        hasError={errors.tipoContrato?.hasError}
        {...getOverrideProps(overrides, "tipoContrato")}
      ></TextField>
      <TextField
        label="Modaiidad"
        isRequired={false}
        isReadOnly={false}
        value={modaiidad}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad: value,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.modaiidad ?? value;
          }
          if (errors.modaiidad?.hasError) {
            runValidationTasks("modaiidad", value);
          }
          setModaiidad(value);
        }}
        onBlur={() => runValidationTasks("modaiidad", modaiidad)}
        errorMessage={errors.modaiidad?.errorMessage}
        hasError={errors.modaiidad?.hasError}
        {...getOverrideProps(overrides, "modaiidad")}
      ></TextField>
      <TextField
        label="Dias laborales"
        isRequired={false}
        isReadOnly={false}
        value={diasLaborales}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales: value,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.diasLaborales ?? value;
          }
          if (errors.diasLaborales?.hasError) {
            runValidationTasks("diasLaborales", value);
          }
          setDiasLaborales(value);
        }}
        onBlur={() => runValidationTasks("diasLaborales", diasLaborales)}
        errorMessage={errors.diasLaborales?.errorMessage}
        hasError={errors.diasLaborales?.hasError}
        {...getOverrideProps(overrides, "diasLaborales")}
      ></TextField>
      <TextField
        label="Edad max"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={edadMax}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax: value,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.edadMax ?? value;
          }
          if (errors.edadMax?.hasError) {
            runValidationTasks("edadMax", value);
          }
          setEdadMax(value);
        }}
        onBlur={() => runValidationTasks("edadMax", edadMax)}
        errorMessage={errors.edadMax?.errorMessage}
        hasError={errors.edadMax?.hasError}
        {...getOverrideProps(overrides, "edadMax")}
      ></TextField>
      <TextField
        label="Edad min"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={edadMin}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin: value,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.edadMin ?? value;
          }
          if (errors.edadMin?.hasError) {
            runValidationTasks("edadMin", value);
          }
          setEdadMin(value);
        }}
        onBlur={() => runValidationTasks("edadMin", edadMin)}
        errorMessage={errors.edadMin?.errorMessage}
        hasError={errors.edadMin?.hasError}
        {...getOverrideProps(overrides, "edadMin")}
      ></TextField>
      <TextField
        label="Genero"
        isRequired={false}
        isReadOnly={false}
        value={genero}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero: value,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.genero ?? value;
          }
          if (errors.genero?.hasError) {
            runValidationTasks("genero", value);
          }
          setGenero(value);
        }}
        onBlur={() => runValidationTasks("genero", genero)}
        errorMessage={errors.genero?.errorMessage}
        hasError={errors.genero?.hasError}
        {...getOverrideProps(overrides, "genero")}
      ></TextField>
      <TextField
        label="Experiencia laboral"
        isRequired={false}
        isReadOnly={false}
        value={experienciaLaboral}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral: value,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.experienciaLaboral ?? value;
          }
          if (errors.experienciaLaboral?.hasError) {
            runValidationTasks("experienciaLaboral", value);
          }
          setExperienciaLaboral(value);
        }}
        onBlur={() =>
          runValidationTasks("experienciaLaboral", experienciaLaboral)
        }
        errorMessage={errors.experienciaLaboral?.errorMessage}
        hasError={errors.experienciaLaboral?.hasError}
        {...getOverrideProps(overrides, "experienciaLaboral")}
      ></TextField>
      <TextField
        label="Escolaridad"
        isRequired={false}
        isReadOnly={false}
        value={escolaridad}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad: value,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.escolaridad ?? value;
          }
          if (errors.escolaridad?.hasError) {
            runValidationTasks("escolaridad", value);
          }
          setEscolaridad(value);
        }}
        onBlur={() => runValidationTasks("escolaridad", escolaridad)}
        errorMessage={errors.escolaridad?.errorMessage}
        hasError={errors.escolaridad?.hasError}
        {...getOverrideProps(overrides, "escolaridad")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma: values,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            values = result?.idioma ?? values;
          }
          setIdioma(values);
          setCurrentIdiomaValue("");
        }}
        currentFieldValue={currentIdiomaValue}
        label={"Idioma"}
        items={idioma}
        hasError={errors?.idioma?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("idioma", currentIdiomaValue)
        }
        errorMessage={errors?.idioma?.errorMessage}
        setFieldValue={setCurrentIdiomaValue}
        inputFieldRef={idiomaRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Idioma"
          isRequired={false}
          isReadOnly={false}
          value={currentIdiomaValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.idioma?.hasError) {
              runValidationTasks("idioma", value);
            }
            setCurrentIdiomaValue(value);
          }}
          onBlur={() => runValidationTasks("idioma", currentIdiomaValue)}
          errorMessage={errors.idioma?.errorMessage}
          hasError={errors.idioma?.hasError}
          ref={idiomaRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "idioma")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma: values,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            values = result?.nivelIdioma ?? values;
          }
          setNivelIdioma(values);
          setCurrentNivelIdiomaValue("");
        }}
        currentFieldValue={currentNivelIdiomaValue}
        label={"Nivel idioma"}
        items={nivelIdioma}
        hasError={errors?.nivelIdioma?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("nivelIdioma", currentNivelIdiomaValue)
        }
        errorMessage={errors?.nivelIdioma?.errorMessage}
        setFieldValue={setCurrentNivelIdiomaValue}
        inputFieldRef={nivelIdiomaRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Nivel idioma"
          isRequired={false}
          isReadOnly={false}
          value={currentNivelIdiomaValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.nivelIdioma?.hasError) {
              runValidationTasks("nivelIdioma", value);
            }
            setCurrentNivelIdiomaValue(value);
          }}
          onBlur={() =>
            runValidationTasks("nivelIdioma", currentNivelIdiomaValue)
          }
          errorMessage={errors.nivelIdioma?.errorMessage}
          hasError={errors.nivelIdioma?.hasError}
          ref={nivelIdiomaRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "nivelIdioma")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones: values,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            values = result?.prestaciones ?? values;
          }
          setPrestaciones(values);
          setCurrentPrestacionesValue("");
        }}
        currentFieldValue={currentPrestacionesValue}
        label={"Prestaciones"}
        items={prestaciones}
        hasError={errors?.prestaciones?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("prestaciones", currentPrestacionesValue)
        }
        errorMessage={errors?.prestaciones?.errorMessage}
        setFieldValue={setCurrentPrestacionesValue}
        inputFieldRef={prestacionesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Prestaciones"
          isRequired={false}
          isReadOnly={false}
          value={currentPrestacionesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.prestaciones?.hasError) {
              runValidationTasks("prestaciones", value);
            }
            setCurrentPrestacionesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("prestaciones", currentPrestacionesValue)
          }
          errorMessage={errors.prestaciones?.errorMessage}
          hasError={errors.prestaciones?.hasError}
          ref={prestacionesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "prestaciones")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas: values,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            values = result?.habilidadesBlandas ?? values;
          }
          setHabilidadesBlandas(values);
          setCurrentHabilidadesBlandasValue("");
        }}
        currentFieldValue={currentHabilidadesBlandasValue}
        label={"Habilidades blandas"}
        items={habilidadesBlandas}
        hasError={errors?.habilidadesBlandas?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "habilidadesBlandas",
            currentHabilidadesBlandasValue
          )
        }
        errorMessage={errors?.habilidadesBlandas?.errorMessage}
        setFieldValue={setCurrentHabilidadesBlandasValue}
        inputFieldRef={habilidadesBlandasRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Habilidades blandas"
          isRequired={false}
          isReadOnly={false}
          value={currentHabilidadesBlandasValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.habilidadesBlandas?.hasError) {
              runValidationTasks("habilidadesBlandas", value);
            }
            setCurrentHabilidadesBlandasValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "habilidadesBlandas",
              currentHabilidadesBlandasValue
            )
          }
          errorMessage={errors.habilidadesBlandas?.errorMessage}
          hasError={errors.habilidadesBlandas?.hasError}
          ref={habilidadesBlandasRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "habilidadesBlandas")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas: values,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            values = result?.habilidadesTecnicas ?? values;
          }
          setHabilidadesTecnicas(values);
          setCurrentHabilidadesTecnicasValue("");
        }}
        currentFieldValue={currentHabilidadesTecnicasValue}
        label={"Habilidades tecnicas"}
        items={habilidadesTecnicas}
        hasError={errors?.habilidadesTecnicas?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "habilidadesTecnicas",
            currentHabilidadesTecnicasValue
          )
        }
        errorMessage={errors?.habilidadesTecnicas?.errorMessage}
        setFieldValue={setCurrentHabilidadesTecnicasValue}
        inputFieldRef={habilidadesTecnicasRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Habilidades tecnicas"
          isRequired={false}
          isReadOnly={false}
          value={currentHabilidadesTecnicasValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.habilidadesTecnicas?.hasError) {
              runValidationTasks("habilidadesTecnicas", value);
            }
            setCurrentHabilidadesTecnicasValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "habilidadesTecnicas",
              currentHabilidadesTecnicasValue
            )
          }
          errorMessage={errors.habilidadesTecnicas?.errorMessage}
          hasError={errors.habilidadesTecnicas?.hasError}
          ref={habilidadesTecnicasRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "habilidadesTecnicas")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Email empresa"
        isRequired={false}
        isReadOnly={false}
        value={emailEmpresa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa: value,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.emailEmpresa ?? value;
          }
          if (errors.emailEmpresa?.hasError) {
            runValidationTasks("emailEmpresa", value);
          }
          setEmailEmpresa(value);
        }}
        onBlur={() => runValidationTasks("emailEmpresa", emailEmpresa)}
        errorMessage={errors.emailEmpresa?.errorMessage}
        hasError={errors.emailEmpresa?.hasError}
        {...getOverrideProps(overrides, "emailEmpresa")}
      ></TextField>
      <SwitchField
        label="Visible"
        defaultChecked={false}
        isDisabled={false}
        isChecked={visible}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible: value,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.visible ?? value;
          }
          if (errors.visible?.hasError) {
            runValidationTasks("visible", value);
          }
          setVisible(value);
        }}
        onBlur={() => runValidationTasks("visible", visible)}
        errorMessage={errors.visible?.errorMessage}
        hasError={errors.visible?.hasError}
        {...getOverrideProps(overrides, "visible")}
      ></SwitchField>
      <TextField
        label="Ubicacion"
        isRequired={false}
        isReadOnly={false}
        value={ubicacion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion: value,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.ubicacion ?? value;
          }
          if (errors.ubicacion?.hasError) {
            runValidationTasks("ubicacion", value);
          }
          setUbicacion(value);
        }}
        onBlur={() => runValidationTasks("ubicacion", ubicacion)}
        errorMessage={errors.ubicacion?.errorMessage}
        hasError={errors.ubicacion?.hasError}
        {...getOverrideProps(overrides, "ubicacion")}
      ></TextField>
      <TextField
        label="Nombre empresa"
        isRequired={false}
        isReadOnly={false}
        value={nombreEmpresa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa: value,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.nombreEmpresa ?? value;
          }
          if (errors.nombreEmpresa?.hasError) {
            runValidationTasks("nombreEmpresa", value);
          }
          setNombreEmpresa(value);
        }}
        onBlur={() => runValidationTasks("nombreEmpresa", nombreEmpresa)}
        errorMessage={errors.nombreEmpresa?.errorMessage}
        hasError={errors.nombreEmpresa?.hasError}
        {...getOverrideProps(overrides, "nombreEmpresa")}
      ></TextField>
      <TextField
        label="Salario maximo"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={salarioMaximo}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo: value,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.salarioMaximo ?? value;
          }
          if (errors.salarioMaximo?.hasError) {
            runValidationTasks("salarioMaximo", value);
          }
          setSalarioMaximo(value);
        }}
        onBlur={() => runValidationTasks("salarioMaximo", salarioMaximo)}
        errorMessage={errors.salarioMaximo?.errorMessage}
        hasError={errors.salarioMaximo?.hasError}
        {...getOverrideProps(overrides, "salarioMaximo")}
      ></TextField>
      <TextField
        label="Salario min"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={salarioMin}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin: value,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.salarioMin ?? value;
          }
          if (errors.salarioMin?.hasError) {
            runValidationTasks("salarioMin", value);
          }
          setSalarioMin(value);
        }}
        onBlur={() => runValidationTasks("salarioMin", salarioMin)}
        errorMessage={errors.salarioMin?.errorMessage}
        hasError={errors.salarioMin?.hasError}
        {...getOverrideProps(overrides, "salarioMin")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel: values,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            values = result?.idiomaConNivel ?? values;
          }
          setIdiomaConNivel(values);
          setCurrentIdiomaConNivelValue("");
        }}
        currentFieldValue={currentIdiomaConNivelValue}
        label={"Idioma con nivel"}
        items={idiomaConNivel}
        hasError={errors?.idiomaConNivel?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("idiomaConNivel", currentIdiomaConNivelValue)
        }
        errorMessage={errors?.idiomaConNivel?.errorMessage}
        setFieldValue={setCurrentIdiomaConNivelValue}
        inputFieldRef={idiomaConNivelRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Idioma con nivel"
          isRequired={false}
          isReadOnly={false}
          value={currentIdiomaConNivelValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.idiomaConNivel?.hasError) {
              runValidationTasks("idiomaConNivel", value);
            }
            setCurrentIdiomaConNivelValue(value);
          }}
          onBlur={() =>
            runValidationTasks("idiomaConNivel", currentIdiomaConNivelValue)
          }
          errorMessage={errors.idiomaConNivel?.errorMessage}
          hasError={errors.idiomaConNivel?.hasError}
          ref={idiomaConNivelRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "idiomaConNivel")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Municipio"
        isRequired={false}
        isReadOnly={false}
        value={municipio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio: value,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.municipio ?? value;
          }
          if (errors.municipio?.hasError) {
            runValidationTasks("municipio", value);
          }
          setMunicipio(value);
        }}
        onBlur={() => runValidationTasks("municipio", municipio)}
        errorMessage={errors.municipio?.errorMessage}
        hasError={errors.municipio?.hasError}
        {...getOverrideProps(overrides, "municipio")}
      ></TextField>
      <TextField
        label="Jornada laboral"
        isRequired={false}
        isReadOnly={false}
        value={jornadaLaboral}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral: value,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.jornadaLaboral ?? value;
          }
          if (errors.jornadaLaboral?.hasError) {
            runValidationTasks("jornadaLaboral", value);
          }
          setJornadaLaboral(value);
        }}
        onBlur={() => runValidationTasks("jornadaLaboral", jornadaLaboral)}
        errorMessage={errors.jornadaLaboral?.errorMessage}
        hasError={errors.jornadaLaboral?.hasError}
        {...getOverrideProps(overrides, "jornadaLaboral")}
      ></TextField>
      <TextField
        label="Email bdt"
        isRequired={false}
        isReadOnly={false}
        value={emailBDT}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT: value,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.emailBDT ?? value;
          }
          if (errors.emailBDT?.hasError) {
            runValidationTasks("emailBDT", value);
          }
          setEmailBDT(value);
        }}
        onBlur={() => runValidationTasks("emailBDT", emailBDT)}
        errorMessage={errors.emailBDT?.errorMessage}
        hasError={errors.emailBDT?.hasError}
        {...getOverrideProps(overrides, "emailBDT")}
      ></TextField>
      <TextField
        label="Nombre bdt"
        isRequired={false}
        isReadOnly={false}
        value={nombreBDT}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT: value,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.nombreBDT ?? value;
          }
          if (errors.nombreBDT?.hasError) {
            runValidationTasks("nombreBDT", value);
          }
          setNombreBDT(value);
        }}
        onBlur={() => runValidationTasks("nombreBDT", nombreBDT)}
        errorMessage={errors.nombreBDT?.errorMessage}
        hasError={errors.nombreBDT?.hasError}
        {...getOverrideProps(overrides, "nombreBDT")}
      ></TextField>
      <TextField
        label="Periodo pago"
        isRequired={false}
        isReadOnly={false}
        value={periodoPago}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago: value,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.periodoPago ?? value;
          }
          if (errors.periodoPago?.hasError) {
            runValidationTasks("periodoPago", value);
          }
          setPeriodoPago(value);
        }}
        onBlur={() => runValidationTasks("periodoPago", periodoPago)}
        errorMessage={errors.periodoPago?.errorMessage}
        hasError={errors.periodoPago?.hasError}
        {...getOverrideProps(overrides, "periodoPago")}
      ></TextField>
      <TextField
        label="Apellidos bdt"
        isRequired={false}
        isReadOnly={false}
        value={apellidosBDT}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT: value,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.apellidosBDT ?? value;
          }
          if (errors.apellidosBDT?.hasError) {
            runValidationTasks("apellidosBDT", value);
          }
          setApellidosBDT(value);
        }}
        onBlur={() => runValidationTasks("apellidosBDT", apellidosBDT)}
        errorMessage={errors.apellidosBDT?.errorMessage}
        hasError={errors.apellidosBDT?.hasError}
        {...getOverrideProps(overrides, "apellidosBDT")}
      ></TextField>
      <TextField
        label="Imagen bdt url"
        isRequired={false}
        isReadOnly={false}
        value={imagenBDTUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl: value,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.imagenBDTUrl ?? value;
          }
          if (errors.imagenBDTUrl?.hasError) {
            runValidationTasks("imagenBDTUrl", value);
          }
          setImagenBDTUrl(value);
        }}
        onBlur={() => runValidationTasks("imagenBDTUrl", imagenBDTUrl)}
        errorMessage={errors.imagenBDTUrl?.errorMessage}
        hasError={errors.imagenBDTUrl?.hasError}
        {...getOverrideProps(overrides, "imagenBDTUrl")}
      ></TextField>
      <TextField
        label="Pdfimagen url"
        isRequired={false}
        isReadOnly={false}
        value={pdfimagenUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl: value,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.pdfimagenUrl ?? value;
          }
          if (errors.pdfimagenUrl?.hasError) {
            runValidationTasks("pdfimagenUrl", value);
          }
          setPdfimagenUrl(value);
        }}
        onBlur={() => runValidationTasks("pdfimagenUrl", pdfimagenUrl)}
        errorMessage={errors.pdfimagenUrl?.errorMessage}
        hasError={errors.pdfimagenUrl?.hasError}
        {...getOverrideProps(overrides, "pdfimagenUrl")}
      ></TextField>
      <TextField
        label="Escolaridad bdt"
        isRequired={false}
        isReadOnly={false}
        value={escolaridadBDT}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT: value,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.escolaridadBDT ?? value;
          }
          if (errors.escolaridadBDT?.hasError) {
            runValidationTasks("escolaridadBDT", value);
          }
          setEscolaridadBDT(value);
        }}
        onBlur={() => runValidationTasks("escolaridadBDT", escolaridadBDT)}
        errorMessage={errors.escolaridadBDT?.errorMessage}
        hasError={errors.escolaridadBDT?.hasError}
        {...getOverrideProps(overrides, "escolaridadBDT")}
      ></TextField>
      <TextField
        label="Telefono bdt"
        isRequired={false}
        isReadOnly={false}
        value={telefonoBDT}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT: value,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.telefonoBDT ?? value;
          }
          if (errors.telefonoBDT?.hasError) {
            runValidationTasks("telefonoBDT", value);
          }
          setTelefonoBDT(value);
        }}
        onBlur={() => runValidationTasks("telefonoBDT", telefonoBDT)}
        errorMessage={errors.telefonoBDT?.errorMessage}
        hasError={errors.telefonoBDT?.hasError}
        {...getOverrideProps(overrides, "telefonoBDT")}
      ></TextField>
      <TextField
        label="Genero bdt"
        isRequired={false}
        isReadOnly={false}
        value={generoBDT}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT: value,
              bdtID,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.generoBDT ?? value;
          }
          if (errors.generoBDT?.hasError) {
            runValidationTasks("generoBDT", value);
          }
          setGeneroBDT(value);
        }}
        onBlur={() => runValidationTasks("generoBDT", generoBDT)}
        errorMessage={errors.generoBDT?.errorMessage}
        hasError={errors.generoBDT?.hasError}
        {...getOverrideProps(overrides, "generoBDT")}
      ></TextField>
      <TextField
        label="Bdt id"
        isRequired={true}
        isReadOnly={false}
        value={bdtID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID: value,
              empresaID,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.bdtID ?? value;
          }
          if (errors.bdtID?.hasError) {
            runValidationTasks("bdtID", value);
          }
          setBdtID(value);
        }}
        onBlur={() => runValidationTasks("bdtID", bdtID)}
        errorMessage={errors.bdtID?.errorMessage}
        hasError={errors.bdtID?.hasError}
        {...getOverrideProps(overrides, "bdtID")}
      ></TextField>
      <TextField
        label="Empresa id"
        isRequired={true}
        isReadOnly={false}
        value={empresaID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID: value,
              vacanteID,
            };
            const result = onChange(modelFields);
            value = result?.empresaID ?? value;
          }
          if (errors.empresaID?.hasError) {
            runValidationTasks("empresaID", value);
          }
          setEmpresaID(value);
        }}
        onBlur={() => runValidationTasks("empresaID", empresaID)}
        errorMessage={errors.empresaID?.errorMessage}
        hasError={errors.empresaID?.hasError}
        {...getOverrideProps(overrides, "empresaID")}
      ></TextField>
      <TextField
        label="Vacante id"
        isRequired={true}
        isReadOnly={false}
        value={vacanteID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              numeroPlazas,
              area,
              tipoContrato,
              modaiidad,
              diasLaborales,
              edadMax,
              edadMin,
              genero,
              experienciaLaboral,
              escolaridad,
              idioma,
              nivelIdioma,
              prestaciones,
              habilidadesBlandas,
              habilidadesTecnicas,
              emailEmpresa,
              visible,
              ubicacion,
              nombreEmpresa,
              salarioMaximo,
              salarioMin,
              idiomaConNivel,
              municipio,
              jornadaLaboral,
              emailBDT,
              nombreBDT,
              periodoPago,
              apellidosBDT,
              imagenBDTUrl,
              pdfimagenUrl,
              escolaridadBDT,
              telefonoBDT,
              generoBDT,
              bdtID,
              empresaID,
              vacanteID: value,
            };
            const result = onChange(modelFields);
            value = result?.vacanteID ?? value;
          }
          if (errors.vacanteID?.hasError) {
            runValidationTasks("vacanteID", value);
          }
          setVacanteID(value);
        }}
        onBlur={() => runValidationTasks("vacanteID", vacanteID)}
        errorMessage={errors.vacanteID?.errorMessage}
        hasError={errors.vacanteID?.hasError}
        {...getOverrideProps(overrides, "vacanteID")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
