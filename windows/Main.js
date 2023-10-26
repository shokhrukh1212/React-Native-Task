import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "../components/Button";
import ContinueButton from "../components/ContinueButton";
import Workout from "../components/Workout";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 600,
    marginTop: 10,
    marginBottom: 15,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});

const Main = () => {
  const [buttonsArr, setButtonsArr] = useState([
    { isActive: true },
    { isActive: false },
    { isActive: false },
  ]);

  const handlePress = (btnIndex) => {
    const newButtonsArr = buttonsArr.map((btn, index) => {
      if (btnIndex === index) return { ...btn, isActive: true };
      else return { ...btn, isActive: false };
    });

    setButtonsArr(newButtonsArr);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Trimesters</Text>
        <View style={styles.buttonsContainer}>
          {buttonsArr.map((item, index) => (
            <Button
              key={index + 1}
              title={`Trimester ${index + 1}`}
              isActive={item.isActive}
              onPress={() => handlePress(index)}
            />
          ))}
        </View>
      </View>

      <Workout />
      <ContinueButton />
    </View>
  );
};

export default Main;
