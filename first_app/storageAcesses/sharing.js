import React, { useState } from "react";
import { View, Text, Image, ScrollView, Share } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { TextInput } from "react-native";


const SharingImage = () => {
    const [Myimage, setMyimage] = useState(null);
    const [text,settext] = useState("");

    const Imagefun = async () => {
        const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
        if (status === "granted") {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true
            });
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
    // const DowShare = async() => {
    //     const ImageURL = text;
    //     const FileURL = `${FileSystem.cacheDirectory}/downloaded.png`;
    //     const {uri} = await FileSystem.downloadAsync(ImageURL,FileURL);
    //     const status = await Sharing.isAvailableAsync();
    //     if (status){
    //         Sharing.shareAsync(uri)
    //         console.log(uri);
            
    //     }else{alert("give permission for sharing")}
    // }



    const DowShare = async () => {
        try {
            // Ensure text is not empty or undefined
            if (!text) {
                alert("No image URL provided!");
                return;
            }
    
            const ImageURL = text;
            const FileURL = `${FileSystem.cacheDirectory}/downloaded.png`;
    
            // Check if sharing is available before downloading
            const isSharingAvailable = await Sharing.isAvailableAsync();
            if (!isSharingAvailable) {
                alert("Give permission for sharing");
                return;
            }
    
            // Download the image
            const { uri } = await FileSystem.downloadAsync(ImageURL, FileURL);
    
            // Share the file
            await Sharing.shareAsync(uri);
            console.log("Shared URI:", uri);
        } catch (error) {
            console.error("Error in Download and Share:", error);
            alert("Something went wrong while sharing.");
        }
    };

    



    return (
        <SafeAreaView>
        <ScrollView>


            <View style={{ display:'flex',flexDirection:'row'}} >
                <View style={{borderWidth:1,width:"50%",height:40}} >

                <TextInput 
                style={{borderWidth:1}}
                placeholder="Enter url here ... "
                onChangeText={(text) => {
                    settext(text)
                }}
                value={text}
                />
                </View>
                <Button mode="contained" onPress={DowShare} >download & share</Button>
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