import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import 'react-native-gesture-handler';


export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const LogIn = () => {
        navigation.navigate('RegistrationScreen')
    }

    const onLoginPress = () => {
        navigation.navigate('DashboardScreen')
        }
    
    return (
        <View style = {styles.mainView}>
            <View style= {styles.TopView}></View>
            
            <View style = {styles.IconName}>
            <Image style = {styles.ImageStyle} source={require('../../assets/head-icon.png')}/>

            <Text  style = {styles.Heading}>

                BOUNDLESS {'\n'}
                CHARGING  {'\n'}
                    <Text style = {styles.Slogan}>
                    ONLINE SHOPPING
                    </Text>
            </Text>
            </View>
            <Text style = {styles.Reg}>
                    Login
                    </Text>

            <View style= {styles.FormView}>
            
                  <TextInput  value = {email} email = 'email'
                    onChangeText={(email) => {setEmail(email)}}
                    placeholder= {"Email Address"} 
                    placeholderTextColor={"black"} 
                    style = {styles.TextInput}/>

                 <TextInput value = {password} password = 'password'
                    onChangeText={(password)=> {setPassword(password)}}
                    placeholder= {"Password"} secureTextEntry={true}
                    placeholderTextColor={"black"} style = {styles.TextInput}/>

                <TouchableOpacity style= {styles.Button} onPress={() => navigation.navigate('DashboardScreen')}>
                    <Text style= {styles.ButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
           <TouchableOpacity style= {styles.SignUpButton}  onPress={ () => navigation.navigate('RegistrationScreen')}>
           <Text style = {styles.SignUpText}>
                Don't have an account? Sign Up
            </Text>
           </TouchableOpacity>
        </View>
    );
}
