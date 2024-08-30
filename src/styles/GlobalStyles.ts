// src/styles/globalStyles.ts
import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  text: {
    fontFamily: "Roboto", // Você pode precisar adicionar a fonte no seu projeto
    fontSize: 14,
  },
  button: {
    // Botão em React Native não tem cursor pointer, você define estilos próprios para os botões
  },
});

export default globalStyles;
