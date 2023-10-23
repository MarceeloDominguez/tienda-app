import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../util/theme";

export default function Buttons() {
  return (
    <View style={styles.content}>
      <TouchableOpacity activeOpacity={0.9}>
        <Text style={styles.btnDelete}>Eliminar</Text>
      </TouchableOpacity>
      <View style={styles.wrapperBtn}>
        <TouchableOpacity
          style={styles.bntAddEndDeleteProduct}
          activeOpacity={0.9}
        >
          <Text style={styles.textBtn}>-</Text>
        </TouchableOpacity>
        <Text style={styles.amountProduct}>10</Text>
        <TouchableOpacity
          style={styles.bntAddEndDeleteProduct}
          activeOpacity={0.9}
        >
          <Text style={styles.textBtn}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  btnDelete: {
    color: "#C70039",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 0.4,
  },
  wrapperBtn: {
    flexDirection: "row",
    gap: 10,
  },
  bntAddEndDeleteProduct: {
    backgroundColor: COLORS.card,
    width: 30,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textBtn: {
    color: COLORS.textPrimary,
    fontWeight: "bold",
  },
  amountProduct: {
    textAlignVertical: "center",
    fontWeight: "bold",
    fontSize: 13,
    color: COLORS.textPrimary,
  },
});
