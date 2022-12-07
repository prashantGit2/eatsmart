import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {StatusBar} from 'react-native';
import { Platform} from 'react-native'
const Screen = ({children}) => {
  return (
    <View style={styles.container}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: Platform.OS === 'android'?StatusBar.currentHeight:0,
        
    }})
export default Screen