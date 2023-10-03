import React,{useState,useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
} from 'react-native'
import { Image } from 'react-native';
import InputText from '../components/ui_components/TextField/InputText';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import {postData, getData } from '../Services/FetchNodeServices';
import Button from '../components/ui_components/ButtonComponent/Button';
const {width,h}=Dimensions.get('screen')
import {TouchableOpacity} from 'react-native';




export default function Login(){

  const [userNumber,setUserNumber]=useState('')
  const [userPass,setUserPass]=useState('')
  const [error,setError]=useState({})

  const handleError=(input,value)=>{
    setError(prev=>({...prev,[input]:value}))
 
}

  const navigation = useNavigation()

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
    
    return isValid

  }





  const handleLogin=async()=>{
   if(validation()){
  
    console.log(userNumber,userPass)
    var userStatus = await postData('getaccountstatus',{userNumber:userNumber,password:userPass})
     console.log(userStatus)  

  
         /*    navigation.navigate('Otp') */
         if(!userStatus.status){
          console.log('handle error ka login set')
          handleError('login',"incorrect username or password")
         }
         else{
          navigation.navigate('Otp',{state:{navigateto:'Dashboard',showsuccess:false}})
         }
          
         
         
        
   }
    
      
    
  }

return(

    <View style={{justifyContent:'center',position:'relative',alignItems:'center',flexDirection:'column'}}>
       
{/*        <View style={{width:width ,height:130,backgroundColor:'#E2E2E2',borderBottomLeftRadius:20,borderBottomRightRadius:20,display:'flex',justifyContent:'center',alignItems:'flex-end',padding:0,marginTop:'auto'}}> */}
      
       <Image style={{width:width,resizeMode:'contain',marginTop:-135,marginBottom:-114}} source={require('../../assets/bgt2.png')}/>
     {/*   </View> */}
       <View style={{justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
         
         <View style={{justifyContent:'center',alignItems:'flex-start',flexDirection:'column',width:width*.88,paddingVertical:10}}>
            <Text style={{fontSize:30,color:'#222',paddingVertical:5,fontWeight:'600'}}>
              Welcome Back!
            </Text>
            <Text style={{fontSize:14,color:'#999',paddingVertical:5,fontWeight:'500'}}>
              Hello there Login To Continue
            </Text>
         </View>

         <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',width:width*.88,paddingVertical:10}}>
           <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',backgroundColor:'#fff',paddingVertical:3,paddingHorizontal:20,borderRadius:100,marginHorizontal:10}}>
           <Image style={{width:20,height:20,resizeMode:'contain',marginVertical:10,marginHorizontal:5}} source={require('../../assets/goolge.png')}/>
           <Text style={{color:'#222'}}>Google </Text>
           </View>
           <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',backgroundColor:'#383D95',paddingVertical:3,paddingHorizontal:10,borderRadius:100,marginHorizontal:10}}>
           <Image style={{width:40,height:40,resizeMode:'contain'}} source={require('../../assets/facebook.png')}/>
           <Text style={{color:'#FFF'}}>Facebook </Text>
           </View>
           
         </View>

         <View>
          <Text>or sign in with</Text>
         </View>
         
         
         <View style={{marginTop:10}}>
         <View style={{marginVertical:2}}>
         <Text style={{fontSize:16,color:'#666',paddingVertical:2,fontWeight:'500'}}>Mobile no</Text>
         <InputText setInputValue={setUserNumber} setOnFocus={()=>{handleError('userNumber','')}} errorMessage={error.userNumber} error={error.userNumber} inputMode={'numeric'} icon={'phone'} w={0.8} placeholder="your phone number..." iconSize={21} borderColor={'#fff'} backgroundColor={'#FFF'} borderRadius={18}/>
         </View>

          <View style={{marginVertical:2}}>
            
         <Text style={{fontSize:16,color:'#666',paddingVertical:2,fontWeight:'500'}}>Password</Text>
         <InputText icon={'phone'} setOnFocus={()=>{handleError('userPass','')}} setInputValue={setUserPass} w={0.8} password={true} placeholder="your password..." iconSize={21} errorMessage={error.userPass} error={error.userPass} borderColor={'#fff'} backgroundColor={'#FFF'} borderRadius={18}/>

         </View >
         <Text style={{paddingLeft:10,paddingBottom:13,color:'#E13131'}}>{error.login}</Text>
         <Text style={{marginLeft:'auto',marginTop:2,marginBottom:11,color:'#243586'}}>forgot password?</Text>
        
          </View>
        
          <Button
          onPress={handleLogin}
          w={.78} h={0.057} label={'Login'} bgcolor={'#243586'}  marginLeft={0} fontSize={14} textColor={'#fff'} borderColor={'#243586'} borderRadius={15}
        />




       </View>

       <View style={{display:'flex',flexDirection:'row',marginTop:10}}>
        <Text >Dont have a Account?</Text>
      <TouchableOpacity>
      <Text style={{marginHorizontal:4,color:'#243584',fontWeight:'500'}} onPress={()=>navigation.navigate('Register')}>Sign up</Text>
      </TouchableOpacity>
       </View>


     
    </View>
    
)



}