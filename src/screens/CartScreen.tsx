import { StyleSheet, FlatList, SafeAreaView, View, Text } from "react-native";
import React, { useEffect } from "react";
import { COLORS } from "../util/theme";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";
import ProductInCart from "../components/cart/ProductInCart";
import Button from "../components/Button";

type Props = NativeStackScreenProps<RootStackParamsList>;

export default function CartScreen({ navigation }: Props) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Mi carrito",
      headerShadowVisible: false,
      headerStyle: { backgroundColor: COLORS.primary },
      headerTintColor: COLORS.textPrimary,
      headerTitleAlign: "center",
      headerTitleStyle: {
        color: COLORS.textPrimary,
        fontSize: 15,
        fontWeight: "bold",
      },
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[...Array(10)]}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        renderItem={({ item }) => <ProductInCart />}
      />
      <View style={styles.contentPay}>
        <Text style={styles.priceTotal}>Total: $3000</Text>
        <Button title="Comprar" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
  },
  contentList: {
    paddingVertical: 10,
    paddingBottom: 170,
  },
  contentPay: {
    backgroundColor: COLORS.card,
    position: "absolute",
    left: 0,
    right: 0,
    height: 150,
    bottom: 0,
    paddingHorizontal: 20,
    justifyContent: "center",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  priceTotal: {
    color: COLORS.textPrimary,
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
});
