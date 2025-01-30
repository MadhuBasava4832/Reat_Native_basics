import React, { useRef } from "react";
import { SafeAreaView, StatusBar,View,Text,StyleSheet, Animated } from "react-native";
import { Button } from "react-native-paper";

const Animation = () => {
    const leftmove = useRef(new Animated.Value(0)).current
    const leftmove1 = useRef(new Animated.Value(0)).current
    const colorchange = useRef(new Animated.Value(0)).current
    const colorchange1 = useRef(new Animated.Value(0)).current
    

    const Fun = () => {
        Animated.timing(leftmove,{
            toValue:100,
            duration:1000,
            useNativeDriver:false
        }).start()
    }
    const Fun1 = () => {
        Animated.timing(leftmove,{
            toValue:0,
            duration:1000,
            useNativeDriver:false
        }).start()
    }


    const Fun3 = () => {
        Animated.timing(colorchange,{
            toValue:100,
            duration:1000,
            useNativeDriver:false
        }).start(() =>{
            colorchange.setValue(0);
        })
    }
    const mappingColorChange = colorchange.interpolate({
        inputRange:[0,100],
        outputRange:["red","black"],
    })


    const Fun4 = () => {
        Animated.parallel([

            Animated.timing(leftmove1,{
                toValue:100,
                duration:1000,
                useNativeDriver:false
            }),
            Animated.timing(colorchange1,{
                toValue:100,
                duration:1000,
                useNativeDriver:false
            })
        ]).start()
    }
    const mappingColorChange1 = colorchange1.interpolate({
        inputRange:[0,100],
        outputRange:["red","black"],
    })

    

    return(
        <>
        <StatusBar />
        <SafeAreaView >
        <Animated.View style={[styles.container1,{left:leftmove}]} ></Animated.View>
        <View style={styles.buttonsblock}>
        <Button 
        style={{width:150}}
        mode="contained"
        onPress={Fun1}
        >Move left</Button>
        <Button 
        style={{width:150}}
        mode="contained"
        onPress={Fun}
        >Move right</Button>
        </View>

        <Animated.View style={[styles.container1,{backgroundColor:mappingColorChange}]} ></Animated.View>
        <Button 
        style={{width:150}}
        mode="contained"
        onPress={Fun3}
        >ColorChange</Button>

        <Animated.View style={[styles.container1,{backgroundColor:mappingColorChange1 , left:leftmove1}]} ></Animated.View>
        <Button 
        mode="contained"
        onPress={Fun4}
        >Move and ColorChange</Button>

        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container1:{
        width:150,
        height:150,
        borderWidth:1
    },
    buttonsblock:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    }
})

export default Animation;