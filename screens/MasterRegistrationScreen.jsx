import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Input } from "@ui-kitten/components";
import { writeUserData, readUserData } from "../firebase";
import { v4 as uuid } from 'uuid'



export const MasterRegistrationScreen = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> registration form </Text>
      <Input
        placeholder="Full name"
        value={fullName}
        onChangeText={(nextValue) => setFullName(nextValue)}
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={(nextValue) => setEmail(nextValue)}
      />
      <Input
        placeholder="price"
        value={price}
        onChangeText={(nextValue) => setPrice(nextValue)}
      />
      <Input
        placeholder="address"
        value={address}
        onChangeText={(nextValue) => setAddress(nextValue)}
      />

      <Button
        title="Register"
        onPress={() => {
          console.log(uuid())
          const res = writeUserData(uuid(), fullName, email, address, price);

          // props.navigation.navigate("MasterRegistrationScreen2")
        }}
      />
      <Button
        title="NEXT test "
        onPress={() => {
          const res = readUserData();
          console.log(res);
          // props.navigation.navigate("MasterRegistrationScreen2")
        }}
      />
    </View>
  );
};
