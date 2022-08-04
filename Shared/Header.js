import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import logo from "../assets/Logo.png";

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Image source={logo} resizeMode="contain" style={{ height: 50 }} />
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    padding: 20,
  },
});
