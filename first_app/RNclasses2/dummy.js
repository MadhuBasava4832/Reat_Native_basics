import { View, Text, Image, StyleSheet, FlatList, Dimensions } from "react-native";
import { useState } from "react";
import { Button } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from "react-native-safe-area-context";

export function Thub() {
    const [flag, SetFlag] = useState(false);
    const { height, width } = Dimensions.get("screen");
    const [dot ,setDot] = useState(0);
    const slicks = [
        {
            src: require("./assets/thubposter.jpg"),
        },
        {
            src: require("./assets/thubposter.jpg")
        },
        {
            src: require("./assets/thubposter.jpg")
        },
        {
            src: require("./assets/thubposter.jpg")
        },
    ]
    const data = [
        {
            IconName: "home",
            name: "Home",
        },
        {
            IconName: "setting",
            name: "Settings",
        },
        {
            IconName: "notification",
            name: "Notification",
        },
        {
            IconName: "carryout",
            name: "Schedule",
        }, {
            IconName: "idcard",
            name: "Profile",
        }, {
            IconName: "contacts",
            name: "Contacts",
        }, {
            IconName: "dashboard",
            name: "Dashboard",
        }, {
            IconName: "edit",
            name: "Edit",
        }
        , {
            IconName: "menu-fold",
            name: "Menu",
        }, {
            IconName: "form",
            name: "Form",
        }, {
            IconName: "bulb1",
            name: "Ideas",
        },
        {
            IconName: "layout",
            name: "Format",
        }
    ]
    const hook=(event)=>{
        const x = event.nativeEvent.contentOffset.x;
        const z=Math.round(x/width);
        setDot(z);
    }
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.logo}>
                <Text style={styles.logotxt}>Technical Hub</Text>
                <Icon size={22} name="notifications" color="#ffd700" />
            </View>
            <View style={styles.main1}>
                <Text style={{ color: "black", fontSize: 22 }}>
                    Welcome, Chandra Sekhar
                </Text>
                <Image resizeMode="contain" style={styles.img} source={require("./assets/thubposter.jpg")} />
                <View style={styles.bar}>
                    <Text style={{ fontSize: 23, color: "#ffd700" }}>Categories</Text>
                    <Button
                        textColor="rgb(51, 136, 2)"
                        style={{ width: 100 }}
                        onPress={() => SetFlag(!flag)}>
                        {
                            flag ?
                                <Text style={{ fontSize: 15 }}>More
                                    <Icon1 name="down" size={15} color="rgb(51, 136, 2) " />
                                </Text>
                                :
                                <Text style={{ fontSize: 15 }}>Less
                                    <Icon1 name="up" size={15} color="rgb(51, 136, 2) " />
                                </Text>
                        }
                    </Button>
                </View>
                <FlatList
                    data={!flag ? data : data.slice(0, 8)}
                    style={styles.list}
                    numColumns={4}
                    scrollEnabled={false}
                    renderItem={({ item }) => (
                        <View style={styles.iconmain}>
                            <View style={styles.icons}>
                                <Icon1 size={25} color="rgb(248, 249, 247)" name={item.IconName} />
                            </View>
                            <Text >{item.name}</Text>
                        </View>
                    )}
                />
            </View>
            <FlatList
                data={slicks}
                renderItem={({ item }) => (
                    <View style={{ width, height: 180, justifyContent: "center", alignItems: "center" }}>
                        <Image
                            source={item.src}
                            style={{ width: "90%", height: "90%" }} 
                            resizeMode="contain"
                        />
                    </View>
                )}
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={(event)=>hook(event)}
            />
            <View>
                <FlatList
                    data={slicks}
                    style={styles.dots}
                    renderItem={({ item ,index}) => (
                        index==dot?
                        <View style={{ width: 10, height: 10, borderWidth: 2,borderRadius:100,margin:3,backgroundColor:"rgb(51, 136, 2)" }}></View>:
                        <View style={{ width: 10, height: 10, borderWidth: 2,borderRadius:100,margin:3 }}></View>
                    )}
                    horizontal
                    scrollEnabled={false}
                    justifyContent="center"
                    alignItems="center"
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.footer}>
                <View style={styles.foot}> <Icon2 size={28} color="rgb(51, 136, 2)" name="home" />
                    <Text style={{ color: " rgb(51,136,2)" }}>Home</Text></View>
                <View style={styles.foot}> <Icon3 size={28} color="rgb(51, 136, 2)" name="calendar" />
                    <Text style={{ color: " rgb(51,136,2)" }}>Events</Text></View>
                <View style={styles.foot}> <Icon3 size={28} color="rgb(51, 136, 2)" name="user" />
                    <Text style={{ color: " rgb(51,136,2)" }}>Profile</Text></View>

            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100svh",
        // overflow:"scroll"
    },
    main1: {
        width: "100%",
        height: "auto",
        padding: 15,
    },
    logo: {
        width: "100%",
        backgroundColor: "rgb(51, 136, 2)",
        height: "7%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    logotxt: {
        width: "86%",
        textAlign: "center",
        fontSize: 26,
        color: "rgb(255, 255, 255)",
    },
    img: {
        height: 160,
        width: "100%",
    },
    bar: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between"
    },
    icons: {
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: " rgb(51, 136, 2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    iconmain: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 80,
        width: 80,
    },
    list: {
        width: "100%",
        height: "auto",
    },
    footer: {
        height: "auto",
        width: "100%",
        flex: 1,
        // borderWidth: 1,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        position: "absolute",
        bottom: -70,
        padding: 10,
    },
    foot: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

    },
    dots: {
        width: "100%", 
        height: 20, 
        // borderWidth: 2,
         display: "flex",
        //   justifyContent: "center", 
        //   alignItems: "center",
        //    flexDirection: "row",
    }
})