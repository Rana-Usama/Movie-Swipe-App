import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import LoadingModal from './../components/common/LoadingModal';
import MyAppButton from './../components/common/MyAppButton';
import InputField from './../components/common/InputField';

//config
import Colors from '../config/Colors';

function LoginScreen(props) {

    const [indicator, showIndicator] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Email or Username",
            iconName: 'account-circle',
            value: "",
        },
        {
            placeholder: "Password",
            iconName: 'lock',
            value: "",
            secure: true
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const handleLogin = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "") {
            alert("Please fill all the feilds");
            showIndicator(false);
            return true;
        }

        // props.navigation.navigate("HomeScreen")
        try {
            // API INTEGRATION WILL COME HERE
        } catch (error) {
            alert("Error");
        }

        showIndicator(false);
    };

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>
            <LoadingModal show={indicator} />

            <View style={{ width: '100%', height: RFPercentage(32), justifyContent: 'center', alignItems: 'center', backgroundColor: '#DE3F3F' }} >
                <Text style={{ color: Colors.white, fontSize: RFPercentage(4.2), fontWeight: 'bold', marginTop: RFPercentage(-10) }} >
                    Welcome!
                </Text>
                <View style={{ width: '100%', height: RFPercentage(9), position: 'absolute', bottom: 0, backgroundColor: Colors.white, borderTopLeftRadius: RFPercentage(14) }} />
            </View>

            <Text style={{ color: Colors.primary, fontSize: RFPercentage(4.3), fontWeight: 'bold' }} >
                Login
            </Text>

            {/* Input field */}
            <View style={{ marginTop: RFPercentage(5.2), justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                {inputField.map((item, i) => (
                    <View key={i} style={{ marginTop: i == 0 ? RFPercentage(2) : RFPercentage(1) }} >
                        <InputField
                            placeholder={item.placeholder}
                            placeholderColor={Colors.darkGrey}
                            height={RFPercentage(6.8)}
                            leftIconName={item.iconName}
                            backgroundColor={Colors.secondary}
                            borderWidth={RFPercentage(0.2)}
                            borderColor={'#FFA4A5'}
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
            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(6) }}>
                <MyAppButton
                    title="LOGIN"
                    padding={RFPercentage(1.9)}
                    onPress={() => handleLogin()}
                    backgroundColor='#DE3F3F'
                    color={Colors.white}
                    bold={false}
                    borderRadius={RFPercentage(1.6)}
                    width={"42%"}
                />
            </View>
        </Screen>
    );
}

export default LoginScreen;