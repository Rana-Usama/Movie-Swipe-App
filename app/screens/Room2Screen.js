import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function Room2Screen(props) {

    const cart1Data = [
        {
            title: 'Rabee',
            // onPress:''
        },
        {
            title: 'XpeterX',
            // onPress:''
        },
        {
            title: 'Mo-San',
            // onPress:''
        },
        {
            title: 'Jon',
            // onPress:''
        },
        {
            title: 'Alina',
            // onPress:''
        },
        {
            title: 'Native_Devv',
            onPress: 'OtherPersonMoviesScreen'
        },
    ]

    const cart2Data = [
        {
            title: 'Spider man no way home',
            onPress: 'OtherPersonMoviesScreen'
        },
        {
            title: 'Uncharted',
            // onPress: 'OtherPersonMoviesScreen'
        },
        {
            title: 'Peacmaker',
            // onPress: 'OtherPersonMoviesScreen'
        },
        {
            title: 'Moon Knight',
            // onPress: 'OtherPersonMoviesScreen'
        },
        {
            title: 'Peaky Blinders',
            // onPress: 'OtherPersonMoviesScreen'
        },
        {
            title: 'Inventing Anna',
            // onPress: 'OtherPersonMoviesScreen'
        },
    ]

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Room Name",
            value: "",
        },
        {
            placeholder: "Insert Room Code",
            value: "",
        },
        //    Dummy You can leave this
        {
            placeholder: "Dummy",
            value: "",
        },

    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* Nav */}
            <View style={{ width: '100%', height: RFPercentage(27.5), justifyContent: 'center', alignItems: 'center', backgroundColor: '#DE3F3F' }} >
                <View style={{ marginTop: RFPercentage(-12), flexDirection: 'row', width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}  >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(3.6), fontWeight: 'bold' }} >
                        Rooms
                    </Text>
                    <Text style={{ position: 'absolute', right: 0, color: Colors.white, fontSize: RFPercentage(2.6), fontWeight: '600' }} >
                        Reflele
                    </Text>
                    <TouchableOpacity onPress={() => props.navigation.openDrawer()} activeOpacity={0.8} style={{ position: 'absolute', left: 0 }} >
                        <Ionicons name="menu-sharp" style={{ fontSize: RFPercentage(4) }} color={Colors.white} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: RFPercentage(7), position: 'absolute', bottom: 0, backgroundColor: Colors.white, borderTopLeftRadius: RFPercentage(14) }} />
            </View>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.4), fontWeight: 'bold' }} >
                        Anime Friends
                    </Text>
                    <Text style={{ marginTop: RFPercentage(0.5), color: Colors.primary, fontSize: RFPercentage(2.4), fontWeight: 'bold' }} >
                        ROOM ID : 3 4 0 3
                    </Text>

                    {/* First Box */}
                    <Text style={{ marginTop: RFPercentage(6), color: Colors.primary, fontSize: RFPercentage(2.4), fontWeight: 'bold' }} >
                        MEMBERS
                    </Text>
                    <View style={{ marginTop: RFPercentage(1.2), backgroundColor: Colors.secondary, width: '82%', height: RFPercentage(30), borderRadius: RFPercentage(2), justifyContent: 'center', alignItems: 'center' }} >
                        <ScrollView style={{ flex: 1, width: '100%' }} >
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                                {cart1Data.map((item, i) => (
                                    <TouchableOpacity onPress={() => props.navigation.navigate(item.onPress)} key={i} activeOpacity={0.8} >
                                        <Text key={i} style={{ fontSize: RFPercentage(2.2), marginTop: RFPercentage(3.5), color: Colors.darkGrey2 }} >
                                            {item.title}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                                <View style={{ marginBottom: RFPercentage(4) }} />
                            </View>
                        </ScrollView>
                    </View>

                    {/* Second Box */}
                    <Text style={{ marginTop: RFPercentage(6), color: Colors.primary, fontSize: RFPercentage(2.4), fontWeight: 'bold' }} >
                        Movie Matches
                    </Text>
                    <View style={{ marginTop: RFPercentage(1.2), backgroundColor: Colors.secondary, width: '82%', height: RFPercentage(30), borderRadius: RFPercentage(2), justifyContent: 'center', alignItems: 'center' }} >
                        <ScrollView style={{ flex: 1, width: '100%' }} >
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                                {cart2Data.map((item, i) => (
                                    <TouchableOpacity onPress={() => props.navigation.navigate(item.onPress)} key={i} activeOpacity={0.8} >
                                        <Text key={i} style={{ fontSize: RFPercentage(2.2), marginTop: RFPercentage(3.5), color: Colors.darkGrey2 }} >
                                            {item.title}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                                <View style={{ marginBottom: RFPercentage(4) }} />
                            </View>
                        </ScrollView>
                    </View>

                    {/* Button */}
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(6) }}>
                        <MyAppButton
                            title="SWIPE ON ROOM"
                            padding={RFPercentage(1.9)}
                            // onPress={() => ()}
                            backgroundColor='#DE3F3F'
                            color={Colors.white}
                            bold={false}
                            borderRadius={RFPercentage(6)}
                            width={"44%"}
                        />
                    </View>

                    <View style={{ marginBottom: RFPercentage(4) }} />
                </View>
            </ScrollView>
        </Screen>
    );
}

export default Room2Screen;