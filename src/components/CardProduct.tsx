import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import ContentCardProduct from "./ContentCardProduct";
import { Product } from "../interface/products";

type Props = {
  product: Product;
};

export default function CardProduct({ product }: Props) {
  const { thumbnail, price, title, description, discountPercentage, rating } =
    product;

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9}>
      <View style={styles.wrapCard}>
        <View>
          <Image style={styles.image} source={{ uri: thumbnail }} />
        </View>
        <ContentCardProduct
          price={price}
          description={description}
          discountPercentage={discountPercentage}
          rating={rating}
          title={title}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B2430",
    marginVertical: 10,
    padding: 10,
    borderRadius: 16,
  },
  wrapCard: {
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: 130,
    height: 150,
    borderRadius: 16,
    backgroundColor: "#1B2430",
  },
});
