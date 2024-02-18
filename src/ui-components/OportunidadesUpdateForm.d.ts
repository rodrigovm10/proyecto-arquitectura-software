/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Oportunidades } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OportunidadesUpdateFormInputValues = {
    nombre?: string;
    descripcion?: string;
    numeroPlazas?: number;
    area?: string;
    tipoContrato?: string;
    modaiidad?: string;
    diasLaborales?: string;
    edadMax?: number;
    edadMin?: number;
    genero?: string;
    experienciaLaboral?: string;
    escolaridad?: string;
    idioma?: string[];
    nivelIdioma?: string[];
    prestaciones?: string[];
    habilidadesBlandas?: string[];
    habilidadesTecnicas?: string[];
    emailEmpresa?: string;
    visible?: boolean;
    ubicacion?: string;
    nombreEmpresa?: string;
    salarioMaximo?: number;
    salarioMin?: number;
    idiomaConNivel?: string[];
    municipio?: string;
    jornadaLaboral?: string;
    emailBDT?: string;
    nombreBDT?: string;
    periodoPago?: string;
    apellidosBDT?: string;
    imagenBDTUrl?: string;
    pdfimagenUrl?: string;
    escolaridadBDT?: string;
    telefonoBDT?: string;
    generoBDT?: string;
    bdtID?: string;
    empresaID?: string;
    vacanteID?: string;
};
export declare type OportunidadesUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    descripcion?: ValidationFunction<string>;
    numeroPlazas?: ValidationFunction<number>;
    area?: ValidationFunction<string>;
    tipoContrato?: ValidationFunction<string>;
    modaiidad?: ValidationFunction<string>;
    diasLaborales?: ValidationFunction<string>;
    edadMax?: ValidationFunction<number>;
    edadMin?: ValidationFunction<number>;
    genero?: ValidationFunction<string>;
    experienciaLaboral?: ValidationFunction<string>;
    escolaridad?: ValidationFunction<string>;
    idioma?: ValidationFunction<string>;
    nivelIdioma?: ValidationFunction<string>;
    prestaciones?: ValidationFunction<string>;
    habilidadesBlandas?: ValidationFunction<string>;
    habilidadesTecnicas?: ValidationFunction<string>;
    emailEmpresa?: ValidationFunction<string>;
    visible?: ValidationFunction<boolean>;
    ubicacion?: ValidationFunction<string>;
    nombreEmpresa?: ValidationFunction<string>;
    salarioMaximo?: ValidationFunction<number>;
    salarioMin?: ValidationFunction<number>;
    idiomaConNivel?: ValidationFunction<string>;
    municipio?: ValidationFunction<string>;
    jornadaLaboral?: ValidationFunction<string>;
    emailBDT?: ValidationFunction<string>;
    nombreBDT?: ValidationFunction<string>;
    periodoPago?: ValidationFunction<string>;
    apellidosBDT?: ValidationFunction<string>;
    imagenBDTUrl?: ValidationFunction<string>;
    pdfimagenUrl?: ValidationFunction<string>;
    escolaridadBDT?: ValidationFunction<string>;
    telefonoBDT?: ValidationFunction<string>;
    generoBDT?: ValidationFunction<string>;
    bdtID?: ValidationFunction<string>;
    empresaID?: ValidationFunction<string>;
    vacanteID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OportunidadesUpdateFormOverridesProps = {
    OportunidadesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    descripcion?: PrimitiveOverrideProps<TextFieldProps>;
    numeroPlazas?: PrimitiveOverrideProps<TextFieldProps>;
    area?: PrimitiveOverrideProps<TextFieldProps>;
    tipoContrato?: PrimitiveOverrideProps<TextFieldProps>;
    modaiidad?: PrimitiveOverrideProps<TextFieldProps>;
    diasLaborales?: PrimitiveOverrideProps<TextFieldProps>;
    edadMax?: PrimitiveOverrideProps<TextFieldProps>;
    edadMin?: PrimitiveOverrideProps<TextFieldProps>;
    genero?: PrimitiveOverrideProps<TextFieldProps>;
    experienciaLaboral?: PrimitiveOverrideProps<TextFieldProps>;
    escolaridad?: PrimitiveOverrideProps<TextFieldProps>;
    idioma?: PrimitiveOverrideProps<TextFieldProps>;
    nivelIdioma?: PrimitiveOverrideProps<TextFieldProps>;
    prestaciones?: PrimitiveOverrideProps<TextFieldProps>;
    habilidadesBlandas?: PrimitiveOverrideProps<TextFieldProps>;
    habilidadesTecnicas?: PrimitiveOverrideProps<TextFieldProps>;
    emailEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
    visible?: PrimitiveOverrideProps<SwitchFieldProps>;
    ubicacion?: PrimitiveOverrideProps<TextFieldProps>;
    nombreEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
    salarioMaximo?: PrimitiveOverrideProps<TextFieldProps>;
    salarioMin?: PrimitiveOverrideProps<TextFieldProps>;
    idiomaConNivel?: PrimitiveOverrideProps<TextFieldProps>;
    municipio?: PrimitiveOverrideProps<TextFieldProps>;
    jornadaLaboral?: PrimitiveOverrideProps<TextFieldProps>;
    emailBDT?: PrimitiveOverrideProps<TextFieldProps>;
    nombreBDT?: PrimitiveOverrideProps<TextFieldProps>;
    periodoPago?: PrimitiveOverrideProps<TextFieldProps>;
    apellidosBDT?: PrimitiveOverrideProps<TextFieldProps>;
    imagenBDTUrl?: PrimitiveOverrideProps<TextFieldProps>;
    pdfimagenUrl?: PrimitiveOverrideProps<TextFieldProps>;
    escolaridadBDT?: PrimitiveOverrideProps<TextFieldProps>;
    telefonoBDT?: PrimitiveOverrideProps<TextFieldProps>;
    generoBDT?: PrimitiveOverrideProps<TextFieldProps>;
    bdtID?: PrimitiveOverrideProps<TextFieldProps>;
    empresaID?: PrimitiveOverrideProps<TextFieldProps>;
    vacanteID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OportunidadesUpdateFormProps = React.PropsWithChildren<{
    overrides?: OportunidadesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    oportunidades?: Oportunidades;
    onSubmit?: (fields: OportunidadesUpdateFormInputValues) => OportunidadesUpdateFormInputValues;
    onSuccess?: (fields: OportunidadesUpdateFormInputValues) => void;
    onError?: (fields: OportunidadesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OportunidadesUpdateFormInputValues) => OportunidadesUpdateFormInputValues;
    onValidate?: OportunidadesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OportunidadesUpdateForm(props: OportunidadesUpdateFormProps): React.ReactElement;
