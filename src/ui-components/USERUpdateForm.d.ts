/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { USER } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type USERUpdateFormInputValues = {
    user_image?: string;
    user_name?: string;
    user_description?: string;
    user_email?: string;
    user_password?: string;
    user_location?: string;
};
export declare type USERUpdateFormValidationValues = {
    user_image?: ValidationFunction<string>;
    user_name?: ValidationFunction<string>;
    user_description?: ValidationFunction<string>;
    user_email?: ValidationFunction<string>;
    user_password?: ValidationFunction<string>;
    user_location?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type USERUpdateFormOverridesProps = {
    USERUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user_image?: PrimitiveOverrideProps<TextFieldProps>;
    user_name?: PrimitiveOverrideProps<TextFieldProps>;
    user_description?: PrimitiveOverrideProps<TextFieldProps>;
    user_email?: PrimitiveOverrideProps<TextFieldProps>;
    user_password?: PrimitiveOverrideProps<TextFieldProps>;
    user_location?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type USERUpdateFormProps = React.PropsWithChildren<{
    overrides?: USERUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    uSER?: USER;
    onSubmit?: (fields: USERUpdateFormInputValues) => USERUpdateFormInputValues;
    onSuccess?: (fields: USERUpdateFormInputValues) => void;
    onError?: (fields: USERUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: USERUpdateFormInputValues) => USERUpdateFormInputValues;
    onValidate?: USERUpdateFormValidationValues;
} & React.CSSProperties>;
export default function USERUpdateForm(props: USERUpdateFormProps): React.ReactElement;
