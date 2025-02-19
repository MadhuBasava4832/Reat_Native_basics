import React, { useState } from "react";
import { View, Text, Image, ScrollView, Share } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { TextInput } from "react-native";


const SharingImage = () => {
    const [Myimage, setMyimage] = useState(null);
    const [text,settext] = useState("");

    const Imagefun = async () => {
        const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
        console.log(status);
        if (status === "granted") {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true
            });
            console.log(ImagePicker);
            console.log(result.assets[0].uri);
            setMyimage(result.assets[0].uri);


        } else {
            alert("Give permissions");
        }

    }

    const Sharefun = async () => {
        const status = await Sharing.isAvailableAsync();
        if (status){
            Sharing.shareAsync(Myimage)
        }else{alert("give permission for sharing")}
    }

    const Sharefun1 = async() => {
        const ImageURL = "https://motionbgs.com/media/1953/monkey-d-luffy-straw-hat2.jpg";
        const FileURL = `${FileSystem.cacheDirectory}/shared_image.png`;
        const {uri} = await FileSystem.downloadAsync(ImageURL,FileURL);
        const status = await Sharing.isAvailableAsync();
        if (status){
            Sharing.shareAsync(uri)
        }else{alert("give permission for sharing")}
    }

    return (
        <SafeAreaView>
        <ScrollView>


            <View style={{ display:'flex',flexDirection:'row'}} >
                <TextInput 
                style={{borderWidth:1,width:250,height:60}}
                placeholder="Enter url here ... "
                onChangeText={(text) => {
                    settext(text)
                    console.log(text);
                }}
                value={text}
                />
                <Button mode="contained" onPress={(text) => {
                    setMyimage(text)
                }} >download</Button>
            </View>





            <Button mode="contained" onPress={Imagefun} >Upload image</Button>
            {
                Myimage ? 
                <View>
                <Image style={{ width: 200, height: 200,resizeMode:"contain" }} source={{ uri: Myimage }} />
                <Button mode="contained" onPress={Sharefun}  >share image</Button>
                </View>

                 : <Text style={{ width: 200, height: 200 }} >Image is not uploaded yet!</Text>
            }


            <Text>image from chrome</Text>
            <Button mode="contained"  onPress={Sharefun1} >share from chrome</Button>
        </ScrollView>
        </SafeAreaView>

    )
}

export default SharingImage;