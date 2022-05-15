import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import SwipeCards from "react-native-swipe-cards-deck";

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function Card({ data }) {
    return (
        <View style={{ marginTop: RFPercentage(-2.5), overflow: 'hidden', width: RFPercentage(50), height: RFPercentage(80), backgroundColor: Colors.primary, borderRadius: RFPercentage(2), justifyContent: 'flex-start', alignItems: 'center' }} >

            <Image style={{ borderRadius: RFPercentage(2), marginTop: RFPercentage(2), width: '90%', height: RFPercentage(65) }} source={data.imageSource} />

            <View style={{ width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                <Text style={{ marginTop: RFPercentage(2.2), color: Colors.white, fontSize: RFPercentage(2.1) }} >
                    {data.movieTitle}
                </Text>
                <Text style={{ marginTop: RFPercentage(0.5), color: Colors.white, fontSize: RFPercentage(2.1) }} >
                    {data.rating}
                </Text>
                <Text style={{ marginTop: RFPercentage(0.5), color: Colors.white, fontSize: RFPercentage(2.1) }} >
                    {data.duration}
                </Text>
            </View>
        </View>
    );
}

function StatusCard({ text }) {
    return (
        <View>
            <Text style={styles.cardsText}>{text}</Text>
        </View>
    );
}

function SwipeScreen(props) {

    const [cards, setCards] = useState();

    // fetching data
    useEffect(() => {
        setTimeout(() => {
            setCards([
                {
                    id: 0,
                    imageSource: require('../../assets/images/poster.png'),
                    movieTitle: 'Spider Man No Way-Home (2021)',
                    rating: 'Rating : 8.4',
                    duration: 'Duration : 2h 28min'
                },
                {
                    id: 1,
                    imageSource: require('../../assets/images/poster.png'),
                    movieTitle: 'Spider Man No Way-Home (2021)',
                    rating: 'Rating : 8.4',
                    duration: 'Duration : 2h 28min'
                },
                {
                    id: 2,
                    imageSource: require('../../assets/images/poster.png'),
                    movieTitle: 'Spider Man No Way-Home (2021)',
                    rating: 'Rating : 8.4',
                    duration: 'Duration : 2h 28min'
                },
                {
                    id: 3,
                    imageSource: require('../../assets/images/poster.png'),
                    movieTitle: 'Spider Man No Way-Home (2021)',
                    rating: 'Rating : 8.4',
                    duration: 'Duration : 2h 28min'
                },
                {
                    id: 4,
                    imageSource: require('../../assets/images/poster.png'),
                    movieTitle: 'Spider Man No Way-Home (2021)',
                    rating: 'Rating : 8.4',
                    duration: 'Duration : 2h 28min'
                },
                {
                    id: 5,
                    imageSource: require('../../assets/images/poster.png'),
                    movieTitle: 'Spider Man No Way-Home (2021)',
                    rating: 'Rating : 8.4',
                    duration: 'Duration : 2h 28min'
                },
                {
                    id: 6,
                    imageSource: require('../../assets/images/poster.png'),
                    movieTitle: 'Spider Man No Way-Home (2021)',
                    rating: 'Rating : 8.4',
                    duration: 'Duration : 2h 28min'
                },
            ]);
        }, 3000);
    }, []);

    function handleYup(card) {
        console.log(`Yup for ${card.text}`);
        return true; // return false if you wish to cancel the action
    }
    function handleNope(card) {
        console.log(`Nope for ${card.text}`);
        return true;
    }

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

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

            <View style={styles.container}>
                {cards ? (
                    <SwipeCards
                        cards={cards}
                        renderCard={(cardData) => <Card data={cardData} />}
                        keyExtractor={(cardData) => String(cardData.id)}
                        renderNoMoreCards={() => <StatusCard text="No more cards..." />}
                        actions={{
                            nope: { onAction: handleNope },
                            yup: { onAction: handleYup },
                        }}
                        // If you want a stack of cards instead of one-per-one view, activate stack mode
                        stack={true}
                    // stackDepth={3}
                    />
                ) : (
                    <StatusCard text="Loading..." />
                )}
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

    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        height: 300,
    },
    cardsText: {
        fontSize: RFPercentage(3),
        color: Colors.primary
    },

})

export default SwipeScreen;