import React, { useEffect, useMemo } from "react";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, ButtonSize } from "../../../components/Buttons/Button";
import {
  createFundLabel,
  fetchFundLabels,
  updateFundLabel,
} from "../../../store/fundLabels/action";
import {
  CreateFundLabelInput,
  FundLabelType,
  UpdateFundLabel,
} from "../../../store/fundLabels/types";
import { Input } from "../../../components/Inputs/Input";
import { LoadingScreen } from "../../../components/Screens/LoadingScreen";
import { Modal } from "../../../components/Modal/Modal";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

type FormValues = {
  title: string;
};

const validationSchema = yup.object().shape({
  title: yup.string().label("Title").required(),
});

interface FundLabelFormModalProps {
  label: string;
  fundLabelType: FundLabelType;
  isVisible: boolean;
  onClose: () => void;
}

export const FundLabelFormModal: React.FC<FundLabelFormModalProps> = ({
  label,
  fundLabelType,
  isVisible,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const { selectedFundLabel } = useAppSelector((state) => state.fundLabel);

  const defaultValues = useMemo(
    () => ({
      title: selectedFundLabel?.title ?? "",
    }),
    [selectedFundLabel]
  );

  const {
    control,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
    reset,
  } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  useEffect(() => {
    return () => reset();
  }, [selectedFundLabel]);

  const handleCreateFundLabel = async (data: FormValues) => {
    const fundLabel: CreateFundLabelInput = {
      title: data.title,
      fundLabelType,
    };

    await dispatch(createFundLabel(fundLabel));
    await dispatch(fetchFundLabels());
    reset();
    onClose();
  };

  const handleEditFundLabel = async (data: FormValues) => {
    const fundLabel: UpdateFundLabel = {
      id: selectedFundLabel?.id ?? "",
      title: data.title,
    };

    await dispatch(updateFundLabel(fundLabel));
    await dispatch(fetchFundLabels());
    reset();
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
                label={label}
                value={value}
                placeholder={selectedFundLabel?.title ?? "Ex. Business"}
                onChangeText={onChange}
                onBlur={onBlur}
                errorMessage={errors.title?.message}
              />
            )}
          />
          <Button
            title={"Save"}
            size={ButtonSize.Medium}
            bgColor="dark"
            disabled={!isValid}
            onPress={handleSubmit(
              !selectedFundLabel ? handleCreateFundLabel : handleEditFundLabel
            )}
          />
        </View>
      }
      onClose={onClose}
    />
  );
};
