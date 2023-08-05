import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Nav from "./components/Nav";
import Banner from "./components/Banner";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "black",
      }}
    >
      <StatusBar style="light" />
      {/* <Nav /> */}
      <Banner />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
