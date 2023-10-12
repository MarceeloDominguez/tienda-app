import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function ContentCardProduct() {
  return (
    <View style={styles.container}>
      <View>
        <Text numberOfLines={1} style={styles.title}>
          Handcraft Chinese style
        </Text>
        <Text numberOfLines={3} style={styles.description}>
          Handcraft Chinese style art luxury palace hotel villa mansion home
          decor ceramic vase with brass fruit plate
        </Text>
      </View>
      <View style={styles.wrapFooter}>
        <Text style={styles.price}>
          $999 <Text style={styles.discountPercentage}> 4% OFF</Text>
        </Text>
        <Text style={styles.rating}>
          <Ionicons name="star" size={15} color="#FFB000" /> 4.5
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
    fontSize: 13,
    fontWeight: "bold",
  },
  rating: {
    textAlignVertical: "bottom",
    fontWeight: "bold",
    color: "#f3f3f3",
  },
});
