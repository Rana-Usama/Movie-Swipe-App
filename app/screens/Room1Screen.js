import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function Room1Screen(props) {

    const cartData = [
        {
            title: 'Movie Night',
            // onPress:''
        },
        {
            title: 'Tomorrow Date',
            // onPress:''
        },
        {
            title: 'Happy Family',
            // onPress:''
        },
        {
            title: 'Anime Friends',
            onPress: 'Room2Screen',
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
                        JOIN ROOM
                    </Text>

                    <View style={{ marginTop: RFPercentage(3), backgroundColor: Colors.secondary, width: '82%', height: RFPercentage(29), borderRadius: RFPercentage(2), justifyContent: 'center', alignItems: 'center' }} >
                        <ScrollView style={{ flex: 1, width: '100%' }} >
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                                {cartData.map((item, i) => (
                                    <TouchableOpacity onPress={() => props.navigation.navigate(item.onPress)} key={i} activeOpacity={0.8} >
                                        <Text style={{ fontSize: RFPercentage(2.2), marginTop: RFPercentage(3.5), color: Colors.darkGrey2 }} >
                                            {item.title}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </ScrollView>
                    </View>

                    {/* Input field */}
                    <View style={{ marginTop: RFPercentage(5.2), justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        {inputField.map((item, i) => (

                            i == 1 ?
                                <View key={i} style={{ width: '100%', alignSelf: 'center', marginTop: RFPercentage(3) }} >
                                    <View style={{ width: "100%", alignItems: "center" }}>
                                        <MyAppButton
                                            title="Create New Room"
                                            padding={RFPercentage(1.9)}
                                            // onPress={() => ()}
                                            backgroundColor='#DE3F3F'
                                            color={Colors.white}
                                            bold={false}
                                            borderRadius={RFPercentage(6)}
                                            width={"44%"}
                                        />
                                        <Text style={{ marginTop: RFPercentage(2), color: Colors.black, fontSize: RFPercentage(2.2), fontWeight: 'bold' }} >
                                            OR
                                        </Text>
                                    </View>
                                </View>
                                :
                                <View key={i} style={{ marginTop: i == 0 ? RFPercentage(2) : RFPercentage(1) }} >
                                    <InputField
                                        placeholder={item.placeholder}
                                        placeholderColor={Colors.darkGrey2}
                                        height={RFPercentage(7.8)}
                                        backgroundColor={'#FF8BB1'}
                                        borderWidth={RFPercentage(0.2)}
                                        borderColor={'#FF8BB1'}
                                        secure={item.secure}
                                        borderRadius={RFPercentage(1.4)}
                                        color={Colors.black}
                                        fontSize={RFPercentage(2)}
                                        handleFeild={(text) => handleChange(text, i)}
                                        value={item.value}
                                        width={"92%"}
                                    />
                                </View>
                        ))}
                    </View>

                    {/* Button */}
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(3) }}>
                        <MyAppButton
                            title="Join Existing Room"
                            padding={RFPercentage(1.9)}
                            // onPress={() => ()}
                            backgroundColor='#DE3F3F'
                            color={Colors.white}
                            bold={false}
                            borderRadius={RFPercentage(6)}
                            width={"44%"}
                        />
                    </View>

                    <View style={{ marginBottom: RFPercentage(6) }} />
                </View>
            </ScrollView>
        </Screen>
    );
}

export default Room1Screen;