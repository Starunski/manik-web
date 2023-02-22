import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useAppDispatch } from '../hooks/redux'
import { useReservation } from '../hooks/useReservation'
import { userSlice } from '../store/reducers/userSlice'

import { useAppSelector } from '../hooks/redux'

export const ReservationItem = ({ reservation, isFirst, onEdit }) => {
  const dispatch = useAppDispatch()
  const { deleteReservation } = userSlice.actions
  const { date } = useReservation()
  const { activeCalendarDay } = useAppSelector(state => state.userReducer)

  const onDeleteReservation = reservation => {
    dispatch(deleteReservation({ date: activeCalendarDay, reservation }))
  }

  const fontSize = isFirst ? 16 : 14
  const color = isFirst ? 'black' : 'black'

  return (
    <TouchableOpacity
      key={reservation?.id}
      style={[styles.item, { height: reservation?.height }]}
      onLongPress={() => alert(`some info ${reservation.name} ? `)}
    >
      <Text style={{ fontSize, color }} >
        {reservation.name} {reservation.time}
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Button title="update" onPress={() => onEdit(reservation)} />
        <Button title="delete" onPress={() => onDeleteReservation(reservation)} />
      </View>
    </TouchableOpacity>
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
