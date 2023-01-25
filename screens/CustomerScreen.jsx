import { Button, StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import {
  IndexPath,
  Layout,
  Select,
  SelectItem,
  Input,
  Avatar,
} from "@ui-kitten/components";
import { SelectSimple } from "../components/SelectSimple";
import { readUserData, onRemoveChild } from "../firebase";
// import { Mapbox } from "../components/Mapbox";

// import MapboxGL from "@rnmapbox/maps";

// MapboxGL.setAccessToken(
//   "pk.eyJ1Ijoic3RhcnVuc2tpIiwiYSI6ImNsZDV2Y2xlOTA3aGwzcG1tNWtnaXEyZG4ifQ.k8mQDN00uRBZDrLiqBXgpg"
// );

export const CustomerScreen = (props) => {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);

  // const getData = async () => {
  //   try {
  //     const res = await readUserData();
  //     console.log("res", res);
  //     setData(res);
  //   } catch (error) {
  //     alert("ERROR", error.message);
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}> */}
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: 20,
        }}
      >
        <Avatar source={require("../assets/photo.png")} />
      </View>

      <View
        style={{
          width: "100%",
        }}
      >
        <SelectSimple />
        <Input
          placeholder="search"
          value={city}
          onChangeText={(nextValue) => setCity(nextValue)}
        />
      </View>

      {/* <Mapbox /> */}
      {/* <MapboxGL.MapView style={styles.map} />; */}
      {/* <Text>search price </Text>
      <Text>search rating </Text> */}
      {/* <Text>search level </Text> */}

      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onPress={() => getData()} title="get data" />

        <Button onPress={() => onRemoveChild("1")} title="remove" />

        <Button
          title="NEXT"
          onPress={() => props.navigation.navigate("CustomerScreen2")}
        />
      </View>

      <Text> {data} </Text>
      {/* </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // minHeight: 128,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
