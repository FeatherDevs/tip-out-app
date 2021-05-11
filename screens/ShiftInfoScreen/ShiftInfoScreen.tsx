import React, { useRef } from "react";
import styles from "./styles";
import { useForm, Controller } from "react-hook-form";
import { Text, View, TextInput, Alert } from "react-native";
import StyledPrimaryButton from "../../components/PrimaryButton";
import { TipOutProps } from "../../types";
import { useDispatch } from "react-redux";
import { setShiftData } from "../../state/actions"

export default function ShiftInfoScreen({ navigation }: TipOutProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const tipsReceivedRef = useRef(null);
  const foodSalesRef = useRef(null);
  const liquorSalesRef = useRef(null);

  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <Text style={ styles.title}>Shift Info</Text>
      <Text style={{ fontSize: 22, marginLeft: 0, paddingRight: 125, color: "#b800e6",}}>Total Sales</Text>
      <Controller
        control={control}
        name="totalSales"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="$"
              placeholderTextColor="#f0b3ff"
              autoFocus={true}
              returnKeyType={"next"}
              blurOnSubmit={false}
              onSubmitEditing={() => tipsReceivedRef.current.focus()}
            />
          );
        }}
      />
      {errors.totalSales && <Text style = {styles.error}>Total Sales is Required!</Text>}

      <Text style={{ fontSize: 22, marginLeft: 0, paddingRight: 100, color: "#b800e6",}}>Tips Received</Text>
      <Controller
        control={control}
        name="tipsReceived"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="$"
              placeholderTextColor="#f0b3ff"
              ref={tipsReceivedRef}
              blurOnSubmit={false}
              returnKeyType={"next"}
              onSubmitEditing={() => foodSalesRef.current.focus()}
            />
          );
        }}
      />
      {errors.tipsReceived && <Text style = {styles.error}>Tips Received is Required!</Text>}

      <Text style={{ fontSize: 22, marginLeft: 0, paddingRight: 125, color: "#b800e6",}}>Food Sales</Text>
      <Controller
        control={control}
        name="foodSales"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="$"
              placeholderTextColor="#f0b3ff"
              ref={foodSalesRef}
              blurOnSubmit={false}
              returnKeyType={"next"}
              onSubmitEditing={() => liquorSalesRef.current.focus()}
            />
          );
        }}
      />
      {errors.foodSales && <Text style = {styles.error}>Food Sales are Required!</Text>}

      <Text style={{ fontSize: 22, marginLeft: 0, paddingRight: 115, color: "#b800e6",}}>Liquor Sales</Text>
      <Controller
        control={control}
        name="liquorSales"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="$"
              placeholderTextColor="#f0b3ff"
              ref={liquorSalesRef}
            />
          );
        }}
      />
      {errors.liquorSales && <Text style = {styles.error}>Liquor Sales are Required!</Text>}

      <View style={{ paddingTop: 25 }}></View>
      <StyledPrimaryButton
        text={"Submit"}
        onPress={handleSubmit((data) => {
          console.log(data); //send data to state manager
          // Alert.alert("Data Submitted", `${JSON.stringify(data)}`)
          dispatch(setShiftData(data))
          navigation.navigate("SlipScreen");
          reset()
        })}
      />
    </View>
  );
}
