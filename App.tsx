// App.tsx
import React from "react";
import { StatusBar, View, StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components/native";
import dark from "./src/styles/theme/Dark";
import { Header } from "./src/components/Header/Header";
import { List } from "./src/List";

export default function App() {
  return (
    <ThemeProvider theme={dark}>
      <View style={styles.container}>
        <Header />
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <List />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#131116",
  },
});
