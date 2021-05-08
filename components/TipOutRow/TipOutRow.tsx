import React from "react";
import styles from "./styles";
import { View, TextInput, Text } from "react-native";
import { useDispatch } from "react-redux";
import { deleteSlip } from "../../state/actions";
import AddButton from "../AddButton";

export default function TipOutRow({ slip }: any) {
  const employeeTo = slip.employeeTo;
  const dispatch = useDispatch();

  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={styles.text}>{employeeTo}</Text>
      <Text style={styles.text}>{`$${slip.amount}`}</Text>
      <AddButton
        style={styles.addButton}
        text={"-"}
        onPress={() => dispatch(deleteSlip({ employeeTo }))}
      />
    </View>
  );
}
