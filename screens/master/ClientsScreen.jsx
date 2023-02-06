import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { IndexPath, Layout, Select, SelectItem, Input, Avatar } from '@ui-kitten/components'
import { UserList } from '../../components/UserList'

export const ClientsScreen = props => {
  const [city, setCity] = useState('')
  const [data, setData] = useState([])

  return (
    <SafeAreaView style={styles.container}>

      <UserList buttonName={"Detail"} />
      <Button  title='Add client'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // minHeight: 128,
    // display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: '100%'
    height: '100%'
  }
})
