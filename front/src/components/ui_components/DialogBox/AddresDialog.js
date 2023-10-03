import React, {useState,useRef, useEffect} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity,Dimensions,TextInput } from 'react-native';
import InputText from '../TextField/InputText';
import RazorpayCheckout from 'react-native-razorpay';
import { serverURL } from '../../../Services/FetchNodeServices';


import Button from '../ButtonComponent/Button';


export default function AddressDialog({DialogMain,setDialogMain,setStack,ta}){
 

  




   const handleSave=()=>{

    console.log(ta)

 
    var options = {
      description: 'Credits towards consultation',
      image: `${serverURL}/images/berry.png`,
      currency: 'INR',
      key: 'rzp_test_GQ6XaPC6gMPNwH',
      amount: `${(ta+90)*100}`,
      name: 'Lettica',
      order_id: '',
      prefill: {
        email: 'usermail',
        contact: '1111111',
        name: 'User'
      },
      theme: {color: '#0B666A'}
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    }); 



    setStack(4)
   }



    return (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={DialogMain}
            onRequestClose={() => {
              
              setDialogMain(false) ;
            }}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
               <View style={styles.textcontainer}>
               <Text style={styles.textcontainer_text}>Looks like you dont have any saved Address</Text>
               <Text style={styles.textcontainer_text}>Please provide one</Text>
               </View>
            
           
              
               <View style={styles.inputcontainer}>
               <Text style={{marginLeft:7}} >Personal details</Text>
               <InputText  w={0.66} placeholder="Enter first Name" iconSize={22} borderColor="#245953" fontSize={14}  />
               <InputText  w={0.66} placeholder="Enter last Name" iconSize={22} borderColor="#245953" fontSize={14}  />
               </View>
               
               <View style={styles.inputcontainer}>
               <Text style={{marginLeft:7}} >Address details</Text>
               <InputText  w={0.66} placeholder="Address Line 1" iconSize={22} borderColor="#245953" fontSize={14}  />
               <View style={{justifyContentL:'center',flexDirection:'row',alignItems:'center'}}>
               <InputText  w={0.32} placeholder="City" iconSize={22} borderColor="#245953" fontSize={14}  />
               <InputText  w={0.32} placeholder="State" iconSize={22} borderColor="#245953" fontSize={14}  />
               </View>
               </View>
              

               <Button
               onPress={handleSave}
          
          w={.3} h={0.044} label={'Save'} bgcolor={'#9BA4B5'}  marginLeft={-4} fontSize={15} textColor={'#394867'} borderColor={'#F1F6F9'}
        />
              
              
            </View>
            </View>
          </Modal>
         
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
        marginBottom: 30,
        textAlign: 'left',
        fontSize:14,
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
          
      },
      inputcontainer:{
             justifyContent:'flex-start',
             flexDirection:"column",
             marginBottom:25
      },
      textcontainer:{
    
       
       marginBottom:15,
       
        
      },
      textcontainer_text:{
        fontWeight:'bold',
        fontSize:13,
      },
      nocode_text:{
       
        fontSize:11
      },
      nocode_text2:{
       
        fontSize:11,
        color:'#071952'
      }
    
    
    
    });