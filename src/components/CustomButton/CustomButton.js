import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";
import React from "react";

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
  loading,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles["container_${type}"],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text
          style={[
            styles.text,
            styles["text_${type}"],
            fgColor ? { color: fgColor } : {},
          ]}
        >
          {text}
        </Text>
      )}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: "90%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: "black",
  },
  container_TERTIARY: {},
  text: {
    fontWeight: "bold",
    color: "white",
  },
  text_TERTIARY: {
    color: "gray",
  },
});
export default CustomButton;
