import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Modal, Text, Input } from '@ui-kitten/components'
import { SelectSimple } from '../../components/SelectSimple'
import { userSlice } from '../../store/reducers/userSlice'
import { useAppDispatch } from '../../hooks/redux'
import { useAppSelector } from '../../hooks/redux'

export const ModalWithBackdropShowcase = ({ visible, setVisible, date,data, setData,name, setName }) => {

  const [selectedTime, setSelectedTime] = useState()
  const { counter, firebaseUser } = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch()
  const { addReservation } = userSlice.actions

  console.log('selectedTime', selectedTime)

  const onAddReservation = (selectedTime, name, date) => {
    console.log('onAddReservation', date)
    setVisible(false)
    if (date && selectedTime && name) {
      const dateReservation = { date, reservation: { id: new Date().valueOf(), time: selectedTime, name } }
      dispatch(addReservation(dateReservation))
    }
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
            <Button onPress={() => onAddReservation(selectedTime, name, date)}>Ok</Button>
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
