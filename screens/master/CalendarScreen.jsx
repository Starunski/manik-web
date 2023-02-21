import { Button, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import { zonedTimeToUtc } from 'date-fns-tz'
import { useAppDispatch } from '../../hooks/redux'
import { ModalWithBackdropShowcase } from './Modal.jsx'
import { KittenCalendar } from '../../components/KittenCalendar'
import { useReservation } from '../../hooks/useReservation'
import { userSlice } from '../../store/reducers/userSlice'

export const CalendarScreen = props => {
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState(['9:00', '12:00', '15:00', "17:'00"])
  const [name, setName] = useState('')
  const { deleteReservation } = userSlice.actions
  const { date, setDate, filteredReservationByDay, temp, setTemp } = useReservation()

  const dispatch = useAppDispatch()

  const onDeleteReservation = reservation => {
    const prep = { date: date.toLocaleDateString('eu-EU'), reservation }
    dispatch(deleteReservation(prep))
    console.log('onDeleteReservation', date.toLocaleDateString('eu-EU'))
  }
  const onUpdateReservation = reservation => {
    console.log('onUpdateReservation', date.toLocaleDateString('eu-EU'))
  }

  const renderItem = (reservation, isFirst) => {
    const fontSize = isFirst ? 16 : 14
    const color = isFirst ? 'black' : 'black'

    return (
      <TouchableOpacity
        style={[styles.item, { height: reservation.height }]}
        onLongPress={() => alert(`some info ${reservation.name} ? `)}
      >
        <Text style={{ fontSize, color }}>
          {reservation.name} {reservation.time}
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Button title="update" onPress={() => onUpdateReservation(reservation)} />
          <Button title="delete" onPress={() => onDeleteReservation(reservation)} />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View styles={styles.container}>
        <KittenCalendar date={date} setDate={setDate} setTemp={setTemp} />
        <Button title="+" onPress={() => setShowModal(true)} />
      </View>
      <View>
        {/* <Text>{date && `${date}`}</Text> */}
        {/* <Text>{filteredReservation && `${filteredReservation.date}`}</Text> */}

        {filteredReservationByDay?.reservations?.map(reservation => renderItem(reservation, true))}
      </View>
      {showModal && (
        <ModalWithBackdropShowcase
          visible={showModal}
          setVisible={setShowModal}
          date={temp}
          data={data}
          setData={setData}
          name={name}
          setName={setName}
        />
      )}
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
