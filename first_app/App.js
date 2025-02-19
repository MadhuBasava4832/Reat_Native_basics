import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { ActivityIndicator, Button, FlatList, ScrollView, Switch, TextInput, TouchableOpacity } from 'react-native';
import Tablefun from './RNclasses1/table';
import Statusbarf from './RNclasses1/statusbar';
import Paper from './RNclasses2/rnpaper';
import Carousel1 from './carousel/carousel';
import Animation from './RNclasses2/animations';
import MainScreen from './Navigations/mainScreen';
import TopTabNav from './Navigations/TopTabNavigations';
import TopbarStackNav from './Navigations/topbar_stacknav';
import StackTopBar from './Navigations/stack_topbarnav';
import Bottombar from './Navigations/Bottombar/bottomtab';
import DrawerNav from './Navigations/drawernav';
import ImageAcesses from './storageAcesses/imageAcesses';
import SharingImage from './storageAcesses/sharing';




export default function App() {

  const mydata = [1,2,3,4,5,6,7,8]


  return (
    // <View style={styles.container} >



    //   <ScrollView>

    //   <Text>this is first app . yeah it is working</Text>

    //     <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdBeCmLbPq3t83GPbJkqHm1_QsFTTqqSUF7A&s"}} 
    //       style={{width:300,height:300}} />
        
    //     <Image source={require("./assets/itachi.jpg")} style={{width:200,height:200}} />
    //    <StatusBar style="auto" />




    //     {/* 23-12-2024 */}

    // {/* <TextInput placeholder='Enter password' secureTextEntry={} /> */}
    // <ScrollView >
    // <TextInput placeholder='Enter name' />
    // <TextInput placeholder='Enter number' keyboardType='numeric' />
    // <TextInput placeholder='Enter password' secureTextEntry={true} />
    // </ScrollView>

      

    //   <Button title='click' />
    //   <TouchableOpacity>
    //     <Text > click here </Text>
    //   </TouchableOpacity>
    //   <Switch value={false} />
    //   <Switch value={true} />
    //   <ActivityIndicator size={'large'} color='green' />

      

      






    // </ScrollView>

    // <FlatList 
    //     // data = {mydata} renderItem = {({item}) => <Text>{item}</Text>}
    //     data = {mydata} renderItem = {({item}) => 
    //     <View style={styles.sizepenchu} >
    //       <Text>{item}</Text>
    //     </View>}
    //     numColumns={3}
    //   />

    //  </View>

    <View>
      {/* <Tablefun /> */}
      {/* <Statusbarf /> */}

      {/* <Paper /> */}
      {/* <Animation /> */}
      {/* <Carousel1 /> */}
      {/* <MainScreen /> */}

      {/* <TopTabNav/> */}

      {/* <TopbarStackNav/> */}
      {/* <StackTopBar/> */}

      {/* <Bottombar/> */}
      {/* <DrawerNav/> */}

      {/* <ImageAcesses/> */}
      <SharingImage/>

    </View>
   );


}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2:{
    minWidth:300,
    minHeight:200,
    border:"1px solid black",
    fontSize:"32px",
  },
  sizepenchu:{
    // display:"flex",
    alignItems: 'center',
    justifyContent: 'center',
    width:50,
    height:100,
  },
});
