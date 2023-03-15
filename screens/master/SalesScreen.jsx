import { Button, StyleSheet, View, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { IndexPath, Layout, Select, SelectItem, Input, Avatar, Text } from '@ui-kitten/components'
import { ClientsAutocompleteList } from '../../components/ClientsAutocompleteList'
import { UserList } from '../../components/UserList'
import { SelectSimple } from '../../components/SelectSimple'

export const SalesScreen = props => {
  const [value, setValue] = React.useState('')
  const [data, setData] = React.useState([])
  console.log('data', data)

  const getData = async () => {
    try {
      const res = await fetch('http://localhost:5000/api')
      const data = await res.json()

      setData(data.users)
    } catch (error) {
      alert('ERROR', error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View styles={styles.container}>
        {/* <ClientsAutocompleteList /> */}
        {/* <UserList  buttonName={'Select'}/> */}
        <SelectSimple
          data={data}
          setSelectedTime={e => {
            console.log(e)
          }}
        />
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
