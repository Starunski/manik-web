import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Modal as KittenModal, Text, Input } from '@ui-kitten/components'
import { SelectSimple } from './SelectSimple'
import { userSlice } from '../store/reducers/userSlice'
import { useAppDispatch } from '../hooks/redux'
import { useAppSelector } from '../hooks/redux'

export const ClientModal = ({ onClose, variant, data }) => {
  console.log('====================================')
  console.log('data', data)
  console.log('====================================')
  const dispatch = useAppDispatch()
  const clientList = useAppSelector(state => state.userReducer.clientList)

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const onAddNewClientToList = () => {
    const { addClient } = userSlice.actions
    if (name && phone) {
      const dataToSend = {
        title: name,
        description: phone
      }
      dispatch(addClient(dataToSend))
    }
    onClose()
  }

  const onUpdateClientFromList = () => {
    const { updateClient } = userSlice.actions

    const dataToSend = {
      id: data?.id,
      title: name,
      description: phone
    }
    dispatch(updateClient(dataToSend))

    onClose()
  }

  const onDeleteClientFromList = () => {
    const { deleteClient } = userSlice.actions
    dispatch(deleteClient(data?.id))

    onClose()
  }

  return (
    <View style={styles.container}>
      <KittenModal visible={true} backdropStyle={styles.backdrop} onBackdropPress={onClose}>
        <Card disabled={true}>
          {variant === 'add' && (
            <>
              <Text>+ Add new client 😻</Text>
              <Input
                style={styles.input}
                placeholder="Client name"
                value={name}
                onChangeText={nextValue => setName(nextValue)}
              />
              <Input
                style={styles.input}
                placeholder="Client phone"
                value={phone}
                onChangeText={nextValue => setPhone(nextValue)}
              />
            </>
          )}
          {variant === 'detail' && (
            <>
              <Text>details about client 😻</Text>
              <Input
                style={styles.input}
                placeholder="Client name"
                value={name}
                defaultValue={data?.title}
                onChangeText={nextValue => setName(nextValue)}
              />
              <Input
                style={styles.input}
                placeholder="Client phone"
                value={phone}
                defaultValue={data?.description}
                onChangeText={nextValue => setPhone(nextValue)}
              />
              <Button onPress={onDeleteClientFromList}>{'Delete'}</Button>
            </>
          )}

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button onPress={variant === 'add' ? onAddNewClientToList : onUpdateClientFromList}>
              {variant === 'add' ? 'Add' : 'Update'}
            </Button>
            <Button onPress={() => onClose()}>Cancel</Button>
          </View>
        </Card>
      </KittenModal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 192
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  input: {
    marginHorizontal: 20,
    paddingVertical: 10
  }
})
