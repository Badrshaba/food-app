import { StyleSheet, Text, View } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

const Header = ({headerText,headerIcon}) => {
  return (
    <View style={{flexDirection:'row'}}>
      <Text style={styles.headerText}>{headerText}</Text>
      <FontAwesome name={headerIcon} size={23} color='#f96163'/>
       
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerText:{
    flex:1,
    fontSize:22,
    fontWeight:'700'
  }
})