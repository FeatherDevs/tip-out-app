import * as React from "react";
import styles from "./styles";
import { Text, View, Image } from "react-native";
import StyledPrimaryButton from "../../components/PrimaryButton";
import { WelcomeProps } from "../../types";

export default function WelcomeScreen( {navigation}: WelcomeProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/images/tipout.png")} />

      <StyledPrimaryButton text={"Login"} onPress={() => navigation.navigate('Login')} />

      <StyledPrimaryButton text={"Register"} />
    </View>
  );
}
