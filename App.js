import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ProductsContainer from "./Screens/Products/ProductsContainer";
import Header from "./Shared/Header";

// redux
import { Provider } from "react-redux";
import store from "./Redux/store";

// navigations
import Main from "./Navigators/Main";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <Main />
      </NavigationContainer>
    </Provider>
  );
}
