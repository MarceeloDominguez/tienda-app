import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import ContentCardProduct from "./ContentCardProduct";
import { Product } from "../interface/products";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";
import { COLORS } from "../util/theme";

type Props = {
  product: Product;
};

export default function CardProduct({ product }: Props) {
  const { thumbnail, price, title, description, discountPercentage, rating } =
    product;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={() => navigation.navigate("DetailsScreen", { product })}
    >
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
    backgroundColor: COLORS.card,
    marginVertical: 10,
    padding: 10,
    borderRadius: 16,
  },
  wrapCard: {
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: COLORS.card,
  },
});
