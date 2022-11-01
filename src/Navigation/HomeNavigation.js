import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, NotificationIcon, PlusIcon, PortfolioIcon, SearchIcon } from '../Constants/Icons';
import HomeScreen from '../Screens/HomeScreen';
import IonIcons from '@expo/vector-icons/Ionicons'
import AntDesign from '@expo/vector-icons/AntDesign'
import DefaultScreen from '../Screens/DefaultScreen';
const Tab = createBottomTabNavigator();
const ActiveColor='rgba(0,0,0,1)'
const DisabledColor='rgba(0,0,0,0.5)'
function HomeNavigation() {
  return (
    <Tab.Navigator 
    screenOptions={
     {
     headerShown:false,
     tabBarShowLabel:false
     }
    }
    >
 <Tab.Screen 
       options={{
        tabBarIcon:({focused})=><HomeIcon focused={focused}/>
      }} name="Home" component={HomeScreen} />


<Tab.Screen 
       options={{
        tabBarIcon:({focused})=><SearchIcon focused={focused}/>
      }} name="Search" component={DefaultScreen} />



<Tab.Screen 
       options={{
        tabBarIcon:({focused})=><PlusIcon focused={focused}/>
      }} name="Add" component={DefaultScreen} />

<Tab.Screen 
       options={{
        tabBarIcon:({focused})=><NotificationIcon focused={focused}/>
      }} name="Notifications" component={DefaultScreen} />

<Tab.Screen 
       options={{
        tabBarIcon:({focused})=><PortfolioIcon focused={focused}/>
      }} name="Profile" component={DefaultScreen} />
    </Tab.Navigator>


  );
}

export default HomeNavigation 