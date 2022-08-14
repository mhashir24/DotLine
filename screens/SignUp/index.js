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


const SignUp = () => {
    const navigation = useNavigation()

    const submit = () => {
        navigation.navigate('LogIn')
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
                    placeholder='Name'
                />

                <TextInput
                    style={{ borderWidth: 1, borderRadius: 3, borderColor: '#dcdcdc', marginHorizontal: 20, marginTop: 10, paddingLeft: 30 }}
                    placeholder='Phone'
                />

                <TextInput
                    style={{ borderWidth: 1, borderRadius: 3, borderColor: '#dcdcdc', marginHorizontal: 20, marginTop: 10, paddingLeft: 30 }}
                    placeholder='Email'
                />

                <TextInput
                    style={{ borderWidth: 1, borderRadius: 3, borderColor: '#dcdcdc', marginHorizontal: 20, marginTop: 10, paddingLeft: 30 }}
                    placeholder='Password'
                />

                <View style={{
                    borderRadius: 5, paddingVertical: 15,
                    marginHorizontal: 20, marginTop: 15, backgroundColor: '#14ABBC', alignItems: 'center'
                }}>
                    <Text style={{ color: 'white', fontSize: 16 }}>
                        {'Sign Up'}
                    </Text>

                </View>
            </View>

            <View style={{justifyContent:'center', alignItems:'center'}}>

                <Text style={{color:'black', fontSize:12, marginTop:20}}>
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
                    {"Already have an account?"}
                </Text>
                <TouchableOpacity onPress={() => submit()}>
                <Text style={{color:'#14ABBC', fontSize:15}}>
                    {'Login Now'}
                </Text>
                </TouchableOpacity>

                </View>


            </View>






        </View>
    )
}
export default SignUp
