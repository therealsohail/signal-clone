import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Image, Button, Input } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth, db } from "../firebase";

export default function RegisterScreen({ navigation }) {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [imageUrl, setUrl] = useState("");

  const handleSignup = async () => {
    try {
      let authResponse = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(authResponse);
      if (!authResponse["message"]) {
        let user = await db.collection("Users").doc(authResponse.user.uid).set({
          name,
          email,
          password,
          imageUrl,
        });
        navigation.navigate("Login");
      }
    } catch (error) {
      console.log(error);
      alert(error["message"]);
    }
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar backgroundColor="#346EEB" style="light" />
      <Image
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/Signal-logo.png",
        }}
        style={{ width: 300, height: 100 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Enter Name"
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Enter Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Enter Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Enter Image URL"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setUrl(text)}
        />
        <Button
          onPress={handleSignup}
          containerStyle={styles.button}
          title="Register"
        />
        <Button
          containerStyle={styles.button}
          type="outline"
          title="Login"
          onPress={() => navigation.navigate("Login")}
        />
        <View style={{ height: 100 }} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    marginTop: 20,
    width: 300,
  },
  button: {
    width: 300,
    marginTop: 10,
  },
});
