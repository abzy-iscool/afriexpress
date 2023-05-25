/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { USER } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function USERCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    user_image: "",
    user_name: "",
    user_description: "",
    user_email: "",
    user_password: "",
    user_location: "",
  };
  const [user_image, setUser_image] = React.useState(initialValues.user_image);
  const [user_name, setUser_name] = React.useState(initialValues.user_name);
  const [user_description, setUser_description] = React.useState(
    initialValues.user_description
  );
  const [user_email, setUser_email] = React.useState(initialValues.user_email);
  const [user_password, setUser_password] = React.useState(
    initialValues.user_password
  );
  const [user_location, setUser_location] = React.useState(
    initialValues.user_location
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUser_image(initialValues.user_image);
    setUser_name(initialValues.user_name);
    setUser_description(initialValues.user_description);
    setUser_email(initialValues.user_email);
    setUser_password(initialValues.user_password);
    setUser_location(initialValues.user_location);
    setErrors({});
  };
  const validations = {
    user_image: [{ type: "URL" }],
    user_name: [{ type: "Required" }],
    user_description: [{ type: "Required" }],
    user_email: [{ type: "Required" }],
    user_password: [{ type: "Required" }],
    user_location: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          user_image,
          user_name,
          user_description,
          user_email,
          user_password,
          user_location,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new USER(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "USERCreateForm")}
      {...rest}
    >
      <TextField
        label="User image"
        isRequired={false}
        isReadOnly={false}
        value={user_image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_image: value,
              user_name,
              user_description,
              user_email,
              user_password,
              user_location,
            };
            const result = onChange(modelFields);
            value = result?.user_image ?? value;
          }
          if (errors.user_image?.hasError) {
            runValidationTasks("user_image", value);
          }
          setUser_image(value);
        }}
        onBlur={() => runValidationTasks("user_image", user_image)}
        errorMessage={errors.user_image?.errorMessage}
        hasError={errors.user_image?.hasError}
        {...getOverrideProps(overrides, "user_image")}
      ></TextField>
      <TextField
        label="User name"
        isRequired={true}
        isReadOnly={false}
        value={user_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_image,
              user_name: value,
              user_description,
              user_email,
              user_password,
              user_location,
            };
            const result = onChange(modelFields);
            value = result?.user_name ?? value;
          }
          if (errors.user_name?.hasError) {
            runValidationTasks("user_name", value);
          }
          setUser_name(value);
        }}
        onBlur={() => runValidationTasks("user_name", user_name)}
        errorMessage={errors.user_name?.errorMessage}
        hasError={errors.user_name?.hasError}
        {...getOverrideProps(overrides, "user_name")}
      ></TextField>
      <TextField
        label="User description"
        isRequired={true}
        isReadOnly={false}
        value={user_description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_image,
              user_name,
              user_description: value,
              user_email,
              user_password,
              user_location,
            };
            const result = onChange(modelFields);
            value = result?.user_description ?? value;
          }
          if (errors.user_description?.hasError) {
            runValidationTasks("user_description", value);
          }
          setUser_description(value);
        }}
        onBlur={() => runValidationTasks("user_description", user_description)}
        errorMessage={errors.user_description?.errorMessage}
        hasError={errors.user_description?.hasError}
        {...getOverrideProps(overrides, "user_description")}
      ></TextField>
      <TextField
        label="User email"
        isRequired={true}
        isReadOnly={false}
        value={user_email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_image,
              user_name,
              user_description,
              user_email: value,
              user_password,
              user_location,
            };
            const result = onChange(modelFields);
            value = result?.user_email ?? value;
          }
          if (errors.user_email?.hasError) {
            runValidationTasks("user_email", value);
          }
          setUser_email(value);
        }}
        onBlur={() => runValidationTasks("user_email", user_email)}
        errorMessage={errors.user_email?.errorMessage}
        hasError={errors.user_email?.hasError}
        {...getOverrideProps(overrides, "user_email")}
      ></TextField>
      <TextField
        label="User password"
        isRequired={true}
        isReadOnly={false}
        value={user_password}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_image,
              user_name,
              user_description,
              user_email,
              user_password: value,
              user_location,
            };
            const result = onChange(modelFields);
            value = result?.user_password ?? value;
          }
          if (errors.user_password?.hasError) {
            runValidationTasks("user_password", value);
          }
          setUser_password(value);
        }}
        onBlur={() => runValidationTasks("user_password", user_password)}
        errorMessage={errors.user_password?.errorMessage}
        hasError={errors.user_password?.hasError}
        {...getOverrideProps(overrides, "user_password")}
      ></TextField>
      <TextField
        label="User location"
        isRequired={false}
        isReadOnly={false}
        value={user_location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_image,
              user_name,
              user_description,
              user_email,
              user_password,
              user_location: value,
            };
            const result = onChange(modelFields);
            value = result?.user_location ?? value;
          }
          if (errors.user_location?.hasError) {
            runValidationTasks("user_location", value);
          }
          setUser_location(value);
        }}
        onBlur={() => runValidationTasks("user_location", user_location)}
        errorMessage={errors.user_location?.errorMessage}
        hasError={errors.user_location?.hasError}
        {...getOverrideProps(overrides, "user_location")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
