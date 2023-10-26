import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: screen.height * 0.15,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  statsTitle: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 10,
  },
  statsContainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  statsLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon: {
    marginRight: 10,
  },
  hours: {
    fontSize: 20,
  },
});

const StatsNavbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.statsTitle}>My stats</Text>

      <View style={styles.statsContainer}>
        <View style={[styles.statsLeft, { marginRight: 15 }]}>
          <Ionicons
            name="time-outline"
            style={styles.icon}
            size={20}
            color="green"
          />
          <Text style={styles.hours}>0 h 0 m</Text>
        </View>

        <View style={styles.statsLeft}>
          <Ionicons
            name="barbell-outline"
            style={styles.icon}
            size={20}
            color="#CC5CEB"
          />
          <Text style={styles.hours}>0 Exercises</Text>
        </View>
      </View>
    </View>
  );
};

export default StatsNavbar;
