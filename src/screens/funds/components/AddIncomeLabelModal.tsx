import React from "react";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../../components/Buttons/Button";
import { createFundLabel } from "../../../store/fundLabels/action";
import {
  CreateFundLabelInput,
  FundLabelType,
} from "../../../store/fundLabels/types";
import { Input } from "../../../components/Inputs/Input";
import { LoadingScreen } from "../../../components/Screens/LoadingScreen";
import { Modal } from "../../../components/Modal/Modal";
import { useAppDispatch } from "../../../store/hooks";

type FormValues = {
  title: string;
};

const fundLabelDefaultValues = {
  title: "",
};

const validationSchema = yup.object().shape({
  title: yup.string().label("Title").required(),
});

interface AddIncomeLabelModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export const AddIncomeLabelModal: React.FC<AddIncomeLabelModalProps> = ({
  isVisible,
  onClose,
}) => {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: fundLabelDefaultValues,
    mode: "onChange",
  });

  const handleSaveFundLabel = async (data: FormValues) => {
    const fundLabel: CreateFundLabelInput = {
      title: data.title,
      fundLabelType: FundLabelType.Income,
    };

    await dispatch(createFundLabel(fundLabel));

    onClose();
  };

  if (isSubmitting) return <LoadingScreen />;

  return (
    <Modal
      modalVisible={isVisible}
      contents={
        <View>
          <Controller
            control={control}
            name="title"
            render={({ field: { value, onChange, onBlur } }) => (
              <Input
                label="Title"
                value={value}
                placeholder="Ex: Business Income"
                onChangeText={onChange}
                onBlur={onBlur}
                errorMessage={errors.title?.message}
              />
            )}
          />

          <Button
            title={"Save"}
            size="M"
            bgColor="dark"
            isValid={isValid}
            disabled={!isValid}
            onPress={handleSubmit(handleSaveFundLabel)}
          />
        </View>
      }
      onClose={onClose}
    />
  );
};
