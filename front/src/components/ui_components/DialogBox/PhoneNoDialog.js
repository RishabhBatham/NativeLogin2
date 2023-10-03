import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity,Dimensions } from 'react-native';
import InputText from '../TextField/InputText';
import { Signin } from './Signin';
import OtpDialog from './OtpDialog';
import AddressDialog from './AddresDialog';
import { useSelector } from 'react-redux';
 

export function PhoneNoDialog ({DialogMain,setDialogMain}) {

  var cart=useSelector(state=>state.products)

  var cartlist=Object.values(cart)

  var ta=cartlist.reduce(totalAmount,0)
  function totalAmount(a,b){
     price=b.offer>0?b.offer*b.qty:b.rate*rate
     return(a+price)
 
   }
  
  const[number,setNumber]=useState('')


  const {width,height}=Dimensions.get('screen')
  const [stack,setStack]=useState(1)
  const [userAddress,setUserAddress]=useState({})
  var dialogrender = ''
     if(stack==1){
      dialogrender =   <Signin  DialogMain={DialogMain} setDialogMain={setDialogMain} setStack={setStack} setNumber={setNumber} />
    } 
    else if(stack==2){
        dialogrender =   <OtpDialog  DialogMain={DialogMain} setDialogMain={setDialogMain} setStack={setStack} number={number} ta={ta} setUserAddress={setUserAddress} setNumber={setNumber} />
      }
     else if(stack==3){
      dialogrender =   <AddressDialog  DialogMain={DialogMain} setDialogMain={setDialogMain} setStack={setStack} ta={ta}  />
     }



  return (
    <View style={styles.centeredView}>
            
        {dialogrender}

      
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight:'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  heading1: {
    marginBottom: 15,
    textAlign: 'left',
    fontSize:13,
    fontWeight:'bold',
    paddingLeft:4
   
  },
  button:{
    borderRadius: 20,
    padding: 10,
 
    marginTop:10

  },
  textbtn:{
    fontSize:14,
    backgroundColor:'grey',
    borderRadius:4,
    paddingVertical:4.9,
    color:'#FFF',

    textAlign:'center'
    
  },
  text2:{
      textAlign:'center',
     
      color:'#3E54AB'
      
  }




});
  {/*  <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() =>setDialogMain(false)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
        