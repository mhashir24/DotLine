import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';

import teacher1 from '../../../assets/TEACHER01.jpg';
import teacher2 from '../../../assets/teacher2.jpg';
import teacher3 from '../../../assets/teacher3.jpg';
import teacher4 from '../../../assets/teacher4.jpg';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { HP, WP } from '../../constant';


const TeacherData = [
  {
    id: '0',
    Name: 'Saima Amir',
    Place: 'Abu Dhabi, UAE',
    Education: 'BA, B.ED, MA',
    Sub1: 'Maths',
    Sub2: 'English',
    Sub3: 'Physics',
    Rating: '4.5',
    Img: teacher1,
  },
  {
    id: '1',
    Name: 'Dua Mirza',
    Place: 'California, USA',
    Education: 'ph.D',
    Sub1: 'Science',
    Sub2: 'English',
    Sub3: 'Geology',
    Rating: '9.5',
    Img: teacher2,
  },
  {
    id: '2',
    Name: 'Hania Shahid',
    Place: 'Riyadh, UAE',
    Education: 'BSCS',
    Sub1: 'Medical',
    Sub2: 'English',
    Sub3: 'Science',
    Rating: '8',
    Img: teacher3,
  },
  {
    id: '3',
    Name: 'Kainaat Jaffer',
    Place: 'London, UK',
    Education: 'BS, BA',
    Sub1: 'Physics',
    Sub2: 'English',
    Sub3: 'Commerce',
    Rating: '6',
    Img: teacher4,
  }
]



const FList = () => {
  return (
    <FlatList

      data={TeacherData}
      keyExtractor={(item) => item.id}
      horizontal={true}
      contentContainerStyle={{ paddingHorizontal: WP("3"),paddingVertical: HP("1") }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <View style={{ borderWidth: 1, overflow: 'hidden', position: 'relative', width: WP("85"), marginRight: 15, paddingHorizontal: HP("2"), paddingVertical: HP("2"), borderRadius: 5, borderColor: 'grey', flexDirection: 'row' }}>

            <View style={{
              position: 'absolute',
              top: 0,
              flexDirection: 'row',
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomLeftRadius: 10,
              backgroundColor: 'orange',
              width: 60,
              paddingVertical: 2
            }}>
              <AntDesign
                style={{ marginRight: 5 }}
                name={'star'}
                size={15}
                color={'white'}
              />

              <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                {item.Rating}
              </Text>
            </View>

            <View>
              <Image
                source={item.Img}
                style={{ borderRadius: 10, height: 114 }}
              />
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>
                {item.Name}
              </Text>


              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <SimpleLineIcons
                  style={{ marginRight: 5 }}
                  name={'location-pin'}
                  size={15}
                  color={'#808080'}
                />

                <Text>
                  {item.Place}
                </Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                <FontAwesome5
                  style={{ marginRight: 8 }}
                  name={'user-graduate'}
                  size={15}
                  color={'#808080'}
                />

                <Text>
                  {item.Education}
                </Text>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <View style={{ backgroundColor: '#E8F8F8', padding: 5, borderRadius: 5, marginRight: 8 }}>
                  <Text style={{ color: '#14ABBC' }}>
                    {item.Sub1}
                  </Text>
                </View>

                <View style={{ backgroundColor: '#E8F8F8', padding: 5, borderRadius: 5, marginRight: 8 }}>
                  <Text style={{ color: '#14ABBC' }}>
                    {item.Sub2}
                  </Text>
                </View>

                <View style={{ backgroundColor: '#E8F8F8', padding: 5, borderRadius: 5 }}>
                  <Text style={{ color: '#14ABBC' }}>
                    {item.Sub3}
                  </Text>
                </View>

              </View>


            </View>



          </View>
        )
      }}

    />
  )
}

export default FList