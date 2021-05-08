import * as React from "react";
import styles from "./styles";
// import { useForm, Controller } from "react-hook-form";
import { Text, View, Image } from "react-native";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";

export default function ConfirmScreen() {
  const { shiftData, slips } = useSelector(
    (state: RootState) => state.slipReducer
  );

  const total = slips.reduce((total, slip) => {
    total += slip.amount;
    return total;
  }, 0);

  const { tipsReceived } = shiftData;
  const date = new Date().toString();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/checkmark.gif")}
      />
      <Text>{new Date().toString()}</Text>
      <Text>This has been changed: Total tips received {tipsReceived}</Text>
      <Text>Total tip out {total}</Text>
      <Text>Total tip out {(total / tipsReceived) * 100}%</Text>
      <Text>Confirmation Code (table ID for the history for reference?)</Text>
    </View>
  );
}
