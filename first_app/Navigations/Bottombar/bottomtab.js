import React from "react";
import { View,Text, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";
import Icon1 from 'react-native-vector-icons/Ionicons';



const Bottombar = () => {
    const {width,height} = Dimensions.get('screen');
    const BottomTab = createBottomTabNavigator();

    return(
        <SafeAreaView style={{width:width,height:height}} >
            <NavigationContainer>
                <BottomTab.Navigator
                screenOptions={({route}) => ({
                    headerShown:false,
                    tabBarActiveTintColor:'green',
                    tabBarInactiveTintColor:'black',
                    tabBarIcon: ({ focused, color }) => {
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
                      tabBarStyle: {
                        height: 70,
                        backgroundColor: 'white', // Set background color if needed
                      },
                      tabBarLabelStyle: {
                        fontSize: 16,
                      },
                      tabBarPressColor: 'lightgreen', // Press ripple effect for Android
                      tabBarPressOpacity: 0.5, // Press opacity effect for iOS
                    })}
                >
                    <BottomTab.Screen name="Home" component={Screen1} />
                    <BottomTab.Screen name="Events" component={Screen2} />
                    <BottomTab.Screen name="Profile" component={Screen3} />
                </BottomTab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default Bottombar;