import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../util/theme";
import { Product } from "../interface/products";

type Props = {
  backgroundColor?: string;
  color?: string;
  height?: number;
  title: string;
  onPress?: () => void;
  productInCart?: Product;
};

export default function Button({
  backgroundColor = COLORS.secondary,
  color = COLORS.textPrimary,
  height = 40,
  title,
  onPress,
  productInCart,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.container, { backgroundColor, height }]}
      onPress={onPress}
      disabled={productInCart ? true : false}
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
