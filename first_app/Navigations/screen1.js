import React from "react";
import { View,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen3 from "./screen3";
import Screen4 from "./screen4";
import Screen5 from "./screen5";

const Screen1 = () => {
    const navigation1 = useNavigation();
    const TopTab = createMaterialTopTabNavigator();
    const Fun1 = () =>{
        navigation1.navigate('Status')
    }

    return(
        <TopTab.Navigator>
            <TopTab.Screen name="Screen3" component={Screen3} />
            <TopTab.Screen name="Screen4" component={Screen4} />
            <TopTab.Screen name="Screen5" component={Screen5} />
            
            {/* <Button mode="contained" onPress={Fun1}>Clict for page 2</Button> */}
        </TopTab.Navigator>
    )
}

export default Screen1;
