import React from "react";
import { View,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const Screen2 = () => {
    const navigation1 = useNavigation();
    const Fun1 = () =>{
        navigation1.navigate('Profile')
    }

    return(
        <View>
            <Text>Screen 2</Text>
            <Text>Screen 2</Text>
            <Text>Screen 2</Text>
            <Button mode="contained" onPress={Fun1} >Click for page 3</Button>
        </View>
    )
}

export default Screen2;
