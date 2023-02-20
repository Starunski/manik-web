import { Button, StyleSheet, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { IndexPath, Layout, Select, SelectItem, Input, Avatar, Text } from '@ui-kitten/components'
import { ClientsAutocompleteList } from '../../components/ClientsAutocompleteList'
import { UserList } from '../../components/UserList'
import { SelectSimple } from '../../components/SelectSimple'

export const SalesScreen = props => {
  const [value, setValue] = React.useState('')
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
      <View styles={styles.container}>
        {/* <ClientsAutocompleteList /> */}
        {/* <UserList  buttonName={'Select'}/> */}
        <SelectSimple  propData={[]}/>
        <Input
          placeholder="How much client need to pay ?"
          value={value}
          onChangeText={nextValue => setValue(nextValue)}
          keyboardType="number-pad"
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // minHeight: 128,
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: '100%',
    flex: 1
  }
})
