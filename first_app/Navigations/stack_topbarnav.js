import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import Screen1 from "./screen1";
import Screen2 from "./screen2";
import { Dimensions, View } from "react-native";


const StackTopBar = () => {
    const Stack = createStackNavigator();
    const {width,height} = Dimensions.get('screen');
    return(
        <View style={{width:width,height:height}} >
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                    options={{headerShown:false}}
                    name="Chats" component={Screen1} />
                    <Stack.Screen name="Status" component={Screen2} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
        </View>
    )
}

export default StackTopBar;