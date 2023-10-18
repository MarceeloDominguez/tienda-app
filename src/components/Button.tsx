import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../util/theme";

type Props = {
  backgroundColor?: string;
  color?: string;
  height?: number;
  title: string;
  onPress?: () => void;
};

export default function Button({
  backgroundColor = COLORS.secondary,
  color = COLORS.textPrimary,
  height = 40,
  title,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.container, { backgroundColor, height }]}
      onPress={onPress}
    >
      <Text style={[styles.textButton, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 13,
  },
});
