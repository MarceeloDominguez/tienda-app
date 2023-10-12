import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";
import { Ionicons } from "@expo/vector-icons";
import CardProduct from "../components/CardProduct";

interface Prop
  extends NativeStackScreenProps<RootStackParamsList, "ProductsScreen"> {}

export default function ProductsScreen({ route, navigation }: Prop) {
  const { textValue } = route.params;
  const [value, setValue] = useState(textValue);

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

  const headerComponent = () => {
    return (
      <View style={styles.wrapInputButton}>
        <TextInput
          placeholder="Buscar... Ej: Laptop, iPhone, MacBook..."
          style={styles.input}
          placeholderTextColor="#ccc"
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        <TouchableOpacity activeOpacity={0.9} style={styles.button}>
          <Ionicons name="search-outline" size={22} color="#f3f3f3" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          ListHeaderComponent={headerComponent}
          data={[...Array(10)]}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <CardProduct />}
        />
      </View>
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
