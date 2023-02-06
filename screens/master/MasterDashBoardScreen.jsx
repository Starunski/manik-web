import {Button, StyleSheet, View, SafeAreaView} from "react-native";
import React from "react";
import {Calendar, Text} from "@ui-kitten/components";
import {Avatar} from "@ui-kitten/components";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {userSlice} from "../../store/reducers/userSlice";
import {useEffect} from "react";
import {fetchUsers} from "../../store/reducers/ActionCreators";
import {BottomNavigationSimpleUsageShowcase} from './BottomNavigation'

export const MasterDashBoardScreen = (props) => {
  const [date, setDate] = React.useState(new Date());
  const dispatch = useAppDispatch();

  const {counter, isLoading, error} = useAppSelector((state) => state.userReducer);
  const {increment, decrement} = userSlice.actions;

  useEffect(() => {
    const {data, isLoading, error} = dispatch(fetchUsers());
    console.log("data!!!!!", data);
    console.log("isLoading!!!!!", isLoading);
    console.log("error!!!!!", error);
  }, []);

  return (


    <SafeAreaView>
      <View style={{justifyContent: 'space-between', height: '100%'}}>
        <View>
          <View>
            <Avatar source={require("../../assets/photo.png")}/>
          </View>
          {isLoading && <Text category="h6">{isLoading}</Text>}

          {error && <Text category="h6">{error}</Text>}

          <Text category="h6">MasterDashBoardScreen</Text>
          <Text category="h6">{counter}</Text>

          <Button title="Increment" onPress={() => dispatch(increment(10))}/>
          <Button title="Decrement" onPress={() => dispatch(decrement(10))}/>

          {/* <Calendar date={date} onSelect={(nextDate) => setDate(nextDate)} /> */}
          {/* <Button
        title="Approve"
        onPress={() => props.navigation.navigate("HomeScreen")}
      /> */}


        </View>
        <View>
          <BottomNavigationSimpleUsageShowcase navigation={props.navigation}/>
        </View>
      </View>

    </SafeAreaView>
  );
};
