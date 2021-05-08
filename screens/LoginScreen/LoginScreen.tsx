import { Text, View, TextInput, Image } from "react-native";

import React, { useEffect } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import SIGNIN_USER from "../../graphql/mutations/signIn";

import { LoginProps } from "../../types";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { RootState } from "../../state/store";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setPassword } from "../../state/actions";

import styles from "./styles";
import StyledPrimaryButton from "../../components/PrimaryButton";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

export default function LoginScreen({ navigation }: LoginProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
    reValidateMode: "onChange",
  });

  // console.log(errors)
  // const nameWatch = watch('password')
  // console.log(nameWatch)

  const { email, password } = useSelector(
    (state: RootState) => state.loginReducer
  );
  const dispatch = useDispatch();

  const [getUser, { loading, data, error }] = useLazyQuery(SIGNIN_USER);
  // const { loading, error, data } = useQuery(SIGNIN_USER, {
  //   variables: { email, password },
  // });
  console.log("data --> ", data);
  //This has to be done in a useEffect so that React Native can sync
  //the update with the render cycle otherwise it causes the message
  // `Warning: Cannot update a component from inside the function body of a different component.`

  useEffect(() => {
    !loading && data?.getUser.first_name
      ? navigation.navigate("BottomTab")
      : null;
  }, [loading, data]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/tipout.png")}
      />
      {/* <Text>Please enter your Info</Text> */}

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            autoCapitalize='none'
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="email"
            placeholderTextColor="#f0b3ff"
          />
        )}
      />
      <Text style={styles.error}>{errors.email?.message}</Text>

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            secureTextEntry={true}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="password"
            placeholderTextColor="#f0b3ff"
          />
        )}
      />
      <Text style={styles.error}>{errors.password?.message}</Text>

      {/* aka <TouchableOpacity> */}
      <StyledPrimaryButton
        errors={errors}
        text={"Login"}
        onPress={handleSubmit(({ email, password }) => {
          //store data in redux store / call login API
          //then navigate to the next screen
          dispatch(setEmail(email));
          dispatch(setPassword(password));
          getUser({ variables: { email, password } });
          console.log("SUBMITTED", email, password);
          reset();
        })}
      />
    </View>
  );
}
