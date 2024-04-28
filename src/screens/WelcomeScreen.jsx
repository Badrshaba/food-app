import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: "https://i.pinimg.com/564x/6a/20/39/6a2039fbb12d8c45925d983896624bd9.jpg",
        }}
      />
      <Text style={styles.welcomeText}>40k+ Premium Recipes</Text>
      <StatusBar hidden />
      <Text style={styles.welcomeTitle}>Cook Like A Chef</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("RecipeList")}
        style={styles.btn}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
          Let's go
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  img: {
    width: "100%",
    height: "60%",
  },
  welcomeText: {
    color: "#f96163",
    fontSize: 22,
    fontWeight: "bold",
  },
  welcomeTitle: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#3c444c",
    marginTop: 44,
    marginBottom: 40,
  },
  btn: {
    backgroundColor: "#f96163",
    borderRadius: 18,
    paddingVertical: 18,
    width: "80%",
    alignItems: "center",
  },
});
