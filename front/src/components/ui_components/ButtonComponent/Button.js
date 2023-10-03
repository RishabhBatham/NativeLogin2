
import React from 'react';

import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native';
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
const {width,height}=Dimensions.get('screen')

 export default function Button({w,h,label,onPress,bgcolor,fontSize,textColor,borderColor,marginLeft,borderRadius}){

  if(!borderRadius){
    borderRadius=10
  }


   return(<TouchableOpacity onPress={onPress} style={{margin:5}}>
   <View style={{flexDirection:'row',width:width*w,height:height*h,justifyContent:'center',alignItems:'center' ,marginLeft:marginLeft?marginLeft:0 ,backgroundColor:bgcolor,borderRadius:8,alignItems:'center',borderColor:borderColor,borderWidth:1,borderRadius:borderRadius}}>
    <Text style={{color:textColor,fontSize:fontSize,fontWeight:700}}>{label}</Text>
</View>

 </TouchableOpacity>)
}
const style = StyleSheet.create({
    box:{
        width:width*0.5,
        height:height*0.3,
      },
})
    