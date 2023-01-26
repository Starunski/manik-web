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
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const HomeScreen = (props) => {
  const auth = getAuth(app);
  const MasterIcon = (props) => <Icon name="person-outline" {...props} />;
  const CustomerIcon = (props) => <Icon name="edit-outline" {...props} />;
  const { user } = useAuth();

  const handleSingOut = async () => {
    try {
      await signOut(auth);
      alert(" User is logged out");
    } catch (error) {
      alert(error.message);
    }
  };

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
      {!user ? (
        <View>
          <Button
            accessoryLeft={MasterIcon}
            onPress={() => props.navigation.navigate("LoginScreen")}
          >
            I am master
          </Button>
          <Button
            accessoryLeft={CustomerIcon}
            onPress={() => props.navigation.navigate("LoginScreen")}
          >
            I am customer and looking master
          </Button>
        </View>
      ) : (
        <View>
          <Button onPress={handleSingOut}>LogOut</Button>
        </View>
      )}

      {/* <Button onPress={() => readUserData()}>read data</Button> */}

      {user && user.email === "customer@mail.ru" && (
        <Button onPress={() => props.navigation.navigate("CustomerScreen")}>
          to customer screen
        </Button>
      )}
      {user && user.email === "master@mail.ru" && (
        <Button
          onPress={() => props.navigation.navigate("MasterDashBoardScreen")}
        >
          to master screen
        </Button>
      )}
    </View>
  );
};
