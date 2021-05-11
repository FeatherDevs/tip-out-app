import * as React from "react";
import styles from "./styles";
// import { useForm, Controller } from "react-hook-form";
import { Text, View } from "react-native";
import TipOutInput from "../../components/TipOutInput";
import DropDown from "../../components/DropDown";
import StyledPrimaryButton from "../../components/PrimaryButton";
import { SlipProps } from "../../types";

export default function SlipScreen({ navigation }: SlipProps) {
  //containerize slips
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Slip Input</Text>
      <TipOutInput />

      <StyledPrimaryButton
        text={"Submit"}
        onPress={() => navigation.navigate("ReviewScreen")}
      />
    </View>
  );
}
