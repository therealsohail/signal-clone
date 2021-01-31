import React, { useLayoutEffect, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import { auth, db } from "../firebase";

export default function AddChat({ navigation }) {
  const [chatName, setChatName] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
    });
  }, []);

  const addChat = async () => {
    try {
      let chat = await db.collection("Chats").add({
        chatName: chatName,
      });
      alert("Chat Added");
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter Chat Name"
        type="text"
        value={chatName}
        onChangeText={(text) => setChatName(text)}
      />
      <Button onPress={addChat} title="Add Chat" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
