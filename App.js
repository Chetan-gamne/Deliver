import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigation";
import "react-native-url-polyfill/auto";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </NavigationContainer>
  );
}
