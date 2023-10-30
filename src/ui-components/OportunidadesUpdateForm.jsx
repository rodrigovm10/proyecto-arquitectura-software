/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Oportunidades } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function OportunidadesUpdateForm(props) {
  const {
    id: idProp,
    oportunidades: oportunidadesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    motivoBDT: "",
    motivoEmpresa: "",
    status: "",
    mensaje: "",
    vacanteID: "",
    empresaID: "",
    statusVisible: "",
    fechEntrevista: "",
    direccionEmpresaEntrevista: "",
    horarioEntrevista: "",
    ocumentacionEntrevistad: "",
    municipio: "",
    colonia: "",
    calle: "",
    numero: "",
    codigoPostal: "",
    idstep: "",
    correoEmpresa: "",
    correoBDT: "",
    nombreBDT: "",
    nombreEmpresa: "",
  };
  const [motivoBDT, setMotivoBDT] = React.useState(initialValues.motivoBDT);
  const [motivoEmpresa, setMotivoEmpresa] = React.useState(
    initialValues.motivoEmpresa
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [mensaje, setMensaje] = React.useState(initialValues.mensaje);
  const [vacanteID, setVacanteID] = React.useState(initialValues.vacanteID);
  const [empresaID, setEmpresaID] = React.useState(initialValues.empresaID);
  const [statusVisible, setStatusVisible] = React.useState(
    initialValues.statusVisible
  );
  const [fechEntrevista, setFechEntrevista] = React.useState(
    initialValues.fechEntrevista
  );
  const [direccionEmpresaEntrevista, setDireccionEmpresaEntrevista] =
    React.useState(initialValues.direccionEmpresaEntrevista);
  const [horarioEntrevista, setHorarioEntrevista] = React.useState(
    initialValues.horarioEntrevista
  );
  const [ocumentacionEntrevistad, setOcumentacionEntrevistad] = React.useState(
    initialValues.ocumentacionEntrevistad
  );
  const [municipio, setMunicipio] = React.useState(initialValues.municipio);
  const [colonia, setColonia] = React.useState(initialValues.colonia);
  const [calle, setCalle] = React.useState(initialValues.calle);
  const [numero, setNumero] = React.useState(initialValues.numero);
  const [codigoPostal, setCodigoPostal] = React.useState(
    initialValues.codigoPostal
  );
  const [idstep, setIdstep] = React.useState(initialValues.idstep);
  const [correoEmpresa, setCorreoEmpresa] = React.useState(
    initialValues.correoEmpresa
  );
  const [correoBDT, setCorreoBDT] = React.useState(initialValues.correoBDT);
  const [nombreBDT, setNombreBDT] = React.useState(initialValues.nombreBDT);
  const [nombreEmpresa, setNombreEmpresa] = React.useState(
    initialValues.nombreEmpresa
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = oportunidadesRecord
      ? { ...initialValues, ...oportunidadesRecord }
      : initialValues;
    setMotivoBDT(cleanValues.motivoBDT);
    setMotivoEmpresa(cleanValues.motivoEmpresa);
    setStatus(cleanValues.status);
    setMensaje(cleanValues.mensaje);
    setVacanteID(cleanValues.vacanteID);
    setEmpresaID(cleanValues.empresaID);
    setStatusVisible(cleanValues.statusVisible);
    setFechEntrevista(cleanValues.fechEntrevista);
    setDireccionEmpresaEntrevista(cleanValues.direccionEmpresaEntrevista);
    setHorarioEntrevista(cleanValues.horarioEntrevista);
    setOcumentacionEntrevistad(cleanValues.ocumentacionEntrevistad);
    setMunicipio(cleanValues.municipio);
    setColonia(cleanValues.colonia);
    setCalle(cleanValues.calle);
    setNumero(cleanValues.numero);
    setCodigoPostal(cleanValues.codigoPostal);
    setIdstep(cleanValues.idstep);
    setCorreoEmpresa(cleanValues.correoEmpresa);
    setCorreoBDT(cleanValues.correoBDT);
    setNombreBDT(cleanValues.nombreBDT);
    setNombreEmpresa(cleanValues.nombreEmpresa);
    setErrors({});
  };
  const [oportunidadesRecord, setOportunidadesRecord] = React.useState(
    oportunidadesModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Oportunidades, idProp)
        : oportunidadesModelProp;
      setOportunidadesRecord(record);
    };
    queryData();
  }, [idProp, oportunidadesModelProp]);
  React.useEffect(resetStateValues, [oportunidadesRecord]);
  const validations = {
    motivoBDT: [],
    motivoEmpresa: [],
    status: [],
    mensaje: [],
    vacanteID: [],
    empresaID: [],
    statusVisible: [],
    fechEntrevista: [],
    direccionEmpresaEntrevista: [],
    horarioEntrevista: [],
    ocumentacionEntrevistad: [],
    municipio: [],
    colonia: [],
    calle: [],
    numero: [],
    codigoPostal: [],
    idstep: [],
    correoEmpresa: [],
    correoBDT: [],
    nombreBDT: [],
    nombreEmpresa: [],
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
          motivoBDT,
          motivoEmpresa,
          status,
          mensaje,
          vacanteID,
          empresaID,
          statusVisible,
          fechEntrevista,
          direccionEmpresaEntrevista,
          horarioEntrevista,
          ocumentacionEntrevistad,
          municipio,
          colonia,
          calle,
          numero,
          codigoPostal,
          idstep,
          correoEmpresa,
          correoBDT,
          nombreBDT,
          nombreEmpresa,
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
            Oportunidades.copyOf(oportunidadesRecord, (updated) => {
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
      {...getOverrideProps(overrides, "OportunidadesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Motivo bdt"
        isRequired={false}
        isReadOnly={false}
        value={motivoBDT}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              motivoBDT: value,
              motivoEmpresa,
              status,
              mensaje,
              vacanteID,
              empresaID,
              statusVisible,
              fechEntrevista,
              direccionEmpresaEntrevista,
              horarioEntrevista,
              ocumentacionEntrevistad,
              municipio,
              colonia,
              calle,
              numero,
              codigoPostal,
              idstep,
              correoEmpresa,
              correoBDT,
              nombreBDT,
              nombreEmpresa,
            };
            const result = onChange(modelFields);
            value = result?.motivoBDT ?? value;
          }
          if (errors.motivoBDT?.hasError) {
            runValidationTasks("motivoBDT", value);
          }
          setMotivoBDT(value);
        }}
        onBlur={() => runValidationTasks("motivoBDT", motivoBDT)}
        errorMessage={errors.motivoBDT?.errorMessage}
        hasError={errors.motivoBDT?.hasError}
        {...getOverrideProps(overrides, "motivoBDT")}
      ></TextField>
      <TextField
        label="Motivo empresa"
        isRequired={false}
        isReadOnly={false}
        value={motivoEmpresa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              motivoBDT,
              motivoEmpresa: value,
              status,
              mensaje,
              vacanteID,
              empresaID,
              statusVisible,
              fechEntrevista,
              direccionEmpresaEntrevista,
              horarioEntrevista,
              ocumentacionEntrevistad,
              municipio,
              colonia,
              calle,
              numero,
              codigoPostal,
              idstep,
              correoEmpresa,
              correoBDT,
              nombreBDT,
              nombreEmpresa,
            };
            const result = onChange(modelFields);
            value = result?.motivoEmpresa ?? value;
          }
          if (errors.motivoEmpresa?.hasError) {
            runValidationTasks("motivoEmpresa", value);
          }
          setMotivoEmpresa(value);
        }}
        onBlur={() => runValidationTasks("motivoEmpresa", motivoEmpresa)}
        errorMessage={errors.motivoEmpresa?.errorMessage}
        hasError={errors.motivoEmpresa?.hasError}
        {...getOverrideProps(overrides, "motivoEmpresa")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              motivoBDT,
              motivoEmpresa,
              status: value,
              mensaje,
              vacanteID,
              empresaID,
              statusVisible,
              fechEntrevista,
              direccionEmpresaEntrevista,
              horarioEntrevista,
              ocumentacionEntrevistad,
              municipio,
              colonia,
              calle,
              numero,
              codigoPostal,
              idstep,
              correoEmpresa,
              correoBDT,
              nombreBDT,
              nombreEmpresa,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <TextField
        label="Mensaje"
        isRequired={false}
        isReadOnly={false}
        value={mensaje}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              motivoBDT,
              motivoEmpresa,
              status,
              mensaje: value,
              vacanteID,
              empresaID,
              statusVisible,
              fechEntrevista,
              direccionEmpresaEntrevista,
              horarioEntrevista,
              ocumentacionEntrevistad,
              municipio,
              colonia,
              calle,
              numero,
              codigoPostal,
              idstep,
              correoEmpresa,
              correoBDT,
              nombreBDT,
              nombreEmpresa,
            };
            const result = onChange(modelFields);
            value = result?.mensaje ?? value;
          }
          if (errors.mensaje?.hasError) {
            runValidationTasks("mensaje", value);
          }
          setMensaje(value);
        }}
        onBlur={() => runValidationTasks("mensaje", mensaje)}
        errorMessage={errors.mensaje?.errorMessage}
        hasError={errors.mensaje?.hasError}
        {...getOverrideProps(overrides, "mensaje")}
      ></TextField>
      <TextField
        label="Vacante id"
        isRequired={false}
        isReadOnly={false}
        value={vacanteID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              motivoBDT,
              motivoEmpresa,
              status,
              mensaje,
              vacanteID: value,
              empresaID,
              statusVisible,
              fechEntrevista,
              direccionEmpresaEntrevista,
              horarioEntrevista,
              ocumentacionEntrevistad,
              municipio,
              colonia,
              calle,
              numero,
              codigoPostal,
              idstep,
              correoEmpresa,
              correoBDT,
              nombreBDT,
              nombreEmpresa,
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
      <TextField
        label="Empresa id"
        isRequired={false}
        isReadOnly={false}
        value={empresaID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              motivoBDT,
              motivoEmpresa,
              status,
              mensaje,
              vacanteID,
              empresaID: value,
              statusVisible,
              fechEntrevista,
              direccionEmpresaEntrevista,
              horarioEntrevista,
              ocumentacionEntrevistad,
              municipio,
              colonia,
              calle,
              numero,
              codigoPostal,
              idstep,
              correoEmpresa,
              correoBDT,
              nombreBDT,
              nombreEmpresa,
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
        label="Status visible"
        isRequired={false}
        isReadOnly={false}
        value={statusVisible}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              motivoBDT,
              motivoEmpresa,
              status,
              mensaje,
              vacanteID,
              empresaID,
              statusVisible: value,
              fechEntrevista,
              direccionEmpresaEntrevista,
              horarioEntrevista,
              ocumentacionEntrevistad,
              municipio,
              colonia,
              calle,
              numero,
              codigoPostal,
              idstep,
              correoEmpresa,
              correoBDT,
              nombreBDT,
              nombreEmpresa,
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
      ></TextField>
      <TextField
        label="Fech entrevista"
        isRequired={false}
        isReadOnly={false}
        value={fechEntrevista}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              motivoBDT,
              motivoEmpresa,
              status,
              mensaje,
              vacanteID,
              empresaID,
              statusVisible,
              fechEntrevista: value,
              direccionEmpresaEntrevista,
              horarioEntrevista,
              ocumentacionEntrevistad,
              municipio,
              colonia,
              calle,
              numero,
              codigoPostal,
              idstep,
              correoEmpresa,
              correoBDT,
              nombreBDT,
              nombreEmpresa,
            };
            const result = onChange(modelFields);
            value = result?.fechEntrevista ?? value;
          }
          if (errors.fechEntrevista?.hasError) {
            runValidationTasks("fechEntrevista", value);
          }
          setFechEntrevista(value);
        }}
        onBlur={() => runValidationTasks("fechEntrevista", fechEntrevista)}
        errorMessage={errors.fechEntrevista?.errorMessage}
        hasError={errors.fechEntrevista?.hasError}
        {...getOverrideProps(overrides, "fechEntrevista")}
      ></TextField>
      <TextField
        label="Direccion empresa entrevista"
        isRequired={false}
        isReadOnly={false}
        value={direccionEmpresaEntrevista}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              motivoBDT,
              motivoEmpresa,
              status,
              mensaje,
              vacanteID,
              empresaID,
              statusVisible,
              fechEntrevista,
              direccionEmpresaEntrevista: value,
              horarioEntrevista,
              ocumentacionEntrevistad,
              municipio,
              colonia,
              calle,
              numero,
              codigoPostal,
              idstep,
              correoEmpresa,
              correoBDT,
              nombreBDT,
              nombreEmpresa,
            };
            const result = onChange(modelFields);
            value = result?.direccionEmpresaEntrevista ?? value;
          }
          if (errors.direccionEmpresaEntrevista?.hasError) {
            runValidationTasks("direccionEmpresaEntrevista", value);
          }
          setDireccionEmpresaEntrevista(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "direccionEmpresaEntrevista",
            direccionEmpresaEntrevista
          )
        }
        errorMessage={errors.direccionEmpresaEntrevista?.errorMessage}
        hasError={errors.direccionEmpresaEntrevista?.hasError}
        {...getOverrideProps(overrides, "direccionEmpresaEntrevista")}
      ></TextField>
      <TextField
        label="Horario entrevista"
        isRequired={false}
        isReadOnly={false}
        value={horarioEntrevista}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              motivoBDT,
              motivoEmpresa,
              status,
              mensaje,
              vacanteID,
              empresaID,
              statusVisible,
              fechEntrevista,
              direccionEmpresaEntrevista,
              horarioEntrevista: value,
              ocumentacionEntrevistad,
              municipio,
              colonia,
              calle,
              numero,
              codigoPostal,
              idstep,
              correoEmpresa,
              correoBDT,
              nombreBDT,
              nombreEmpresa,
            };
            const result = onChange(modelFields);
            value = result?.horarioEntrevista ?? value;
          }
          if (errors.horarioEntrevista?.hasError) {
            runValidationTasks("horarioEntrevista", value);
          }
          setHorarioEntrevista(value);
        }}
        onBlur={() =>
          runValidationTasks("horarioEntrevista", horarioEntrevista)
        }
        errorMessage={errors.horarioEntrevista?.errorMessage}
        hasError={errors.horarioEntrevista?.hasError}
        {...getOverrideProps(overrides, "horarioEntrevista")}
      ></TextField>
      <TextField
        label="Ocumentacion entrevistad"
        isRequired={false}
        isReadOnly={false}
        value={ocumentacionEntrevistad}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              motivoBDT,
              motivoEmpresa,
              status,
              mensaje,
              vacanteID,
              empresaID,
              statusVisible,
              fechEntrevista,
              direccionEmpresaEntrevista,
              horarioEntrevista,
              ocumentacionEntrevistad: value,
              municipio,
              colonia,
              calle,
              numero,
              codigoPostal,
              idstep,
              correoEmpresa,
              correoBDT,
              nombreBDT,
              nombreEmpresa,
            };
            const result = onChange(modelFields);
            value = result?.ocumentacionEntrevistad ?? value;
          }
          if (errors.ocumentacionEntrevistad?.hasError) {
            runValidationTasks("ocumentacionEntrevistad", value);
          }
          setOcumentacionEntrevistad(value);
        }}
        onBlur={() =>
          runValidationTasks("ocumentacionEntrevistad", ocumentacionEntrevistad)
        }
        errorMessage={errors.ocumentacionEntrevistad?.errorMessage}
        hasError={errors.ocumentacionEntrevistad?.hasError}
        {...getOverrideProps(overrides, "ocumentacionEntrevistad")}
      ></TextField>
      <TextField
        label="Municipio"
        isRequired={false}
        isReadOnly={false}
        value={municipio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              motivoBDT,
              motivoEmpresa,
              status,
              mensaje,
              vacanteID,
              empresaID,
              statusVisible,
              fechEntrevista,
              direccionEmpresaEntrevista,
              horarioEntrevista,
              ocumentacionEntrevistad,
              municipio: value,
              colonia,
              calle,
              numero,
              codigoPostal,
              idstep,
              correoEmpresa,
              correoBDT,
              nombreBDT,
              nombreEmpresa,
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
              motivoBDT,
              motivoEmpresa,
              status,
              mensaje,
              vacanteID,
              empresaID,
              statusVisible,
              fechEntrevista,
              direccionEmpresaEntrevista,
              horarioEntrevista,
              ocumentacionEntrevistad,
              municipio,
              colonia: value,
              calle,
              numero,
              codigoPostal,
              idstep,
              correoEmpresa,
              correoBDT,
              nombreBDT,
              nombreEmpresa,
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
              motivoBDT,
              motivoEmpresa,
              status,
              mensaje,
              vacanteID,
              empresaID,
              statusVisible,
              fechEntrevista,
              direccionEmpresaEntrevista,
              horarioEntrevista,
              ocumentacionEntrevistad,
              municipio,
              colonia,
              calle: value,
              numero,
              codigoPostal,
              idstep,
              correoEmpresa,
              correoBDT,
              nombreBDT,
              nombreEmpresa,
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
        label="Numero"
        isRequired={false}
        isReadOnly={false}
        value={numero}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              motivoBDT,
              motivoEmpresa,
              status,
              mensaje,
              vacanteID,
              empresaID,
              statusVisible,
              fechEntrevista,
              direccionEmpresaEntrevista,
              horarioEntrevista,
              ocumentacionEntrevistad,
              municipio,
              colonia,
              calle,
              numero: value,
              codigoPostal,
              idstep,
              correoEmpresa,
              correoBDT,
              nombreBDT,
              nombreEmpresa,
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
        label="Codigo postal"
        isRequired={false}
        isReadOnly={false}
        value={codigoPostal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              motivoBDT,
              motivoEmpresa,
              status,
              mensaje,
              vacanteID,
              empresaID,
              statusVisible,
              fechEntrevista,
              direccionEmpresaEntrevista,
              horarioEntrevista,
              ocumentacionEntrevistad,
              municipio,
              colonia,
              calle,
              numero,
              codigoPostal: value,
              idstep,
              correoEmpresa,
              correoBDT,
              nombreBDT,
              nombreEmpresa,
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
        label="Idstep"
        isRequired={false}
        isReadOnly={false}
        value={idstep}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              motivoBDT,
              motivoEmpresa,
              status,
              mensaje,
              vacanteID,
              empresaID,
              statusVisible,
              fechEntrevista,
              direccionEmpresaEntrevista,
              horarioEntrevista,
              ocumentacionEntrevistad,
              municipio,
              colonia,
              calle,
              numero,
              codigoPostal,
              idstep: value,
              correoEmpresa,
              correoBDT,
              nombreBDT,
              nombreEmpresa,
            };
            const result = onChange(modelFields);
            value = result?.idstep ?? value;
          }
          if (errors.idstep?.hasError) {
            runValidationTasks("idstep", value);
          }
          setIdstep(value);
        }}
        onBlur={() => runValidationTasks("idstep", idstep)}
        errorMessage={errors.idstep?.errorMessage}
        hasError={errors.idstep?.hasError}
        {...getOverrideProps(overrides, "idstep")}
      ></TextField>
      <TextField
        label="Correo empresa"
        isRequired={false}
        isReadOnly={false}
        value={correoEmpresa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              motivoBDT,
              motivoEmpresa,
              status,
              mensaje,
              vacanteID,
              empresaID,
              statusVisible,
              fechEntrevista,
              direccionEmpresaEntrevista,
              horarioEntrevista,
              ocumentacionEntrevistad,
              municipio,
              colonia,
              calle,
              numero,
              codigoPostal,
              idstep,
              correoEmpresa: value,
              correoBDT,
              nombreBDT,
              nombreEmpresa,
            };
            const result = onChange(modelFields);
            value = result?.correoEmpresa ?? value;
          }
          if (errors.correoEmpresa?.hasError) {
            runValidationTasks("correoEmpresa", value);
          }
          setCorreoEmpresa(value);
        }}
        onBlur={() => runValidationTasks("correoEmpresa", correoEmpresa)}
        errorMessage={errors.correoEmpresa?.errorMessage}
        hasError={errors.correoEmpresa?.hasError}
        {...getOverrideProps(overrides, "correoEmpresa")}
      ></TextField>
      <TextField
        label="Correo bdt"
        isRequired={false}
        isReadOnly={false}
        value={correoBDT}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              motivoBDT,
              motivoEmpresa,
              status,
              mensaje,
              vacanteID,
              empresaID,
              statusVisible,
              fechEntrevista,
              direccionEmpresaEntrevista,
              horarioEntrevista,
              ocumentacionEntrevistad,
              municipio,
              colonia,
              calle,
              numero,
              codigoPostal,
              idstep,
              correoEmpresa,
              correoBDT: value,
              nombreBDT,
              nombreEmpresa,
            };
            const result = onChange(modelFields);
            value = result?.correoBDT ?? value;
          }
          if (errors.correoBDT?.hasError) {
            runValidationTasks("correoBDT", value);
          }
          setCorreoBDT(value);
        }}
        onBlur={() => runValidationTasks("correoBDT", correoBDT)}
        errorMessage={errors.correoBDT?.errorMessage}
        hasError={errors.correoBDT?.hasError}
        {...getOverrideProps(overrides, "correoBDT")}
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
              motivoBDT,
              motivoEmpresa,
              status,
              mensaje,
              vacanteID,
              empresaID,
              statusVisible,
              fechEntrevista,
              direccionEmpresaEntrevista,
              horarioEntrevista,
              ocumentacionEntrevistad,
              municipio,
              colonia,
              calle,
              numero,
              codigoPostal,
              idstep,
              correoEmpresa,
              correoBDT,
              nombreBDT: value,
              nombreEmpresa,
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
        label="Nombre empresa"
        isRequired={false}
        isReadOnly={false}
        value={nombreEmpresa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              motivoBDT,
              motivoEmpresa,
              status,
              mensaje,
              vacanteID,
              empresaID,
              statusVisible,
              fechEntrevista,
              direccionEmpresaEntrevista,
              horarioEntrevista,
              ocumentacionEntrevistad,
              municipio,
              colonia,
              calle,
              numero,
              codigoPostal,
              idstep,
              correoEmpresa,
              correoBDT,
              nombreBDT,
              nombreEmpresa: value,
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
          isDisabled={!(idProp || oportunidadesModelProp)}
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
              !(idProp || oportunidadesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
