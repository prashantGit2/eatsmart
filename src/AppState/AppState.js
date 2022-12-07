import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import AppNavigation from '../AppNavigation/AppNavigation'

const AppState = () => {
    const [allNotes, setAllNotes] = useState([])
    const [note, setNote] = useState()

    const AppState = {
        allNotes,
        setAllNotes,
        note,
        setNote
    }

  return (
      <AppNavigation style={styles.container} AppState={AppState}/>
  )
}

export default AppState

const styles = StyleSheet.create({container:{flex:1,backgroundColor:"yellow"}})