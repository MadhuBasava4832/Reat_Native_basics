import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button, Card, Checkbox, Divider, ProgressBar, RadioButton, Searchbar, Switch, TouchableRipple } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const Paper = () => {
    const [state1,setstate1] = useState(false)
    const [state2,setstate2] = useState(false)
    const [state3,setstate3] = useState(false)
    
    return(
        <View style={mypstyles.main1}>
            {/* <Image source={{uri:"https://play-lh.googleusercontent.com/V_kmO4jSeSO4OI4T52MNktfbGn_MF10HkW39SMUJs6W6M9GnlVdQG9rIgc3bZ_KwPnU"}} style={{width:300,height:300}}  /> */}

        <SafeAreaView>
            <Button
                mode="elevated"
                icon={'home'}
                textColor="red"
                rippleColor={"green"}
                // loading={true}
            >  Click here </Button>

            <Text>checkboxes</Text>
            <Checkbox status="checked" />
            <Checkbox status="unchecked" />
            <Divider  bold={true} horizontalInset={true}  />


            <Checkbox 
            status={state1 ? "checked" : "unchecked"}
            onPress={() => setstate1(!state1) }
            uncheckedColor="red"
            color="green"
            />
            <Text>radio button</Text>
            <RadioButton 
            status={state2 ? "checked" : "unchecked"}
            onPress={() => setstate2(!state2) }
            uncheckedColor="red"
            color="green"
            />
            <Divider  bold={true} leftInset={true}  />
            <Text>progress bar </Text>
            <ProgressBar progress={0.5} color="green" visible={true} />
            <Text>progress bar indeterminate </Text>
            <ProgressBar 
            progress={0.2} 
            color="blue"
            indeterminate={true} />
            <Searchbar 
            placeholder="search here"
            showDivider={true}
            elevation={1}
            />
            <Searchbar
            icon={'camera'}
            placeholder="search here"
            loading={true}
            showDivider={false}
            elevation={5}
            />
            <Card>
                <Card.Title title="Title 1" />
                <Card.Cover source={{uri:"https://play-lh.googleusercontent.com/V_kmO4jSeSO4OI4T52MNktfbGn_MF10HkW39SMUJs6W6M9GnlVdQG9rIgc3bZ_KwPnU"}} style={{width:'100%',height:'200'}}  /> 
                <Card.Content > <Text>anime image</Text> </Card.Content> 
                <Card.Actions >
                    <Button>cancel</Button>
                    <Button>ok</Button>
                </Card.Actions>
            </Card>



        </SafeAreaView>

        {/* <SafeAreaView>
            <Switch  
            value={state3}
            onValueChange={() => setstate3(!state3)}
            color="green"
            />

            <TouchableRipple  
            rippleColor={"red"}
            onPress={() => console.log("hey there")}
            ><Text>click here</Text></TouchableRipple>

            

        </SafeAreaView> */}

        
        </View>
    )
}

const mypstyles = StyleSheet.create({
    main1:{
        // minHeight:'fit-content',
        minHeight:50000,
    }
})

export default Paper;