/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Vacante } from "../models";
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
export declare type VacanteUpdateFormInputValues = {
    nombre?: string;
    descripcion?: string;
    numeroPlazas?: number;
    area?: string;
    tipoContrato?: string;
    modalidad?: string;
    diasLaborales?: string;
    edadMin?: number;
    edadMax?: number;
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
    salarioMin?: number;
    salarioMax?: number;
    idiomaConNivel?: string[];
    municipio?: string;
    jornadaLaboral?: string;
    periodoPago?: string;
    empresaID?: string;
};
export declare type VacanteUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    descripcion?: ValidationFunction<string>;
    numeroPlazas?: ValidationFunction<number>;
    area?: ValidationFunction<string>;
    tipoContrato?: ValidationFunction<string>;
    modalidad?: ValidationFunction<string>;
    diasLaborales?: ValidationFunction<string>;
    edadMin?: ValidationFunction<number>;
    edadMax?: ValidationFunction<number>;
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
    salarioMin?: ValidationFunction<number>;
    salarioMax?: ValidationFunction<number>;
    idiomaConNivel?: ValidationFunction<string>;
    municipio?: ValidationFunction<string>;
    jornadaLaboral?: ValidationFunction<string>;
    periodoPago?: ValidationFunction<string>;
    empresaID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VacanteUpdateFormOverridesProps = {
    VacanteUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    descripcion?: PrimitiveOverrideProps<TextFieldProps>;
    numeroPlazas?: PrimitiveOverrideProps<TextFieldProps>;
    area?: PrimitiveOverrideProps<TextFieldProps>;
    tipoContrato?: PrimitiveOverrideProps<TextFieldProps>;
    modalidad?: PrimitiveOverrideProps<TextFieldProps>;
    diasLaborales?: PrimitiveOverrideProps<TextFieldProps>;
    edadMin?: PrimitiveOverrideProps<TextFieldProps>;
    edadMax?: PrimitiveOverrideProps<TextFieldProps>;
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
    salarioMin?: PrimitiveOverrideProps<TextFieldProps>;
    salarioMax?: PrimitiveOverrideProps<TextFieldProps>;
    idiomaConNivel?: PrimitiveOverrideProps<TextFieldProps>;
    municipio?: PrimitiveOverrideProps<TextFieldProps>;
    jornadaLaboral?: PrimitiveOverrideProps<TextFieldProps>;
    periodoPago?: PrimitiveOverrideProps<TextFieldProps>;
    empresaID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VacanteUpdateFormProps = React.PropsWithChildren<{
    overrides?: VacanteUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    vacante?: Vacante;
    onSubmit?: (fields: VacanteUpdateFormInputValues) => VacanteUpdateFormInputValues;
    onSuccess?: (fields: VacanteUpdateFormInputValues) => void;
    onError?: (fields: VacanteUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VacanteUpdateFormInputValues) => VacanteUpdateFormInputValues;
    onValidate?: VacanteUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VacanteUpdateForm(props: VacanteUpdateFormProps): React.ReactElement;
