import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { COLOR, recipeList } from "../utils/Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = () => {
    const navigation = useNavigation()
  return (
    <View>
      <FlatList
        data={recipeList}
        renderItem={({ item }) => (
          <Pressable
          onPress={()=>navigation.navigate('RecipeDetails',{item})}
            style={styles.card}
          >
            <Image
              source={item.image}
              style={{ width: 150, height: 150, resizeMode: "center" }}
            />
            <Text>{item.name}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" ,marginTop:8}}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{marginHorizontal:4}} >{item.time}</Text>
                <Text>|</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{marginHorizontal:4}} >{item.rating}</Text>
                <FontAwesome name="star" size={16} color={COLOR.PRIMARY} />
              </View>
            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  card:{
    backgroundColor: COLOR.LIGHT,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    borderRadius: 16,
    marginVertical: 16,
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 26,
  }
});
