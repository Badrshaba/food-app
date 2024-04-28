import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES, COLOR } from "../utils/Constant";

const CategoriesFilter = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {CATEGORIES.map((category,index ) => (
          <View
            key={category.id}
            style={{
              backgroundColor: index==0? COLOR.PRIMARY : COLOR.LIGHT,
              marginRight: 36,
              borderRadius: 8,
              paddingHorizontal: 16,
              paddingVertical: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
              marginVertical:16
            }}
          >
            <Text style={{color: index==0&&COLOR.LIGHT}} >{category.category}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesFilter;

const styles = StyleSheet.create({});
