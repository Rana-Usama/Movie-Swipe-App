import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function HomeScreen(props) {

    const buttonsData = [
        {
            title: 'SWIPE',
            onPress: "SwipeScreen"

        },
        {
            title: 'MY MOVIES',
            onPress: "LikedMoviesScreen"
        },
        {
            title: 'ROOMS',
            onPress: "Room1Screen"
        },
    ]

    return (
        <Screen style={styles.screen}>

            {/* Nav */}
            <View style={styles.navContainer} >
                <View style={styles.navSubContainer}  >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(3.6), fontWeight: 'bold' }} >
                        Home
                    </Text>
                    <Text style={styles.nameText} >
                        Reflele
                    </Text>
                    <TouchableOpacity onPress={() => props.navigation.openDrawer()} activeOpacity={0.8} style={{ position: 'absolute', left: 0 }} >
                        <Ionicons name="menu-sharp" style={{ fontSize: RFPercentage(4) }} color={Colors.white} />
                    </TouchableOpacity>
                </View>
                <View style={styles.navBottom} />
            </View>

            {/* Box */}
            <View style={styles.boxContainer} >
                <View style={{ width: '90%', marginTop: RFPercentage(5), alignSelf: 'center' }} >
                    <Text style={styles.text} >
                        Get started by swiping right on your favourite movies. Then create rooms with your friends to get notified when you have a movie match!
                    </Text>
                </View>
                <View style={styles.buttonsContainer} >
                    {buttonsData.map((items, i) => (
                        <TouchableOpacity onPress={() => props.navigation.navigate(items.onPress)} key={i} activeOpacity={0.8} style={{ backgroundColor: Colors.primary, width: RFPercentage(14), height: RFPercentage(6), borderRadius: RFPercentage(4), justifyContent: 'center', alignItems: 'center' }} >
                            <Text style={{ color: Colors.white, fontSize: RFPercentage(1.9) }} >
                                {items.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.white
    },
    navContainer: {
        width: '100%',
        height: RFPercentage(27.5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DE3F3F'
    },
    navSubContainer: {
        marginTop: RFPercentage(-12),
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    nameText: {
        position: 'absolute',
        right: 0,
        color: Colors.white,
        fontSize: RFPercentage(2.6),
        fontWeight: '600'
    },
    navBottom: {
        width: '100%',
        height: RFPercentage(7),
        position: 'absolute',
        bottom: 0,
        backgroundColor: Colors.white,
        borderTopLeftRadius: RFPercentage(14)
    },
    boxContainer: {
        marginTop: RFPercentage(3),
        width: '86%',
        height: RFPercentage(46),
        backgroundColor: '#FE615F',
        borderRadius: RFPercentage(2),
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center'
    },
    text: {
        fontWeight: '400',
        color: Colors.white,
        fontSize: RFPercentage(2.2),
        lineHeight: RFPercentage(2.8)
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: RFPercentage(3),
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center'
    }
})

export default HomeScreen;