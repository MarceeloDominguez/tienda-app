import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import ContentCardProduct from "./ContentCardProduct";

export default function CardProduct() {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9}>
      <View style={styles.wrapCard}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: "https://www.lenovo.com/medias/lenovo-laptop-ideapad-1-14-intel-gallery.png?context=bWFzdGVyfHJvb3R8MzU2MDk4fGltYWdlL3BuZ3xoMDUvaDM4LzE0MTg2OTE3MzMwOTc0LnBuZ3w1MTkyZDUzMThjM2Y4M2Q3YTg2NDZmOWFlYTc0OGJhODlhMDY0ZmUxNjUzZmU2YWM4MTU5ZjA2MTc1OTBkMGUy",
            }}
          />
        </View>
        <ContentCardProduct />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B2430",
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  wrapCard: {
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: 130,
    height: 150,
    borderRadius: 10,
    resizeMode: "contain",
    backgroundColor: "#1B2430",
  },
});
