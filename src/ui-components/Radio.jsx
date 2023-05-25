/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Radio(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { state: "Default" },
      overrides: { Checkbox: {}, Label: {}, Radio: {} },
    },
    {
      variantValues: { state: "Active" },
      overrides: {
        Checkbox: { border: "4px SOLID rgba(78,106,240,1)" },
        Label: { children: "Active" },
        Radio: {},
      },
    },
    {
      variantValues: { state: "Disabled" },
      overrides: {
        Checkbox: {
          border: "1px SOLID rgba(101,111,119,1)",
          backgroundColor: "rgba(232,238,243,1)",
        },
        Label: { color: "rgba(101,111,119,1)", children: "Disabled" },
        Radio: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="8px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "Radio")}
      {...rest}
    >
      <View
        width="16px"
        height="16px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(0,0,0,1)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Checkbox")}
      ></View>
      <Text
        fontFamily="Montserrat"
        fontSize="14px"
        fontWeight="400"
        color="rgba(25,29,33,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Default"
        {...getOverrideProps(overrides, "Label")}
      ></Text>
    </Flex>
  );
}
