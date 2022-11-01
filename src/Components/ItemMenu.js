import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../Constants/Colors'
import AppText from './AppText'
import { ArrowRightIcon, PipeFileIcon } from '../Constants/Icons'

export default function ItemMenu() {
  return (
    <View style={styles.container}>
    <View style={styles.label}>
    <PipeFileIcon/>
    <AppText style={styles.text} text='Account Details'/>
    </View>
    <ArrowRightIcon/>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    height:58,
    width:'100%',
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:18,
    marginBottom:7,
    backgroundColor:Colors.lightGray
},
label:{
    flexDirection:'row',
    alignItems:'center',
},
text:{
    fontSize:16,
    fontWeight:'600',
    marginLeft:18
}
})