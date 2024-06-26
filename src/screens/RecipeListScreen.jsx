import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchFilter from '../components/SearchFilter'
import CategoriesFilter from '../components/CategoriesFilter'
import RecipeCard from '../components/RecipeCard'


const RecipeListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header headerIcon={'bell-o'} headerText={'Hi, Badr'}/>
      <SearchFilter icon={'search'} placeholder={'enter your fav recipe'}/>
    <View style={{marginTop:22}}>
        <Text style={styles.category} >Categories</Text>
        <CategoriesFilter/>
    </View>
    <View style={{marginTop:22,flex:1 }} >
        <Text style={styles.recipes}>Recipes</Text>
        <RecipeCard/>
    </View>
    </SafeAreaView>
  )
}

export default RecipeListScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal:16,
    marginTop:10
  },
  category:{
    fontSize:22,
    fontWeight:'bold'
  },
  recipes:{
    fontSize:22,
    fontWeight:'bold'
  }
}) 