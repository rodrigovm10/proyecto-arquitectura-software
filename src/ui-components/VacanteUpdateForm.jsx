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
import { Vacante } from "../models";
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
export default function VacanteUpdateForm(props) {
  const {
    id: idProp,
    vacante: vacanteModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nombreVacante: "",
    descripcion: "",
    diasLaborales: "",
    habilidadesBlandas: [],
    habilidadesTecnicas: [],
    generoBDT: "",
    edadMin: "",
    edadMax: "",
    area: "",
    tipoEmpleo: "",
    dispViajar: false,
    dispRadicar: false,
    escolaridad: "",
    prestaciones: "",
    direccionEmpresa: "",
    Idioma: [],
    salarioMax: "",
    salarioMin: "",
  };
  const [nombreVacante, setNombreVacante] = React.useState(
    initialValues.nombreVacante
  );
  const [descripcion, setDescripcion] = React.useState(
    initialValues.descripcion
  );
  const [diasLaborales, setDiasLaborales] = React.useState(
    initialValues.diasLaborales
  );
  const [habilidadesBlandas, setHabilidadesBlandas] = React.useState(
    initialValues.habilidadesBlandas
  );
  const [habilidadesTecnicas, setHabilidadesTecnicas] = React.useState(
    initialValues.habilidadesTecnicas
  );
  const [generoBDT, setGeneroBDT] = React.useState(initialValues.generoBDT);
  const [edadMin, setEdadMin] = React.useState(initialValues.edadMin);
  const [edadMax, setEdadMax] = React.useState(initialValues.edadMax);
  const [area, setArea] = React.useState(initialValues.area);
  const [tipoEmpleo, setTipoEmpleo] = React.useState(initialValues.tipoEmpleo);
  const [dispViajar, setDispViajar] = React.useState(initialValues.dispViajar);
  const [dispRadicar, setDispRadicar] = React.useState(
    initialValues.dispRadicar
  );
  const [escolaridad, setEscolaridad] = React.useState(
    initialValues.escolaridad
  );
  const [prestaciones, setPrestaciones] = React.useState(
    initialValues.prestaciones
  );
  const [direccionEmpresa, setDireccionEmpresa] = React.useState(
    initialValues.direccionEmpresa
  );
  const [Idioma, setIdioma] = React.useState(initialValues.Idioma);
  const [salarioMax, setSalarioMax] = React.useState(initialValues.salarioMax);
  const [salarioMin, setSalarioMin] = React.useState(initialValues.salarioMin);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = vacanteRecord
      ? { ...initialValues, ...vacanteRecord }
      : initialValues;
    setNombreVacante(cleanValues.nombreVacante);
    setDescripcion(cleanValues.descripcion);
    setDiasLaborales(cleanValues.diasLaborales);
    setHabilidadesBlandas(cleanValues.habilidadesBlandas ?? []);
    setCurrentHabilidadesBlandasValue("");
    setHabilidadesTecnicas(cleanValues.habilidadesTecnicas ?? []);
    setCurrentHabilidadesTecnicasValue("");
    setGeneroBDT(cleanValues.generoBDT);
    setEdadMin(cleanValues.edadMin);
    setEdadMax(cleanValues.edadMax);
    setArea(cleanValues.area);
    setTipoEmpleo(cleanValues.tipoEmpleo);
    setDispViajar(cleanValues.dispViajar);
    setDispRadicar(cleanValues.dispRadicar);
    setEscolaridad(cleanValues.escolaridad);
    setPrestaciones(cleanValues.prestaciones);
    setDireccionEmpresa(cleanValues.direccionEmpresa);
    setIdioma(cleanValues.Idioma ?? []);
    setCurrentIdiomaValue("");
    setSalarioMax(cleanValues.salarioMax);
    setSalarioMin(cleanValues.salarioMin);
    setErrors({});
  };
  const [vacanteRecord, setVacanteRecord] = React.useState(vacanteModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Vacante, idProp)
        : vacanteModelProp;
      setVacanteRecord(record);
    };
    queryData();
  }, [idProp, vacanteModelProp]);
  React.useEffect(resetStateValues, [vacanteRecord]);
  const [currentHabilidadesBlandasValue, setCurrentHabilidadesBlandasValue] =
    React.useState("");
  const habilidadesBlandasRef = React.createRef();
  const [currentHabilidadesTecnicasValue, setCurrentHabilidadesTecnicasValue] =
    React.useState("");
  const habilidadesTecnicasRef = React.createRef();
  const [currentIdiomaValue, setCurrentIdiomaValue] = React.useState("");
  const IdiomaRef = React.createRef();
  const validations = {
    nombreVacante: [],
    descripcion: [],
    diasLaborales: [],
    habilidadesBlandas: [],
    habilidadesTecnicas: [],
    generoBDT: [],
    edadMin: [],
    edadMax: [],
    area: [],
    tipoEmpleo: [],
    dispViajar: [],
    dispRadicar: [],
    escolaridad: [],
    prestaciones: [],
    direccionEmpresa: [],
    Idioma: [],
    salarioMax: [],
    salarioMin: [],
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
          nombreVacante,
          descripcion,
          diasLaborales,
          habilidadesBlandas,
          habilidadesTecnicas,
          generoBDT,
          edadMin,
          edadMax,
          area,
          tipoEmpleo,
          dispViajar,
          dispRadicar,
          escolaridad,
          prestaciones,
          direccionEmpresa,
          Idioma,
          salarioMax,
          salarioMin,
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
          await DataStore.save(
            Vacante.copyOf(vacanteRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "VacanteUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nombre vacante"
        isRequired={false}
        isReadOnly={false}
        value={nombreVacante}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante: value,
              descripcion,
              diasLaborales,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              area,
              tipoEmpleo,
              dispViajar,
              dispRadicar,
              escolaridad,
              prestaciones,
              direccionEmpresa,
              Idioma,
              salarioMax,
              salarioMin,
            };
            const result = onChange(modelFields);
            value = result?.nombreVacante ?? value;
          }
          if (errors.nombreVacante?.hasError) {
            runValidationTasks("nombreVacante", value);
          }
          setNombreVacante(value);
        }}
        onBlur={() => runValidationTasks("nombreVacante", nombreVacante)}
        errorMessage={errors.nombreVacante?.errorMessage}
        hasError={errors.nombreVacante?.hasError}
        {...getOverrideProps(overrides, "nombreVacante")}
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
              nombreVacante,
              descripcion: value,
              diasLaborales,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              area,
              tipoEmpleo,
              dispViajar,
              dispRadicar,
              escolaridad,
              prestaciones,
              direccionEmpresa,
              Idioma,
              salarioMax,
              salarioMin,
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
        label="Dias laborales"
        isRequired={false}
        isReadOnly={false}
        value={diasLaborales}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              diasLaborales: value,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              area,
              tipoEmpleo,
              dispViajar,
              dispRadicar,
              escolaridad,
              prestaciones,
              direccionEmpresa,
              Idioma,
              salarioMax,
              salarioMin,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              diasLaborales,
              habilidadesBlandas: values,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              area,
              tipoEmpleo,
              dispViajar,
              dispRadicar,
              escolaridad,
              prestaciones,
              direccionEmpresa,
              Idioma,
              salarioMax,
              salarioMin,
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
              nombreVacante,
              descripcion,
              diasLaborales,
              habilidadesBlandas,
              habilidadesTecnicas: values,
              generoBDT,
              edadMin,
              edadMax,
              area,
              tipoEmpleo,
              dispViajar,
              dispRadicar,
              escolaridad,
              prestaciones,
              direccionEmpresa,
              Idioma,
              salarioMax,
              salarioMin,
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
        label="Genero bdt"
        isRequired={false}
        isReadOnly={false}
        value={generoBDT}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              diasLaborales,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT: value,
              edadMin,
              edadMax,
              area,
              tipoEmpleo,
              dispViajar,
              dispRadicar,
              escolaridad,
              prestaciones,
              direccionEmpresa,
              Idioma,
              salarioMax,
              salarioMin,
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
              nombreVacante,
              descripcion,
              diasLaborales,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin: value,
              edadMax,
              area,
              tipoEmpleo,
              dispViajar,
              dispRadicar,
              escolaridad,
              prestaciones,
              direccionEmpresa,
              Idioma,
              salarioMax,
              salarioMin,
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
              nombreVacante,
              descripcion,
              diasLaborales,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax: value,
              area,
              tipoEmpleo,
              dispViajar,
              dispRadicar,
              escolaridad,
              prestaciones,
              direccionEmpresa,
              Idioma,
              salarioMax,
              salarioMin,
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
        label="Area"
        isRequired={false}
        isReadOnly={false}
        value={area}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              diasLaborales,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              area: value,
              tipoEmpleo,
              dispViajar,
              dispRadicar,
              escolaridad,
              prestaciones,
              direccionEmpresa,
              Idioma,
              salarioMax,
              salarioMin,
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
        label="Tipo empleo"
        isRequired={false}
        isReadOnly={false}
        value={tipoEmpleo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              diasLaborales,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              area,
              tipoEmpleo: value,
              dispViajar,
              dispRadicar,
              escolaridad,
              prestaciones,
              direccionEmpresa,
              Idioma,
              salarioMax,
              salarioMin,
            };
            const result = onChange(modelFields);
            value = result?.tipoEmpleo ?? value;
          }
          if (errors.tipoEmpleo?.hasError) {
            runValidationTasks("tipoEmpleo", value);
          }
          setTipoEmpleo(value);
        }}
        onBlur={() => runValidationTasks("tipoEmpleo", tipoEmpleo)}
        errorMessage={errors.tipoEmpleo?.errorMessage}
        hasError={errors.tipoEmpleo?.hasError}
        {...getOverrideProps(overrides, "tipoEmpleo")}
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
              nombreVacante,
              descripcion,
              diasLaborales,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              area,
              tipoEmpleo,
              dispViajar: value,
              dispRadicar,
              escolaridad,
              prestaciones,
              direccionEmpresa,
              Idioma,
              salarioMax,
              salarioMin,
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
              nombreVacante,
              descripcion,
              diasLaborales,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              area,
              tipoEmpleo,
              dispViajar,
              dispRadicar: value,
              escolaridad,
              prestaciones,
              direccionEmpresa,
              Idioma,
              salarioMax,
              salarioMin,
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
        label="Escolaridad"
        isRequired={false}
        isReadOnly={false}
        value={escolaridad}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              diasLaborales,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              area,
              tipoEmpleo,
              dispViajar,
              dispRadicar,
              escolaridad: value,
              prestaciones,
              direccionEmpresa,
              Idioma,
              salarioMax,
              salarioMin,
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
        label="Prestaciones"
        isRequired={false}
        isReadOnly={false}
        value={prestaciones}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              diasLaborales,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              area,
              tipoEmpleo,
              dispViajar,
              dispRadicar,
              escolaridad,
              prestaciones: value,
              direccionEmpresa,
              Idioma,
              salarioMax,
              salarioMin,
            };
            const result = onChange(modelFields);
            value = result?.prestaciones ?? value;
          }
          if (errors.prestaciones?.hasError) {
            runValidationTasks("prestaciones", value);
          }
          setPrestaciones(value);
        }}
        onBlur={() => runValidationTasks("prestaciones", prestaciones)}
        errorMessage={errors.prestaciones?.errorMessage}
        hasError={errors.prestaciones?.hasError}
        {...getOverrideProps(overrides, "prestaciones")}
      ></TextField>
      <TextField
        label="Direccion empresa"
        isRequired={false}
        isReadOnly={false}
        value={direccionEmpresa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              diasLaborales,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              area,
              tipoEmpleo,
              dispViajar,
              dispRadicar,
              escolaridad,
              prestaciones,
              direccionEmpresa: value,
              Idioma,
              salarioMax,
              salarioMin,
            };
            const result = onChange(modelFields);
            value = result?.direccionEmpresa ?? value;
          }
          if (errors.direccionEmpresa?.hasError) {
            runValidationTasks("direccionEmpresa", value);
          }
          setDireccionEmpresa(value);
        }}
        onBlur={() => runValidationTasks("direccionEmpresa", direccionEmpresa)}
        errorMessage={errors.direccionEmpresa?.errorMessage}
        hasError={errors.direccionEmpresa?.hasError}
        {...getOverrideProps(overrides, "direccionEmpresa")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              diasLaborales,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              area,
              tipoEmpleo,
              dispViajar,
              dispRadicar,
              escolaridad,
              prestaciones,
              direccionEmpresa,
              Idioma: values,
              salarioMax,
              salarioMin,
            };
            const result = onChange(modelFields);
            values = result?.Idioma ?? values;
          }
          setIdioma(values);
          setCurrentIdiomaValue("");
        }}
        currentFieldValue={currentIdiomaValue}
        label={"Idioma"}
        items={Idioma}
        hasError={errors?.Idioma?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Idioma", currentIdiomaValue)
        }
        errorMessage={errors?.Idioma?.errorMessage}
        setFieldValue={setCurrentIdiomaValue}
        inputFieldRef={IdiomaRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Idioma"
          isRequired={false}
          isReadOnly={false}
          value={currentIdiomaValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Idioma?.hasError) {
              runValidationTasks("Idioma", value);
            }
            setCurrentIdiomaValue(value);
          }}
          onBlur={() => runValidationTasks("Idioma", currentIdiomaValue)}
          errorMessage={errors.Idioma?.errorMessage}
          hasError={errors.Idioma?.hasError}
          ref={IdiomaRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Idioma")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Salario max"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={salarioMax}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              diasLaborales,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              area,
              tipoEmpleo,
              dispViajar,
              dispRadicar,
              escolaridad,
              prestaciones,
              direccionEmpresa,
              Idioma,
              salarioMax: value,
              salarioMin,
            };
            const result = onChange(modelFields);
            value = result?.salarioMax ?? value;
          }
          if (errors.salarioMax?.hasError) {
            runValidationTasks("salarioMax", value);
          }
          setSalarioMax(value);
        }}
        onBlur={() => runValidationTasks("salarioMax", salarioMax)}
        errorMessage={errors.salarioMax?.errorMessage}
        hasError={errors.salarioMax?.hasError}
        {...getOverrideProps(overrides, "salarioMax")}
      ></TextField>
      <TextField
        label="Salario min"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={salarioMin}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              diasLaborales,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              area,
              tipoEmpleo,
              dispViajar,
              dispRadicar,
              escolaridad,
              prestaciones,
              direccionEmpresa,
              Idioma,
              salarioMax,
              salarioMin: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || vacanteModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || vacanteModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
