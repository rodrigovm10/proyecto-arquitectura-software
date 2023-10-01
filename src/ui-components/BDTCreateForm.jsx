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
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { BDT } from "../models";
import { fetchByPath, validateField } from "./utils";
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
export default function BDTCreateForm(props) {
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
    apellidos: "",
    curp: "",
    fechaNacimiento: "",
    telefono: "",
    escolaridad: "",
    genero: "",
    idioma: [],
    buscaEmpleo: false,
    trabajando: false,
    correo: "",
    habilidadesBlandas: [],
    habilidadesTecnicas: "",
    dispViajar: false,
    dispRadicar: false,
    municipio: "",
    colonia: "",
    calle: "",
    codigoPostal: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [apellidos, setApellidos] = React.useState(initialValues.apellidos);
  const [curp, setCurp] = React.useState(initialValues.curp);
  const [fechaNacimiento, setFechaNacimiento] = React.useState(
    initialValues.fechaNacimiento
  );
  const [telefono, setTelefono] = React.useState(initialValues.telefono);
  const [escolaridad, setEscolaridad] = React.useState(
    initialValues.escolaridad
  );
  const [genero, setGenero] = React.useState(initialValues.genero);
  const [idioma, setIdioma] = React.useState(initialValues.idioma);
  const [buscaEmpleo, setBuscaEmpleo] = React.useState(
    initialValues.buscaEmpleo
  );
  const [trabajando, setTrabajando] = React.useState(initialValues.trabajando);
  const [correo, setCorreo] = React.useState(initialValues.correo);
  const [habilidadesBlandas, setHabilidadesBlandas] = React.useState(
    initialValues.habilidadesBlandas
  );
  const [habilidadesTecnicas, setHabilidadesTecnicas] = React.useState(
    initialValues.habilidadesTecnicas
  );
  const [dispViajar, setDispViajar] = React.useState(initialValues.dispViajar);
  const [dispRadicar, setDispRadicar] = React.useState(
    initialValues.dispRadicar
  );
  const [municipio, setMunicipio] = React.useState(initialValues.municipio);
  const [colonia, setColonia] = React.useState(initialValues.colonia);
  const [calle, setCalle] = React.useState(initialValues.calle);
  const [codigoPostal, setCodigoPostal] = React.useState(
    initialValues.codigoPostal
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombre(initialValues.nombre);
    setApellidos(initialValues.apellidos);
    setCurp(initialValues.curp);
    setFechaNacimiento(initialValues.fechaNacimiento);
    setTelefono(initialValues.telefono);
    setEscolaridad(initialValues.escolaridad);
    setGenero(initialValues.genero);
    setIdioma(initialValues.idioma);
    setCurrentIdiomaValue("");
    setBuscaEmpleo(initialValues.buscaEmpleo);
    setTrabajando(initialValues.trabajando);
    setCorreo(initialValues.correo);
    setHabilidadesBlandas(initialValues.habilidadesBlandas);
    setCurrentHabilidadesBlandasValue("");
    setHabilidadesTecnicas(initialValues.habilidadesTecnicas);
    setDispViajar(initialValues.dispViajar);
    setDispRadicar(initialValues.dispRadicar);
    setMunicipio(initialValues.municipio);
    setColonia(initialValues.colonia);
    setCalle(initialValues.calle);
    setCodigoPostal(initialValues.codigoPostal);
    setErrors({});
  };
  const [currentIdiomaValue, setCurrentIdiomaValue] = React.useState("");
  const idiomaRef = React.createRef();
  const [currentHabilidadesBlandasValue, setCurrentHabilidadesBlandasValue] =
    React.useState("");
  const habilidadesBlandasRef = React.createRef();
  const validations = {
    nombre: [],
    apellidos: [],
    curp: [],
    fechaNacimiento: [],
    telefono: [],
    escolaridad: [],
    genero: [],
    idioma: [],
    buscaEmpleo: [],
    trabajando: [],
    correo: [],
    habilidadesBlandas: [],
    habilidadesTecnicas: [],
    dispViajar: [],
    dispRadicar: [],
    municipio: [],
    colonia: [],
    calle: [],
    codigoPostal: [],
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
          apellidos,
          curp,
          fechaNacimiento,
          telefono,
          escolaridad,
          genero,
          idioma,
          buscaEmpleo,
          trabajando,
          correo,
          habilidadesBlandas,
          habilidadesTecnicas,
          dispViajar,
          dispRadicar,
          municipio,
          colonia,
          calle,
          codigoPostal,
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
          await DataStore.save(new BDT(modelFields));
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
      {...getOverrideProps(overrides, "BDTCreateForm")}
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
              apellidos,
              curp,
              fechaNacimiento,
              telefono,
              escolaridad,
              genero,
              idioma,
              buscaEmpleo,
              trabajando,
              correo,
              habilidadesBlandas,
              habilidadesTecnicas,
              dispViajar,
              dispRadicar,
              municipio,
              colonia,
              calle,
              codigoPostal,
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
        label="Apellidos"
        isRequired={false}
        isReadOnly={false}
        value={apellidos}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidos: value,
              curp,
              fechaNacimiento,
              telefono,
              escolaridad,
              genero,
              idioma,
              buscaEmpleo,
              trabajando,
              correo,
              habilidadesBlandas,
              habilidadesTecnicas,
              dispViajar,
              dispRadicar,
              municipio,
              colonia,
              calle,
              codigoPostal,
            };
            const result = onChange(modelFields);
            value = result?.apellidos ?? value;
          }
          if (errors.apellidos?.hasError) {
            runValidationTasks("apellidos", value);
          }
          setApellidos(value);
        }}
        onBlur={() => runValidationTasks("apellidos", apellidos)}
        errorMessage={errors.apellidos?.errorMessage}
        hasError={errors.apellidos?.hasError}
        {...getOverrideProps(overrides, "apellidos")}
      ></TextField>
      <TextField
        label="Curp"
        isRequired={false}
        isReadOnly={false}
        value={curp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidos,
              curp: value,
              fechaNacimiento,
              telefono,
              escolaridad,
              genero,
              idioma,
              buscaEmpleo,
              trabajando,
              correo,
              habilidadesBlandas,
              habilidadesTecnicas,
              dispViajar,
              dispRadicar,
              municipio,
              colonia,
              calle,
              codigoPostal,
            };
            const result = onChange(modelFields);
            value = result?.curp ?? value;
          }
          if (errors.curp?.hasError) {
            runValidationTasks("curp", value);
          }
          setCurp(value);
        }}
        onBlur={() => runValidationTasks("curp", curp)}
        errorMessage={errors.curp?.errorMessage}
        hasError={errors.curp?.hasError}
        {...getOverrideProps(overrides, "curp")}
      ></TextField>
      <TextField
        label="Fecha nacimiento"
        isRequired={false}
        isReadOnly={false}
        value={fechaNacimiento}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidos,
              curp,
              fechaNacimiento: value,
              telefono,
              escolaridad,
              genero,
              idioma,
              buscaEmpleo,
              trabajando,
              correo,
              habilidadesBlandas,
              habilidadesTecnicas,
              dispViajar,
              dispRadicar,
              municipio,
              colonia,
              calle,
              codigoPostal,
            };
            const result = onChange(modelFields);
            value = result?.fechaNacimiento ?? value;
          }
          if (errors.fechaNacimiento?.hasError) {
            runValidationTasks("fechaNacimiento", value);
          }
          setFechaNacimiento(value);
        }}
        onBlur={() => runValidationTasks("fechaNacimiento", fechaNacimiento)}
        errorMessage={errors.fechaNacimiento?.errorMessage}
        hasError={errors.fechaNacimiento?.hasError}
        {...getOverrideProps(overrides, "fechaNacimiento")}
      ></TextField>
      <TextField
        label="Telefono"
        isRequired={false}
        isReadOnly={false}
        value={telefono}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidos,
              curp,
              fechaNacimiento,
              telefono: value,
              escolaridad,
              genero,
              idioma,
              buscaEmpleo,
              trabajando,
              correo,
              habilidadesBlandas,
              habilidadesTecnicas,
              dispViajar,
              dispRadicar,
              municipio,
              colonia,
              calle,
              codigoPostal,
            };
            const result = onChange(modelFields);
            value = result?.telefono ?? value;
          }
          if (errors.telefono?.hasError) {
            runValidationTasks("telefono", value);
          }
          setTelefono(value);
        }}
        onBlur={() => runValidationTasks("telefono", telefono)}
        errorMessage={errors.telefono?.errorMessage}
        hasError={errors.telefono?.hasError}
        {...getOverrideProps(overrides, "telefono")}
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
              apellidos,
              curp,
              fechaNacimiento,
              telefono,
              escolaridad: value,
              genero,
              idioma,
              buscaEmpleo,
              trabajando,
              correo,
              habilidadesBlandas,
              habilidadesTecnicas,
              dispViajar,
              dispRadicar,
              municipio,
              colonia,
              calle,
              codigoPostal,
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
              apellidos,
              curp,
              fechaNacimiento,
              telefono,
              escolaridad,
              genero: value,
              idioma,
              buscaEmpleo,
              trabajando,
              correo,
              habilidadesBlandas,
              habilidadesTecnicas,
              dispViajar,
              dispRadicar,
              municipio,
              colonia,
              calle,
              codigoPostal,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidos,
              curp,
              fechaNacimiento,
              telefono,
              escolaridad,
              genero,
              idioma: values,
              buscaEmpleo,
              trabajando,
              correo,
              habilidadesBlandas,
              habilidadesTecnicas,
              dispViajar,
              dispRadicar,
              municipio,
              colonia,
              calle,
              codigoPostal,
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
      <SwitchField
        label="Busca empleo"
        defaultChecked={false}
        isDisabled={false}
        isChecked={buscaEmpleo}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidos,
              curp,
              fechaNacimiento,
              telefono,
              escolaridad,
              genero,
              idioma,
              buscaEmpleo: value,
              trabajando,
              correo,
              habilidadesBlandas,
              habilidadesTecnicas,
              dispViajar,
              dispRadicar,
              municipio,
              colonia,
              calle,
              codigoPostal,
            };
            const result = onChange(modelFields);
            value = result?.buscaEmpleo ?? value;
          }
          if (errors.buscaEmpleo?.hasError) {
            runValidationTasks("buscaEmpleo", value);
          }
          setBuscaEmpleo(value);
        }}
        onBlur={() => runValidationTasks("buscaEmpleo", buscaEmpleo)}
        errorMessage={errors.buscaEmpleo?.errorMessage}
        hasError={errors.buscaEmpleo?.hasError}
        {...getOverrideProps(overrides, "buscaEmpleo")}
      ></SwitchField>
      <SwitchField
        label="Trabajando"
        defaultChecked={false}
        isDisabled={false}
        isChecked={trabajando}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidos,
              curp,
              fechaNacimiento,
              telefono,
              escolaridad,
              genero,
              idioma,
              buscaEmpleo,
              trabajando: value,
              correo,
              habilidadesBlandas,
              habilidadesTecnicas,
              dispViajar,
              dispRadicar,
              municipio,
              colonia,
              calle,
              codigoPostal,
            };
            const result = onChange(modelFields);
            value = result?.trabajando ?? value;
          }
          if (errors.trabajando?.hasError) {
            runValidationTasks("trabajando", value);
          }
          setTrabajando(value);
        }}
        onBlur={() => runValidationTasks("trabajando", trabajando)}
        errorMessage={errors.trabajando?.errorMessage}
        hasError={errors.trabajando?.hasError}
        {...getOverrideProps(overrides, "trabajando")}
      ></SwitchField>
      <TextField
        label="Correo"
        isRequired={false}
        isReadOnly={false}
        value={correo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidos,
              curp,
              fechaNacimiento,
              telefono,
              escolaridad,
              genero,
              idioma,
              buscaEmpleo,
              trabajando,
              correo: value,
              habilidadesBlandas,
              habilidadesTecnicas,
              dispViajar,
              dispRadicar,
              municipio,
              colonia,
              calle,
              codigoPostal,
            };
            const result = onChange(modelFields);
            value = result?.correo ?? value;
          }
          if (errors.correo?.hasError) {
            runValidationTasks("correo", value);
          }
          setCorreo(value);
        }}
        onBlur={() => runValidationTasks("correo", correo)}
        errorMessage={errors.correo?.errorMessage}
        hasError={errors.correo?.hasError}
        {...getOverrideProps(overrides, "correo")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidos,
              curp,
              fechaNacimiento,
              telefono,
              escolaridad,
              genero,
              idioma,
              buscaEmpleo,
              trabajando,
              correo,
              habilidadesBlandas: values,
              habilidadesTecnicas,
              dispViajar,
              dispRadicar,
              municipio,
              colonia,
              calle,
              codigoPostal,
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
      <TextField
        label="Habilidades tecnicas"
        isRequired={false}
        isReadOnly={false}
        value={habilidadesTecnicas}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidos,
              curp,
              fechaNacimiento,
              telefono,
              escolaridad,
              genero,
              idioma,
              buscaEmpleo,
              trabajando,
              correo,
              habilidadesBlandas,
              habilidadesTecnicas: value,
              dispViajar,
              dispRadicar,
              municipio,
              colonia,
              calle,
              codigoPostal,
            };
            const result = onChange(modelFields);
            value = result?.habilidadesTecnicas ?? value;
          }
          if (errors.habilidadesTecnicas?.hasError) {
            runValidationTasks("habilidadesTecnicas", value);
          }
          setHabilidadesTecnicas(value);
        }}
        onBlur={() =>
          runValidationTasks("habilidadesTecnicas", habilidadesTecnicas)
        }
        errorMessage={errors.habilidadesTecnicas?.errorMessage}
        hasError={errors.habilidadesTecnicas?.hasError}
        {...getOverrideProps(overrides, "habilidadesTecnicas")}
      ></TextField>
      <SwitchField
        label="Disp viajar"
        defaultChecked={false}
        isDisabled={false}
        isChecked={dispViajar}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidos,
              curp,
              fechaNacimiento,
              telefono,
              escolaridad,
              genero,
              idioma,
              buscaEmpleo,
              trabajando,
              correo,
              habilidadesBlandas,
              habilidadesTecnicas,
              dispViajar: value,
              dispRadicar,
              municipio,
              colonia,
              calle,
              codigoPostal,
            };
            const result = onChange(modelFields);
            value = result?.dispViajar ?? value;
          }
          if (errors.dispViajar?.hasError) {
            runValidationTasks("dispViajar", value);
          }
          setDispViajar(value);
        }}
        onBlur={() => runValidationTasks("dispViajar", dispViajar)}
        errorMessage={errors.dispViajar?.errorMessage}
        hasError={errors.dispViajar?.hasError}
        {...getOverrideProps(overrides, "dispViajar")}
      ></SwitchField>
      <SwitchField
        label="Disp radicar"
        defaultChecked={false}
        isDisabled={false}
        isChecked={dispRadicar}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidos,
              curp,
              fechaNacimiento,
              telefono,
              escolaridad,
              genero,
              idioma,
              buscaEmpleo,
              trabajando,
              correo,
              habilidadesBlandas,
              habilidadesTecnicas,
              dispViajar,
              dispRadicar: value,
              municipio,
              colonia,
              calle,
              codigoPostal,
            };
            const result = onChange(modelFields);
            value = result?.dispRadicar ?? value;
          }
          if (errors.dispRadicar?.hasError) {
            runValidationTasks("dispRadicar", value);
          }
          setDispRadicar(value);
        }}
        onBlur={() => runValidationTasks("dispRadicar", dispRadicar)}
        errorMessage={errors.dispRadicar?.errorMessage}
        hasError={errors.dispRadicar?.hasError}
        {...getOverrideProps(overrides, "dispRadicar")}
      ></SwitchField>
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
              apellidos,
              curp,
              fechaNacimiento,
              telefono,
              escolaridad,
              genero,
              idioma,
              buscaEmpleo,
              trabajando,
              correo,
              habilidadesBlandas,
              habilidadesTecnicas,
              dispViajar,
              dispRadicar,
              municipio: value,
              colonia,
              calle,
              codigoPostal,
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
        label="Colonia"
        isRequired={false}
        isReadOnly={false}
        value={colonia}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidos,
              curp,
              fechaNacimiento,
              telefono,
              escolaridad,
              genero,
              idioma,
              buscaEmpleo,
              trabajando,
              correo,
              habilidadesBlandas,
              habilidadesTecnicas,
              dispViajar,
              dispRadicar,
              municipio,
              colonia: value,
              calle,
              codigoPostal,
            };
            const result = onChange(modelFields);
            value = result?.colonia ?? value;
          }
          if (errors.colonia?.hasError) {
            runValidationTasks("colonia", value);
          }
          setColonia(value);
        }}
        onBlur={() => runValidationTasks("colonia", colonia)}
        errorMessage={errors.colonia?.errorMessage}
        hasError={errors.colonia?.hasError}
        {...getOverrideProps(overrides, "colonia")}
      ></TextField>
      <TextField
        label="Calle"
        isRequired={false}
        isReadOnly={false}
        value={calle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidos,
              curp,
              fechaNacimiento,
              telefono,
              escolaridad,
              genero,
              idioma,
              buscaEmpleo,
              trabajando,
              correo,
              habilidadesBlandas,
              habilidadesTecnicas,
              dispViajar,
              dispRadicar,
              municipio,
              colonia,
              calle: value,
              codigoPostal,
            };
            const result = onChange(modelFields);
            value = result?.calle ?? value;
          }
          if (errors.calle?.hasError) {
            runValidationTasks("calle", value);
          }
          setCalle(value);
        }}
        onBlur={() => runValidationTasks("calle", calle)}
        errorMessage={errors.calle?.errorMessage}
        hasError={errors.calle?.hasError}
        {...getOverrideProps(overrides, "calle")}
      ></TextField>
      <TextField
        label="Codigo postal"
        isRequired={false}
        isReadOnly={false}
        value={codigoPostal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidos,
              curp,
              fechaNacimiento,
              telefono,
              escolaridad,
              genero,
              idioma,
              buscaEmpleo,
              trabajando,
              correo,
              habilidadesBlandas,
              habilidadesTecnicas,
              dispViajar,
              dispRadicar,
              municipio,
              colonia,
              calle,
              codigoPostal: value,
            };
            const result = onChange(modelFields);
            value = result?.codigoPostal ?? value;
          }
          if (errors.codigoPostal?.hasError) {
            runValidationTasks("codigoPostal", value);
          }
          setCodigoPostal(value);
        }}
        onBlur={() => runValidationTasks("codigoPostal", codigoPostal)}
        errorMessage={errors.codigoPostal?.errorMessage}
        hasError={errors.codigoPostal?.hasError}
        {...getOverrideProps(overrides, "codigoPostal")}
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
