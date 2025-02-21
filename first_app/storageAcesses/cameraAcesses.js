import React, { useRef, useState } from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCameraPermissions, CameraView } from "expo-camera";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";



const CameraAccesses = () => {

    const [camera, setcamera] = useState(false)
    const [face, setface] = useState('back');
    const { width, height } = Dimensions.get('screen')
    const [permission, grantpermission] = useCameraPermissions()
    const Opencamerafun = () => {
        setcamera(!camera)
    }

    const cameraRef = useRef(null)
    const [Myimage,setMyimage] = useState(null)
    const Takephoto = async () => {

        if (cameraRef.current != null) {
            const result = await cameraRef.current.takePictureAsync({
                quality: 1
            })
            setMyimage(result.uri)
            console.log(Myimage);
        }
        

    }


    

    return (
        <SafeAreaView>
            <ScrollView>


                <Button mode="contained" icon={"camera"} onPress={Opencamerafun} >Open camera</Button>
                {
                    camera ?
                        <View style={{ position: 'relative' }}>
                            <CameraView
                                style={{ width: width, height: 600 }}
                                facing={face}
                                ref={cameraRef}
                            >
                            </CameraView>
                            <View style={{ position: 'absolute', top: 15, right: 15, width: 30, height: 30, borderWidth: 1 }}
                                onTouchEnd={() => setface(face === "back" ? "front" : "back")}
                            // onPress={setface('front')} 
                            ></View>
                            <Button icon={"camera"} style={{ position: 'absolute', left: "50%", bottom: 30, transform: [{ translateX: "-50%" }] }}
                                onPress={Takephoto}
                            ></Button>
                        </View>

                        : <Text>click to open camera</Text>
                }

                <View style={{width:width,height:500}} >
                    <Image source={{uri:Myimage}} style={{width:300,height:300}} />
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

export default CameraAccesses;