import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";

const TopbarStackNav = () => {
    const {width,height} = Dimensions.get('screen');
    const Topbar = createMaterialTopTabNavigator();

    return(
        <View style={{width:width,height:height,borderWidth:1}} >
        <SafeAreaView style={{flex:1}} >
            <NavigationContainer>
                <Topbar.Navigator >
                    <Topbar.Screen name="Chats" component={Screen1} />
                    <Topbar.Screen name="Status" component={Screen2} />
                    <Topbar.Screen name="Calls" component={Screen3} />
                </Topbar.Navigator>
            </NavigationContainer>
        </SafeAreaView>
        </View>
    )
}

export default TopbarStackNav;
