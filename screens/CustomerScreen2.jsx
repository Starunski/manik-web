import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Avatar, Calendar } from "@ui-kitten/components";

export const CustomerScreen2 = (props) => {
  const [date, setDate] = useState(new Date());

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Avatar source={require("../assets/photo.png")} />
      </View>
      <Text>price $ 70 </Text>
      <Calendar date={date} onSelect={(nextDate) => setDate(nextDate)} />

      <Text>review </Text>

      <Button
        title="NEXT"
        onPress={() => props.navigation.navigate("HomeScreen")}
      />
      {/* <Button
        title="Go to CustomerScreen2... again"
        onPress={() => props.navigation.push('CustomerScreen2')}
      /> */}
    </View>
  );
};
