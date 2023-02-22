import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Modal, Text, Input } from '@ui-kitten/components'
import { SelectSimple } from '../../components/SelectSimple'
import { userSlice } from '../../store/reducers/userSlice'
import { useAppDispatch } from '../../hooks/redux'
import { useAppSelector } from '../../hooks/redux'

export const ManageReservationModal = ({ onClose }) => {
  const dispatch = useAppDispatch()
  const selectedReservation = useAppSelector(state => state.userReducer.selectedReservation)
  const activeCalendarDay = useAppSelector(state => state.userReducer.activeCalendarDay)

  const [selectedTime, setSelectedTime] = useState(selectedReservation.time)
  const [ailableTime, setAvailableTime] = useState(['9:00', '12:00', '15:00', "17:'00"])
  const [name, setName] = useState('')

  const onAddReservation = () => {
    const { addReservation } = userSlice.actions
    if (activeCalendarDay && selectedTime && name) {

      const dateReservation = {
        date: activeCalendarDay,
        reservation: { id: new Date().valueOf(), time: selectedTime, name }
      }
      dispatch(addReservation(dateReservation))
    }
    onClose()
  }

  const onUpdateReservation = () => {
    const { updateReservation } = userSlice.actions
    if (activeCalendarDay && selectedTime && name) {
      const updatedReservation = {
        date: activeCalendarDay,
        reservation: { id: selectedReservation.reservation.id, time: selectedTime, name }
      }
      dispatch(updateReservation(updatedReservation))
    }
    onClose()
  }

  return (
    <View style={styles.container}>
      <Modal visible={true} backdropStyle={styles.backdrop} onBackdropPress={onClose}>
        <Card disabled={true}>
          <Text>Add free time to your schedule 😻</Text>
          <SelectSimple data={ailableTime} setData={setAvailableTime} setSelectedTime={setSelectedTime} />
          <Input
            style={styles.input}
            placeholder="Client name"
            value={name}
            onChangeText={nextValue => setName(nextValue)}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button onPress={onAddReservation}>Ok</Button>
            <Button onPress={onUpdateReservation}>Update</Button>
            <Button onPress={() => onClose()}>Cancel</Button>
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
