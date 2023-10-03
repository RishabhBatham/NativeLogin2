
import { useState } from "react"
import{
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons' 
  import {createNativeStackNavigator} from '@react-navigation/native-stack' 



import { View,Dimensions ,Text,Image} from "react-native"
import { flingHandlerName } from "react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler";
import {NavigationContainer} from '@react-navigation/native'
import AppHeader from "../../src/components/ui_components/AppHeader/AppHeader";


import Login from "../../src/screens/Login";
import Register from "../../src/screens/Register";
import Otp from "../../src/screens/Otp";
import Dashboard from "../../src/screens/Dashboard";



const {width,height}=Dimensions.get('screen')
export default function RootNavigation(){
    const Drawer = createDrawerNavigator();
   const Stack = createNativeStackNavigator();
 
   const ProjectDrawer=()=>{

 return( 
    <Drawer.Navigator
    drawerContent={props=><CustomDrawerNavigation{...props}
      />}
    initialRouteName='Dashboard'>
    <Drawer.Screen name="Dashboard" component={Dashboard} options={{headerShown:false, drawerIcon:()=><MCI name={"home-city"} size={24}/>   }}
    />
     <Drawer.Screen name="Products" component={ProductDetails} options={{headerShown:false, drawerIcon:()=><MCI name={"car"} size={24}/>   }}
    />
    
    
   


    </Drawer.Navigator>
 );


   };


  const CustomDrawerNavigation=(props)=>{
  
     return(
       <DrawerContentScrollView>
             <View style={{flexDirection:'column' ,alignItems:'center'}}>
              <Image style={{ resizeMode:'contain',width:35,height:35}} source={require('../../assets/pic.svg')}/>
              <Text style={{margin:5,fontWeight:'bold'}}>Some Name</Text>
              <Text>Phone No:+91122121</Text>
             </View>


        <DrawerItemList {...props}>
          <DrawerItem label="My Profile"
        /*   onPress={()=>{props.navigation.navigate('MyProfile')}  } */
        Icon={()=><MCI name={"home-city"} size={24}/>}

          />

        <DrawerItem label="Settings"
        /*   onPress={()=>{props.navigation.navigate('MyProfile')}  } */
        Icon={()=><MCI name={"account-settings"} size={24}/>}

          />

            

        
        </DrawerItemList>
       </DrawerContentScrollView>
     )


  }









    return(
   
        <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
            
           
            <Stack.Screen name="AppHeader" component={AppHeader} options={{headerShown:false}}/>
        
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
          <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
          <Stack.Screen name="Otp" component={Otp} options={{headerShown:false}}/>
          <Stack.Screen name="Dashboard" component={ProjectDrawer} options={{header:AppHeader}}/>


          </Stack.Navigator> 
        </NavigationContainer>
      
    )
}