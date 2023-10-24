import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import { COLORS } from "../../util/theme";

const { width, height } = Dimensions.get("window");

const WIDTH_ITEM = width * 0.9;
const HEIGHT_ITEM = height * 0.6;

export default function EmptyCart() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aún no has comprado nada.</Text>
      <Image
        source={require("../../../assets/no-data.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.4,
  },
  image: {
    width: WIDTH_ITEM,
    height: HEIGHT_ITEM,
    resizeMode: "contain",
    marginBottom: 50,
  },
});
