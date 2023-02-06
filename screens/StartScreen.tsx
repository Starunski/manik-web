import React, { useCallback, useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'

// import { View } from '../components/Themed'
// import { RootStackParamList } from '../types'
// import Dropdown from '../controls/dropdown/Dropdown'
// import AButton from '../controls/button/Button'
// import Supabase from '../libs/Supabase.client'

export default function StartScreen({ navigation }) {
  const getPhoneNumbers = useCallback(async () => {}, [])

  useEffect(() => {
    getPhoneNumbers()
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* <AButton text="Hello to Melitopol guys" loading={true} onPress={() => navigation.navigate('Registration')} /> */}
        <Text>YO StartScreen</Text>
        {/* <Dropdown /> */}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  tinyLogo: {
    width: 250,
    height: 350,
    marginBottom: 52
  }
})
