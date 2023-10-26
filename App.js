import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import StatsNavbar from "./windows/StatsNavbar";
import RowSeperator from "./components/RowSeperator";
import Main from "./windows/Main";

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#f0f0f0"
          style="auto"
        />

        <StatsNavbar />
        <RowSeperator />
        <Main />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
