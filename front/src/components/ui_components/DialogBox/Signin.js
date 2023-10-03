import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity,Dimensions } from 'react-native';
import InputText from '../TextField/InputText';
 

export function Signin ({DialogMain,setDialogMain,setStack,setNumber}) {

  const {width,height}=Dimensions.get('screen')
  const [usernum,setUserNum]=useState('')
  const [error,setError]=useState({})
  
  const handleSign=()=>{
    console.log('user num is '+usernum)
    if(validation()){
      setNumber(usernum)
      setStack(2)
    }

  }
  
  const validation=()=>{
    let isvalid= false;
     if(usernum.length<10){
      setError({'num' :'mobile no to short'})
     }
     else{
      isvalid=true;
     }
     return isvalid

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
              <View >
                <Text style={styles.heading1} >Sign In</Text>
                <InputText setInputValue={setUserNum} icon={'phone'} w={0.6} placeholder="Enter Mobile No"  iconSize={22} fontSize={16} borderColor="#245953" inputMode='tel'/>
                 <Text style={styles.errortext} >{error.num}</Text>
                 <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                    <View style={{width:40,height:1,backgroundColor:'gray' ,margin:3}}></View>
                   <Text style={styles.heading2}>or</Text>
                   <View style={{width:40,height:1,backgroundColor:'gray' ,margin:3}}></View>
                   </View>
              
                <InputText  icon={'form-textbox-password'} w={0.6} placeholder="Enter emailid" iconSize={22} borderColor="#245953" fontSize={16}  />


                <TouchableOpacity  style={styles.button}  /*  onPress={handleClick} */>
                  <Text style={styles.textbtn} onPress={handleSign} >Get OTP</Text>
                </TouchableOpacity>
                <View style={{flexDirection:"column", justifyContent:"space-evenly", width:width*.6}}>
            <Text style={styles.text2}>Terms of services</Text>
            <Text style={styles.text2}>Privacy policy</Text></View>
              </View>
                
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
    marginBottom: 15,
    textAlign: 'left',
    fontSize:13,
    fontWeight:'bold',
    paddingLeft:4
   
  },  heading2: {
   
    textAlign: 'center',
    fontSize:12,
    fontWeight:'bold',
    
   
  },
  button:{
    borderRadius: 20,
    padding: 10,
 
    marginTop:10

  },
  textbtn:{
    fontSize:14,
    backgroundColor:"#9BA4B5",
    borderRadius:4,
    paddingVertical:4.9,
    color:'#FFF',

    textAlign:'center'
    
  },
  text2:{
      textAlign:'center',
     
      color:'#3E54AB'
      
  },
 errortext:{
      fontSize:10
      ,
      color:'#B31312',
      paddingLeft:4
      
  }




});
  