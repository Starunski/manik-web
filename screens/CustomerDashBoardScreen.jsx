import { Button, StyleSheet, View } from "react-native";
import React from "react";
import { Calendar, Text } from "@ui-kitten/components";
import { Avatar } from "@ui-kitten/components";

export const CustomerDashBoardScreen = (props) => {
  const [date, setDate] = React.useState(new Date());

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Avatar source={require("../assets/photo.png")} />
      </View>

      <Text category="h6">CustomerDashBoardScreen</Text>

      {/* <Calendar date={date} onSelect={(nextDate) => setDate(nextDate)} /> */}
      <Button
        title="Approve"
        onPress={() => props.navigation.navigate("HomeScreen")}
      />
    </View>
  );
};
