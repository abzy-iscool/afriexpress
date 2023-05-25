/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Lock(props) {
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
          d: "M14 7L13 7L13 5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5L3 7L2 7C0.9 7 0 7.9 0 9L0 19C0 20.1 0.9 21 2 21L14 21C15.1 21 16 20.1 16 19L16 9C16 7.9 15.1 7 14 7ZM8 16C6.9 16 6 15.1 6 14C6 12.9 6.9 12 8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16ZM11.1 7L4.9 7L4.9 5C4.9 3.29 6.29 1.9 8 1.9C9.71 1.9 11.1 3.29 11.1 5L11.1 7Z",
          fill: "rgba(25,29,33,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 4.17%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Lock")}
      {...rest}
    ></Icon>
  );
}
