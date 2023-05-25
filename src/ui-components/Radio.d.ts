/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RadioOverridesProps = {
    Radio?: PrimitiveOverrideProps<FlexProps>;
    Checkbox?: PrimitiveOverrideProps<ViewProps>;
    Label?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type RadioProps = React.PropsWithChildren<Partial<FlexProps> & {
    state?: "Active" | "Default" | "Disabled";
} & {
    overrides?: RadioOverridesProps | undefined | null;
}>;
export default function Radio(props: RadioProps): React.ReactElement;
