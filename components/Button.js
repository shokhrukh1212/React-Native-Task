import { TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    minWidth: 100,
    maxWidth: 150,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#F07427",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginRight: 6,
  },
  buttonActive: {
    backgroundColor: "#CC6678",
  },
  buttonTitle: {
    color: "#000",
    fontSize: 14,
    fontWeight: 500,
  },
  buttonTitleActive: {
    color: "#fff",
  },
});

const Button = ({ title, isActive, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, isActive ? styles.buttonActive : ""]}
      onPress={onPress}
    >
      <Text
        style={[styles.buttonTitle, isActive ? styles.buttonTitleActive : ""]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
