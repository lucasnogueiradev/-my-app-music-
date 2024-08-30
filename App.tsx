import React from "react";
// import { Home } from "./src/Home/index";
import { StatusBar, View, StyleSheet } from "react-native";
import { Home } from "./src/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#131116",
  },
});
