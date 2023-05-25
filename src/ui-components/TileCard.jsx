/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function TileCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="384px"
      height="654px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "TileCard")}
      {...rest}
    >
      <Icon
        width="384px"
        height="654px"
        viewBox={{ minX: 0, minY: 0, width: 384, height: 654 }}
        paths={[
          {
            d: "M0 0L384 0L384 654L0 654L0 0Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Rectangle 1164")}
      ></Icon>
      <Image
        width="100%"
        height="66.82%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="33.18%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="70.34%"
        bottom="25.99%"
        left="7.81%"
        right="72.14%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Price"
        {...getOverrideProps(overrides, "Price")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="77.52%"
        bottom="18.81%"
        left="7.81%"
        right="74.74%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Title"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="86.39%"
        bottom="9.94%"
        left="7.81%"
        right="47.14%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Description"
        {...getOverrideProps(overrides, "Description")}
      ></Text>
    </View>
  );
}
