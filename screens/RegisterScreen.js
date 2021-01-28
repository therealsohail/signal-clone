import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Image, Button, Input } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

const RegisterScreen = ({ navigation }) => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
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
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Enter Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Enter Password"
          autoFocus
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button containerStyle={styles.button} title="Login" />
        <Button
          containerStyle={styles.button}
          type="outline"
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
        <View style={{ height: 100 }} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

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
