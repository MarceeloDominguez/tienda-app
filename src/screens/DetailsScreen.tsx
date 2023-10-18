import { View, ScrollView, StyleSheet, SafeAreaView, Text } from "react-native";
import React, { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";
import { COLORS } from "../util/theme";
import Images from "../components/details/Images";
import ContentInfo from "../components/details/ContentInfo";
import Button from "../components/Button";
import IconCart from "../components/IconCart";

interface Prop
  extends NativeStackScreenProps<RootStackParamsList, "DetailsScreen"> {}

export default function DetailsScreen({ route, navigation }: Prop) {
  const { product } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerShadowVisible: false,
      headerStyle: { backgroundColor: COLORS.primary },
      headerTintColor: COLORS.textPrimary,
      headerRight: () => <IconCart />,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Images images={product.images} />
        <View style={styles.content}>
          <Text numberOfLines={2} style={styles.title}>
            {product.title}
          </Text>
          <ContentInfo
            price={product.price}
            discountPercentage={product.discountPercentage}
            rating={product.rating}
          />
          <Text style={styles.description}>{product.description}</Text>
          <View style={styles.wrapButton}>
            <Button title="Comprar Ahora" />
            <Button title="Agregar al Carrito" backgroundColor="#1C603A" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
  },
  title: {
    color: COLORS.textPrimary,
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 0.4,
    paddingVertical: 10,
    marginTop: 10,
  },
  description: {
    color: COLORS.textSecondary,
    paddingVertical: 10,
    marginTop: 20,
    fontSize: 15,
    lineHeight: 22,
  },
  wrapButton: {
    marginTop: 80,
    marginBottom: 40,
  },
});
