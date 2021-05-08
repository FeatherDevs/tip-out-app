import React, { useState } from "react";
import styles from "./styles";
import DropDown from "../DropDown";
import AddButton from "../AddButton";
import { View, TextInput, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import TipOutRowContainer from "../../containers/TipOutRowContainer";
import { useDispatch } from "react-redux";
import { addSlip } from "../../state/actions";

const schema = yup.object().shape({
  amount: yup.number().integer("invalid number"),
});

export default function TipOutInput() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  return (
    <View style={{ borderColor: "red", borderWidth: 2 }}>
      <View
        style={{
          borderColor: "green",
          borderWidth: 2,
        }}
      >
        <Controller
          control={control}
          name="employeeTo"
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => {
            return <DropDown value={value} onChange={onChange} />;
          }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            borderColor: "blue",
            borderWidth: 2,
          }}
        >
          <Controller
            control={control}
            name="amount"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="$$$"
                placeholderTextColor="#f0b3ff"
                keyboardType="numeric"
              />
            )}
          />
          <AddButton
            style={styles.addButton}
            text={"+"}
            onPress={handleSubmit(({ employeeTo, amount }) => {
              if (employeeTo != undefined) {
                dispatch(addSlip({ employeeTo, amount }));
                console.log("Data from tipForm --> ", { employeeTo, amount });
              }
            })}
          />
        </View>
        {/* <Text style={styles.error}>{errors.amount?.message}</Text> */}
      </View>
      <TipOutRowContainer />
    </View>
  );
}
