import React, { useState } from "react";
import styles from "./styles";
import DropDown from "../../components/DropDown";
import AddButton from "../../components/AddButton";
import TipOutRow from "../../components/TipOutRow";

import { View, TextInput, Text, ScrollView } from "react-native";

import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

export default function TipOutRowContainer() {
  const { slips }: any = useSelector((state: RootState) => state.slipReducer);

  //rey key with store index value

  return (
    <ScrollView style={{ height: 100, borderWidth: 1 }}>
      <View style={{ alignItems: "center" }}>
        {slips.map((slip: any, index: number) => {
          return <TipOutRow key={index} slip={slip} />;
        })}
      </View>
    </ScrollView>
  );
}
