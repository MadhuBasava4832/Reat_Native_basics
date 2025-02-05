import React from "react";
import { View,Text, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

import Screen4 from "./screen4";
import Screen5 from "./screen5";

const Screen1 = () => {
    const {width,height} = Dimensions.get('screen');
    const Stack = createStackNavigator();

    return(
        <View style={{width:width,height:height}} >
            <Stack.Navigator
            // screenOptions={{
            //     headerShown:false
            // }}
            >
                <Stack.Screen
                options={{
                    headerShown:false
                }}
                name="Screen4" component={Screen4} />
                <Stack.Screen name="Screen5" component={Screen5} />
            </Stack.Navigator>
            
        </View>
    )
}

export default Screen1;
