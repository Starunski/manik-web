import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  IndexPath,
  Layout,
  Select,
  SelectItem,
  Input,
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
  console.log("=======================data=============", data);

  const getData = async () => {
    try {
      const res = await readUserData();
      console.log("====================================");
      console.log("res", res);
      setData(res);
      console.log("====================================");
    } catch (error) {
      alert('ERROR', error.message);
    }
  };

  return (
    <Layout style={styles.container} level="1">
      {/* <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}> */}
      <Text>LOGO</Text>
      <SelectSimple />
      <Input
        placeholder="search"
        value={city}
        onChangeText={(nextValue) => setCity(nextValue)}
      />
      {/* <Mapbox /> */}
      {/* <MapboxGL.MapView style={styles.map} />; */}
      {/* <Text>search price </Text>
      <Text>search rating </Text> */}
      {/* <Text>search level </Text> */}

      <Button onPress={() => getData()} title="get data" />

      <Button onPress={() => onRemoveChild('1')} title="remove" />



      <Button
        title="NEXT"
        onPress={() => props.navigation.navigate("CustomerScreen2")}
      />
      <Text> {data} </Text>
      {/* </View> */}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
  },
});
