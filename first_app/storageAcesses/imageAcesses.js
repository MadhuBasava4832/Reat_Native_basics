import React, { useState } from "react";
import { View,Text, Image , ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
// import  {Video}  from "expo-video";
import {Video} from "expo-av";



const ImageAcesses = () => {
    const [Myimage,setMyimage] = useState(null);
    const [Myvideo,setMyvideo] = useState(null);

    const Imagefun = async() => {
        const {status} =await ImagePicker.getMediaLibraryPermissionsAsync();
        console.log(status);
        if (status === "granted"){
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes : ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true
            });
            console.log(ImagePicker);
            console.log(result.assets[0].uri);
            setMyimage(result.assets[0].uri);
            
            
        }else{
            alert("Give permissions");
        }

    }
    const Videofun = async() => {
        const {status} =await ImagePicker.getMediaLibraryPermissionsAsync();
        console.log(status);
        if (status === "granted"){
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes : ImagePicker.MediaTypeOptions.Videos,
                allowsEditing:true
            });
            console.log(ImagePicker);
            console.log(result.assets[0].uri);
            setMyvideo(result.assets[0].uri);
        }else{
            alert("Give permissions");
        }

    }

    return(
        <SafeAreaView>
            <ScrollView>
            <View>
            <Text>select image by clicking</Text>
            <Button mode="contained" onPress={Imagefun} >Upload image</Button>
            {
                Myimage ? <Image style={{width:200, height:200}}  source={{uri:Myimage}}  /> : <Text style={{width:200, height:200}} >Image is not uploaded yet!</Text>
            }
            </View>
            <View>
            <Text>select video by clicking</Text>
            <Button mode="contained" onPress={Videofun} >Upload video</Button>
            {
                Myvideo ? 
                <Video
  source={{ uri: Myvideo }}
  style={{ width: 350, height: 350 }}
  useNativeControls
  resizeMode="contain"
/>


                :
                 <Text style={{width:200, height:200}} >video is not uploaded yet!</Text>
            }
            </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default ImageAcesses;