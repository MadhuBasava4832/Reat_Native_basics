import React from "react";
import { View,Text, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Icon from 'react-native-vector-icons/FontAwesome'


const MainScreen = () => {
    const {width,height} = Dimensions.get('screen')
    const Stack = createStackNavigator();

    return(
        <>
        <View style={{width:width,height:height}} > 

        <SafeAreaView style={{flex:1}} >
            <NavigationContainer>
                <Stack.Navigator
                screenOptions={{
                    headerStyle:{
                        backgroundColor:'gray',
                    },
                    headerTintColor:'white',
                    headerTitleAlign:'center',
                    headerRight:() => (
                        <Icon name="bell" color="yellow" size={30} style={{marginRight:15}}/>
                    ),
                    headerTitleStyle:{
                        color:'red',
                        fontSize:28,
                        fontWeight:600
                    },
                    headerTitle:"T HUB",
                    title:"Technicl Hub",
                    // headerShown:false,
                }}
                >
                    <Stack.Screen name="Screen1" component={Screen1} />
                    <Stack.Screen name="Screen2" component={Screen2} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
        </View>
        
        </>
    )
}

export default MainScreen;
