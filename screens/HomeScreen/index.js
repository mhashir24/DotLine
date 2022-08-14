import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions
} from 'react-native';

import logo from '../../assets/logo1.jpeg';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import FList from '../../src/component/FList';
import { HP, WP } from '../../src/constant';

let { width } = Dimensions.get('screen')

const Stack = createNativeStackNavigator();

const arr = ['abc', 'asg', 'hashir']

const HomeScreen = () => {
  const navigation = useNavigation()

  const submit = () => {
    navigation.navigate('Courses')
  }
  return (

    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <View style={{ alignItems: 'center', paddingVertical: HP("1") }}>
        <Image
          source={logo}
        />
      </View>

      <View style={{ backgroundColor: '#E8F8F8', flexDirection: 'row', justifyContent: 'center', paddingVertical: HP("3"), marginHorizontal: WP("3"), borderRadius: 10 }}>
        <View>
          <Text style={{ fontWeight: 'bold', color: 'black' }}>
            {'Login to book courses,'}
          </Text>
          <Text style={{ fontWeight: 'bold', color: 'black' }}>
            {'demo & view invoices'}
          </Text>
        </View>

        <View style={{ borderRadius: 10, marginLeft: 45, paddingHorizontal: 40, justifyContent: 'center', backgroundColor: '#14ABBC' }}>
          <Text style={{ color: 'white' }}>
            {'Login'}
          </Text>
        </View>
      </View>

      <View style={{  flexDirection: 'row', paddingHorizontal: WP("3"), paddingVertical: HP("1.5") }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>
            {'Courses'}
          </Text>
        </View>

        <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#14ABBC' }}>
          {'View All'}
        </Text>
      </View>

      <View style={{ paddingVertical: HP("1"), paddingHorizontal: WP("3"), alignItems: 'center' }}>
        <FlatList
          data={["0", "1", "3", "4"]}
          numColumns={2}
          keyExtractor={item => item}
          ItemSeparatorComponent={() => <View style={{ marginBottom: HP("1") }} />}
          contentContainerStyle={{ width: '100%', justifyContent: 'space-between' }}
          renderItem={() => {
            return (
              <View style={{ borderRadius: 10, marginRight: WP("2"), paddingVertical: HP("3"), paddingHorizontal: HP("2"), backgroundColor: '#fff0f5', width: width / 2.2, }}>
                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>
                  {'Chemistry'}
                </Text>

                <SimpleLineIcons
                  style={{ alignSelf: 'flex-end', marginTop: 30 }}
                  name={'chemistry'}
                  size={25}
                  color={'#F3D690'}

                />
              </View>
            )
          }}
        />
      </View>

      <View style={{  flexDirection: 'row', paddingHorizontal: WP("3"), paddingVertical: HP("1.5") }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>
            {'Top Teachers'}
          </Text>
        </View>

        <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#14ABBC' }}>
          {'View All'}
        </Text>
      </View>

      {/* <View style={{ flex: 1 }}> */}

        <FList />
      {/* </View> */}

      {/* 

      <TouchableOpacity onPress={() => submit()}>
        <View>
          <FList />
        </View>
      </TouchableOpacity> */}




    </View>
  )
}
export default HomeScreen
