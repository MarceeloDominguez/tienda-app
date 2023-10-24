import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";
import { Ionicons } from "@expo/vector-icons";
import CardProduct from "../components/CardProduct";
import { useGetData } from "../hooks/useGetData";
import Loading from "../components/Loading";
import AmountResults from "../components/products/AmountResults";
import TagsCategories from "../components/products/TagsCategories";
import { COLORS } from "../util/theme";
import IconCart from "../components/IconCart";
import Error from "../components/Error";

interface Prop
  extends NativeStackScreenProps<RootStackParamsList, "ProductsScreen"> {}

export default function ProductsScreen({ route, navigation }: Prop) {
  const { textValue } = route.params;
  const [inputValue, setInputValue] = useState(textValue);
  const [sent, setSent] = useState(true);
  const { products, getData, isLoading, setProducts, error } =
    useGetData(inputValue);

  useEffect(() => {
    if (inputValue === "") {
      setSent(false);
      setProducts([]);
    }
  }, [inputValue]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerShadowVisible: false,
      headerStyle: { backgroundColor: COLORS.primary },
      headerTintColor: COLORS.textPrimary,
      headerRight: () => <IconCart />,
    });
  }, []);

  const renderHeaderComponent = () => {
    return (
      <>
        {inputValue !== "" && sent && (
          <>
            <AmountResults value={inputValue} amount={products.length} />
            <TagsCategories products={products} />
          </>
        )}
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapInputButton}>
        <TextInput
          placeholder="Buscar... Ej: Laptop, iPhone, MacBook..."
          style={styles.input}
          placeholderTextColor="#ccc"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.button}
          onPress={() => {
            getData(), setSent(true);
          }}
        >
          <Ionicons
            name="search-outline"
            size={22}
            color={COLORS.textPrimary}
          />
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <View>
          <FlatList
            data={products}
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => renderHeaderComponent()}
            renderItem={({ item }) => <CardProduct product={item} />}
            contentContainerStyle={styles.contentContainerStyle}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
  },
  wrapInputButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    backgroundColor: COLORS.card,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: COLORS.textPrimary,
    flex: 1,
  },
  button: {
    backgroundColor: COLORS.secondary,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  contentContainerStyle: {
    paddingBottom: 80,
  },
});
