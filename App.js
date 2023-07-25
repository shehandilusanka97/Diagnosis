import { SafeAreaView, StyleSheet, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForParentsQue1 from "./src/screens/ForParentsQue1";
import ForParentsQue from "./src/screens/ForParentsQue2";
import ForTeachersQue1 from "./src/screens/ForTeachersQue1";
import ForTeachersQue2 from "./src/screens/ForTeachersQue2";
import HomeScreen from "./src/screens/HomeScreen";
import { useEffect } from "react";
import BackgroundParents from "./src/screens/BackgroundParents";

export default function App() {

const Stack = createNativeStackNavigator();
useEffect(() => {
  LogBox.ignoreLogs([
    "VirtualizedLists should never be nested",
    "Constants.platform.ios.model has been deprecated in favor of expo-device's Device.modelName property. This API will be removed in SDK 45.",
  ]);
}, []);

  return (
    <NavigationContainer>   
      <SafeAreaView style={styles.container}>
        {/* <BehavioralAnalysis /> */}
        <Stack.Navigator   screenOptions={{headerShown:false}} >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ForParentsQue1" component={ForParentsQue1} />
        <Stack.Screen name="ForParentsQue2" component={ForParentsQue} />
        <Stack.Screen name="ForTeachersQue1" component={ForTeachersQue1} />
        <Stack.Screen name="ForTeachersQue2" component={ForTeachersQue2} />
        <Stack.Screen name="BackgroundParents" component={BackgroundParents} />
       

      </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
