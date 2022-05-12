import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function Swipe1Screen(props) {

    const movieData = [

        {
            id: "0",
            imageSource: require('../../assets/images/poster.png'),
            movieTitle: 'Spider Man No Way-Home (2021)',
            rating: 'Rating : 8.4',
            duration: 'Duration : 2h 28min'
        },
        {
            id: "1",
            imageSource: require('../../assets/images/poster.png'),
            movieTitle: 'Spider Man No Way-Home (2021)',
            rating: 'Rating : 8.4',
            duration: 'Duration : 2h 28min'
        },
        {
            id: "2",
            imageSource: require('../../assets/images/poster.png'),
            movieTitle: 'Spider Man No Way-Home (2021)',
            rating: 'Rating : 8.4',
            duration: 'Duration : 2h 28min'
        },
    ]

    return (
        <Screen style={styles.screen}>

            {/* Nav */}
            <View style={styles.navContainer} >
                <View style={styles.navSubContainer}  >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(3.6), fontWeight: 'bold' }} >
                        Swipe
                    </Text>
                    <Text style={styles.nameText} >
                        Reflele
                    </Text>
                    <TouchableOpacity onPress={() => props.navigation.openDrawer()} activeOpacity={0.8} style={{ position: 'absolute', left: 0 }} >
                        <Ionicons name="menu-sharp" style={{ fontSize: RFPercentage(4) }} color={Colors.white} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: RFPercentage(5), position: 'absolute', bottom: 0, backgroundColor: Colors.white, borderTopLeftRadius: RFPercentage(14) }} />
            </View>

            <Text style={{ fontWeight: '600', color: Colors.primary, fontSize: RFPercentage(2.5), bottom: RFPercentage(2.2) }} >
                Anime Friends
            </Text>

            <View style={{ top: RFPercentage(-0.5), width: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                <FlatList
                    data={movieData}
                    contentContainerStyle={{ marginLeft: RFPercentage(1.5) }}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={movieData => movieData.id.toString()}
                    horizontal={true}
                    renderItem={({ item }) =>
                        <View style={{ marginHorizontal: RFPercentage(2), overflow: 'hidden', width: RFPercentage(50), height: RFPercentage(80), backgroundColor: Colors.primary, borderRadius: RFPercentage(2), justifyContent: 'flex-start', alignItems: 'center' }} >
                            <Image style={{ borderRadius: RFPercentage(2), marginTop: RFPercentage(2), width: '90%', height: RFPercentage(65) }} source={item.imageSource} />

                            <View style={{ width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                                <Text style={{ marginTop: RFPercentage(2.2), color: Colors.white, fontSize: RFPercentage(2.1) }} >
                                    {item.movieTitle}
                                </Text>
                                <Text style={{ marginTop: RFPercentage(0.5), color: Colors.white, fontSize: RFPercentage(2.1) }} >
                                    {item.rating}
                                </Text>
                                <Text style={{ marginTop: RFPercentage(0.5), color: Colors.white, fontSize: RFPercentage(2.1) }} >
                                    {item.duration}
                                </Text>
                            </View>

                        </View>
                    }
                />
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
        height: RFPercentage(14),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DE3F3F'
    },
    navSubContainer: {
        marginTop: RFPercentage(-5),
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
})

export default Swipe1Screen;