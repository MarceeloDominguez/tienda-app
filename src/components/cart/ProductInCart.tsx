import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../util/theme";
import Buttons from "./Buttons";

export default function ProductInCart() {
  return (
    <View style={styles.contantCard}>
      <Image
        source={{
          uri: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
        }}
        style={styles.image}
      />
      <View style={styles.wrapperInfo}>
        <Text style={styles.title} numberOfLines={2}>
          Microsoft Surface Laptop 4 Microsoft Surface Laptop 4 Microsoft
          Surface Laptop 4 Microsoft Surface Laptop 4
        </Text>
        <Text style={styles.price}>$1000</Text>
        <Buttons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contantCard: {
    marginVertical: 10,
    flexDirection: "row",
    gap: 14,
    padding: 2,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  wrapperInfo: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    color: COLORS.textPrimary,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: 13,
  },
  price: {
    color: COLORS.textSecondary,
    fontWeight: "bold",
    fontSize: 13,
  },
});
