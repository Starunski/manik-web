import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { IndexPath, Layout, Select, SelectItem, Input, Avatar } from '@ui-kitten/components'
import { UserList } from '../../components/UserList'
import { ClientModal } from '../../components/ClientModal'
import { useAppSelector } from '../../hooks/redux'
import { userSlice } from '../../store/reducers/userSlice'
import { useAppDispatch } from '../../hooks/redux'

export const ClientsScreen = props => {
  const [city, setCity] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [selectedClient, setSelectedClient] = useState()
  const clientList = useAppSelector(state => state.userReducer.clientList)
  const dispatch = useAppDispatch()
  const { addClient, updateClient, deleteClient } = userSlice.actions
  const onShowDetail = id => {
    setShowDetailModal(true)
    clientList?.find((item, idx) => {
      if (idx === id) {
        setSelectedClient(item)
      }
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Add client +" onPress={() => setShowModal(true)} />
      <UserList buttonName={'Detail'} onPress={onShowDetail} data={clientList} />
      {showModal && <ClientModal onClose={() => setShowModal(false)} variant={'add'} />}
      {showDetailModal && (
        <ClientModal onClose={() => setShowDetailModal(false)} variant={'detail'} data={selectedClient} />
      )}
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
