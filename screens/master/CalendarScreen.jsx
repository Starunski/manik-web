import { Button, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { IndexPath, Layout, Select, SelectItem, Input, Avatar } from '@ui-kitten/components'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { ModalWithBackdropShowcase } from './Modal.jsx'
import { useAppDispatch } from '../../hooks/redux'
import { useAppSelector } from '../../hooks/redux'

export const CalendarScreen = props => {
  const [city, setCity] = useState('')
  const [data, setData] = useState([])
  const [day, setDay] = useState()
  const [selected, setSelected] = useState()
  const [showModal, setShowModal] = useState(false)
  const { reservations } = useAppSelector(state => state.userReducer)
  console.log('====================================')
  console.log('reservations', reservations)
  console.log('====================================')
  const dispatch = useAppDispatch()

  const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' }
  const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' }
  const workout = { key: 'workout', color: 'green' }

  const renderItem = (reservation, isFirst) => {
    const fontSize = isFirst ? 16 : 14
    const color = isFirst ? 'black' : '#43515c'

    return (
      <TouchableOpacity
        // testID={testIDs.agenda.ITEM}
        style={[styles.item, { height: reservation.height }]}
        // onPress={() => Alert.alert(reservation.name)}
      >
        <Text style={{ fontSize, color }}>
          {reservation.name} {reservation.time}
        </Text>
      </TouchableOpacity>
    )
  }

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    )
  }

  const rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <View styles={styles.container}> */}
      {/* <FiltersCalendar /> */}
      {/* <CalendarList /> */}
      {/* <Calendar
        markingType={'period'}
        markedDates={{
          '2023-02-15': { marked: true, dotColor: '#50cebb' },
          '2023-02-16': { marked: true, dotColor: '#50cebb' },
          '2023-02-21': { startingDay: true, color: '#50cebb', textColor: 'white' },
          '2023-02-22': { color: '#70d7c7', textColor: 'white' },
          '2023-02-23': { color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white' },
          '2023-02-24': { color: '#70d7c7', textColor: 'white' },
          '2023-02-25': { endingDay: true, color: '#50cebb', textColor: 'white' }
        }}
        onDayPress={day => {
          setSelected(day)
          console.log('day pressed', day)

          // alert(day)
        }}
        onDayLongPress={day => {
          setShowModal(true)
        }}
      /> */}
      {/* <View>{selected && <Text>{JSON.stringify(selected)}</Text>}</View> */}
      <View style={styles.container}>
        <Agenda
          // markingType={'multi-dot'}
          // markedDates={{
          //   '2023-02-25': { dots: [vacation, massage, workout], selected: true, selectedColor: 'red' },
          //   '2023-02-26': { dots: [massage, workout], disabled: true }
          // }}
          markingType={'dot'}
          markedDates={{
            '2023-02-15': { marked: true, dotColor: '#50cebb' },
            '2023-02-16': { marked: true, dotColor: '#50cebb' },
            '2023-02-21': { startingDay: true, color: '#50cebb', textColor: 'white' },
            '2023-02-22': { color: '#70d7c7', textColor: 'white' },
            '2023-02-23': { color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white' },
            '2023-02-24': { color: '#70d7c7', textColor: 'white' },
            '2023-02-25': { endingDay: true, color: '#50cebb', textColor: 'white' }
          }}
          items={reservations}
          // Callback that gets called when items for a certain month should be loaded (month became visible)
          loadItemsForMonth={month => {
            console.log('trigger items loading')
          }}
          // Callback that fires when the calendar is opened or closed
          onCalendarToggled={calendarOpened => {
            console.log(calendarOpened)
          }}
          // Callback that gets called on day press
          onDayPress={day => {
            setDay(day)
            console.log('day pressed', day)
            // alert(day)
          }}
          // Callback that gets called when day changes while scrolling agenda list
          onDayChange={day => {
            setDay(day)
            console.log('day changed')
          }}
          onDayLongPress={day => {
            setDay(day)
            console.log('selected day', day)
            setShowModal(true)
          }}
          // Initially selected day
          // selected={'2023-02-15'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2023-02-01'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2023-02-29'}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Specify how each item should be rendered in agenda
          renderItem={(item, firstItemInDay) => {
            return renderItem(item, firstItemInDay)
          }}
          // Specify how each date should be rendered. day can be undefined if the item is not first in that day
          renderDay={(day, item) => {
            return <View />
          }}
          // Specify how empty date content with no items should be rendered
          renderEmptyDate={() => {
            return renderEmptyDate()
          }}
          // Specify how agenda knob should look like
          renderKnob={() => {
            return <Text>click for showing </Text>
          }}
          // Override inner list with a custom implemented component
          // renderList={listProps => {
          //   return <MyCustomList {...listProps} />
          // }}
          // Specify what should be rendered instead of ActivityIndicator
          renderEmptyData={() => {
            return <Text> renderEmptyData ! </Text>
          }}
          // Specify your item comparison function for increased performance
          rowHasChanged={rowHasChanged}
          // Hide knob button. Default = false
          // hideKnob={true}
          // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
          showClosingKnob={false}
          // By default, agenda dates are marked if they have at least one item, but you can override this if needed
          // markedDates={{
          //   '2012-05-16': { selected: true, marked: true },
          //   '2012-05-17': { marked: true },
          //   '2012-05-18': { disabled: true }
          // }}
          // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
          disabledByDefault={true}
          // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
          onRefresh={() => console.log('refreshing...')}
          // Set this true while waiting for new data from a refresh
          refreshing={false}
          // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
          refreshControl={null}
          // Agenda theme
          theme={{
            // ...calendarTheme,
            agendaDayTextColor: 'yellow',
            agendaDayNumColor: 'green',
            agendaTodayColor: 'red',
            agendaKnobColor: 'blue'
          }}
          // Agenda container style
          style={{}}
        />
      </View>
      {/* </View> */}
      {showModal && <ModalWithBackdropShowcase visible={showModal} setVisible={setShowModal} day={day} />}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // minHeight: 128,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center'
    width: '100%',
    height: '100%'
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
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
