import React from "react";
import { StatusBar } from "expo-status-bar";
import {  StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Homeicon from 'react-native-vector-icons/AntDesign';

const Statusbarf = () => {

    return(
        <>
           <StatusBar style="light" backgroundColor="grey" hidden={false} /> 
           <SafeAreaView>
            
            <Homeicon name="home" size={50} color={"red"} />

           </SafeAreaView>
        </>
    )
}

const barstyles = StyleSheet.create({

})
export default Statusbarf;
