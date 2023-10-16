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
import AmountResults from "../components/ResultsList/AmountResults";
import TagsCategories from "../components/ResultsList/TagsCategories";

interface Prop
  extends NativeStackScreenProps<RootStackParamsList, "ProductsScreen"> {}

export default function ProductsScreen({ route, navigation }: Prop) {
  const { textValue } = route.params;
  const [inputValue, setInputValue] = useState(textValue);
  const [sent, setSent] = useState(true);
  const { products, getData, isLoading, setProducts } = useGetData(inputValue);

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
      headerStyle: { backgroundColor: "#040D12" },
      headerTintColor: "#f3f3f3",
      headerRight: () => (
        <Ionicons name="cart-outline" size={24} color="#f3f3f3" />
      ),
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
          <Ionicons name="search-outline" size={22} color="#f3f3f3" />
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <Loading />
      ) : (
        <View>
          <FlatList
            data={products}
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => renderHeaderComponent()}
            renderItem={({ item }) => <CardProduct product={item} />}
            contentContainerStyle={{ paddingBottom: 80 }}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#040D12",
    paddingHorizontal: 20,
  },
  wrapInputButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    backgroundColor: "#1B2430",
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: "#f3f3f3",
    flex: 1,
  },
  button: {
    backgroundColor: "#53B175",
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
