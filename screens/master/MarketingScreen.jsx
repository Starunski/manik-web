import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { IndexPath, Layout, Select, SelectItem, Input, Avatar } from '@ui-kitten/components'
import { MarketingCard } from '../../components/MarketingCard'

export const MarketingScreen = props => {
  const [city, setCity] = useState('')
  const [data, setData] = useState([])

  return (
    <SafeAreaView style={styles.container}>
      <MarketingCard title={'Invite your contacts by phone'} subtitle={'some subtitle'} status />
      <MarketingCard title={'Centrum Social media'} subtitle={'some subtitle'} />
      <MarketingCard title={'Marketing company'} subtitle={'some subtitle'} />
      <MarketingCard title={'Promotions'} subtitle={'some subtitle'} status />
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
