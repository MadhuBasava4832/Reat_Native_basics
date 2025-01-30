import React from "react";
import { View,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";


const Screen1 = () => {
    const navigation1 = useNavigation();
    const Fun1 = () =>{
        navigation1.navigate('Chats')
    }

    return(
        <View>
            <Text  >Screen 3</Text>
            <Text  >Screen 3</Text>
            <Text  >Screen 3</Text>
            <Button mode="contained" onPress={Fun1}>Clict for page 1</Button>
        </View>
    )
}

export default Screen1;
