import React from "react";
import styles from "./styles";
import TabNavigator from "./src/navigation/TabNavigator";
import { Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return <TabNavigator />;
  }
}
