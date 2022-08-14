import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList
} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';

let data = [
    {
        id: "0",
        name: "Primary",
    },
    {
        id: "1",
        name: "Secondary",
    },
    {
        id: "2",
        name: "Intermediate",
    }
]



const SelectLevel = () => {
    const [change, setChange] = useState(null)
    const [level, setLevel] = useState(data)
    const navigation = useNavigation()

    const submit = () => {
        navigation.navigate('HomeScreen')
    }

    const onPress = () => {
        let cloneData = [...level]
        let index = cloneData.findIndex((item) => {
            if (item.name === 'Secondary') {
                return true
            }
        })
        if (index != -1) {
            cloneData[index].name = 'Pre Secondary'
        }
        setLevel(cloneData)
    }

    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100, }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', marginBottom: 10 }}>
                    {'Tap to select level'}
                </Text>

                <Text onPress={onPress}>
                    {'Select your desire level, so we can'}
                </Text>

                <Text>
                    {'give you best experience'}
                </Text>
            </View>


            <FlatList
                data={level}
                keyExtractor={item => item.id}
                contentContainerStyle={{ flex: 1 }}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => setChange(index)}>
                            <View style={{
                                borderWidth: 1, borderRadius: 5, marginHorizontal: 60, flexDirection: 'row',
                                alignItems: 'center', marginTop: 30, padding: 15, borderColor: index === change ? '#14ABBC' : '#dcdcdc'
                            }}>
                                <Fontisto
                                    style={{ marginRight: 20, marginLeft: 10 }}
                                    name={'passport'}
                                    size={30}
                                />

                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                    {item.name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />

            <TouchableOpacity onPress={() => submit()}>
                <View style={{
                    borderRadius: 10, paddingVertical: 15, marginHorizontal: 30, marginTop: 100, backgroundColor: '#14ABBC', alignItems: 'center'
                }}>
                    <Text style={{ color: 'white', fontSize: 16 }}>
                        {'Continue'}
                    </Text>

                </View>
            </TouchableOpacity>








        </View>
    )
}
export default SelectLevel
