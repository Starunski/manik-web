import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapboxGL from "@rnmapbox/maps";

MapboxGL.setAccessToken(
  "pk.eyJ1Ijoic3RhcnVuc2tpIiwiYSI6ImNsZDV2Y2xlOTA3aGwzcG1tNWtnaXEyZG4ifQ.k8mQDN00uRBZDrLiqBXgpg"
);

export const Mapbox = () => {
  return <MapboxGL.MapView style={styles.map} />;
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
