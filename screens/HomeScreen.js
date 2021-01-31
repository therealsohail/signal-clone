import React, { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import CustomListItem from "../components/CustomListItem";
import { auth, db } from "../firebase";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  let [chats, setChats] = useState([]);

  useEffect(async () => {
    try {
      let data = await db.collection("Chats").onSnapshot((snapshot) => {
        let docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setChats(docs);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            marginRight: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("AddChat")}>
            <AntDesign size={24} name="search1" color="black" />
          </TouchableOpacity>
          <View style={{ width: 10 }}></View>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        {chats.map((chat) => (
          <CustomListItem chat={chat} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
