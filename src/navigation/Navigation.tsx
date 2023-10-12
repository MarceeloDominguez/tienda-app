import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import ProductsScreen from "../screens/ProductsScreen";

export type RootStackParamsList = {
  HomeScreen: undefined;
  ProductsScreen: { textValue: string };
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: "slide_from_right" }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
