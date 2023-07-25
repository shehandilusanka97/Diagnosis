import { StyleSheet, Text, View,LogBox, TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    useEffect(() => {
        LogBox.ignoreLogs([
          "Constants.platform.ios.model has been deprecated in favor of expo-device's Device.modelName property. This API will be removed in SDK 45.",
        ]);
      }, []);
      const navigation = useNavigation();
  return (
    <View>
      <Text style={[styles.headerText, {
            transform: [{skewX: '-15deg'}],marginTop:20
          }]}>DIAGNOSIS</Text>
      <View style={styles.container}>
      <Text style={[styles.subHeaderText,{marginTop:20}]}>Behavioral Analysis</Text>
      {/* row 1 */}
      <View style={styles.row}>

        <TouchableOpacity style={styles.box}
         onPress={() => navigation.navigate("ForTeachersQue1")}
        >
            <LottieView
            style={{width:"75%"}}
            source={require('../../assets/teacher1.json')}
            autoPlay
            />
            <Text style={{marginTop:10,fontWeight:'400',fontSize:18,color: '#003566', letterSpacing:2
            }}>Teachers</Text>


        </TouchableOpacity>
        <TouchableOpacity style={styles.box}
         onPress={() => navigation.navigate("ForParentsQue1")}
        >
        <LottieView
           style={{width:"75%"}}
            source={require('../../assets/parent.json')}
            autoPlay
            />
             <Text style={{marginTop:10,fontWeight:'400',fontSize:18,color: '#003566', letterSpacing:2
            }} >Parents</Text>

        </TouchableOpacity>
      </View>
      <Text style={styles.subHeaderText}>Background Analysis</Text>
      {/* row 2 */}
      <View style={styles.row}>

        <TouchableOpacity style={styles.box}
          onPress={() => navigation.navigate("BackgroundParents")}>
        <LottieView
           style={{width:"75%"}}
            source={require('../../assets/parent.json')}
            autoPlay
            />
             <Text  style={{marginTop:10,fontWeight:'400',fontSize:18,color: '#003566',
             letterSpacing:2
            }}>Parents</Text>


        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
        
        <LottieView
           style={{width:"75%"}}
            source={require('../../assets/teacher1.json')}
            autoPlay
            />
            <Text  style={{marginTop:10,fontWeight:'400',fontSize:18,color: '#003566', letterSpacing:2
            }}>Teachers</Text>

        </TouchableOpacity>
      </View>

      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    headerText:{
        letterSpacing:8,
        padding:20,
        fontSize:25,
        fontWeight: "bold", 
        backgroundColor:'#b2f7ef',
        width:"90%",
        alignSelf:'center',
        color:'#003566'
      
    },
    subHeaderText:{
        padding:20,
        letterSpacing:2,
        fontSize:24,
        fontWeight: "500", 
        color:'#003566'
      
    },
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:"#fff",
    },
    row:{
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
        height:'25%'
    },
    box: {
        height: "80%",
        width: "42%",
        borderRadius: 5,
        marginVertical: 40,
        backgroundColor: '#b2f7ef',
        alignItems: 'center',
       
        
      },
    
})