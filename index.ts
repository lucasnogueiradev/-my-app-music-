import { AppRegistry } from "react-native";
import App from "./App"; // Certifique-se de que o caminho está correto
import { name as appName } from "./app.json"; // Verifique o nome no app.json

AppRegistry.registerComponent(appName, () => App);
