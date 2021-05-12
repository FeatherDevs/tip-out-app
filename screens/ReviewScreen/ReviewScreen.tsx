import * as React from "react";
import styles from "./styles";
// import { useForm, Controller } from "react-hook-form";
import { Text, View } from "react-native";
import StyledPrimaryButton from "../../components/PrimaryButton";
import { ReviewProps } from "../../types";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
import TipOutRowContainer from "../../containers/TipOutRowContainer";

export default function ReviewScreen({navigation}: ReviewProps) {
  const {shiftData, slips} = useSelector(
    (state: RootState) => state.slipReducer
  );
  const {tipsReceived} = shiftData

  const total = slips.reduce((total, slip) => {
    total += slip.amount;
    return total
  },0)
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review</Text>
      <TipOutRowContainer />
      <Text>Total tips received {tipsReceived }</Text>
      <Text>Total tip out {total}</Text>
      <Text>Total tip out {total / tipsReceived * 100}%</Text>
      <StyledPrimaryButton text={"Edit"} onPress={() => navigation.goBack()} />
      <StyledPrimaryButton text={"Submit"} onPress={() => navigation.navigate("ConfirmScreen")} />
    </View>
  );
}
