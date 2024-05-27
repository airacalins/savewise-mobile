import * as yup from "yup";

const createFundSchema = yup.object({
  fundLabelId: yup.string().required("Fund label is required"),
  amount: yup
    .number()
    .required("Amount is required")
    .moreThan(0, "Amount must be greater than 0"),
  date: yup.date().label("Date").required("Date is required"),
});
export type TCreateFundSchema = yup.InferType<typeof createFundSchema>;

const updateFundSchema = yup.object({
  fundLabelId: yup.string().label("Label").required("Fund label is required"),
  amount: yup
    .number()
    .required("Amount is required")
    .moreThan(0, "Amount must be greater than 0"),
  date: yup.date().label("Date").required("Amount is required"),
});
export type TUpdateFundSchema = yup.InferType<typeof updateFundSchema>;
