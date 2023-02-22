import { Button, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import { zonedTimeToUtc } from 'date-fns-tz'
import { useAppDispatch } from '../../hooks/redux'
import { ManageReservationModal } from './Modal.jsx'
import { KittenCalendar } from '../../components/KittenCalendar'
import { useReservation } from '../../hooks/useReservation'
import { userSlice } from '../../store/reducers/userSlice'
import { ReservationItem } from '../../components/ReservationItem'

export const CalendarScreen = props => {
  const dispatch = useAppDispatch()
  const { filteredReservationByDay } = useReservation()
  const [showModal, setShowModal] = useState(false)

  const onOpenEditModal = reservation => {
    const { setSelectedReservation } = userSlice.actions
    dispatch(setSelectedReservation({ date: filteredReservationByDay.date, reservation }))
    setShowModal(true)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View styles={styles.container}>
        <KittenCalendar />
        <Button title="+" onPress={() => setShowModal(true)} />
      </View>
      <View>
        {/* <Text>{date && `${date}`}</Text> */}
        {/* <Text>{filteredReservation && `${filteredReservation.date}`}</Text> */}

        {filteredReservationByDay?.reservations?.map((reservation, idx) => (
          <ReservationItem reservation={reservation} isFirst={idx === 0} onEdit={onOpenEditModal} />
        ))}
      </View>
      {showModal && <ManageReservationModal onClose={() => setShowModal(false)} />}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // minHeight: 128,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center'
    width: '100%',
    height: '100%'
  },
  item: {
    backgroundColor: 'white',
    color: 'black',
    // flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
})
