/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';


import RootNavigation from './android/Navigation/RootNavigation.js';
const {width,height}=Dimensions.get('screen')




import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './storage/RootReducer.js';
var store=createStore(RootReducer)

function App() {
  const [errorMessage,setErrorMessage]=useState('')
  const handleClick=()=>{
    alert('hi')

    
  }
  useEffect(()=>{
    SplashScreen.hide()
 },[])



  return (
 

    <Provider store={store}>
    <RootNavigation />
    </Provider>


  );
}

const styles = StyleSheet.create({
container:{

  alignItems:'center',
  justifyContent:'center',
 
  height:height,
  width:width,
 

}
});

export default App;
