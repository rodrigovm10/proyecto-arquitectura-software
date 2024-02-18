/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Empresa } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function EmpresaUpdateForm(props) {
  const {
    id: idProp,
    empresa: empresaModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nombreComercial: "",
    razonSocial: "",
    rfc: "",
    email: "",
    telefono: "",
    municipio: "",
    codigoPostal: "",
    colonia: "",
    calle: "",
    actividad: "",
    sector: "",
    tipoSucursal: "",
    numero: "",
  };
  const [nombreComercial, setNombreComercial] = React.useState(
    initialValues.nombreComercial
  );
  const [razonSocial, setRazonSocial] = React.useState(
    initialValues.razonSocial
  );
  const [rfc, setRfc] = React.useState(initialValues.rfc);
  const [email, setEmail] = React.useState(initialValues.email);
  const [telefono, setTelefono] = React.useState(initialValues.telefono);
  const [municipio, setMunicipio] = React.useState(initialValues.municipio);
  const [codigoPostal, setCodigoPostal] = React.useState(
    initialValues.codigoPostal
  );
  const [colonia, setColonia] = React.useState(initialValues.colonia);
  const [calle, setCalle] = React.useState(initialValues.calle);
  const [actividad, setActividad] = React.useState(initialValues.actividad);
  const [sector, setSector] = React.useState(initialValues.sector);
  const [tipoSucursal, setTipoSucursal] = React.useState(
    initialValues.tipoSucursal
  );
  const [numero, setNumero] = React.useState(initialValues.numero);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = empresaRecord
      ? { ...initialValues, ...empresaRecord }
      : initialValues;
    setNombreComercial(cleanValues.nombreComercial);
    setRazonSocial(cleanValues.razonSocial);
    setRfc(cleanValues.rfc);
    setEmail(cleanValues.email);
    setTelefono(cleanValues.telefono);
    setMunicipio(cleanValues.municipio);
    setCodigoPostal(cleanValues.codigoPostal);
    setColonia(cleanValues.colonia);
    setCalle(cleanValues.calle);
    setActividad(cleanValues.actividad);
    setSector(cleanValues.sector);
    setTipoSucursal(cleanValues.tipoSucursal);
    setNumero(cleanValues.numero);
    setErrors({});
  };
  const [empresaRecord, setEmpresaRecord] = React.useState(empresaModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Empresa, idProp)
        : empresaModelProp;
      setEmpresaRecord(record);
    };
    queryData();
  }, [idProp, empresaModelProp]);
  React.useEffect(resetStateValues, [empresaRecord]);
  const validations = {
    nombreComercial: [],
    razonSocial: [],
    rfc: [],
    email: [],
    telefono: [],
    municipio: [],
    codigoPostal: [],
    colonia: [],
    calle: [],
    actividad: [],
    sector: [],
    tipoSucursal: [],
    numero: [],
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
          nombreComercial,
          razonSocial,
          rfc,
          email,
          telefono,
          municipio,
          codigoPostal,
          colonia,
          calle,
          actividad,
          sector,
          tipoSucursal,
          numero,
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
            Empresa.copyOf(empresaRecord, (updated) => {
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
      {...getOverrideProps(overrides, "EmpresaUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nombre comercial"
        isRequired={false}
        isReadOnly={false}
        value={nombreComercial}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreComercial: value,
              razonSocial,
              rfc,
              email,
              telefono,
              municipio,
              codigoPostal,
              colonia,
              calle,
              actividad,
              sector,
              tipoSucursal,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.nombreComercial ?? value;
          }
          if (errors.nombreComercial?.hasError) {
            runValidationTasks("nombreComercial", value);
          }
          setNombreComercial(value);
        }}
        onBlur={() => runValidationTasks("nombreComercial", nombreComercial)}
        errorMessage={errors.nombreComercial?.errorMessage}
        hasError={errors.nombreComercial?.hasError}
        {...getOverrideProps(overrides, "nombreComercial")}
      ></TextField>
      <TextField
        label="Razon social"
        isRequired={false}
        isReadOnly={false}
        value={razonSocial}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreComercial,
              razonSocial: value,
              rfc,
              email,
              telefono,
              municipio,
              codigoPostal,
              colonia,
              calle,
              actividad,
              sector,
              tipoSucursal,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.razonSocial ?? value;
          }
          if (errors.razonSocial?.hasError) {
            runValidationTasks("razonSocial", value);
          }
          setRazonSocial(value);
        }}
        onBlur={() => runValidationTasks("razonSocial", razonSocial)}
        errorMessage={errors.razonSocial?.errorMessage}
        hasError={errors.razonSocial?.hasError}
        {...getOverrideProps(overrides, "razonSocial")}
      ></TextField>
      <TextField
        label="Rfc"
        isRequired={false}
        isReadOnly={false}
        value={rfc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreComercial,
              razonSocial,
              rfc: value,
              email,
              telefono,
              municipio,
              codigoPostal,
              colonia,
              calle,
              actividad,
              sector,
              tipoSucursal,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.rfc ?? value;
          }
          if (errors.rfc?.hasError) {
            runValidationTasks("rfc", value);
          }
          setRfc(value);
        }}
        onBlur={() => runValidationTasks("rfc", rfc)}
        errorMessage={errors.rfc?.errorMessage}
        hasError={errors.rfc?.hasError}
        {...getOverrideProps(overrides, "rfc")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreComercial,
              razonSocial,
              rfc,
              email: value,
              telefono,
              municipio,
              codigoPostal,
              colonia,
              calle,
              actividad,
              sector,
              tipoSucursal,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
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
              nombreComercial,
              razonSocial,
              rfc,
              email,
              telefono: value,
              municipio,
              codigoPostal,
              colonia,
              calle,
              actividad,
              sector,
              tipoSucursal,
              numero,
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
        label="Municipio"
        isRequired={false}
        isReadOnly={false}
        value={municipio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreComercial,
              razonSocial,
              rfc,
              email,
              telefono,
              municipio: value,
              codigoPostal,
              colonia,
              calle,
              actividad,
              sector,
              tipoSucursal,
              numero,
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
        label="Codigo postal"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={codigoPostal}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombreComercial,
              razonSocial,
              rfc,
              email,
              telefono,
              municipio,
              codigoPostal: value,
              colonia,
              calle,
              actividad,
              sector,
              tipoSucursal,
              numero,
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
        label="Colonia"
        isRequired={false}
        isReadOnly={false}
        value={colonia}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreComercial,
              razonSocial,
              rfc,
              email,
              telefono,
              municipio,
              codigoPostal,
              colonia: value,
              calle,
              actividad,
              sector,
              tipoSucursal,
              numero,
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
              nombreComercial,
              razonSocial,
              rfc,
              email,
              telefono,
              municipio,
              codigoPostal,
              colonia,
              calle: value,
              actividad,
              sector,
              tipoSucursal,
              numero,
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
        label="Actividad"
        isRequired={false}
        isReadOnly={false}
        value={actividad}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreComercial,
              razonSocial,
              rfc,
              email,
              telefono,
              municipio,
              codigoPostal,
              colonia,
              calle,
              actividad: value,
              sector,
              tipoSucursal,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.actividad ?? value;
          }
          if (errors.actividad?.hasError) {
            runValidationTasks("actividad", value);
          }
          setActividad(value);
        }}
        onBlur={() => runValidationTasks("actividad", actividad)}
        errorMessage={errors.actividad?.errorMessage}
        hasError={errors.actividad?.hasError}
        {...getOverrideProps(overrides, "actividad")}
      ></TextField>
      <TextField
        label="Sector"
        isRequired={false}
        isReadOnly={false}
        value={sector}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreComercial,
              razonSocial,
              rfc,
              email,
              telefono,
              municipio,
              codigoPostal,
              colonia,
              calle,
              actividad,
              sector: value,
              tipoSucursal,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.sector ?? value;
          }
          if (errors.sector?.hasError) {
            runValidationTasks("sector", value);
          }
          setSector(value);
        }}
        onBlur={() => runValidationTasks("sector", sector)}
        errorMessage={errors.sector?.errorMessage}
        hasError={errors.sector?.hasError}
        {...getOverrideProps(overrides, "sector")}
      ></TextField>
      <TextField
        label="Tipo sucursal"
        isRequired={false}
        isReadOnly={false}
        value={tipoSucursal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreComercial,
              razonSocial,
              rfc,
              email,
              telefono,
              municipio,
              codigoPostal,
              colonia,
              calle,
              actividad,
              sector,
              tipoSucursal: value,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.tipoSucursal ?? value;
          }
          if (errors.tipoSucursal?.hasError) {
            runValidationTasks("tipoSucursal", value);
          }
          setTipoSucursal(value);
        }}
        onBlur={() => runValidationTasks("tipoSucursal", tipoSucursal)}
        errorMessage={errors.tipoSucursal?.errorMessage}
        hasError={errors.tipoSucursal?.hasError}
        {...getOverrideProps(overrides, "tipoSucursal")}
      ></TextField>
      <TextField
        label="Numero"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numero}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombreComercial,
              razonSocial,
              rfc,
              email,
              telefono,
              municipio,
              codigoPostal,
              colonia,
              calle,
              actividad,
              sector,
              tipoSucursal,
              numero: value,
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
          isDisabled={!(idProp || empresaModelProp)}
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
              !(idProp || empresaModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
