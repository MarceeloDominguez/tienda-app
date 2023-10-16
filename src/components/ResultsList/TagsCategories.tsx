import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Product } from "../../interface/products";

type Props = {
  products: Product[];
};

export default function TagsCategories({ products }: Props) {
  const categories = Array.from(new Set(products.map((item) => item.category)));

  const amountProductsByCategory = categories.map((category) => {
    const amountProducts = products.filter(
      (product) => product.category === category
    ).length;

    return { category, amountProducts };
  });

  return (
    <View style={styles.container}>
      {amountProductsByCategory.map((item, index) => (
        <View key={index} style={styles.tag}>
          <Text style={styles.text}>
            {item.category} {item.amountProducts}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    paddingVertical: 10,
  },
  tag: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 100,
    elevation: 10,
    backgroundColor: "#1C603A",
  },
  text: {
    color: "#f3f3f3",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
