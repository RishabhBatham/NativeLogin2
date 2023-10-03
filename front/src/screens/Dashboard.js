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




export default function Dashboard(){

  const [userNumber,setUserNumber]=useState('')
  const [userPass,setUserPass]=useState('')

  const navigation = useNavigation()




return(
    <View style={{justifyContent:'center',position:'relative',alignItems:'center',flexDirection:'column'}}>
        <View style={{position:'relative',width:width,justifyContent:'flex-end',position:'relative',alignItems:'center',flexDirection:'column'}}>
       <View style={{width:width ,height:150,backgroundColor:'#E2E2E2',position:'absolute',left:0,top:0,borderBottomLeftRadius:20,borderBottomRightRadius:20,display:'flex',justifyContent:'center',alignItems:'center',padding:0,marginTop:'auto'}}>
      
       <Image style={{width:width,height:100,resizeMode:'contain'}} source={require('../../assets/bgt.jpg')}/>
       </View>
         
         
          <View style={{width:width*.8,height:150,backgroundColor:'#FFF',borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:60}}>
          <Image style={{width:50,height:50,resizeMode:'contain',borderRadius:50}} source={require('../../assets/user.jpg')}/>
           <Text>user name</Text>
          </View>
          
        <ScrollView>
        <View style={{justifyContent:'center',alignItems:'center',flexWrap:'wrap',flexDirection:'row',marginTop:20}}>
            <View style={{width:width*.4,height:100,backgroundColor:'#FFF',justifyContent:'center',margin:10,alignItems:'center',borderRadius:11}}>
            <Image style={{width:50,height:50,resizeMode:'contain'}} source={require('../../assets/open-book.png')}/>
            <Text>Some title</Text>
            </View>
            <View style={{width:width*.4,height:100,backgroundColor:'#FFF',justifyContent:'center',margin:10,alignItems:'center',borderRadius:11}}>
            <Image style={{width:50,height:50,resizeMode:'contain'}} source={require('../../assets/open-book.png')}/>
            <Text>Some title</Text>
            </View>
            <View style={{width:width*.4,height:100,backgroundColor:'#FFF',justifyContent:'center',margin:10,alignItems:'center',borderRadius:11}}>
            <Image style={{width:50,height:50,resizeMode:'contain'}} source={require('../../assets/open-book.png')}/>
            <Text>Some title</Text>
            </View>
            <View style={{width:width*.4,height:100,backgroundColor:'#FFF',justifyContent:'center',margin:10,alignItems:'center',borderRadius:11}}>
            <Image style={{width:50,height:50,resizeMode:'contain'}} source={require('../../assets/open-book.png')}/>
            <Text>Some title</Text>
            </View>
            <View style={{width:width*.4,height:100,backgroundColor:'#FFF',justifyContent:'center',margin:10,alignItems:'center',borderRadius:11}}>
            <Image style={{width:50,height:50,resizeMode:'contain'}} source={require('../../assets/open-book.png')}/>
            <Text>Some title</Text>
            </View>
            <View style={{width:width*.4,height:100,backgroundColor:'#FFF',justifyContent:'center',margin:10,alignItems:'center',borderRadius:11}}>
            <Image style={{width:50,height:50,resizeMode:'contain'}} source={require('../../assets/open-book.png')}/>
            <Text>Some title</Text>
            </View>
            <View style={{width:width*.4,height:100,backgroundColor:'#FFF',justifyContent:'center',margin:10,alignItems:'center',borderRadius:11}}>
            <Image style={{width:50,height:50,resizeMode:'contain'}} source={require('../../assets/open-book.png')}/>
            <Text>Some title</Text>
            </View>
            <View style={{width:width*.4,height:100,backgroundColor:'#FFF',justifyContent:'center',margin:10,alignItems:'center',borderRadius:11}}>
            <Image style={{width:50,height:50,resizeMode:'contain'}} source={require('../../assets/open-book.png')}/>
            <Text>Some title</Text>
            </View>
           
          </View>
        </ScrollView>

       </View>
      

    </View>
)



}