import { View, StyleSheet, Text } from "react-native";
import ImgBackground from "./ImgBackground";

const imgUrls = [
  require("../assets/images/try.jpg"),
  require("../assets/images/start.jpg"),
  require("../assets/images/continue.jpg"),
  require("../assets/images/finish.jpg"),
];

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    justifyContent: "flex-start",
  },
  try: {},
  header: {
    fontSize: 22,
    fontWeight: 800,
    marginTop: 20,
  },
  continue: {},
  continueText: {
    fontSize: 22,
    fontWeight: 800,
    marginTop: 25,
  },
});

const Workout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.try}>
        <Text style={styles.header}>Try</Text>
        <ImgBackground
          imgUrl={imgUrls[0]}
          title="Mandatory instructions"
          isTrial={true}
        />
      </View>

      <View style={styles.continue}>
        <Text style={styles.continueText}>Continue</Text>
        <ImgBackground
          imgUrl={imgUrls[1]}
          title="Through the 8th week"
          isTrial={false}
        />
        <ImgBackground
          imgUrl={imgUrls[2]}
          title="Through the 10th week"
          isTrial={false}
        />
        <ImgBackground
          imgUrl={imgUrls[3]}
          title="Through the 15th week"
          isTrial={false}
        />
      </View>
    </View>
  );
};

export default Workout;
