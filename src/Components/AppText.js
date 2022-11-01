import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import { Colors } from '../Constants/Colors';
export default function AppText({text,header,label,style}) {
    const [fontsLoaded] = useFonts({
        'OpenSans-Regular': require('../../assets/Fonts/OpenSans-Regular.ttf'),
      });
  return (
   <Text style={[styles.font,{
    fontSize:header?17:14,
    fontWeight:header?'bold':'600',
    color:label?Colors.labelColor:Colors.fontColor,
    fontFamily:fontsLoaded?'OpenSans-Regular':''
   },style]}>{text}</Text>
  )
}

const styles = StyleSheet.create({
    font:{
    color:Colors.fontColor
    }
})