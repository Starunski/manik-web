import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "./screens/index";
import {
  ApplicationProvider,
  Text,
  IconRegistry,
  Button,
  Icon,
} from "@ui-kitten/components";
import { ThemeContext } from "./theme-context";
import * as eva from "@eva-design/eva";
import { getAuth } from "firebase/auth";
import { app } from "./firebase";
import { AuthProvider } from "./providers/auth-provider";
import "react-native-get-random-values";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState("");
  console.log("useruseruseruseruser !!!", user);

  useEffect(() => {
    if (app) {
      // auth = getAuth(app);
      console.log("app !!!", app);
      let auth = getAuth(app);

      console.log("auth !!!", auth?.currentUser?.email);
      setUser(auth?.currentUser?.email);
    }
  }, [getAuth]);

  const someData = { someData: "some data" };

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AuthProvider>
        <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="HomeScreen"
                component={screens.HomeScreen}
                // options={{ title: "Home Screen" }}
              />
              <Stack.Screen
                name="MasterRegistrationScreen"
                component={screens.MasterRegistrationScreen}
              />
              <Stack.Screen
                name="MasterRegistrationScreen2"
                component={screens.MasterRegistrationScreen2}
              />
              <Stack.Screen
                name="CustomerScreen"
                component={screens.CustomerScreen}
              />
              <Stack.Screen
                name="CustomerScreen2"
                component={screens.CustomerScreen2}
              />
              <Stack.Screen
                name="CustomerDashBoardScreen"
                component={screens.CustomerDashBoardScreen}
              />
              <Stack.Screen
                name="MasterDashBoardScreen"
                component={screens.MasterDashBoardScreen}
              />
              <Stack.Screen
                name="LoginScreen"
                component={screens.LoginScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ApplicationProvider>
      </AuthProvider>
    </ThemeContext.Provider>
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
