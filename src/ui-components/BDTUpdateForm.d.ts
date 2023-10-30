/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BDT } from "../models";
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
export declare type BDTUpdateFormInputValues = {
    nombre?: string;
    apellidos?: string;
    curp?: string;
    fechaNacimiento?: string;
    telefono?: string;
    escolaridad?: string;
    genero?: string;
    idioma?: string[];
    buscaEmpleo?: boolean;
    trabajando?: boolean;
    correo?: string;
    habilidadesBlandas?: string[];
    habilidadesTecnicas?: string[];
    dispViajar?: boolean;
    dispRadicar?: boolean;
    municipio?: string;
    colonia?: string;
    calle?: string;
    codigoPostal?: number;
    imagenBDTUrl?: string;
    pdfImagenUrl?: string;
};
export declare type BDTUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    apellidos?: ValidationFunction<string>;
    curp?: ValidationFunction<string>;
    fechaNacimiento?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    escolaridad?: ValidationFunction<string>;
    genero?: ValidationFunction<string>;
    idioma?: ValidationFunction<string>;
    buscaEmpleo?: ValidationFunction<boolean>;
    trabajando?: ValidationFunction<boolean>;
    correo?: ValidationFunction<string>;
    habilidadesBlandas?: ValidationFunction<string>;
    habilidadesTecnicas?: ValidationFunction<string>;
    dispViajar?: ValidationFunction<boolean>;
    dispRadicar?: ValidationFunction<boolean>;
    municipio?: ValidationFunction<string>;
    colonia?: ValidationFunction<string>;
    calle?: ValidationFunction<string>;
    codigoPostal?: ValidationFunction<number>;
    imagenBDTUrl?: ValidationFunction<string>;
    pdfImagenUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BDTUpdateFormOverridesProps = {
    BDTUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    apellidos?: PrimitiveOverrideProps<TextFieldProps>;
    curp?: PrimitiveOverrideProps<TextFieldProps>;
    fechaNacimiento?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    escolaridad?: PrimitiveOverrideProps<TextFieldProps>;
    genero?: PrimitiveOverrideProps<TextFieldProps>;
    idioma?: PrimitiveOverrideProps<TextFieldProps>;
    buscaEmpleo?: PrimitiveOverrideProps<SwitchFieldProps>;
    trabajando?: PrimitiveOverrideProps<SwitchFieldProps>;
    correo?: PrimitiveOverrideProps<TextFieldProps>;
    habilidadesBlandas?: PrimitiveOverrideProps<TextFieldProps>;
    habilidadesTecnicas?: PrimitiveOverrideProps<TextFieldProps>;
    dispViajar?: PrimitiveOverrideProps<SwitchFieldProps>;
    dispRadicar?: PrimitiveOverrideProps<SwitchFieldProps>;
    municipio?: PrimitiveOverrideProps<TextFieldProps>;
    colonia?: PrimitiveOverrideProps<TextFieldProps>;
    calle?: PrimitiveOverrideProps<TextFieldProps>;
    codigoPostal?: PrimitiveOverrideProps<TextFieldProps>;
    imagenBDTUrl?: PrimitiveOverrideProps<TextFieldProps>;
    pdfImagenUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BDTUpdateFormProps = React.PropsWithChildren<{
    overrides?: BDTUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bDT?: BDT;
    onSubmit?: (fields: BDTUpdateFormInputValues) => BDTUpdateFormInputValues;
    onSuccess?: (fields: BDTUpdateFormInputValues) => void;
    onError?: (fields: BDTUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BDTUpdateFormInputValues) => BDTUpdateFormInputValues;
    onValidate?: BDTUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BDTUpdateForm(props: BDTUpdateFormProps): React.ReactElement;
