import React,{useState} from 'react';

import {
  
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  TextInput
} from 'react-native';
import Styles from "./InputTextCss"
import MCI from "react-native-vector-icons/MaterialCommunityIcons"

const {width,height}=Dimensions.get('screen')

export default function InputText({w,icon,password,placeholder,iconSize,fontSize,inputMode,error=false,errorMessage,borderColor,inputValue,setInputValue,backgroundColor,borderRadius,setOnFocus}) {

  if(!errorMessage){
    errorMessage=''
  }
  if(!inputMode){
    inputMode='text'
  }
  if(!borderColor){
    borderColor='#74b9ff'
  }
  if(!password){
    password=false
  }
  if(!backgroundColor){
    backgroundColor='transparent'
  }
  if(!borderRadius){
    borderRadius=8
  }
   const [errorMsg,setErrorMsg]=useState(errorMessage)
  


    return(<View style={{ margin:5}}>
      <View style={{ flexDirection:'row',  borderColor:error?'#eb2f06':borderColor,borderWidth:1,borderRadius:borderRadius, width:width*w,height:height*0.07,alignItems:'center',backgroundColor:backgroundColor}}>
       <MCI name={icon} size={iconSize?iconSize:36} style={{padding:5}}/>
       <TextInput secureTextEntry={password} onFocus={setOnFocus} onChangeText={(v)=>{setInputValue(v)}} inputMode={inputMode} placeholder={placeholder} style={{fontSize:fontSize?fontSize:20}} />
      </View>
      {error?<View style={{margin:5}}>
        <Text style={{fontSize:12,color:'#eb2f06',fontWeight:700}}>{errorMessage}</Text>

      </View>:<></>}
    </View>)
}


    