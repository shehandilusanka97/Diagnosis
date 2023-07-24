import {
    FlatList,
    LogBox,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useEffect } from "react";
  import Questions from "../components/Questions";
  import { ForTeacher2 ,Performance } from "../Data";
  import { useNavigation } from "@react-navigation/native";
  import Ionicons from "@expo/vector-icons/Ionicons";
  const ForTeachersQue2 = () => {
    const navigation = useNavigation();
    useEffect(() => {
      LogBox.ignoreLogs([
        "VirtualizedLists should never be nested",
        "Constants.platform.ios.model has been deprecated in favor of expo-device's Device.modelName property. This API will be removed in SDK 45.",
      ]);
    }, []);
  
    const renderItem = ({ item }) => {
      return (
        <View>
          <Questions data={item} />
        </View>
      );
    };
  
    return (
      <View style={{ height: "100%" }}>
        <Text style={styles.headingText}>Behavioral Analysis</Text>
        <Text
          style={[
            styles.headingText,
            { color: "#495057", fontSize: 20, marginBottom: 15 },
          ]}
        >
          (For Teachers)
        </Text>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        >
          {/* Question 1 */}
          {
            <FlatList
              data={ForTeacher2}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          }
          <Text
          style={[
            styles.headingText,
            { color: "#495057", fontSize: 20, marginBottom: 15 },
          ]}
        > Performance
        </Text>
        {
            <FlatList
              data={Performance}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          }
        </ScrollView>
        <View style={{ flexDirection: "row", justifyContent:"space-evenly" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ForParentsQue1")}
          >
            <Text style={[styles.btnText, { letterSpacing: 0 }]}>PREVIOUS</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={[styles.button,{width:'10%',borderRadius:20,backgroundColor:'#fe7f2d'}]}
          >
            <Ionicons name="md-home" size={19} color="white" />
          </TouchableOpacity>
  
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#38b000" }]}
          >
              {/* ForTeachersQue1 */}
            <Text style={styles.btnText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default ForTeachersQue2;
  
  const styles = StyleSheet.create({
    headingText: {
      paddingHorizontal: 20,
      fontSize: 26,
      fontWeight: "bold",
    },
    container: {
      padding: 20,
    },
    button: {
      backgroundColor: "#0077b6",
      padding: 10,
      width: "25%",
      justifyContent: "flex-end",
      alignSelf: "flex-end",
      alignItems: "center",
      // marginLeft:40,
      marginTop: 10,
      borderRadius: 10,
    },
    btnText: {
      color: "white",
      fontWeight: "bold",
      letterSpacing: 4,
    },
  });
  