/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
    motivoBDT?: string;
    motivoEmpresa?: string;
    status?: string;
    mensaje?: string;
    vacanteID?: string;
    empresaID?: string;
    statusVisible?: string;
    fechEntrevista?: string;
    direccionEmpresaEntrevista?: string;
    horarioEntrevista?: string;
    ocumentacionEntrevistad?: string;
    municipio?: string;
    colonia?: string;
    calle?: string;
    numero?: string;
    codigoPostal?: string;
    idstep?: string;
    correoEmpresa?: string;
    correoBDT?: string;
    nombreBDT?: string;
    nombreEmpresa?: string;
};
export declare type OportunidadesUpdateFormValidationValues = {
    motivoBDT?: ValidationFunction<string>;
    motivoEmpresa?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    mensaje?: ValidationFunction<string>;
    vacanteID?: ValidationFunction<string>;
    empresaID?: ValidationFunction<string>;
    statusVisible?: ValidationFunction<string>;
    fechEntrevista?: ValidationFunction<string>;
    direccionEmpresaEntrevista?: ValidationFunction<string>;
    horarioEntrevista?: ValidationFunction<string>;
    ocumentacionEntrevistad?: ValidationFunction<string>;
    municipio?: ValidationFunction<string>;
    colonia?: ValidationFunction<string>;
    calle?: ValidationFunction<string>;
    numero?: ValidationFunction<string>;
    codigoPostal?: ValidationFunction<string>;
    idstep?: ValidationFunction<string>;
    correoEmpresa?: ValidationFunction<string>;
    correoBDT?: ValidationFunction<string>;
    nombreBDT?: ValidationFunction<string>;
    nombreEmpresa?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OportunidadesUpdateFormOverridesProps = {
    OportunidadesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    motivoBDT?: PrimitiveOverrideProps<TextFieldProps>;
    motivoEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    mensaje?: PrimitiveOverrideProps<TextFieldProps>;
    vacanteID?: PrimitiveOverrideProps<TextFieldProps>;
    empresaID?: PrimitiveOverrideProps<TextFieldProps>;
    statusVisible?: PrimitiveOverrideProps<TextFieldProps>;
    fechEntrevista?: PrimitiveOverrideProps<TextFieldProps>;
    direccionEmpresaEntrevista?: PrimitiveOverrideProps<TextFieldProps>;
    horarioEntrevista?: PrimitiveOverrideProps<TextFieldProps>;
    ocumentacionEntrevistad?: PrimitiveOverrideProps<TextFieldProps>;
    municipio?: PrimitiveOverrideProps<TextFieldProps>;
    colonia?: PrimitiveOverrideProps<TextFieldProps>;
    calle?: PrimitiveOverrideProps<TextFieldProps>;
    numero?: PrimitiveOverrideProps<TextFieldProps>;
    codigoPostal?: PrimitiveOverrideProps<TextFieldProps>;
    idstep?: PrimitiveOverrideProps<TextFieldProps>;
    correoEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
    correoBDT?: PrimitiveOverrideProps<TextFieldProps>;
    nombreBDT?: PrimitiveOverrideProps<TextFieldProps>;
    nombreEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
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
