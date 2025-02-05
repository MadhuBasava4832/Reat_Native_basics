import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

const Screen4 = () => {
    const navigation1 = useNavigation();

    const Fun1 = () => {
        navigation1.navigate('Screen5')
    }
    return (
        <>
            <View>
                <Text>Screen 4</Text>
                <Text>Screen 4</Text>
                <Text>Screen 4</Text>
                <Button 
                mode="contained"
                onPress={Fun1}
                style={{width:200}}
                >click for page 5</Button>
            </View>
        </>
    )
}

export default Screen4;
