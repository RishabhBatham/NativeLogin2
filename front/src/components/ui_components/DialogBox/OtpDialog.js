import React, {useState,useRef, useEffect} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity,Dimensions,TextInput } from 'react-native';
import InputText from '../TextField/InputText';
import Button from '../ButtonComponent/Button';
import { postData } from '../../../Services/FetchNodeServices';
import { all } from 'axios';
import RazorpayCheckout from 'react-native-razorpay';
import { serverURL } from '../../../Services/FetchNodeServices';


export default function OtpDialog({DialogMain,setDialogMain,setStack,number,setUserAddress,ta}){
    const {width,height}=Dimensions.get('screen')
    const [time,setTime]=useState(30)
    const [sendagain,setSendAgain]=useState(false)
    const [otp,setOtp]=useState('')
    const [firstotp ,setFirstOtp]=useState(0)
    const [secondotp ,setSecondOtp]=useState(0)
    const [thirdotp ,setThirdOtp]=useState(0)
    const [fourthotp ,setFourthOtp]=useState(0)
    const [ error,setError]=useState('')


    useEffect(function(){
      startTimer(25)
   
      var otpset = Math.floor(Math.random()* 9000 + 1000)
      
      alert('your otp is '+otpset)
      setOtp(otpset)
      
    },[])

   const payment=(userAddress)=>{
    
    var options = {
      description: 'Grocery',
      image: `${serverURL}/images/berry.png`,
      currency: 'INR',
      key: 'rzp_test_GQ6XaPC6gMPNwH',
      amount: `${(ta+90)*100}`,
      name: `${userAddress.username}`,
      order_id: '',
      prefill: {
        email: `${userAddress.emailid}`,
        contact: `${userAddress.mobileno}`,
        name: `${userAddress.username}`
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

   }











   const handleOtpInputBox=(num,value)=>{
    
    if(num==1){
       
        if(value.length==1){
            textRef2.current.focus()
        }
        setFirstOtp(value)
    }
    if(num==2){
        if(value.length==1){
            textRef3.current.focus()
        }
        else{
            textRef1.current.focus()
        }
        setSecondOtp(value)
    }
    if(num==3){
        if(value.length==1){
            textRef4.current.focus()
        }
        else{
            textRef2.current.focus()
        }
        setThirdOtp(value)
    }
    if(num==4){
        if(value.length==1){
            textRef4.current.focus()
        }
        else{
            textRef3.current.focus()
        }
        setFourthOtp(value)
    }
    

   }
   
            const textRef1 = useRef();      
            const textRef2 = useRef();
            const textRef3 = useRef();
            const textRef4 = useRef();
  

             
          const handleVerify=async()=>{
            let userOtp = firstotp+''+secondotp+thirdotp+fourthotp
            console.log('user otp is',[firstotp,secondotp,thirdotp,fourthotp],userOtp)
            if(userOtp==otp){
              console.log('otp verifd',number)
              var mobilenostatus = await postData('userinterface/check_mobile_no',{number:number})
              if(mobilenostatus.status){
                console.log('mobile no was found registered')
                var addressstatus = await postData('userinterface/check_address_by_mobile_no',{number:number})
                if(addressstatus.status){
                  console.log('afdd was found registered')
                  setUserAddress(addressstatus.data[0])
                  
                  /* dispatch({type:'ADD_USER',payload:[addressstatus.data[0]]}) */

                  console.log(addressstatus.data[0])
                  payment(addressstatus.data[0])
                  setStack(4)
                }
                else{
                  
                  setStack(3)
                  console.log('afdd was found notregistered')
                }


              }
              else{
                console.log('mobile no was found not registered')
                
                setStack(3)
              }



            }
            else{
              setError('Incorrent Otp')
            }



            startTimer(30)
            
          }
   




   
            const startTimer=(tl)=>{
              var timeLeft = tl;
                         
                            
                            var timerId = setInterval(countdown, 1000);
                            
                            function countdown() {
                              if (timeLeft == 0) {
                                clearTimeout(timerId);
                                 setSendAgain(true)
                              } else {
                               
                                timeLeft--;
                                setTime(timeLeft)
                              }
                            }
                           
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
               <Text style={styles.heading1}>Enter your Otp Code here </Text>
               <View style={styles.otpcontainer}>
               <TextInput  style={styles.otpinput} maxLength={1} ref={textRef1}  onChangeText={(value)=>{handleOtpInputBox(1,value)}} inputMode='tel'  />
               <TextInput  style={styles.otpinput} maxLength={1} ref={textRef2}  onChangeText={(value)=>{handleOtpInputBox(2,value)}}  inputMode='tel'  />
               <TextInput  style={styles.otpinput} maxLength={1} ref={textRef3}  onChangeText={(value)=>{handleOtpInputBox(3,value)}}  inputMode='tel'  />
               <TextInput  style={styles.otpinput} maxLength={1} ref={textRef4}  onChangeText={(value)=>{handleOtpInputBox(4,value)}}  inputMode='tel'  />

               </View>
               <Text>{error}</Text>

               <Button
               onPress={handleVerify}
          
          w={.3} h={0.044} label={'Verify'} bgcolor={'#9BA4B5'}  marginLeft={-4} fontSize={15} textColor={'#394867'} borderColor={'#F1F6F9'}
        />
              <View style={styles.nocode}>

              {sendagain?<>
              
              <Text style={styles.nocode_text2}>Click here to send OTP again  </Text>
              
              </>:<><Text style={styles.nocode_text}>Didnt Recive the code?</Text>
              <Text style={styles.nocode_text}>Request another in {time}s</Text></>}

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
      otpcontainer:{
             justifyContent:'center',
             flexDirection:"row",
             marginBottom:15
      },
      otpinput:{
        backgroundColor:'#F1F6F9',
        width:39,
        height:39,
       marginHorizontal:5,
       fontSize:18,
       paddingLeft:14,
       paddingTop:8,
       fontWeight:'bold'
        
      },
      nocode:{
        marginTop:20
      },
      nocode_text:{
       
        fontSize:11
      },
      nocode_text2:{
       
        fontSize:11,
        color:'#071952'
      }
    
    
    
    });
      