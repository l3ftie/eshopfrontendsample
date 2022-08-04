import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";

const { width } = Dimensions.get("window");

const ProductList = (props) => {
  const { item } = props;
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate("Product Detail", { item: item })
      }
      style={{ width: "50%" }}
    >
      <View style={{ width: width / 2, backgroundColor: "gainsboro" }}>
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductList;
