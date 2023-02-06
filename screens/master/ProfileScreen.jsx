import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { IndexPath, Layout, Select, SelectItem, Input, Avatar } from '@ui-kitten/components'
import { MarketingCard } from '../../components/MarketingCard'
import { app, db, readUserData } from '../../firebase'

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth'

export const ProfileScreen = props => {
  const auth = getAuth(app)

  const handleSingOut = async () => {
    try {
      await signOut(auth)
      alert(' User is logged out')
      props.navigation.navigate("Calendar");

    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <MarketingCard title={'Create post and share in Social media'} subtitle={'some subtitle'} status />
      <MarketingCard title={'Payments'} subtitle={'some subtitle'} status />
      <View>
        <Button onPress={handleSingOut} title="Sign Out" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // minHeight: 128,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
})
