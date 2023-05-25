/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { POST } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type POSTUpdateFormInputValues = {
    post_image?: string;
    post_title?: string;
    post_description?: string;
    post_category?: string;
    post_price?: string;
    post_likes?: string;
    post_reviews?: string;
};
export declare type POSTUpdateFormValidationValues = {
    post_image?: ValidationFunction<string>;
    post_title?: ValidationFunction<string>;
    post_description?: ValidationFunction<string>;
    post_category?: ValidationFunction<string>;
    post_price?: ValidationFunction<string>;
    post_likes?: ValidationFunction<string>;
    post_reviews?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type POSTUpdateFormOverridesProps = {
    POSTUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    post_image?: PrimitiveOverrideProps<TextFieldProps>;
    post_title?: PrimitiveOverrideProps<TextFieldProps>;
    post_description?: PrimitiveOverrideProps<TextFieldProps>;
    post_category?: PrimitiveOverrideProps<TextFieldProps>;
    post_price?: PrimitiveOverrideProps<TextFieldProps>;
    post_likes?: PrimitiveOverrideProps<TextFieldProps>;
    post_reviews?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type POSTUpdateFormProps = React.PropsWithChildren<{
    overrides?: POSTUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pOST?: POST;
    onSubmit?: (fields: POSTUpdateFormInputValues) => POSTUpdateFormInputValues;
    onSuccess?: (fields: POSTUpdateFormInputValues) => void;
    onError?: (fields: POSTUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: POSTUpdateFormInputValues) => POSTUpdateFormInputValues;
    onValidate?: POSTUpdateFormValidationValues;
} & React.CSSProperties>;
export default function POSTUpdateForm(props: POSTUpdateFormProps): React.ReactElement;
