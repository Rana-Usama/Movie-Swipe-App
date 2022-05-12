import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function SwipeScreen(props) {

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* Nav */}
            <View style={{ width: '100%', height: RFPercentage(26), justifyContent: 'center', alignItems: 'center', backgroundColor: '#DE3F3F' }} >
                <View style={{ marginTop: RFPercentage(-11), flexDirection: 'row', width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}  >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(3.6), fontWeight: 'bold' }} >
                        Swipe
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

                    <View style={{ marginBottom: RFPercentage(4) }} />
                </View>
            </ScrollView>
        </Screen>
    );
}

export default SwipeScreen;