import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../util/theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";

export default function IconCart() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate("CartScreen")}
    >
      <Ionicons name="cart-outline" size={24} color={COLORS.textPrimary} />
      <View style={styles.wrapNumber}>
        <Text style={styles.number}>10</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapNumber: {
    position: "absolute",
    width: 25,
    height: 25,
    backgroundColor: COLORS.card,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    left: -25,
    top: -10,
    elevation: 10,
  },
  number: {
    color: COLORS.secondary,
    fontWeight: "bold",
  },
});
