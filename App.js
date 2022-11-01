import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeNavigation from './src/Navigation/HomeNavigation';

export default function App() {
  return (
    <NavigationContainer>
     <HomeNavigation/>
    </NavigationContainer>
  );
}


