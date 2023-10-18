import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../../util/theme";

type Props = {
  images: string[];
};

const { width } = Dimensions.get("window");

const ITEM_WIDTH = width * 0.7 - 20;
const ITEMS = width * 0.18;

export default function Images({ images }: Props) {
  const [image, setImage] = useState<null | string>(null);

  useEffect(() => {
    if (images && images.length > 0) {
      setImage(images[0]);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.wrapMainImage}>
        <Image source={{ uri: image! }} style={styles.mainImage} />
      </View>
      <View>
        {images.slice(0, 3).map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.wrapImage,
              {
                borderWidth: 3,
                borderColor: item === image ? COLORS.secondary : COLORS.card,
              },
            ]}
            activeOpacity={0.9}
            onPress={() => setImage(item)}
          >
            <Image source={{ uri: item }} style={styles.images} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  wrapMainImage: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 10,
  },
  mainImage: {
    width: ITEM_WIDTH,
    height: width * 0.75,
    resizeMode: "contain",
  },
  wrapImage: {
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 8,
  },
  images: {
    width: ITEMS,
    height: width * 0.18,
    resizeMode: "contain",
    backgroundColor: COLORS.card,
  },
});
