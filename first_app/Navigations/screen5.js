import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

const Screen5 = () => {
    const navigation1 = useNavigation();

    const Fun1 = () => {
        navigation1.navigate('Status')
    }
    return (
        <>
            <View>
                <Text>Screen 5</Text>
                <Text>Screen 5</Text>
                <Text>Screen 5</Text>
                <Button 
                mode="contained"
                onPress={Fun1}
                style={{width:200}}
                >click for page 4</Button>
            </View>
        </>
    )
}

export default Screen5;
