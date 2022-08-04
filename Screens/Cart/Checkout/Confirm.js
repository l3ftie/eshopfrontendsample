import { View, StyleSheet, Dimensions, ScrollView, Button } from "react-native";
import React, { useState } from "react";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";

import { connect } from "react-redux";

import * as actions from "../../../Redux/Actions/cartActions";

const Confirm = (props) => {
  const confirm = props.route.params;
  const confrimOrder = () => {
    setTimeout(() => {
      props.clearCart();
      props.navigation.navigate("Cart");
    }, 500);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Confirm Order</Text>
        {confirm ? (
          <View style={{ borderWidth: 1, borderColor: "orange" }}>
            <Text style={styles.title}>Shipping to:</Text>
            <View style={{ padding: 8 }}>
              <Text>Address: {confirm.order.order.shippingAddress1}</Text>
              <Text>Address 2: {confirm.order.order.shippingAddress2}</Text>
              <Text>City: {confirm.order.order.city}</Text>
              <Text>Zip Code: {confirm.order.order.zip}</Text>
              <Text>Country: {confirm.order.order.country}</Text>
            </View>
            <Text style={styles.title}>Items:</Text>
            {confirm.order.order.orderItems.map((x, index) => {
              return (
                <ListItem style={styles.listItem} key={x.product.name} avatar>
                  <Left>
                    <Thumbnail
                      source={{
                        uri: x.product.image,
                      }}
                    />
                  </Left>
                  <Body style={styles.body}>
                    <Left>
                      <Text>{x.product.name}</Text>
                    </Left>
                    <Right>
                      <Text>$ {x.product.price}</Text>
                    </Right>
                  </Body>
                </ListItem>
              );
            })}
          </View>
        ) : null}
        <View style={{ alignItems: "center", margin: 20 }}>
          <Button title="Place order" onPress={confrimOrder} />
        </View>
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};

export default connect(null, mapDispatchToProps)(Confirm);

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  body: {
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  listItem: {
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    width: width / 1.2,
  },
  title: {
    alignSelf: "center",
    margin: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    height: height,
    padding: 8,
    alignContent: "center",
    backgroundColor: "white",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
});
