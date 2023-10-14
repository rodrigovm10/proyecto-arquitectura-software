/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type VacanteCreateFormInputValues = {
    nombreVacante?: string;
    descripcion?: string;
    diasLaborales?: string;
    habilidadesBlandas?: string[];
    habilidadesTecnicas?: string[];
    generoBDT?: string;
    edadMin?: number;
    edadMax?: number;
    area?: string;
    tipoEmpleo?: string;
    dispViajar?: boolean;
    dispRadicar?: boolean;
    escolaridad?: string;
    prestaciones?: string;
    direccionEmpresa?: string;
    Idioma?: string[];
    salarioMax?: number;
    salarioMin?: number;
    direccionVacante?: string;
};
export declare type VacanteCreateFormValidationValues = {
    nombreVacante?: ValidationFunction<string>;
    descripcion?: ValidationFunction<string>;
    diasLaborales?: ValidationFunction<string>;
    habilidadesBlandas?: ValidationFunction<string>;
    habilidadesTecnicas?: ValidationFunction<string>;
    generoBDT?: ValidationFunction<string>;
    edadMin?: ValidationFunction<number>;
    edadMax?: ValidationFunction<number>;
    area?: ValidationFunction<string>;
    tipoEmpleo?: ValidationFunction<string>;
    dispViajar?: ValidationFunction<boolean>;
    dispRadicar?: ValidationFunction<boolean>;
    escolaridad?: ValidationFunction<string>;
    prestaciones?: ValidationFunction<string>;
    direccionEmpresa?: ValidationFunction<string>;
    Idioma?: ValidationFunction<string>;
    salarioMax?: ValidationFunction<number>;
    salarioMin?: ValidationFunction<number>;
    direccionVacante?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VacanteCreateFormOverridesProps = {
    VacanteCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombreVacante?: PrimitiveOverrideProps<TextFieldProps>;
    descripcion?: PrimitiveOverrideProps<TextFieldProps>;
    diasLaborales?: PrimitiveOverrideProps<TextFieldProps>;
    habilidadesBlandas?: PrimitiveOverrideProps<TextFieldProps>;
    habilidadesTecnicas?: PrimitiveOverrideProps<TextFieldProps>;
    generoBDT?: PrimitiveOverrideProps<TextFieldProps>;
    edadMin?: PrimitiveOverrideProps<TextFieldProps>;
    edadMax?: PrimitiveOverrideProps<TextFieldProps>;
    area?: PrimitiveOverrideProps<TextFieldProps>;
    tipoEmpleo?: PrimitiveOverrideProps<TextFieldProps>;
    dispViajar?: PrimitiveOverrideProps<SwitchFieldProps>;
    dispRadicar?: PrimitiveOverrideProps<SwitchFieldProps>;
    escolaridad?: PrimitiveOverrideProps<TextFieldProps>;
    prestaciones?: PrimitiveOverrideProps<TextFieldProps>;
    direccionEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
    Idioma?: PrimitiveOverrideProps<TextFieldProps>;
    salarioMax?: PrimitiveOverrideProps<TextFieldProps>;
    salarioMin?: PrimitiveOverrideProps<TextFieldProps>;
    direccionVacante?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VacanteCreateFormProps = React.PropsWithChildren<{
    overrides?: VacanteCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: VacanteCreateFormInputValues) => VacanteCreateFormInputValues;
    onSuccess?: (fields: VacanteCreateFormInputValues) => void;
    onError?: (fields: VacanteCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VacanteCreateFormInputValues) => VacanteCreateFormInputValues;
    onValidate?: VacanteCreateFormValidationValues;
} & React.CSSProperties>;
export default function VacanteCreateForm(props: VacanteCreateFormProps): React.ReactElement;
