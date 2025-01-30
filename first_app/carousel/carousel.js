import { useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Carousel1 = () => {
    const data1 = [
        {
            name1: 1,
        },
        {
            name1: 2,
        },
        {
            name1: 3,
        },
        {
            name1: 4,
        },
    ];
    const { width, height } = Dimensions.get('screen');
    const [dot,setdot] = useState(0);
    const Fun = (event) => {
        console.log(Math.round(event.nativeEvent.contentOffset.x / width));
        const z1 = Math.round(event.nativeEvent.contentOffset.x / width);
        setdot(z1);
    }
    return (
        <>
            <SafeAreaView>
                <Text style={mystyles.textstyles} >Carousel</Text>
                <View style={mystyles.slickblock} >

                    <FlatList
                        data={data1}
                        horizontal
                        renderItem={({ item }) => (
                            <>
                                <View style={{ height: 200, width: width, justifyContent: 'center', alignItems: 'center', }} >
                                    <View style={mystyles.innerblock} >
                                        <Text style={mystyles.textstyles2} >{item.name1}</Text>
                                    </View>
                                </View>
                            </>
                        )}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        onScroll={(event) => Fun(event)}
                    />
                    <View style={mystyles.dotsblock} >
                        {data1.map((item, index) => (
                            index == dot ? 
                            <Text style={{ padding: 2, fontSize: 40,color:'green' }} key={index} >.</Text> : 
                            <Text style={{ padding: 2, fontSize: 32 }} key={index} >.</Text>
                        ))}
                    </View>
                </View>

            </SafeAreaView>
        </>
    )
}

const mystyles = StyleSheet.create({
    textstyles: {
        fontSize: 18,
        color: 'green',
        textAlign: "center",
        padding: 5,
    },
    cards1: {
        width: 360,
        height: 200,
        backgroundColor: "black",
        color: 'white',

    },
    slickblock: {
        borderWidth: 1,
    },
    dotsblock: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    textstyles2: {
        fontSize: 32,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    innerblock: {
        width: '90%',
        height: '90%',
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default Carousel1;