import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../util/theme";

type Props = {
  price: number;
  discountPercentage: number;
  rating: number;
};

export default function ContentInfo({
  price,
  discountPercentage,
  rating,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapPrice}>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.discountPercentage}>
          {discountPercentage.toFixed(0)}% OFF
        </Text>
      </View>
      <View style={styles.wrapRating}>
        <Ionicons name="md-star" size={14} color="#FFB000" />
        <Text style={styles.rating}>{rating.toFixed(1)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 10,
  },
  wrapPrice: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5,
  },
  price: {
    color: COLORS.textPrimary,
    fontWeight: "bold",
    fontSize: 18,
  },
  discountPercentage: {
    color: COLORS.secondary,
    fontWeight: "500",
    fontSize: 13,
  },
  wrapRating: {
    flexDirection: "row",
    gap: 5,
  },
  rating: {
    color: COLORS.textPrimary,
    fontWeight: "bold",
    fontSize: 12,
  },
});
