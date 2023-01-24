import { useEffect, useState } from "react";
import {
  ApplicationProvider,
  Text,
  IconRegistry,
  Button,
  Icon,
  Avatar,
} from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { app, db, readUserData } from "../firebase";
import { useAuth } from "../providers/auth-provider";

export const HomeScreen = (props) => {
  const FacebookIcon = (props) => <Icon name="facebook" {...props} />;
  const { user } = useAuth();


  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Text category="h1">HOME</Text> */}
      <IconRegistry icons={EvaIconsPack} />
      <View>
        {user?.email ? (
          <>
            <Text>{user?.email}</Text>
            <Text>displayName: {user?.displayName}</Text>
            <Avatar source={require("../assets/photo.png")} />
          </>
        ) : (
          <Text>not login </Text>
        )}
      </View>
      <Button onPress={() => readUserData()}>read data</Button>
      <Button
        accessoryLeft={FacebookIcon}
        onPress={() => props.navigation.navigate("LoginScreen")}
      >
        I am master
      </Button>
      <Button onPress={() => props.navigation.navigate("CustomerScreen")}>
        I am looking some master
      </Button>

      {/* <Button title="Go back" onPress={() => props.navigation.goBack()} /> */}
    </View>
  );
};
