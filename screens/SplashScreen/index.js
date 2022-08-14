import React, { useEffect } from 'react';

import {
    View,
    Image,
    ImageBackground
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import {
    SkypeIndicator,
  } from 'react-native-indicators';

import homewall from '../../assets/wallss.jpg';

const SplashScreen = ({ }) => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('SignUp')
        }, 3000);
    }, [])

    return (

        <View style={{flex:1}}>

            <ImageBackground
                source={homewall}
                style={{
                    zIndex: 1, opacity: 20,
                    width: '100%',
                    height: '100%'
                }}
                imageStyle={{
                    resizeMode: 'cover'
                }}
            >

                <View style={{flex:1, marginTop:150}}>
                    <SkypeIndicator color='white' />
                </View>

            </ImageBackground>
        </View>


    );
};



export default SplashScreen
