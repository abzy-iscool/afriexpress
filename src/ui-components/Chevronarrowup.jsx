/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Chevronarrowup(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="24px"
      height="24px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
      paths={[
        {
          d: "M1.41 7.41L6 2.83L10.59 7.41L12 6L6 0L0 6L1.41 7.41Z",
          fill: "rgba(25,29,33,1)",
          fillRule: "nonzero",
          style: { transform: "translate(25%, 33.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Chevronarrowup")}
      {...rest}
    ></Icon>
  );
}
