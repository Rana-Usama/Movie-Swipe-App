import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function LikedMoviesScreen(props) {

    const cart1Data = [
        {
            title: 'Spider man no way home'
        },
        {
            title: 'Uncharted'
        },
        {
            title: 'Peacmaker'
        },
        {
            title: 'Moon Knight'
        },
        {
            title: 'Peaky Blinders'
        },
        {
            title: 'Inventing Anna'
        },
        {
            title: 'XXXXX'
        },
        {
            title: 'XXXXX'
        },
        {
            title: 'XXXXX'
        },
        {
            title: 'XXXXX'
        },
        {
            title: 'XXXXX'
        },
        {
            title: 'XXXXX'
        },
        {
            title: 'XXXXX'
        },
        {
            title: 'XXXXX'
        },
        {
            title: 'XXXXX'
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
                        My Movies
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

                    {/* First Box */}
                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.6), fontWeight: 'bold' }} >
                        Liked Movies
                    </Text>
                    <View style={{ marginTop: RFPercentage(3), backgroundColor: Colors.secondary, width: '82%', height: RFPercentage(60), borderRadius: RFPercentage(2), justifyContent: 'center', alignItems: 'center' }} >
                        <ScrollView style={{ flex: 1, width: '100%' }} >
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                                {cart1Data.map((item, i) => (
                                    <Text key={i} style={{ fontSize: RFPercentage(2.2), marginTop: RFPercentage(3.5), color: Colors.darkGrey2 }} >
                                        {item.title}
                                    </Text>
                                ))}
                                <View style={{ marginBottom: RFPercentage(4) }} />
                            </View>
                        </ScrollView>
                    </View>

                    <View style={{ marginBottom: RFPercentage(4) }} />
                </View>
            </ScrollView>
        </Screen>
    );
}

export default LikedMoviesScreen;