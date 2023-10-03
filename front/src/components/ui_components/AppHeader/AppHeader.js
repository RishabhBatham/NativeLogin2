import React,{useState} from 'react';
import {
  Image,
  View,
  Dimensions,
} from 'react-native';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons' 
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const {width,height}=Dimensions.get('screen')

export default function AppHeader(props) {
  var navigation = useNavigation();
  
  return (
   <View>
   <View style={{width:width,height:height*0.09,flexDirection:'row',justifyContent:'space-between',padding:10,alignItems:'center'}}>
   <MCI name="menu" size={35}
   onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
   />
   <Image
          style={{resizeMode: 'contain', width: 35, height: 35}}
          source={require('../../../../assets/bunnn.jpg')}
          
        /> 

   
    

   </View>
   </View>
  )}