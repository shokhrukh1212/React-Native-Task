import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "#7BE773",
    marginVertical: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#f0f0f0",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {},
  buttonTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

const ContinueButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContinueButton;
