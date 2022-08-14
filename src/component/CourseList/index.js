import React from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


const TData = [
    {
        id: '0',
        status: 'ONLINE',
        headline: 'Chemistry 101: For all students, learn by experts',
        days: 'Mon, Tue, Wed, Thu, Fri, Sat',
        timing: '9:30am - 10:30am',
        grade: 'Grade: 2,3,4',
        price: 'PKR 5,000 / month'
    },
    {
        id: '1',
        status: 'ONLINE',
        headline: 'Chemistry 101: For all students, learn by experts',
        days: 'Mon, Tue, Wed, Thu, Fri, Sat',
        timing: '9:30am - 10:30am',
        grade: 'Grade: 2,3,4',
        price: 'PKR 7,000 / month'
    },
    {
        id: '2',
        status: 'ONLINE',
        headline: 'Chemistry 101: For all students, learn by experts',
        days: 'Mon, Tue, Wed, Thu, Fri, Sat',
        timing: '9:30am - 10:30am',
        grade: 'Grade: 2,3,4',
        price: 'PKR 9,000 / month'
    }
]

const CourseList = () => {
    return (

        <FlatList

            data={TData}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
                return (


                    <View style={{ borderWidth: 1, borderBottomWidth: 3, borderLeftWidth: 3, borderColor: '#dcdcdc', marginHorizontal: 15, padding: 10, borderRadius: 10, marginTop: 10 }}>

                        <View style={{ borderRadius: 5, width: '20%', alignItems: 'center', marginLeft: 7, backgroundColor: '#e6e6fa', padding: 3 }}>
                            <Text style={{ color: '#808080', fontWeight: 'bold', fontSize: 12 }}>
                                {item.status}
                            </Text>
                        </View>

                        <View style={{ marginLeft: 9, marginTop: 5 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>
                                {item.headline}
                            </Text>
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 5, flexDirection: 'row', alignItems: 'center' }}>
                            <AntDesign
                                name={'calendar'}
                                size={15}
                                color={'#48d1cc'}
                            />
                            <Text style={{ color: '#48d1cc', marginLeft: 5 }}>
                                {item.days}
                            </Text>
                        </View>

                        <View style={{ marginLeft: 10, flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <EvilIcons
                                name={'clock'}
                                size={18}
                                color={'#5f9ea0'}
                            />
                            <Text style={{ color: '#5f9ea0', marginLeft: 5 }}>
                                {item.timing}
                            </Text>

                            <FontAwesome5
                                style={{ paddingHorizontal: 8 }}
                                name={'user-graduate'}
                                size={12}
                                color={'#808080'}
                            />

                            <Text style={{ color: '#808080' }}>
                                {item.grade}
                            </Text>
                        </View>

                        <View style={{ marginLeft: 12, marginTop: 10 }}>
                            <Text style={{ fontSize: 16, color: '#b22222' }}>
                                {item.price}
                            </Text>
                        </View>

                    </View>

                )
            }}

        />

    )
}

export default CourseList