/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Empresa } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EmpresaUpdateFormInputValues = {
    nombreComercial?: string;
    razonSocial?: string;
    rfc?: string;
    email?: string;
    telefono?: string;
    tamanoEmpresa?: string;
    municipio?: string;
    codigoPostal?: string;
    colonia?: string;
    calle?: string;
    actividad?: string;
    sector?: string;
    tipoSucursal?: string;
};
export declare type EmpresaUpdateFormValidationValues = {
    nombreComercial?: ValidationFunction<string>;
    razonSocial?: ValidationFunction<string>;
    rfc?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    tamanoEmpresa?: ValidationFunction<string>;
    municipio?: ValidationFunction<string>;
    codigoPostal?: ValidationFunction<string>;
    colonia?: ValidationFunction<string>;
    calle?: ValidationFunction<string>;
    actividad?: ValidationFunction<string>;
    sector?: ValidationFunction<string>;
    tipoSucursal?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmpresaUpdateFormOverridesProps = {
    EmpresaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombreComercial?: PrimitiveOverrideProps<TextFieldProps>;
    razonSocial?: PrimitiveOverrideProps<TextFieldProps>;
    rfc?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    tamanoEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
    municipio?: PrimitiveOverrideProps<TextFieldProps>;
    codigoPostal?: PrimitiveOverrideProps<TextFieldProps>;
    colonia?: PrimitiveOverrideProps<TextFieldProps>;
    calle?: PrimitiveOverrideProps<TextFieldProps>;
    actividad?: PrimitiveOverrideProps<TextFieldProps>;
    sector?: PrimitiveOverrideProps<TextFieldProps>;
    tipoSucursal?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmpresaUpdateFormProps = React.PropsWithChildren<{
    overrides?: EmpresaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    empresa?: Empresa;
    onSubmit?: (fields: EmpresaUpdateFormInputValues) => EmpresaUpdateFormInputValues;
    onSuccess?: (fields: EmpresaUpdateFormInputValues) => void;
    onError?: (fields: EmpresaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmpresaUpdateFormInputValues) => EmpresaUpdateFormInputValues;
    onValidate?: EmpresaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EmpresaUpdateForm(props: EmpresaUpdateFormProps): React.ReactElement;
