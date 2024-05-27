import * as yup from "yup";

const createFundLabelSchema = yup.object({
  title: yup.string().required("Title is required"),
  fundLabelType: yup.number().required("Type is required"),
});
export type TCreateFundLabelSchema = yup.InferType<
  typeof createFundLabelSchema
>;

const updateFundLabelSchema = yup.object({
  title: yup.string().required("Title is required"),
});
export type TUpdateFundLabelSchema = yup.InferType<
  typeof updateFundLabelSchema
>;
