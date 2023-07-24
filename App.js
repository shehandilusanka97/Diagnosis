import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ForParentsQue1 from "./src/screens/ForParentsQue1";
// import ForParentsQue2 from "./src/screens/ForParentsQue2";
// import ForParentsQue from "./src/screens/ForParentsQue2";
// import ForTeachersQue1 from "./src/screens/ForTeachersQue1";
import ForTeachersQue2 from "./src/screens/ForTeachersQue2";
// import BackgroundParents from "./src/screens/BackgroundParents";

export default function App() {

const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>   
      <SafeAreaView style={styles.container}>
        {/* <BehavioralAnalysis /> */}
        <Stack.Navigator   screenOptions={{headerShown:false}} >
        {/* <Stack.Screen name="ForParentsQue1" component={ForParentsQue1} /> */}
        {/* // <Stack.Screen name="ForParentsQue2" component={ForParentsQue2} /> */}
        {/* <Stack.Screen name="ForTeachersQue1" component={ForTeachersQue1} /> */}
        <Stack.Screen name="ForTeachersQue2" component={ForTeachersQue2} />
        {/* <Stack.Screen name="BackgroundParents" component={BackgroundParents} /> */}
        {/* <Stack.Screen name="ForParentsQue" component={ForParentsQue} /> */}

      </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#e5e5e5",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
