import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AppText from './AppText'
import { Colors } from '../Constants/Colors'

export default function GraphSelector({selection,active,onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <AppText style={{color:active?Colors.lemonGree:Colors.fontColor}} text={selection}/>
    </TouchableOpacity>
  )
}

