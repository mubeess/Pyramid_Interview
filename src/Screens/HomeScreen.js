import { View, Text, StyleSheet, StatusBar, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../Constants/Colors'
import AppHeader from '../Components/AppHeader'
import Divider from '../Components/Divider'
import PortfolioBalance from '../Components/PortfolioBalance'
import Graph from '../Components/Graph'
import GraphSelector from '../Components/GraphSelector'
import Menu from '../Components/Menu'
import AmounList from '../Components/AmounList'
import ItemMenu from '../Components/ItemMenu'


export default function HomeScreen() {
  const graphSelection=['1H','1D','1W','1M','1Y','ALL']
  const menuList=['Overview','Arts','Crypto','Stocks','Estate']
  const [activeGraphIndex,setActive]=useState(0)
  const [activeMenuIndex,setActiveMenu]=useState(0)
  
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor={Colors.primary}/>
      <AppHeader/>
      <Divider/>
      <PortfolioBalance/>
      <View style={styles.graph}>
      <Graph/>
      <View style={styles.selectionList}>
        {
          graphSelection.map((selection,ind)=>(
            <GraphSelector 
             onPress={()=>setActive(ind)}
             selection={selection} 
             active={activeGraphIndex==ind} 
             key={ind.toString()}/>
          ))
        }
      </View>
      

      <ScrollView showsHorizontalScrollIndicator={false} scrollEnabled horizontal style={styles.menuList}>
      {
          menuList.map((title,ind)=>(
            <Menu 
             onPress={()=>setActiveMenu(ind)}
             title={title} 
             active={activeMenuIndex==ind} 
             key={ind.toString()}/>
          ))
        }
      </ScrollView>
      </View>

     
     <View style={styles.amountList}>
   <AmounList amount='$38,650.31' text='Invested in assets'/>
   <AmounList amount='$650.31' text='Cash Balance'/>
     </View>
      
  
  <View style={styles.itemMenu}>
    <ItemMenu/>
  </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:Colors.primary,
  paddingVertical:20,
  

},
graph:{
  paddingHorizontal:20,
  marginTop:15
},
selectionList:{
  flexDirection:'row',
  justifyContent:'space-around',
  marginTop:5
},
menuList:{
  flexDirection:'row',
  marginTop:20
},
amountList:{
  paddingHorizontal:20,
  marginTop:23,
  
},
itemMenu:{
marginBottom:20,
paddingHorizontal:20
}
})