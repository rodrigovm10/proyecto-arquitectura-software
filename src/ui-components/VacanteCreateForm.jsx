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
export default function VacanteCreateForm(props) {
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
    nombreVacante: "",
    descripcion: "",
    numeroPlazas: "",
    diasLaborales: "",
    salario: "",
    habilidadesBlandas: "",
    habilidadesTecnicas: "",
    generoBDT: "",
    edadMin: "",
    edadMax: "",
    discapacidadAcept: [],
    area: "",
    tipoEmpleo: "",
    causaVacante: "",
    dispViajar: false,
    dispRadicar: false,
    nivelPuesto: "",
    experiencia: "",
    escolaridad: "",
    vigenciaVacante: "",
    prestaciones: "",
    direccionEmpresa: false,
    municipio: "",
    colonia: "",
    calle: "",
    codigoPostal: "",
    numero: "",
    idioma: "",
    statusVisible: false,
    tipoCotrato: "",
    modalidad: "",
    tipoLicencia: "",
    contratoDirecto: "",
    salarioMax: "",
    salarioMin: "",
    periodoPago: "",
    tipoSueldo: "",
    correoContactoDirecto: "",
    telefonoContactoDirecto: "",
    horarioLaboral: "",
  };
  const [nombreVacante, setNombreVacante] = React.useState(
    initialValues.nombreVacante
  );
  const [descripcion, setDescripcion] = React.useState(
    initialValues.descripcion
  );
  const [numeroPlazas, setNumeroPlazas] = React.useState(
    initialValues.numeroPlazas
  );
  const [diasLaborales, setDiasLaborales] = React.useState(
    initialValues.diasLaborales
  );
  const [salario, setSalario] = React.useState(initialValues.salario);
  const [habilidadesBlandas, setHabilidadesBlandas] = React.useState(
    initialValues.habilidadesBlandas
  );
  const [habilidadesTecnicas, setHabilidadesTecnicas] = React.useState(
    initialValues.habilidadesTecnicas
  );
  const [generoBDT, setGeneroBDT] = React.useState(initialValues.generoBDT);
  const [edadMin, setEdadMin] = React.useState(initialValues.edadMin);
  const [edadMax, setEdadMax] = React.useState(initialValues.edadMax);
  const [discapacidadAcept, setDiscapacidadAcept] = React.useState(
    initialValues.discapacidadAcept
  );
  const [area, setArea] = React.useState(initialValues.area);
  const [tipoEmpleo, setTipoEmpleo] = React.useState(initialValues.tipoEmpleo);
  const [causaVacante, setCausaVacante] = React.useState(
    initialValues.causaVacante
  );
  const [dispViajar, setDispViajar] = React.useState(initialValues.dispViajar);
  const [dispRadicar, setDispRadicar] = React.useState(
    initialValues.dispRadicar
  );
  const [nivelPuesto, setNivelPuesto] = React.useState(
    initialValues.nivelPuesto
  );
  const [experiencia, setExperiencia] = React.useState(
    initialValues.experiencia
  );
  const [escolaridad, setEscolaridad] = React.useState(
    initialValues.escolaridad
  );
  const [vigenciaVacante, setVigenciaVacante] = React.useState(
    initialValues.vigenciaVacante
  );
  const [prestaciones, setPrestaciones] = React.useState(
    initialValues.prestaciones
  );
  const [direccionEmpresa, setDireccionEmpresa] = React.useState(
    initialValues.direccionEmpresa
  );
  const [municipio, setMunicipio] = React.useState(initialValues.municipio);
  const [colonia, setColonia] = React.useState(initialValues.colonia);
  const [calle, setCalle] = React.useState(initialValues.calle);
  const [codigoPostal, setCodigoPostal] = React.useState(
    initialValues.codigoPostal
  );
  const [numero, setNumero] = React.useState(initialValues.numero);
  const [idioma, setIdioma] = React.useState(initialValues.idioma);
  const [statusVisible, setStatusVisible] = React.useState(
    initialValues.statusVisible
  );
  const [tipoCotrato, setTipoCotrato] = React.useState(
    initialValues.tipoCotrato
  );
  const [modalidad, setModalidad] = React.useState(initialValues.modalidad);
  const [tipoLicencia, setTipoLicencia] = React.useState(
    initialValues.tipoLicencia
  );
  const [contratoDirecto, setContratoDirecto] = React.useState(
    initialValues.contratoDirecto
  );
  const [salarioMax, setSalarioMax] = React.useState(initialValues.salarioMax);
  const [salarioMin, setSalarioMin] = React.useState(initialValues.salarioMin);
  const [periodoPago, setPeriodoPago] = React.useState(
    initialValues.periodoPago
  );
  const [tipoSueldo, setTipoSueldo] = React.useState(initialValues.tipoSueldo);
  const [correoContactoDirecto, setCorreoContactoDirecto] = React.useState(
    initialValues.correoContactoDirecto
  );
  const [telefonoContactoDirecto, setTelefonoContactoDirecto] = React.useState(
    initialValues.telefonoContactoDirecto
  );
  const [horarioLaboral, setHorarioLaboral] = React.useState(
    initialValues.horarioLaboral
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombreVacante(initialValues.nombreVacante);
    setDescripcion(initialValues.descripcion);
    setNumeroPlazas(initialValues.numeroPlazas);
    setDiasLaborales(initialValues.diasLaborales);
    setSalario(initialValues.salario);
    setHabilidadesBlandas(initialValues.habilidadesBlandas);
    setHabilidadesTecnicas(initialValues.habilidadesTecnicas);
    setGeneroBDT(initialValues.generoBDT);
    setEdadMin(initialValues.edadMin);
    setEdadMax(initialValues.edadMax);
    setDiscapacidadAcept(initialValues.discapacidadAcept);
    setCurrentDiscapacidadAceptValue("");
    setArea(initialValues.area);
    setTipoEmpleo(initialValues.tipoEmpleo);
    setCausaVacante(initialValues.causaVacante);
    setDispViajar(initialValues.dispViajar);
    setDispRadicar(initialValues.dispRadicar);
    setNivelPuesto(initialValues.nivelPuesto);
    setExperiencia(initialValues.experiencia);
    setEscolaridad(initialValues.escolaridad);
    setVigenciaVacante(initialValues.vigenciaVacante);
    setPrestaciones(initialValues.prestaciones);
    setDireccionEmpresa(initialValues.direccionEmpresa);
    setMunicipio(initialValues.municipio);
    setColonia(initialValues.colonia);
    setCalle(initialValues.calle);
    setCodigoPostal(initialValues.codigoPostal);
    setNumero(initialValues.numero);
    setIdioma(initialValues.idioma);
    setStatusVisible(initialValues.statusVisible);
    setTipoCotrato(initialValues.tipoCotrato);
    setModalidad(initialValues.modalidad);
    setTipoLicencia(initialValues.tipoLicencia);
    setContratoDirecto(initialValues.contratoDirecto);
    setSalarioMax(initialValues.salarioMax);
    setSalarioMin(initialValues.salarioMin);
    setPeriodoPago(initialValues.periodoPago);
    setTipoSueldo(initialValues.tipoSueldo);
    setCorreoContactoDirecto(initialValues.correoContactoDirecto);
    setTelefonoContactoDirecto(initialValues.telefonoContactoDirecto);
    setHorarioLaboral(initialValues.horarioLaboral);
    setErrors({});
  };
  const [currentDiscapacidadAceptValue, setCurrentDiscapacidadAceptValue] =
    React.useState("");
  const discapacidadAceptRef = React.createRef();
  const validations = {
    nombreVacante: [],
    descripcion: [],
    numeroPlazas: [],
    diasLaborales: [],
    salario: [],
    habilidadesBlandas: [],
    habilidadesTecnicas: [],
    generoBDT: [],
    edadMin: [],
    edadMax: [],
    discapacidadAcept: [],
    area: [],
    tipoEmpleo: [],
    causaVacante: [],
    dispViajar: [],
    dispRadicar: [],
    nivelPuesto: [],
    experiencia: [],
    escolaridad: [],
    vigenciaVacante: [],
    prestaciones: [],
    direccionEmpresa: [],
    municipio: [],
    colonia: [],
    calle: [],
    codigoPostal: [],
    numero: [],
    idioma: [],
    statusVisible: [],
    tipoCotrato: [],
    modalidad: [],
    tipoLicencia: [],
    contratoDirecto: [],
    salarioMax: [],
    salarioMin: [],
    periodoPago: [],
    tipoSueldo: [],
    correoContactoDirecto: [],
    telefonoContactoDirecto: [],
    horarioLaboral: [],
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
          numeroPlazas,
          diasLaborales,
          salario,
          habilidadesBlandas,
          habilidadesTecnicas,
          generoBDT,
          edadMin,
          edadMax,
          discapacidadAcept,
          area,
          tipoEmpleo,
          causaVacante,
          dispViajar,
          dispRadicar,
          nivelPuesto,
          experiencia,
          escolaridad,
          vigenciaVacante,
          prestaciones,
          direccionEmpresa,
          municipio,
          colonia,
          calle,
          codigoPostal,
          numero,
          idioma,
          statusVisible,
          tipoCotrato,
          modalidad,
          tipoLicencia,
          contratoDirecto,
          salarioMax,
          salarioMin,
          periodoPago,
          tipoSueldo,
          correoContactoDirecto,
          telefonoContactoDirecto,
          horarioLaboral,
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
          await DataStore.save(new Vacante(modelFields));
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
      {...getOverrideProps(overrides, "VacanteCreateForm")}
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
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
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
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
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
        value={numeroPlazas}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas: value,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
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
              numeroPlazas,
              diasLaborales: value,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
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
        label="Salario"
        isRequired={false}
        isReadOnly={false}
        value={salario}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario: value,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
            };
            const result = onChange(modelFields);
            value = result?.salario ?? value;
          }
          if (errors.salario?.hasError) {
            runValidationTasks("salario", value);
          }
          setSalario(value);
        }}
        onBlur={() => runValidationTasks("salario", salario)}
        errorMessage={errors.salario?.errorMessage}
        hasError={errors.salario?.hasError}
        {...getOverrideProps(overrides, "salario")}
      ></TextField>
      <TextField
        label="Habilidades blandas"
        isRequired={false}
        isReadOnly={false}
        value={habilidadesBlandas}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas: value,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
            };
            const result = onChange(modelFields);
            value = result?.habilidadesBlandas ?? value;
          }
          if (errors.habilidadesBlandas?.hasError) {
            runValidationTasks("habilidadesBlandas", value);
          }
          setHabilidadesBlandas(value);
        }}
        onBlur={() =>
          runValidationTasks("habilidadesBlandas", habilidadesBlandas)
        }
        errorMessage={errors.habilidadesBlandas?.errorMessage}
        hasError={errors.habilidadesBlandas?.hasError}
        {...getOverrideProps(overrides, "habilidadesBlandas")}
      ></TextField>
      <TextField
        label="Habilidades tecnicas"
        isRequired={false}
        isReadOnly={false}
        value={habilidadesTecnicas}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas: value,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
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
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT: value,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
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
        value={edadMin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin: value,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
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
        value={edadMax}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax: value,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept: values,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
            };
            const result = onChange(modelFields);
            values = result?.discapacidadAcept ?? values;
          }
          setDiscapacidadAcept(values);
          setCurrentDiscapacidadAceptValue("");
        }}
        currentFieldValue={currentDiscapacidadAceptValue}
        label={"Discapacidad acept"}
        items={discapacidadAcept}
        hasError={errors?.discapacidadAcept?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "discapacidadAcept",
            currentDiscapacidadAceptValue
          )
        }
        errorMessage={errors?.discapacidadAcept?.errorMessage}
        setFieldValue={setCurrentDiscapacidadAceptValue}
        inputFieldRef={discapacidadAceptRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Discapacidad acept"
          isRequired={false}
          isReadOnly={false}
          value={currentDiscapacidadAceptValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.discapacidadAcept?.hasError) {
              runValidationTasks("discapacidadAcept", value);
            }
            setCurrentDiscapacidadAceptValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "discapacidadAcept",
              currentDiscapacidadAceptValue
            )
          }
          errorMessage={errors.discapacidadAcept?.errorMessage}
          hasError={errors.discapacidadAcept?.hasError}
          ref={discapacidadAceptRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "discapacidadAcept")}
        ></TextField>
      </ArrayField>
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
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area: value,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
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
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo: value,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
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
      <TextField
        label="Causa vacante"
        isRequired={false}
        isReadOnly={false}
        value={causaVacante}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante: value,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
            };
            const result = onChange(modelFields);
            value = result?.causaVacante ?? value;
          }
          if (errors.causaVacante?.hasError) {
            runValidationTasks("causaVacante", value);
          }
          setCausaVacante(value);
        }}
        onBlur={() => runValidationTasks("causaVacante", causaVacante)}
        errorMessage={errors.causaVacante?.errorMessage}
        hasError={errors.causaVacante?.hasError}
        {...getOverrideProps(overrides, "causaVacante")}
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
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar: value,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
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
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar: value,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
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
        label="Nivel puesto"
        isRequired={false}
        isReadOnly={false}
        value={nivelPuesto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto: value,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
            };
            const result = onChange(modelFields);
            value = result?.nivelPuesto ?? value;
          }
          if (errors.nivelPuesto?.hasError) {
            runValidationTasks("nivelPuesto", value);
          }
          setNivelPuesto(value);
        }}
        onBlur={() => runValidationTasks("nivelPuesto", nivelPuesto)}
        errorMessage={errors.nivelPuesto?.errorMessage}
        hasError={errors.nivelPuesto?.hasError}
        {...getOverrideProps(overrides, "nivelPuesto")}
      ></TextField>
      <TextField
        label="Experiencia"
        isRequired={false}
        isReadOnly={false}
        value={experiencia}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia: value,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
            };
            const result = onChange(modelFields);
            value = result?.experiencia ?? value;
          }
          if (errors.experiencia?.hasError) {
            runValidationTasks("experiencia", value);
          }
          setExperiencia(value);
        }}
        onBlur={() => runValidationTasks("experiencia", experiencia)}
        errorMessage={errors.experiencia?.errorMessage}
        hasError={errors.experiencia?.hasError}
        {...getOverrideProps(overrides, "experiencia")}
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
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad: value,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
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
        label="Vigencia vacante"
        isRequired={false}
        isReadOnly={false}
        value={vigenciaVacante}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante: value,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
            };
            const result = onChange(modelFields);
            value = result?.vigenciaVacante ?? value;
          }
          if (errors.vigenciaVacante?.hasError) {
            runValidationTasks("vigenciaVacante", value);
          }
          setVigenciaVacante(value);
        }}
        onBlur={() => runValidationTasks("vigenciaVacante", vigenciaVacante)}
        errorMessage={errors.vigenciaVacante?.errorMessage}
        hasError={errors.vigenciaVacante?.hasError}
        {...getOverrideProps(overrides, "vigenciaVacante")}
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
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones: value,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
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
      <SwitchField
        label="Direccion empresa"
        defaultChecked={false}
        isDisabled={false}
        isChecked={direccionEmpresa}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa: value,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
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
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio: value,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
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
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia: value,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
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
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle: value,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
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
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal: value,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
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
      <TextField
        label="Numero"
        isRequired={false}
        isReadOnly={false}
        value={numero}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero: value,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
            };
            const result = onChange(modelFields);
            value = result?.numero ?? value;
          }
          if (errors.numero?.hasError) {
            runValidationTasks("numero", value);
          }
          setNumero(value);
        }}
        onBlur={() => runValidationTasks("numero", numero)}
        errorMessage={errors.numero?.errorMessage}
        hasError={errors.numero?.hasError}
        {...getOverrideProps(overrides, "numero")}
      ></TextField>
      <TextField
        label="Idioma"
        isRequired={false}
        isReadOnly={false}
        value={idioma}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma: value,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
            };
            const result = onChange(modelFields);
            value = result?.idioma ?? value;
          }
          if (errors.idioma?.hasError) {
            runValidationTasks("idioma", value);
          }
          setIdioma(value);
        }}
        onBlur={() => runValidationTasks("idioma", idioma)}
        errorMessage={errors.idioma?.errorMessage}
        hasError={errors.idioma?.hasError}
        {...getOverrideProps(overrides, "idioma")}
      ></TextField>
      <SwitchField
        label="Status visible"
        defaultChecked={false}
        isDisabled={false}
        isChecked={statusVisible}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible: value,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
            };
            const result = onChange(modelFields);
            value = result?.statusVisible ?? value;
          }
          if (errors.statusVisible?.hasError) {
            runValidationTasks("statusVisible", value);
          }
          setStatusVisible(value);
        }}
        onBlur={() => runValidationTasks("statusVisible", statusVisible)}
        errorMessage={errors.statusVisible?.errorMessage}
        hasError={errors.statusVisible?.hasError}
        {...getOverrideProps(overrides, "statusVisible")}
      ></SwitchField>
      <TextField
        label="Tipo cotrato"
        isRequired={false}
        isReadOnly={false}
        value={tipoCotrato}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato: value,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
            };
            const result = onChange(modelFields);
            value = result?.tipoCotrato ?? value;
          }
          if (errors.tipoCotrato?.hasError) {
            runValidationTasks("tipoCotrato", value);
          }
          setTipoCotrato(value);
        }}
        onBlur={() => runValidationTasks("tipoCotrato", tipoCotrato)}
        errorMessage={errors.tipoCotrato?.errorMessage}
        hasError={errors.tipoCotrato?.hasError}
        {...getOverrideProps(overrides, "tipoCotrato")}
      ></TextField>
      <TextField
        label="Modalidad"
        isRequired={false}
        isReadOnly={false}
        value={modalidad}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad: value,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
            };
            const result = onChange(modelFields);
            value = result?.modalidad ?? value;
          }
          if (errors.modalidad?.hasError) {
            runValidationTasks("modalidad", value);
          }
          setModalidad(value);
        }}
        onBlur={() => runValidationTasks("modalidad", modalidad)}
        errorMessage={errors.modalidad?.errorMessage}
        hasError={errors.modalidad?.hasError}
        {...getOverrideProps(overrides, "modalidad")}
      ></TextField>
      <TextField
        label="Tipo licencia"
        isRequired={false}
        isReadOnly={false}
        value={tipoLicencia}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia: value,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
            };
            const result = onChange(modelFields);
            value = result?.tipoLicencia ?? value;
          }
          if (errors.tipoLicencia?.hasError) {
            runValidationTasks("tipoLicencia", value);
          }
          setTipoLicencia(value);
        }}
        onBlur={() => runValidationTasks("tipoLicencia", tipoLicencia)}
        errorMessage={errors.tipoLicencia?.errorMessage}
        hasError={errors.tipoLicencia?.hasError}
        {...getOverrideProps(overrides, "tipoLicencia")}
      ></TextField>
      <TextField
        label="Contrato directo"
        isRequired={false}
        isReadOnly={false}
        value={contratoDirecto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto: value,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
            };
            const result = onChange(modelFields);
            value = result?.contratoDirecto ?? value;
          }
          if (errors.contratoDirecto?.hasError) {
            runValidationTasks("contratoDirecto", value);
          }
          setContratoDirecto(value);
        }}
        onBlur={() => runValidationTasks("contratoDirecto", contratoDirecto)}
        errorMessage={errors.contratoDirecto?.errorMessage}
        hasError={errors.contratoDirecto?.hasError}
        {...getOverrideProps(overrides, "contratoDirecto")}
      ></TextField>
      <TextField
        label="Salario max"
        isRequired={false}
        isReadOnly={false}
        value={salarioMax}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax: value,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
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
        value={salarioMin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin: value,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
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
      <TextField
        label="Periodo pago"
        isRequired={false}
        isReadOnly={false}
        value={periodoPago}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago: value,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
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
        label="Tipo sueldo"
        isRequired={false}
        isReadOnly={false}
        value={tipoSueldo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo: value,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral,
            };
            const result = onChange(modelFields);
            value = result?.tipoSueldo ?? value;
          }
          if (errors.tipoSueldo?.hasError) {
            runValidationTasks("tipoSueldo", value);
          }
          setTipoSueldo(value);
        }}
        onBlur={() => runValidationTasks("tipoSueldo", tipoSueldo)}
        errorMessage={errors.tipoSueldo?.errorMessage}
        hasError={errors.tipoSueldo?.hasError}
        {...getOverrideProps(overrides, "tipoSueldo")}
      ></TextField>
      <TextField
        label="Correo contacto directo"
        isRequired={false}
        isReadOnly={false}
        value={correoContactoDirecto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto: value,
              telefonoContactoDirecto,
              horarioLaboral,
            };
            const result = onChange(modelFields);
            value = result?.correoContactoDirecto ?? value;
          }
          if (errors.correoContactoDirecto?.hasError) {
            runValidationTasks("correoContactoDirecto", value);
          }
          setCorreoContactoDirecto(value);
        }}
        onBlur={() =>
          runValidationTasks("correoContactoDirecto", correoContactoDirecto)
        }
        errorMessage={errors.correoContactoDirecto?.errorMessage}
        hasError={errors.correoContactoDirecto?.hasError}
        {...getOverrideProps(overrides, "correoContactoDirecto")}
      ></TextField>
      <TextField
        label="Telefono contacto directo"
        isRequired={false}
        isReadOnly={false}
        value={telefonoContactoDirecto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto: value,
              horarioLaboral,
            };
            const result = onChange(modelFields);
            value = result?.telefonoContactoDirecto ?? value;
          }
          if (errors.telefonoContactoDirecto?.hasError) {
            runValidationTasks("telefonoContactoDirecto", value);
          }
          setTelefonoContactoDirecto(value);
        }}
        onBlur={() =>
          runValidationTasks("telefonoContactoDirecto", telefonoContactoDirecto)
        }
        errorMessage={errors.telefonoContactoDirecto?.errorMessage}
        hasError={errors.telefonoContactoDirecto?.hasError}
        {...getOverrideProps(overrides, "telefonoContactoDirecto")}
      ></TextField>
      <TextField
        label="Horario laboral"
        isRequired={false}
        isReadOnly={false}
        value={horarioLaboral}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreVacante,
              descripcion,
              numeroPlazas,
              diasLaborales,
              salario,
              habilidadesBlandas,
              habilidadesTecnicas,
              generoBDT,
              edadMin,
              edadMax,
              discapacidadAcept,
              area,
              tipoEmpleo,
              causaVacante,
              dispViajar,
              dispRadicar,
              nivelPuesto,
              experiencia,
              escolaridad,
              vigenciaVacante,
              prestaciones,
              direccionEmpresa,
              municipio,
              colonia,
              calle,
              codigoPostal,
              numero,
              idioma,
              statusVisible,
              tipoCotrato,
              modalidad,
              tipoLicencia,
              contratoDirecto,
              salarioMax,
              salarioMin,
              periodoPago,
              tipoSueldo,
              correoContactoDirecto,
              telefonoContactoDirecto,
              horarioLaboral: value,
            };
            const result = onChange(modelFields);
            value = result?.horarioLaboral ?? value;
          }
          if (errors.horarioLaboral?.hasError) {
            runValidationTasks("horarioLaboral", value);
          }
          setHorarioLaboral(value);
        }}
        onBlur={() => runValidationTasks("horarioLaboral", horarioLaboral)}
        errorMessage={errors.horarioLaboral?.errorMessage}
        hasError={errors.horarioLaboral?.hasError}
        {...getOverrideProps(overrides, "horarioLaboral")}
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
