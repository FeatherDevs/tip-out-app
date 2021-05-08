import * as React from "react";
import styles from "./styles";
import { View, ImageBackground } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useQuery } from "@apollo/client";
import SIGNIN_USER from "../../graphql/mutations/signIn"
import {TextAnimationFadeIn} from 'react-native-text-effects'

export default function HomeScreen() {
  const { email, password} = useSelector(
    (state: RootState) => state.loginReducer
  );
  
  const { loading, error, data } = useQuery(SIGNIN_USER, {
    variables: { email, password },
  });
  
  return (
    <ImageBackground style={styles.backgroundImage} source={require('../../assets/images/restaurant-bg.png')} >
      <View style={styles.container}>

      <TextAnimationFadeIn value={`Welcome`} delay={100} duration={1000} style={{color: '#b800e6', fontSize: 40, fontWeight: 'bold', backgroundColor: 'rgba(255, 255, 255, 0.7)'}} />
      <TextAnimationFadeIn value={`${data?.getUser.first_name}`} delay={100} duration={1000} style={{color: '#b800e6', fontSize: 40, fontWeight: 'bold', backgroundColor: 'rgba(255, 255, 255, 0.7)'}} />

       
     
    </View>
    </ImageBackground>
  );
}
