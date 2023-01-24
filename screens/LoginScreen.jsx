import React, { useState, useEffect } from "react";
import {
  ApplicationProvider,
  Text,
  IconRegistry,
  Button,
  Icon,
  Input,
} from "@ui-kitten/components";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { useAuth } from "../providers/auth-provider";
import { app } from "../firebase";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const LoginScreen = (props) => {
  const auth = getAuth(app);
  const { user } = useAuth();
  console.log("fireBaseUser", user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [update, setUpdate] = useState("");

  const handleSingUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      alert(`User ${res.user.email} is created `);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSingIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      alert(`User ${res.user.email} is logged in `);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSingOut = async () => {
    try {
      await signOut(auth);
      alert(" User is logged out");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUpdateUser = async () => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: update,
      });
      alert(" User is updated");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      behavior="padding"
    >
      <View style={styles.container}>
        <Text>LoginScreen !</Text>
        <Text>{user?.email}</Text>
        <Input
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(nextValue) => setEmail(nextValue)}
        />
        <Input
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(nextValue) => setPassword(nextValue)}
        />
        <Input
          style={styles.input}
          placeholder="Update displayName field in user"
          value={update}
          onChangeText={(nextValue) => setUpdate(nextValue)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={handleSingUp} style={{ marginHorizontal: 10 }}>
          register
        </Button>

        <Button onPress={handleSingIn} style={{ marginHorizontal: 10 }}>
          Login
        </Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => props.navigation.navigate("MasterRegistrationScreen")}
          style={{ marginHorizontal: 10 }}
        >
          Add to database some info
        </Button>
        <Button onPress={handleSingOut} style={{ marginHorizontal: 10 }}>
          SignOut
        </Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={handleUpdateUser} style={{ marginHorizontal: 10 }}>
        Update displayName
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginHorizontal: 20,
    paddingVertical: 10,
  },
});