/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type USERCreateFormInputValues = {
    user_image?: string;
    user_name?: string;
    user_description?: string;
    user_email?: string;
    user_password?: string;
    user_location?: string;
};
export declare type USERCreateFormValidationValues = {
    user_image?: ValidationFunction<string>;
    user_name?: ValidationFunction<string>;
    user_description?: ValidationFunction<string>;
    user_email?: ValidationFunction<string>;
    user_password?: ValidationFunction<string>;
    user_location?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type USERCreateFormOverridesProps = {
    USERCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user_image?: PrimitiveOverrideProps<TextFieldProps>;
    user_name?: PrimitiveOverrideProps<TextFieldProps>;
    user_description?: PrimitiveOverrideProps<TextFieldProps>;
    user_email?: PrimitiveOverrideProps<TextFieldProps>;
    user_password?: PrimitiveOverrideProps<TextFieldProps>;
    user_location?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type USERCreateFormProps = React.PropsWithChildren<{
    overrides?: USERCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: USERCreateFormInputValues) => USERCreateFormInputValues;
    onSuccess?: (fields: USERCreateFormInputValues) => void;
    onError?: (fields: USERCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: USERCreateFormInputValues) => USERCreateFormInputValues;
    onValidate?: USERCreateFormValidationValues;
} & React.CSSProperties>;
export default function USERCreateForm(props: USERCreateFormProps): React.ReactElement;
