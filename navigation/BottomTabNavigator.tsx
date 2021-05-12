/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

import { BottomTabParamList } from "../types";

import {
  HistoryNavigator,
  HomeNavigator,
  AccountNavigator,
  TBDNavigator,
  TipOutNavigator,
} from "./BottomTabNavigators";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home" color={color} />
          ),
        }}
      />
      {/* <BottomTab.Screen
        name="TBD"
        component={TBDNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      /> */}
      <BottomTab.Screen
        name="TipOut"
        component={TipOutNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="cash-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="History"
        component={HistoryNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="book-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="person-outline" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
