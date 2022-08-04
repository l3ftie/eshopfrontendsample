import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Content, Left, Body, Text, ListItem, Thumbnail } from "native-base";

const SearchedProducts = (props) => {
  const { productsFiltered } = props;
  return (
    <Content style={{ width: width }}>
      {productsFiltered.length > 0 ? (
        productsFiltered.map((item) => (
          <ListItem
            onPress={() =>
              props.navigation.navigate("Product Detail", {
                item: item,
              })
            }
            key={item._id}
            avatar
          >
            <Left>
              <Thumbnail
                source={{
                  uri: item.image
                    ? item.image
                    : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
                }}
              />
            </Left>
            <Body>
              <Text>{item.name}</Text>
              <Text note>{item.description}</Text>
            </Body>
          </ListItem>
        ))
      ) : (
        <View style={StyleSheet.center}>
          <Text style={{ alignSelf: "center" }}>
            No Products match the selected criteria
          </Text>
        </View>
      )}
    </Content>
  );
};

export default SearchedProducts;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
