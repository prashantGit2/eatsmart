import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Screen from '../components/Screen'

const Home = () => {
    return (
        <Screen>

        <View style={styles.Home}>
            <Text style={styles.text}>Home hey my name is khan</Text>
            <Text style={styles.text}>Home hey my name is khan</Text>
            <Text style={styles.text}>Home hey my name is khan</Text>
            <Text style={styles.text}>Home hey my name is khan</Text>
            <Text style={styles.text}>Home hey my name is khan</Text>
            <Text style={styles.text}>Home hey my name is khan</Text>
        </View>
        </Screen>
    )
}

export default Home

const styles = StyleSheet.create({
    Home:{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'pink' },
    text:{flex:1,borderWidth:1,borderColor:"blue", width:'100%'}
})