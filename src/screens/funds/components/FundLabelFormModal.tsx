import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  TCreateFundLabelSchema,
  TUpdateFundLabelSchema,
  createFundLabelSchema,
} from "../../../api/fundLabels/schema";
import {
  FUND_LABEL_QUERY_KEY,
  createFundLabel,
  getFundLabelById,
  updateFundLabel,
} from "../../../api/fundLabels/hooks";
import {
  CreateFundLabelRequest,
  FundLabel,
  FundLabelType,
  UpdateFundLabelRequest,
} from "../../../api/fundLabels/types";
import {
  Input,
  ButtonSize,
  Modal,
  Button,
  LoadingScreen,
} from "../../../components";

interface FundLabelFormModalProps {
  label: string;
  fundLabelType: FundLabelType;
  fundLabel?: FundLabel;
  isVisible: boolean;
  onClose: () => void;
}

export const FundLabelFormModal: React.FC<FundLabelFormModalProps> = ({
  label,
  fundLabelType,
  fundLabel,
  isVisible,
  onClose,
}) => {
  const defaultValues = {
    title: fundLabel ? fundLabel.title : "",
  };

  const {
    control,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
    reset,
  } = useForm<TCreateFundLabelSchema>({
    defaultValues: defaultValues,
    resolver: yupResolver(createFundLabelSchema),
    mode: "onChange",
  });

  // API
  const queryClient = useQueryClient();

  const { data: selectedFundLabel } = useQuery({
    queryFn: () => getFundLabelById(fundLabel?.id ?? ""),
    queryKey: [FUND_LABEL_QUERY_KEY],
  });

  console.log("🚀 ~ selectedFundLabel:", selectedFundLabel);

  const createFundLabelMutation = useMutation({
    mutationFn: createFundLabel,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [FUND_LABEL_QUERY_KEY] });
    },
  });

  const updateFundLabelMutation = useMutation({
    mutationFn: updateFundLabel,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [FUND_LABEL_QUERY_KEY] });
    },
  });

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  // Functions
  const handleCreateFundLabel = async (formValues: TCreateFundLabelSchema) => {
    try {
      const fundLabel: CreateFundLabelRequest = {
        title: formValues.title,
        fundLabelType,
      };
      await createFundLabelMutation.mutateAsync({ ...fundLabel });
      reset();
      onClose();
    } catch {}
  };

  const handleEditFundLabel = async (formValues: TUpdateFundLabelSchema) => {
    try {
      const updatedFundLabel: UpdateFundLabelRequest = {
        id: fundLabel?.id ?? "",
        title: formValues.title,
        fundLabelType,
      };
      await updateFundLabelMutation.mutateAsync({
        ...updatedFundLabel,
      });
      reset();
      onClose();
    } catch {}
  };

  if (!selectedFundLabel || isSubmitting) return <LoadingScreen />;

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
