import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
const RecipeDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View style={{ backgroundColor: item.color, flex: 1 }}>
      <SafeAreaView
        style={{ flexDirection: "row", marginHorizontal: 16, marginTop: 10 }}
      >
        <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-circle-left" size={28} color={"white"} />
        </Pressable>
        <FontAwesome name="heart-o" size={28} color={"white"} />
      </SafeAreaView>
      <View style={styles.container}>
        <View
          style={{
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
          }}
        >
          <Image
            source={item.image}
            style={{ width: "100%", height: "100%", resizeMode: "contain",borderRadius:50 }}
          />
        </View>
        <Text style={{ marginTop: 160, fontSize: 28, fontWeight: "bold" }}>
          {item.name}
        </Text>
        <ScrollView style={{paddingHorizontal:2}} showsVerticalScrollIndicator={false}>
          <Text style={{ marginVertical: 16, fontSize: 20,textAlign:'center' }}>
            {item.description}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <View
              style={[
                styles.detailsCard,
                {
                  backgroundColor: "rgba(255,0,0,0.38)",
                },
              ]}
            >
              <Text style={styles.icon}>⏰</Text>
              <Text style={{ fontSize: 20, fontWeight: "400" }}>
                {item.time}
              </Text>
            </View>
            <View
              style={[
                styles.detailsCard,
                {
                  backgroundColor: "rgba(135,206,235,0.8)",
                },
              ]}
            >
              <Text style={styles.icon}>👨‍🍳</Text>
              <Text style={{ fontSize: 20, fontWeight: "400" }}>
                {item.difficulty}
              </Text>
            </View>
            <View
              style={[
                styles.detailsCard,
                {
                  backgroundColor: "rgba(255,166,0,0.48)",
                },
              ]}
            >
              <Text style={styles.icon}>🔥</Text>
              <Text style={{ fontSize: 20, fontWeight: "400" }}>
                {item.calories}
              </Text>
            </View>
          </View>
          <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
            <Text style={{ fontSize: 22, fontWeight: "600" }}>ingredients</Text>
            {item.ingredients.map((ingredient,index) => {
              return (
                <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      backgroundColor: "red",
                      height: 10,
                      width: 10,
                      borderRadius: 5,
                    }}
                  ></View>
                  <Text style={{ fontSize: 18, marginLeft: 6 }}>
                    {ingredient}
                  </Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    marginTop: 240,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: "center",
  },
  icon: {
    fontSize: 35,
  },
  detailsCard: {
    paddingHorizontal: 16,
    borderRadius: 8,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
