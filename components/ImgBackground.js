import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    // shadow for android
    // elevation: 5,
    marginVertical: 10,
    overflow: "hidden",
    borderRadius: 10,
    // shadow for ios
    shadowColor: "red",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    alignItems: "center",
    paddingTop: screen.width * 0.1,
  },
  trial: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  trialButton: {
    width: screen.width * 0.35,
    height: screen.width * 0.11,
    backgroundColor: "#829BE7",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  trialText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

const ImgBackground = ({ imgUrl, title, isTrial }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={imgUrl} style={styles.image}>
        <View style={styles.trial}>
          <Text style={styles.title}>{title}</Text>
          {isTrial && (
            <TouchableOpacity style={styles.trialButton}>
              <Text style={styles.trialText}>Trial Workout</Text>
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default ImgBackground;
