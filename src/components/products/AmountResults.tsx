import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../util/theme";

type Props = {
  value: string;
  amount: number;
};

export default function AmountResults({ value, amount }: Props) {
  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={styles.text}>
        Cantidad de resultados de la búsqueda de "{value.trim()}": {amount}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  text: {
    color: COLORS.textPrimary,
    fontSize: 13,
    fontWeight: "500",
  },
});
