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
export declare type POSTCreateFormInputValues = {
    post_image?: string;
    post_title?: string;
    post_description?: string;
    post_category?: string;
    post_price?: string;
    post_likes?: string;
    post_reviews?: string;
};
export declare type POSTCreateFormValidationValues = {
    post_image?: ValidationFunction<string>;
    post_title?: ValidationFunction<string>;
    post_description?: ValidationFunction<string>;
    post_category?: ValidationFunction<string>;
    post_price?: ValidationFunction<string>;
    post_likes?: ValidationFunction<string>;
    post_reviews?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type POSTCreateFormOverridesProps = {
    POSTCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    post_image?: PrimitiveOverrideProps<TextFieldProps>;
    post_title?: PrimitiveOverrideProps<TextFieldProps>;
    post_description?: PrimitiveOverrideProps<TextFieldProps>;
    post_category?: PrimitiveOverrideProps<TextFieldProps>;
    post_price?: PrimitiveOverrideProps<TextFieldProps>;
    post_likes?: PrimitiveOverrideProps<TextFieldProps>;
    post_reviews?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type POSTCreateFormProps = React.PropsWithChildren<{
    overrides?: POSTCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: POSTCreateFormInputValues) => POSTCreateFormInputValues;
    onSuccess?: (fields: POSTCreateFormInputValues) => void;
    onError?: (fields: POSTCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: POSTCreateFormInputValues) => POSTCreateFormInputValues;
    onValidate?: POSTCreateFormValidationValues;
} & React.CSSProperties>;
export default function POSTCreateForm(props: POSTCreateFormProps): React.ReactElement;
