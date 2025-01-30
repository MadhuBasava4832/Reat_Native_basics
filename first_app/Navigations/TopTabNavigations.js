import React from "react";
import { View,Text, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import Icons1 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons2 from 'react-native-vector-icons/Ionicons'

const TopTabNav = () => {
    const {width,height} = Dimensions.get('screen');
    const Topbar = createMaterialTopTabNavigator();

    return(
        <View style={{width:width,height:height}}>
        <SafeAreaView style={{flex:1}} >
            <NavigationContainer>
                <Topbar.Navigator

                // screenOptions={{
                //     tabBarActiveTintColor:'green',
                //     tabBarInactiveTintColor:'gray',
                //     tabBarIndicatorStyle:{
                //         backgroundColor:'green',
                //         height:4
                //     },
                //     swipeEnabled:true,
                //     tabBarLabelStyle:{},
                //     // tabBarStyle:{backgroundColor:'black'},
                //     lazy:true,
                //     tabBarPressColor:'green',
                // }}

                screenOptions={({route}) => ({
                    tabBarLabel:({color}) => (
                        <View style={{flexDirection:'row',alignItems:'center',gap:7}}>
                            {route.name === "Chats" ? <Icons1 name="message-text" color={color} size={18} /> : <></>}
                            {route.name === "Status" ? <Icons2 name="sync-circle-outline" color={color} size={18} /> : <></>}
                            {route.name === "Calls" ? <Icons2 name="call-outline" color={color} size={18} /> : <></>}
                            <Text>{route.name}</Text>
                        </View>
                    ),
                    tabBarActiveTintColor:'green',
                    tabBarInactiveTintColor:'gray',
                    tabBarIndicatorStyle:{
                        backgroundColor:'green',
                        height:4
                    },
                    swipeEnabled:true,
                    tabBarLabelStyle:{},
                    // tabBarStyle:{backgroundColor:'black'},
                    lazy:true,
                    tabBarPressColor:'green',
                    
                })}

                
                >
                    <Topbar.Screen name="Chats" component={Screen1} />
                    <Topbar.Screen name="Status" component={Screen2} />
                    <Topbar.Screen name="Calls" component={Screen3} />
                </Topbar.Navigator>
            </NavigationContainer>
        </SafeAreaView>
        </View>
    )
}

export default TopTabNav;
