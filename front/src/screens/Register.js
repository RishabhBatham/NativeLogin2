import React,{useState,useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import { Image } from 'react-native';
import InputText from '../components/ui_components/TextField/InputText';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import {postData, getData } from '../Services/FetchNodeServices';
import Button from '../components/ui_components/ButtonComponent/Button';
const {width,height}=Dimensions.get('screen')





export default function Register(){


 const navigation = useNavigation()


 const [error,setError]=useState({})

 const [userNumber,setUserNumber]=useState('')
 const [userPass,setUserPass]=useState('')
 const [userName,setUserName]=useState('')
 const [success,setSuccess]=useState(false)

 const handleError=(input,value)=>{
   setError(prev=>({...prev,[input]:value}))

}


const validation = ()=>{
    setError({})
    let isValid = true


  
    if(userNumber.length<10){
      handleError('userNumber',"please input 10 digits mobile no")
      isValid=false
      
    }
    if(userNumber.length>10){
      handleError('userNumber',"Mobile Number too long")
      isValid=false
    }
    if(userPass.length<8){
      handleError('userPass',"password must be atleast 10 digits long")
      isValid=false
    }
    if(containsSpecialChars(userName)){
        handleError('userName',"Username cant include special characters")
    }
    
    return isValid

  }

  function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }

  const handleRegister=async()=>{
    console.log('handle register')
   if(validation()){
    var result = await postData('register',{userName:userName,userNumber:userNumber,userPass:userPass})

      if(result.status){
        navigation.navigate('Otp',{state:{navigateto:'Login',showsuccess:true}})
      }
   }
  }



return(
    <View style={{justifyContent:'center',position:'relative',alignItems:'center',flexDirection:'column'}}>

       
       <View style={{width:width ,height:100,backgroundColor:'#E2E2E2',borderBottomLeftRadius:20,borderBottomRightRadius:20,display:'flex',justifyContent:'center',alignItems:'flex-end',padding:0,marginTop:'auto'}}>
      
       <Image style={{width:width,height:100,resizeMode:'contain'}} source={require('../../assets/bgt.jpg')}/>
       </View>
       <View style={{justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
         
         <View style={{justifyContent:'center',alignItems:'flex-start',flexDirection:'column',width:width*.88,paddingVertical:10}}>
            <Text style={{fontSize:30,color:'#222',paddingVertical:5,fontWeight:'600'}}>
              Hello!
            </Text>
            <Text style={{fontSize:14,color:'#999',paddingVertical:5,fontWeight:'500'}}>
              Creat an account to continue.
            </Text>
         </View>

       

         
         
         <View style={{marginTop:10}}>

         <View style={{marginVertical:2}}>
         <Text style={{fontSize:16,color:'#666',paddingVertical:2,fontWeight:'500'}}>Name</Text>
         <InputText /* icon={'phone'} */setOnFocus={()=>{handleError('userName','')}} setInputValue={setUserName} w={0.8} placeholder="your name..." iconSize={21} errorMessage={error.userName} error={error.userName} borderColor={'#fff'} backgroundColor={'#FFF'} borderRadius={18}/>
         </View>



         <View style={{marginVertical:2}}>
         <Text style={{fontSize:16,color:'#666',paddingVertical:2,fontWeight:'500'}}>Mobile no</Text>
         <InputText /* icon={'phone'}  se*/ setOnFocus={()=>{handleError('userNumber','')}} inputMode={'numeric'} setInputValue={setUserNumber} errorMessage={error.userNumber} error={error.userNumber} w={0.8} placeholder="your phone number..." iconSize={21} borderColor={'#fff'} backgroundColor={'#FFF'} borderRadius={18}/>
         </View>

          <View style={{marginVertical:2}}>
            
         <Text style={{fontSize:16,color:'#666',paddingVertical:2,fontWeight:'500'}}>Password</Text>
         <InputText /* icon={'phone'} */setOnFocus={()=>{handleError('userPass','')}}   setInputValue={setUserPass} w={0.8} placeholder="your password..."  password={true} errorMessage={error.userPass} error={error.userPass} iconSize={21} borderColor={'#fff'} backgroundColor={'#FFF'} borderRadius={18}/>

         </View >
         <Text style={{marginLeft:'auto',marginTop:2,marginBottom:20,color:'#243586'}}>forgot password?</Text>
          </View>

          <Button
          onPress={handleRegister
         
         }
          w={.78} h={0.057} label={'Create an Account'} bgcolor={'#243586'}  marginLeft={0} fontSize={14} textColor={'#fff'} borderColor={'#243586'} borderRadius={15}
        />




       </View>

       <View style={{display:'flex',flexDirection:'row',marginTop:10}}>
        <Text >Already have a Account?</Text>
<TouchableOpacity>
<Text style={{marginHorizontal:4,color:'#243584',fontWeight:'500'}} onPress={()=>navigation.navigate('Login')}>Sign in.</Text>
</TouchableOpacity>
       </View>



    </View>
)



}