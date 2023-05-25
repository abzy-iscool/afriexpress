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
import { Icon } from "@aws-amplify/ui-react";
export default function Switch(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { state: "OFF", size: "Default" },
      overrides: { Switch: {} },
    },
    {
      variantValues: { state: "ON", size: "Large" },
      overrides: {
        Switch: {
          backgroundColor: "rgba(0,0,0,1)",
          paths: [
            {
              d: "M23 12C23 18.0751 18.0751 23 12 23L12 25C19.1797 25 25 19.1797 25 12L23 12ZM12 23C5.92487 23 1 18.0751 1 12L-1 12C-1 19.1797 4.8203 25 12 25L12 23ZM1 12C1 5.92487 5.92487 1 12 1L12 -1C4.8203 -1 -1 4.8203 -1 12L1 12ZM12 1C18.0751 1 23 5.92487 23 12L25 12C25 4.8203 19.1797 -1 12 -1L12 1Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
              style: { transform: "translate(16px, calc(50% - 12px - 0px))" },
            },
            {
              d: "M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16px, calc(50% - 12px - 0px))" },
            },
          ],
        },
      },
    },
    {
      variantValues: { state: "OFF", size: "Small" },
      overrides: {
        Switch: {
          width: "32px",
          height: "16px",
          viewBox: { minX: 0, minY: 0, width: 32, height: 16 },
          paths: [
            {
              d: "M15 8C15 11.866 11.866 15 8 15L8 17C12.9706 17 17 12.9706 17 8L15 8ZM8 15C4.13401 15 1 11.866 1 8L-1 8C-1 12.9706 3.02944 17 8 17L8 15ZM1 8C1 4.13401 4.13401 1 8 1L8 -1C3.02944 -1 -1 3.02944 -1 8L1 8ZM8 1C11.866 1 15 4.13401 15 8L17 8C17 3.02944 12.9706 -1 8 -1L8 1Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
              style: { transform: "translate(0px, calc(50% - 8px - 0px))" },
            },
            {
              d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0px, calc(50% - 8px - 0px))" },
            },
          ],
        },
      },
    },
    {
      variantValues: { state: "ON", size: "Small" },
      overrides: {
        Switch: {
          width: "26.67px",
          height: "16px",
          backgroundColor: "rgba(0,0,0,1)",
          viewBox: { minX: 0, minY: 0, width: 26, height: 16 },
          paths: [
            {
              d: "M15 8C15 11.866 11.866 15 8 15L8 17C12.9706 17 17 12.9706 17 8L15 8ZM8 15C4.13401 15 1 11.866 1 8L-1 8C-1 12.9706 3.02944 17 8 17L8 15ZM1 8C1 4.13401 4.13401 1 8 1L8 -1C3.02944 -1 -1 3.02944 -1 8L1 8ZM8 1C11.866 1 15 4.13401 15 8L17 8C17 3.02944 12.9706 -1 8 -1L8 1Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
              style: { transform: "translate(11px, calc(50% - 8px - 0px))" },
            },
            {
              d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              style: { transform: "translate(11px, calc(50% - 8px - 0px))" },
            },
          ],
        },
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Icon
      width="40px"
      height="24px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      borderRadius="36px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(235,235,235,1)"
      viewBox={{ minX: 0, minY: 0, width: 40, height: 24 }}
      paths={[
        {
          d: "M23 12C23 18.0751 18.0751 23 12 23L12 25C19.1797 25 25 19.1797 25 12L23 12ZM12 23C5.92487 23 1 18.0751 1 12L-1 12C-1 19.1797 4.8203 25 12 25L12 23ZM1 12C1 5.92487 5.92487 1 12 1L12 -1C4.8203 -1 -1 4.8203 -1 12L1 12ZM12 1C18.0751 1 23 5.92487 23 12L25 12C25 4.8203 19.1797 -1 12 -1L12 1Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(0px, calc(50% - 12px - 0px))" },
        },
        {
          d: "M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z",
          fill: "rgba(255,255,255,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0px, calc(50% - 12px - 0px))" },
        },
      ]}
      {...getOverrideProps(overrides, "Switch")}
      {...rest}
    ></Icon>
  );
}
