import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import AppText from './AppText'
import { Colors } from '../Constants/Colors'

export default function Menu({title,active=false,onPress}) {
  return (
   <TouchableOpacity onPress={onPress} style={[styles.container,{
    backgroundColor:active?Colors.dark:Colors.lightGray
   }]}>
    <AppText style={[styles.title,{
        color:active?Colors.primary:Colors.dark
    }]} text={title}/>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    height:24,
    minWidth:24,
    paddingHorizontal:8,
    paddingVertical:2,
    borderRadius:100,
    marginHorizontal:10
  },
  title:{
    
  }
})