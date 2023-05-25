/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { POST } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function POSTUpdateForm(props) {
  const {
    id: idProp,
    pOST: pOSTModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    post_image: "",
    post_title: "",
    post_description: "",
    post_category: "",
    post_price: "",
    post_likes: "",
    post_reviews: "",
  };
  const [post_image, setPost_image] = React.useState(initialValues.post_image);
  const [post_title, setPost_title] = React.useState(initialValues.post_title);
  const [post_description, setPost_description] = React.useState(
    initialValues.post_description
  );
  const [post_category, setPost_category] = React.useState(
    initialValues.post_category
  );
  const [post_price, setPost_price] = React.useState(initialValues.post_price);
  const [post_likes, setPost_likes] = React.useState(initialValues.post_likes);
  const [post_reviews, setPost_reviews] = React.useState(
    initialValues.post_reviews
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = pOSTRecord
      ? { ...initialValues, ...pOSTRecord }
      : initialValues;
    setPost_image(cleanValues.post_image);
    setPost_title(cleanValues.post_title);
    setPost_description(cleanValues.post_description);
    setPost_category(cleanValues.post_category);
    setPost_price(cleanValues.post_price);
    setPost_likes(cleanValues.post_likes);
    setPost_reviews(cleanValues.post_reviews);
    setErrors({});
  };
  const [pOSTRecord, setPOSTRecord] = React.useState(pOSTModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(POST, idProp)
        : pOSTModelProp;
      setPOSTRecord(record);
    };
    queryData();
  }, [idProp, pOSTModelProp]);
  React.useEffect(resetStateValues, [pOSTRecord]);
  const validations = {
    post_image: [{ type: "URL" }],
    post_title: [],
    post_description: [],
    post_category: [],
    post_price: [],
    post_likes: [],
    post_reviews: [],
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
          post_image,
          post_title,
          post_description,
          post_category,
          post_price,
          post_likes,
          post_reviews,
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
          await DataStore.save(
            POST.copyOf(pOSTRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "POSTUpdateForm")}
      {...rest}
    >
      <TextField
        label="Post image"
        isRequired={false}
        isReadOnly={false}
        value={post_image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              post_image: value,
              post_title,
              post_description,
              post_category,
              post_price,
              post_likes,
              post_reviews,
            };
            const result = onChange(modelFields);
            value = result?.post_image ?? value;
          }
          if (errors.post_image?.hasError) {
            runValidationTasks("post_image", value);
          }
          setPost_image(value);
        }}
        onBlur={() => runValidationTasks("post_image", post_image)}
        errorMessage={errors.post_image?.errorMessage}
        hasError={errors.post_image?.hasError}
        {...getOverrideProps(overrides, "post_image")}
      ></TextField>
      <TextField
        label="Post title"
        isRequired={false}
        isReadOnly={false}
        value={post_title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              post_image,
              post_title: value,
              post_description,
              post_category,
              post_price,
              post_likes,
              post_reviews,
            };
            const result = onChange(modelFields);
            value = result?.post_title ?? value;
          }
          if (errors.post_title?.hasError) {
            runValidationTasks("post_title", value);
          }
          setPost_title(value);
        }}
        onBlur={() => runValidationTasks("post_title", post_title)}
        errorMessage={errors.post_title?.errorMessage}
        hasError={errors.post_title?.hasError}
        {...getOverrideProps(overrides, "post_title")}
      ></TextField>
      <TextField
        label="Post description"
        isRequired={false}
        isReadOnly={false}
        value={post_description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              post_image,
              post_title,
              post_description: value,
              post_category,
              post_price,
              post_likes,
              post_reviews,
            };
            const result = onChange(modelFields);
            value = result?.post_description ?? value;
          }
          if (errors.post_description?.hasError) {
            runValidationTasks("post_description", value);
          }
          setPost_description(value);
        }}
        onBlur={() => runValidationTasks("post_description", post_description)}
        errorMessage={errors.post_description?.errorMessage}
        hasError={errors.post_description?.hasError}
        {...getOverrideProps(overrides, "post_description")}
      ></TextField>
      <TextField
        label="Post category"
        isRequired={false}
        isReadOnly={false}
        value={post_category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              post_image,
              post_title,
              post_description,
              post_category: value,
              post_price,
              post_likes,
              post_reviews,
            };
            const result = onChange(modelFields);
            value = result?.post_category ?? value;
          }
          if (errors.post_category?.hasError) {
            runValidationTasks("post_category", value);
          }
          setPost_category(value);
        }}
        onBlur={() => runValidationTasks("post_category", post_category)}
        errorMessage={errors.post_category?.errorMessage}
        hasError={errors.post_category?.hasError}
        {...getOverrideProps(overrides, "post_category")}
      ></TextField>
      <TextField
        label="Post price"
        isRequired={false}
        isReadOnly={false}
        value={post_price}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              post_image,
              post_title,
              post_description,
              post_category,
              post_price: value,
              post_likes,
              post_reviews,
            };
            const result = onChange(modelFields);
            value = result?.post_price ?? value;
          }
          if (errors.post_price?.hasError) {
            runValidationTasks("post_price", value);
          }
          setPost_price(value);
        }}
        onBlur={() => runValidationTasks("post_price", post_price)}
        errorMessage={errors.post_price?.errorMessage}
        hasError={errors.post_price?.hasError}
        {...getOverrideProps(overrides, "post_price")}
      ></TextField>
      <TextField
        label="Post likes"
        isRequired={false}
        isReadOnly={false}
        value={post_likes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              post_image,
              post_title,
              post_description,
              post_category,
              post_price,
              post_likes: value,
              post_reviews,
            };
            const result = onChange(modelFields);
            value = result?.post_likes ?? value;
          }
          if (errors.post_likes?.hasError) {
            runValidationTasks("post_likes", value);
          }
          setPost_likes(value);
        }}
        onBlur={() => runValidationTasks("post_likes", post_likes)}
        errorMessage={errors.post_likes?.errorMessage}
        hasError={errors.post_likes?.hasError}
        {...getOverrideProps(overrides, "post_likes")}
      ></TextField>
      <TextField
        label="Post reviews"
        isRequired={false}
        isReadOnly={false}
        value={post_reviews}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              post_image,
              post_title,
              post_description,
              post_category,
              post_price,
              post_likes,
              post_reviews: value,
            };
            const result = onChange(modelFields);
            value = result?.post_reviews ?? value;
          }
          if (errors.post_reviews?.hasError) {
            runValidationTasks("post_reviews", value);
          }
          setPost_reviews(value);
        }}
        onBlur={() => runValidationTasks("post_reviews", post_reviews)}
        errorMessage={errors.post_reviews?.errorMessage}
        hasError={errors.post_reviews?.hasError}
        {...getOverrideProps(overrides, "post_reviews")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || pOSTModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || pOSTModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
