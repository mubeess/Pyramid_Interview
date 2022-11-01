import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar, Image } from 'react-native'
import React from 'react'
import { Colors } from '../Constants/Colors'
import AppText from './AppText'
import { TargetIcon } from '../Constants/Icons'

export default function AppHeader() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.imageContainer}>
    <Image style={styles.image} source={require('../../assets/Images/Round.png')}/>
    <View style={styles.imageDot}></View>
    </View>

    <AppText header={true} text='Portfolio'/>

     <TargetIcon style={styles.icon}/> 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 container:{
 paddingTop:Platform.OS=='ios'?0:StatusBar.currentHeight,
 flexDirection:'row',
 justifyContent:'space-between',
 alignItems:'center',
 position:'relative',
 paddingHorizontal:20,
 
 },
 imageContainer:{
position:'relative',
marginLeft:Platform.OS=='ios'?20:0
 },
 image:{
    width:32,
    height:32
 },
 imageDot:{
  position:'absolute',
  height:10,
  width:10,
  backgroundColor:Colors.active,
  borderRadius:20,
  right:0
 },
 icon:{
  marginRight:Platform.OS=='ios'?20:0
 }
})