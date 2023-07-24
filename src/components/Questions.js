import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const Input = () => {
  return (
    <View>
      <TextInput placeholder="yew" />
    </View>
  );
};

const Questions = ({ data }) => {
  const [active, setActive] = useState(false);

  return (
    <View>
      <Text style={styles.text}>{data.question}</Text>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <FlatList
          data={data.options}
          renderItem={({ item, index }) => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    if (item == "Yes" || item == "Other") {
                      // setActive(true);
                      // <Input/>
                      console.log("Active");
                    }
                  }}
                  style={{
                    elevation: 3,
                    width: "95%",
                    height: 50,
                    backgroundColor: "#b2f7ef",
                    marginTop: 5,
                    marginBottom: 10,
                    alignItems: "center",
                    alignSelf: "center",
                    paddingLeft: 15,
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      backgroundColor: "cyan",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontWeight: "600" }}>
                      {index == 0
                        ? "A"
                        : index == 1
                        ? "B"
                        : index == 2
                        ? "C"
                        : index == 3
                        ? "D"
                        : "E"}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "500",
                      marginLeft: 20,
                      color: "#495057",
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
                {/* <Input /> */}
                {/* {active= true ? <TextInput placeholder="fuck you"/>: <Text/>} */}
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
});
