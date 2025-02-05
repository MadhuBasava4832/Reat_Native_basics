import React from "react";
import { View, Text, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Screen1 from "./Bottombar/screen1";
import Screen2 from "./Bottombar/screen2";
import Screen3 from "./Bottombar/screen3";
import Icon1 from 'react-native-vector-icons/Ionicons';



const DrawerNav = () => {
    const { width, height } = Dimensions.get('screen');
    const Drawer = createDrawerNavigator();
    return (
        <SafeAreaView style={{ width: '100%', height: '100%' }} >
            <NavigationContainer>
                <Drawer.Navigator
                    screenOptions={({ route }) => ({
                        // drawerPosition:'right',
                        drawerLabelStyle: {
                            fontSize: 16,
                        },
                        drawerIcon: ({ focused, color }) => {
                            let IconName;
                            if (route.name === "Events") {
                                IconName = focused ? "calendar-sharp" : "calendar-outline";
                            } else if (route.name === "Home") {
                                IconName = focused ? "home-sharp" : "home-outline";
                            } else if (route.name === "Profile") {
                                IconName = focused ? "person-sharp" : "person-outline";
                            }
                            return <Icon1 name={IconName} size={24} color={color} />;
                        },
                        drawerStyle: {
                            // width: 250,
                        },
                        drawerActiveTintColor:'green',
                        drawerInactiveTintColor:'black',
                        // drawerActiveBackgroundColor:''
                        
                    })}
                >
                    <Drawer.Screen name="Home" component={Screen1} />
                    <Drawer.Screen name="Events" component={Screen2} />
                    <Drawer.Screen name="Profile" component={Screen3} />
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default DrawerNav;