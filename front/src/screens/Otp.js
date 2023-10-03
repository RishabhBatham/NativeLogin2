import React,{useState,useRef,useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,StyleSheet,TextInput
} from 'react-native'

import { Image } from 'react-native';
import InputText from '../components/ui_components/TextField/InputText';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import {postData, getData } from '../Services/FetchNodeServices';
import Button from '../components/ui_components/ButtonComponent/Button';
const {width,height}=Dimensions.get('screen')
import {TouchableOpacity} from 'react-native';




export default function Otp(props){

    var navigateTo=props.route.params.state.navigateto
    var showSuccess =  props.route.params.state.showsuccess


 




    const[success,setSuccess]=useState(false)

  const [userNumber,setUserNumber]=useState('')
  const [userPass,setUserPass]=useState('')

  const navigation = useNavigation()
  const [time,setTime]=useState(30)
  const [sendagain,setSendAgain]=useState(false)
  const [otp,setOtp]=useState('')
  const [firstotp ,setFirstOtp]=useState(0)
  const [secondotp ,setSecondOtp]=useState(0)
  const [thirdotp ,setThirdOtp]=useState(0)
  const [fourthotp ,setFourthOtp]=useState(0)
 
 
  const [ error,setError]=useState('')


  const textRef1 = useRef();      
  const textRef2 = useRef();
  const textRef3 = useRef();
  const textRef4 = useRef();




   
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










  useEffect(function(){
    startTimer(25)
 
    var otpset = Math.floor(Math.random()* 9000 + 1000)
    
   console.log(otpset)
    setOtp(otpset)
    
  },[])



const handleVerify=()=>{
if(firstotp&&secondotp&&thirdotp&&fourthotp){
    let userOtp = firstotp+''+secondotp+thirdotp+fourthotp
    console.log('user otp is',[firstotp,secondotp,thirdotp,fourthotp],userOtp)


if(userOtp==otp){
if(!showSuccess){
    navigation.navigate(navigateTo)
}
else{
    setSuccess(true)
}

}else{
setError('Incorrect OTP')
}
}else{
    setError('Please enter OTP correctly')
}
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
   
  const handleSendAgain=()=>{
    startTimer(20)
    var otpset = Math.floor(Math.random()* 9000 + 1000)
    
    console.log(otpset)
     setOtp(otpset)

  }



return(
    <View style={{justifyContent:'center',position:'relative',alignItems:'center',flexDirection:'column'}}>
       

       <View style={{position:'absolute',display:success?'flex':'none',width:width,height:height*.95,backgroundColor:'#FFF',zIndex:10,justifyContent:'center',alignItems:'center'}}>
        
        <Image style={{width:width,height:100,resizeMode:'contain'}} source={require('../../assets/success.png')}/>
         <Text style={{fontSize:30,color:'#3BD790',fontWeight:'500'}}>
           SUCCESS
         </Text>
         <Text style={{marginTop:4,marginBottom:19}}>
         please go return to login page
         </Text>
         <Button
          onPress={()=>{
            navigation.navigate('Login')
          }
         
         }
          w={.5} h={0.057} label={'Go back'} bgcolor={'#243586'}  marginLeft={0} fontSize={14} textColor={'#fff'} borderColor={'#243586'} borderRadius={15}
        />
        </View>







       <View style={{width:width ,height:130,backgroundColor:'#E2E2E2',borderBottomLeftRadius:20,borderBottomRightRadius:20,display:'flex',justifyContent:'center',alignItems:'flex-end',padding:0,marginTop:'auto'}}>
      
       <Image style={{width:width,height:100,resizeMode:'contain'}} source={require('../../assets/bgt.jpg')}/>
       </View>
       <View style={{justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
         
         <View style={{justifyContent:'center',alignItems:'flex-start',flexDirection:'column',width:width*.88,paddingVertical:10}}>
            <Text style={{fontSize:30,color:'#222',paddingVertical:5,fontWeight:'600'}}>
             Enter OTP
            </Text>
            <Text style={{fontSize:14,color:'#999',paddingVertical:5,fontWeight:'500'}}>
           we have sent it on your number
            </Text>
         </View>

     
       
            
        
               <View style={styles.otpcontainer}>
               <TextInput onPress={()=>{setError('')}} style={styles.otpinput} maxLength={1} ref={textRef1}  onChangeText={(value)=>{handleOtpInputBox(1,value)}} inputMode='tel'  />
               <TextInput onPress={()=>{setError('')}} style={styles.otpinput} maxLength={1} ref={textRef2}  onChangeText={(value)=>{handleOtpInputBox(2,value)}}  inputMode='tel'  />
               <TextInput onPress={()=>{setError('')}} style={styles.otpinput} maxLength={1} ref={textRef3}  onChangeText={(value)=>{handleOtpInputBox(3,value)}}  inputMode='tel'  />
               <TextInput onPress={()=>{setError('')}} style={styles.otpinput} maxLength={1} ref={textRef4}  onChangeText={(value)=>{handleOtpInputBox(4,value)}}  inputMode='tel'  />

               </View>
               <Text style={{color:'#FF5353',marginBottom:0,marginTop:-10}}>{error}</Text>
               
               {
                time>0?<>
                <Text style={{marginBottom:25}}>this otp will expire in {time} s</Text></>:<>
                <Text style={{color:'#273A91',marginBottom:20}} onPress={handleSendAgain}>send otp again</Text>
                </>
               }

    
        {/*       <View style={styles.nocode}>

              {sendagain?<>
              
              <Text style={styles.nocode_text2}>Click here to send OTP again  </Text>
              
              </>:<><Text style={styles.nocode_text}>Didnt Recive the code?</Text>
              <Text style={styles.nocode_text}>Request another in {time}s</Text></>}

              </View> */}
            
           
        
         
         
     

          <Button
         
          w={.78} h={0.057} label={'Verify OTP'} bgcolor={'#243586'}  marginLeft={0} fontSize={14} textColor={'#fff'} borderColor={'#243586'} borderRadius={15} onPress={handleVerify}
        />




       </View>



      <Text style={{marginTop:height*.3,marginLeft:width*.6,color:'#273A91'}} onPress={()=>{navigation.navigate('Login')}}>Incorrect Number?</Text>
    </View>
)



}





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
      backgroundColor:'#FFF',
      width:49,
      height:49,
     marginHorizontal:5,
     fontSize:18,
     paddingLeft:18,
     paddingTop:8,
     color:'#243584',
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
    