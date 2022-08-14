import React from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

const RData = [
    {
        id: '0',
        goodrate: '#FBC443',
        badrate: '#dcdcdc',
        review: 'Saima is about helping students answer a single question "what do I need to know to maximize my chance of success in a given class?" Every teacher and class are different, and knowing what to expect can help students best prepare themselves to succeed.',
        name: 'Zohra Shams'
    },

    {
        id: '1',
        goodrate: '#FBC443',
        badrate: '#dcdcdc',
        review: 'Saima is about helping students answer a single question "what do I need to know to maximize my chance of success in a given class?".',
        name: 'Fiza Jameel'
    },

    {
        id: '2',
        goodrate: '#FBC443',
        badrate: '#dcdcdc',
        review: 'Saima is about helping students answer a single question "what do I need to know to maximize my chance of success in a given class?" Every teacher and class are different, and knowing what to expect can help students best prepare themselves to succeed.',
        name: 'Hania Saleem'
    },
]

const ReviewData = () => {
    return (

        <FlatList

            data={RData}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
                return (
                    <View>

                        <View style={{ marginHorizontal: 15, paddingLeft: 10, marginTop: 15, flexDirection: 'row', paddingBottom: 8 }}>

                            <AntDesign
                                style={{ marginRight: 5 }}
                                name={'star'}
                                size={12}
                                color={item.goodrate}
                            />

                            <AntDesign
                                style={{ marginRight: 5 }}
                                name={'star'}
                                size={12}
                                color={item.goodrate}
                            />

                            <AntDesign
                                style={{ marginRight: 5 }}
                                name={'star'}
                                size={12}
                                color={item.goodrate}
                            />

                            <AntDesign
                                style={{ marginRight: 5 }}
                                name={'star'}
                                size={12}
                                color={item.goodrate}
                            />

                            <AntDesign
                                style={{ marginRight: 5 }}
                                name={'star'}
                                size={12}
                                color={item.badrate}
                            />

                        </View>

                        <View style={{ marginHorizontal: 15, paddingLeft: 10 }}>
                            <Text>
                                {item.review}
                            </Text>
                        </View>

                        <View style={{ marginHorizontal: 15, paddingLeft: 10, paddingVertical: 10, borderBottomWidth: 1, borderColor: '#dcdcdc' }}>
                            <Text style={{ fontWeight: 'bold', color: 'black' }}>
                                {item.name}
                            </Text>
                        </View>
                    </View>

                )
            }}

        />
    )
}


export default ReviewData