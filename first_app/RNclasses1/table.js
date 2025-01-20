import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Row, Rows, Table } from "react-native-table-component";


const Tablefun = () => {
    const headerData = ["Sl No", "Name", "Roll No","Branch","College"];
    const rowsdata = [
        ["1", "Naruto", "201","ECE","AEC"],
        ["2", "Luffy", "301","ECE","AEC"],
        ["3", "Mikey", "402","ECE","AEC"],
        ["4", "Gojo", "502","ECE","AEC"],
        ["5", "Gojo", "202","ECE","AEC"],
    ]
    return (
        <View style={tablestyles.main}>
            <StatusBar/>
            <View style={{width:350,height:"fit-content",}}>
                <Text style={{fontSize:25,fontWeight:900,textAlign:"center",}}>Table</Text>
                <ScrollView horizontal >
                <Table borderStyle={{borderWidth:2}}>
                    <Row data={headerData}  style={[tablestyles.center,tablestyles.headerns]} textStyle={tablestyles.headersty}  />
                    {
                        rowsdata.map = ((item,index) => {

                            return(
                                <>
                                <Rows data={item}  style={[
                                    tablestyles.center,
                                    tablestyles.rowsns,
                                    index %2 == 0 ? tablestyles.even : tablestyles.odd ,
                                    ]} textStyle={tablestyles.rowsty}  />
                                </>
                            )
                        })
                    }

                </Table>
                </ScrollView>
            </View>
        </View>
    )
}

const tablestyles = StyleSheet.create({
    main: {
        width:"100%",
        height:"100%",
        borderWidth: 2,
        borderColor:"red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    },
    center:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    headersty: {
        fontSize: 18,
        fontWeight: 900,
        textAlign:"center",
    },
    rowsty: {
        fontSize: 16,
        textAlign:"center",
    },
    headerns:{
        width:700,
        backgroundColor:"#5EAE3E",
    },
    rowsns:{
        width:700,
    },
    even:{backgroundColor:"#CECECE"},
    odd:{backgroundColor:"#E8E8E8"},
});

export default Tablefun;
