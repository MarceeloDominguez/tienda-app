import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../util/theme";

export default function Error() {
  return (
    <View>
      <Text style={styles.error}>¡Ups, algo salio mal!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});
