import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  price: number;
  description: string;
  discountPercentage: number;
  rating: number;
  title: string;
};

export default function ContentCardProduct({
  price,
  description,
  discountPercentage,
  rating,
  title,
}: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={3} style={styles.description}>
          {description}
        </Text>
      </View>
      <View style={styles.wrapFooter}>
        <Text style={styles.price}>
          ${price}{" "}
          <Text style={styles.discountPercentage}>
            {" "}
            {discountPercentage.toFixed(0)}% OFF
          </Text>
        </Text>
        <Text style={styles.rating}>
          <Ionicons name="star" size={15} color="#FFB000" /> {rating.toFixed(1)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f3f3f3",
    letterSpacing: 0.2,
  },
  description: {
    fontSize: 14,
    color: "#f3f3f3",
    opacity: 0.7,
    marginTop: 5,
    fontWeight: "600",
    letterSpacing: 0.2,
    lineHeight: 18,
  },
  wrapFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    color: "#f3f3f3",
    fontSize: 18,
    fontWeight: "bold",
  },
  discountPercentage: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#53B175",
  },
  rating: {
    textAlignVertical: "bottom",
    fontWeight: "bold",
    color: "#f3f3f3",
  },
});
