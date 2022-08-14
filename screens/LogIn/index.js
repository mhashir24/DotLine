import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import logo from '../../assets/logo1.jpeg';


const LogIn = () => {
    const navigation = useNavigation()

    const submit = () => {
        navigation.navigate('SelectLevel')
    }

    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <View style={{ alignItems: 'center', marginTop: 15 }}>
                <Image
                    source={logo}
                />
            </View>


            <View>
                <TextInput
                    style={{ borderWidth: 1, borderRadius: 3, borderColor: '#dcdcdc', marginHorizontal: 20, marginTop: 50, paddingLeft: 30 }}
                    placeholder='Email'
                />

                <TextInput
                    style={{ borderWidth: 1, borderRadius: 3, borderColor: '#dcdcdc', marginHorizontal: 20, marginTop: 15, paddingLeft: 30 }}
                    placeholder='Password'
                />

                <TouchableOpacity onPress={() => submit()}>
                <View style={{
                    borderRadius: 5, paddingVertical: 15,
                    marginHorizontal: 20, marginTop: 15, backgroundColor: '#14ABBC', alignItems: 'center'
                }}>
                    <Text style={{ color: 'white', fontSize: 16 }}>
                        {'Login'}
                    </Text>

                </View>
                </TouchableOpacity>
            </View>

            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'#14ABBC', marginTop:20}}>
                    {'Forgot Password?'}
                </Text>

                <Text style={{color:'black', fontSize:12, marginTop:50}}>
                    {'By tapping Signup you are agreeing to Dot & Line'}
                </Text>

                <View style={{flexDirection:'row'}}>
                <Text style={{color:'black', fontSize:12, marginRight:3}}>
                    {'Leaning'}
                </Text>

                <Text style={{color:'#14ABBC', fontSize:12}}>
                    {'Terms & Condition'}
                </Text>
                </View>


                <View style={{flexDirection:'row', marginTop:15}}>
                <Text style={{color:'black', fontSize:15, marginRight:3}}>
                    {"Don't have an account?"}
                </Text>

                <Text style={{color:'#14ABBC', fontSize:15}}>
                    {'Join Now'}
                </Text>

                </View>


            </View>






        </View>
    )
}
export default LogIn
