import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Modal, Text, Input } from '@ui-kitten/components'
import { SelectSimple } from '../../components/SelectSimple'
import { userSlice } from '../../store/reducers/userSlice'
import { useAppDispatch } from '../../hooks/redux'
import { useAppSelector } from '../../hooks/redux'

export const ModalWithBackdropShowcase = ({ visible, setVisible, day }) => {
  const [data, setData] = useState(['9:00', '12:00', '15:00', "17:'00"])
  const [name, setName] = useState('')
  const [selectedTime, setSelectedTime] = useState()
  const { counter, firebaseUser } = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch()
  const { addReservation } = userSlice.actions

  console.log('selectedTime', selectedTime)

  const onAddReservation = (selectedTime, name, day) => {
    console.log('onAddReservation', day)
    setVisible(false)
    const dateReservation = { day, reservation: { time: selectedTime, name } }
    dispatch(addReservation(dateReservation))
  }

  return (
    <View style={styles.container}>
      <Button onPress={() => setVisible(true)}>TOGGLE MODAL</Button>

      <Modal visible={visible} backdropStyle={styles.backdrop} onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <Text>Add free time to your schedule 😻</Text>
          <SelectSimple data={data} setData={setData} setSelectedTime={setSelectedTime} />
          <Input
            style={styles.input}
            placeholder="Client name"
            value={name}
            onChangeText={nextValue => setName(nextValue)}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button onPress={() => onAddReservation(selectedTime, name, day.dateString)}>Ok</Button>
            <Button onPress={() => setVisible(false)}>Cancel</Button>
          </View>
        </Card>
      </Modal>
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
