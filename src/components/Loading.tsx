import { View, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";
import { COLORS } from "../util/theme";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={25} color={COLORS.secondary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
});
