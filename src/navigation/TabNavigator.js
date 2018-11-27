import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import Stock from "../screens/Stock";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home"
      }
    },
    Stock: {
      screen: Stock,
      navigationOptions: {
        tabBarLabel: "Stock"
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    initialRouteName: "Home",
    animationEnabled: true,
    tabBarOptions: {
      style: {
        height: 75
      }
    }
  }
);

export default createAppContainer(TabNavigator);
