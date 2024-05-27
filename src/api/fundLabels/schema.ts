import * as yup from "yup";

export const createFundLabelSchema = yup.object({
  title: yup.string().required("Title is required"),
});

export type TCreateFundLabelSchema = yup.InferType<
  typeof createFundLabelSchema
>;

export const updateFundLabelSchema = yup.object({
  title: yup.string().required("Title is required"),
});

export type TUpdateFundLabelSchema = yup.InferType<
  typeof updateFundLabelSchema
>;
