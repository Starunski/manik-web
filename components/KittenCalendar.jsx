import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Calendar, Text } from '@ui-kitten/components'
import { useAppDispatch } from '../hooks/redux'
import { userSlice } from '../store/reducers/userSlice'

const DayCell = ({ date }, style) => {
  return (
    <View style={[styles.dayContainer, style.container]}>
      <Text style={style.text}>{`${date.getDate()}`}</Text>
      {/* <Text style={[style.text, styles.value]}>{`${100 * date.getDate() + Math.pow(date.getDate(), 2)}$`}</Text> */}
      {/* <Text style={[style.text, styles.value]}>{`${'...'}`}</Text> */}
    </View>
  )
}

export const KittenCalendar = () => {
  const [date, setDate] = useState(null)
  const dispatch = useAppDispatch()
  const { setActiveCalendarDay } = userSlice.actions
  return (
    <View style={[styles.calendarContainer]}>
      <Calendar
        date={date}
        onSelect={nextDate => {
          setDate(nextDate)
          dispatch(setActiveCalendarDay(nextDate.toLocaleDateString('eu-EU')))
        }}
        renderDay={DayCell}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  calendarContainer: {
    alignItems: 'center',
    paddingVertical: 8
  },
  dayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1
  },
  value: {
    fontSize: 12,
    fontWeight: '400'
  }
})
