import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Calendar, Text } from '@ui-kitten/components'

const DayCell = ({ date }, style) => {
  return (
    <View style={[styles.dayContainer, style.container]}>
      <Text style={style.text}>{`${date.getDate()}`}</Text>
      {/* <Text style={[style.text, styles.value]}>{`${100 * date.getDate() + Math.pow(date.getDate(), 2)}$`}</Text> */}
      <Text style={[style.text, styles.value]}>{ `${"..."}`}</Text>
    </View>
  )
}

export const KittenCalendar = ({ date, setDate, setTemp }) => {
  return (
    <Calendar
      date={date}
      onSelect={nextDate => {
        console.log('nextDate.getValue()', nextDate.toLocaleDateString('eu-EU'))

        // console.log('nextDate', new Date(nextDate.getValue()).toLocaleDateString("en-US"))
        setTemp(nextDate.toLocaleDateString('eu-EU'))
        setDate(nextDate)
      }}
      renderDay={DayCell}
    />
  )
}

const styles = StyleSheet.create({
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
