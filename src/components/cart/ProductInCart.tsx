import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../util/theme";
import Buttons from "./Buttons";
import { Product } from "../../interface/products";
import { formatPrice } from "../../util/formatPrice";

type Props = {
  product: Product;
};

export default function ProductInCart({ product }: Props) {
  const { title, price, quantity } = product;
  const priceTotalByProduct = price * quantity;

  return (
    <View style={styles.contantCard}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <View style={styles.wrapperInfo}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.price}>{formatPrice(priceTotalByProduct)}</Text>
        <Buttons product={product} />
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
