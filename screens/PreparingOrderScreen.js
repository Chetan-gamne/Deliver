import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import * as Animatable from "react-native-animatable";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
    return () => {};
  }, []);

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Text></Text>
      <Animatable.Image
        source={require("../assets/order-removebg-preview.png")}
        animation="slideInUp"
        className="h-96 w-96 bg-[#00CCBB]"
      />
      <Animatable.Text
        animation={`slideInUp`}
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting For Restaurant To Accept Your Request
      </Animatable.Text>

      <ActivityIndicator size={`large`} color={"white"} />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
