import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    FlatList
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


import homewall from '../../assets/homewall.jpg';
import Teacher1 from '../../assets/TEACHER01.jpg';
import CourseList from '../../src/component/CourseList';
import ReviewData from '../../src/component/ReviewData';


const Courses = () => {
    const [change, setChange] = useState(0)

    return (

        <View style={{ flex: 1, borderWidth: 1 }}>

            <View>
                <Image
                    source={homewall}
                    style={{
                        zIndex: -1, position: 'absolute', opacity: 20,
                        width: '100%', // applied to Image
                        height: '100%',
                        borderWidth: 1
                    }}

                />

                <Feather
                    style={{ marginLeft: 15, marginTop: 15 }}
                    name={'arrow-left'}
                    size={20}
                    color={'white'}
                />

                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                    <View style={{ flexDirection: 'column', padding: 10 }}>
                        <Image
                            style={{ height: 110, width: 100, borderRadius: 10, marginLeft: 10 }}
                            source={Teacher1}
                        />

                        <View style={{
                            backgroundColor: '#FBC443', borderRadius: 10, alignItems: 'center', paddingHorizontal: 5, paddingVertical: 2, flexDirection: 'row',
                            justifyContent: 'center', position: 'absolute', top: 105, left: 45
                        }}>

                            <AntDesign
                                style={{ marginRight: 5 }}
                                name={'star'}
                                size={12}
                                color={'white'}
                            />

                            <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>
                                {'4.5'}
                            </Text>
                        </View>
                    </View>

                    <View style={{ padding: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>
                            {'Saima Amir'}
                        </Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <FontAwesome5
                                style={{ marginRight: 8 }}
                                name={'user-graduate'}
                                size={13}
                                color={'white'}
                            />

                            <Text style={{ color: 'white' }}>
                                {'Grade: 2,3,4'}
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <Ionicons
                                style={{ marginRight: 8 }}
                                name={'location-outline'}
                                size={13}
                                color={'white'}
                            />

                            <Text style={{ color: 'white' }}>
                                {'Onsite'}
                            </Text>
                        </View>


                    </View>



                </View>



                <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 10 }}>

                    <TouchableOpacity onPress={() => setChange(0)}>
                        <View style={{ borderBottomColor: change === 0 ? '#27A9C5' : 'white', paddingHorizontal: 15, borderBottomWidth: change === 0 ? 4 : 0, marginRight: 10, paddingBottom: 10 }}>
                            <Text style={{ color: change === 0 ? 'white' : '#738ACD', fontWeight: 'bold' }}>
                                {'Profile'}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setChange(1)}>
                        <View style={{ borderBottomColor: change === 1 ? '#27A9C5' : 'white', paddingHorizontal: 15, borderBottomWidth: change === 1 ? 4 : 0, marginRight: 10, paddingBottom: 10 }}>
                            <Text style={{ color: change === 1 ? 'white' : '#738ACD', fontWeight: 'bold' }}>
                                {'Courses'}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setChange(2)}>
                        <View style={{ borderBottomColor: change === 2 ? '#27A9C5' : 'white', paddingHorizontal: 15, borderBottomWidth: change === 2 ? 4 : 0, marginRight: 10, paddingBottom: 10 }}>
                            <Text style={{ color: change === 2 ? 'white' : '#738ACD', fontWeight: 'bold' }}>
                                {'Reviews (2)'}
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>


            </View>











            <View style={{ flex: 1, marginBottom:70 }}>

            {change === 0 ?
                <View style={{backgroundColor:'green'}}>
                
                </View>


            :
            change === 1?
                <View>
                <View style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 15, alignItems: 'center' }}>
                    <Text>
                        {'Show subject:'}
                    </Text>

                    <Text style={{ color: 'black', paddingHorizontal: 5 }}>
                        {'English'}
                    </Text>

                    <Fontisto
                        name={'angle-down'}
                        size={10}
                        color={'black'}
                    />
                </View>

                <View>
                    <CourseList />
                </View>
                </View>

:

                <View style={{marginBottom:-60}}>
                    <ReviewData />
                </View>


            }
            </View>





        </View>
    )
}
export default Courses
