import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";
import { COLORS } from "../util/theme";
import Button from "../components/Button";

const { width } = Dimensions.get("window");

const IMAGE_WIDTH = width * 0.8;

interface Prop
  extends NativeStackScreenProps<RootStackParamsList, "HomeScreen"> {}

export default function HomeScreen({ navigation }: Prop) {
  const [textValue, setTextValue] = useState("");

  const handleSubmit = () => {
    if (textValue.trim() !== "") {
      navigation.navigate("ProductsScreen", { textValue });
      setTextValue("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#040D12" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={[{ flexGrow: 1 }]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.contentImage}>
            <Image
              source={require("../../assets/inicio.png")}
              style={styles.image}
            />
          </View>
          <Text style={styles.title}>Tienda Online</Text>
          <View style={styles.wrapInputButton}>
            <TextInput
              placeholder="Buscar... Ej: Laptop, iPhone, MacBook..."
              style={styles.input}
              placeholderTextColor="#ccc"
              value={textValue}
              onChangeText={(text) => setTextValue(text)}
              onSubmitEditing={handleSubmit}
            />
            <Button title="Buscar" onPress={handleSubmit} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  contentImage: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: IMAGE_WIDTH,
    height: 350,
    marginTop: 50,
  },
  title: {
    color: COLORS.textPrimary,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 0.4,
  },
  wrapInputButton: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 22,
    paddingVertical: 20,
  },
  input: {
    backgroundColor: COLORS.card,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: COLORS.textPrimary,
  },
  inputWithMargin: {
    marginBottom: 50,
  },
});
