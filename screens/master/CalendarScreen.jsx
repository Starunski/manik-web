import { Button, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { IndexPath, Layout, Select, SelectItem, Input, Avatar } from '@ui-kitten/components'
import { FiltersCalendar } from '../../components/FiltersCalendar'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'

export const CalendarScreen = props => {
  const [city, setCity] = useState('')
  const [data, setData] = useState([])
  const [items, setItems] = useState({
    '2023-02-15': [
      { name: 'item 1 - any js object' },
      { name: 'item 3 - any js object' },
      { name: 'any js object' },
      { name: 'any js object' },
      { name: 'any js object' },
      { name: 'any js object' }
    ],
    '2023-02-23': [{ name: 'item 2 - any js object', height: 80 }]
  })

  // const getData = async () => {
  //   try {
  //     const res = await readUserData();
  //     console.log("res", res);
  //     setData(res);
  //   } catch (error) {
  //     alert("ERROR", error.message);
  //   }
  // };

  const timeToString = time => {
    const date = new Date(time)
    return date.toISOString().split('T')[0]
  }

  const loadItems = () => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = 1676472801520 + i * 24 * 60 * 60 * 1000
        const strTime = timeToString(time)

        if (!items[strTime]) {
          items[strTime] = []

          const numItems = Math.floor(Math.random() * 3 + 1)
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime
            })
          }
        }
      }

      const newItems = {}
      Object.keys(items).forEach(key => {
        newItems[key] = items[key]
      })
      setItems(newItems)
    }, 1000)
  }

  const renderItem = (reservation, isFirst) => {
    const fontSize = isFirst ? 16 : 14
    const color = isFirst ? 'black' : '#43515c'

    return (
      <TouchableOpacity
        // testID={testIDs.agenda.ITEM}
        style={[styles.item, { height: reservation.height }]}
        // onPress={() => Alert.alert(reservation.name)}
      >
        <Text style={{ fontSize, color }}>{reservation.name}</Text>
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
      {/* <Calendar
        markedDates={{
          '2023-02-15': { marked: true, dotColor: '#50cebb' },
          '2023-02-16': { marked: true, dotColor: '#50cebb' },
          '2023-02-21': { startingDay: true, color: '#50cebb', textColor: 'white' },
          '2023-02-22': { color: '#70d7c7', textColor: 'white' },
          '2023-02-23': { color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white' },
          '2023-02-24': { color: '#70d7c7', textColor: 'white' },
          '2023-02-25': { endingDay: true, color: '#50cebb', textColor: 'white' }
        }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: 'blue',
          indicatorColor: 'blue',
          // textDayFontFamily: 'monospace',
          // textMonthFontFamily: 'monospace',
          // textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16
        }}
      /> */}
      {/* <CalendarList /> */}
      <View style={styles.container}>
        <Agenda
          items={
            // {
            // '2023-02-16': [
            //   { name: 'item 1 - any js object' },
            //   { name: 'item 3 - any js object' },
            //   { name: 'any js object' },
            //   { name: 'any js object' },
            //   { name: 'any js object' },
            //   { name: 'any js object' }
            // ]
            // '2023-02-23': [{ name: 'item 2 - any js object', height: 80 }],
            // '2023-02-24': [],
            // '2023-02-25': [
            //   { name: 'item 3 - any js object' },
            //   { name: 'any js object' },
            //   { name: 'any js object' },
            //   { name: 'any js object' },
            //   { name: 'any js object' }
            // ]
            // }
            items
            // () => loadItems()
          }
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
            console.log('day pressed')
          }}
          // Callback that gets called when day changes while scrolling agenda list
          onDayChange={day => {
            console.log('day changed')
          }}
          onDayLongPress={day => {
            console.log('selected day', day)
            alert(day)
          }}
          // Initially selected day
          selected={'2023-02-15'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2022-02-15'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2024-02-15'}
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
            return <View />
          }}
          // Override inner list with a custom implemented component
          // renderList={listProps => {
          //   return <MyCustomList {...listProps} />
          // }}
          // Specify what should be rendered instead of ActivityIndicator
          renderEmptyData={() => {
            return <View />
          }}
          // Specify your item comparison function for increased performance
          rowHasChanged={rowHasChanged}
          // Hide knob button. Default = false
          // hideKnob={true}
          // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
          showClosingKnob={false}
          // By default, agenda dates are marked if they have at least one item, but you can override this if needed
          markedDates={{
            '2012-05-16': { selected: true, marked: true },
            '2012-05-17': { marked: true },
            '2012-05-18': { disabled: true }
          }}
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
